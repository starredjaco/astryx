// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file form-eval.test.ts
 * @output Unit tests for the form-specific evaluator, including the anti-bias
 *   check: equivalent-quality solutions score equivalently across frameworks.
 */

import {describe, it, expect} from 'vitest';
import {
  evaluateForm,
  getFormAverage,
  type FormTarget,
  type FormPromptSpec,
} from './form-eval.js';

const signupSpec: FormPromptSpec = {
  id: 'core-signup-1',
  category: 'cross-field',
  tier: 'core',
  expectedBehaviors: [
    'two password fields',
    'cross-field match check',
    'error on the confirm field',
  ],
};

// Good, idiomatic cross-field solutions in each framework (mirrors the
// reference solutions that typecheck cleanly in every target).
const good: Record<FormTarget, string> = {
  formentor: `
import {useFormentorForm, object, string, XDSInputSet, rootPath} from '@astryxdesign/formentor';
const schema = object({properties: {password: string({format:'password',minLength:8}), confirm: string({format:'password'})}});
export default function F(){
  const form = useFormentorForm({schema, inputSet: XDSInputSet,
    validate:(v,{pass,fail})=> v.password===v.confirm?pass():fail({message:'Passwords do not match', valuePath: rootPath().property('confirm')}),
    onSubmit:(v)=>console.log(v)});
  return form.render();
}`,
  formisch: `
import {useForm, Form} from '@formisch/react';
import * as v from 'valibot';
import {AstryxTextField} from '@astryxdesign/astryx-formisch';
import {Button} from '@astryxdesign/core';
const S = v.pipe(v.object({password:v.pipe(v.string(),v.minLength(8)),confirm:v.string()}),
  v.forward(v.check((i)=>i.password===i.confirm,'Passwords do not match'),['confirm']));
export default function F(){
  const form = useForm({schema:S});
  return <Form of={form} onSubmit={(o)=>console.log(o)}>
    <AstryxTextField of={form} path={['password']} label="Password" type="password" />
    <AstryxTextField of={form} path={['confirm']} label="Confirm password" type="password" />
    <Button type="submit" label="Sign up">Sign up</Button>
  </Form>;
}`,
  tanstack: `
import {createFormHook} from '@tanstack/react-form';
import * as z from 'zod';
import {fieldContext, formContext, AstryxTextField} from '@astryxdesign/astryx-tanstack';
import {Button} from '@astryxdesign/core';
const {useAppForm} = createFormHook({fieldContext, formContext, fieldComponents:{AstryxTextField}, formComponents:{}});
const schema = z.object({password:z.string().min(8),confirm:z.string()}).refine((d)=>d.password===d.confirm,{message:'Passwords do not match',path:['confirm']});
export default function F(){
  const form = useAppForm({defaultValues:{password:'',confirm:''}, validators:{onSubmit:schema}, onSubmit:({value})=>console.log(value)});
  return <form onSubmit={(e)=>{e.preventDefault();form.handleSubmit();}}>
    <form.AppField name="password">{()=><AstryxTextField label="Password" type="password" />}</form.AppField>
    <form.AppField name="confirm">{()=><AstryxTextField label="Confirm password" type="password" />}</form.AppField>
    <Button type="submit" label="Sign up">Sign up</Button>
  </form>;
}`,
  rhf: `
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {AstryxTextField} from '@astryxdesign/astryx-rhf';
import {Button} from '@astryxdesign/core';
const schema = z.object({password:z.string().min(8),confirm:z.string()}).refine((d)=>d.password===d.confirm,{message:'Passwords do not match',path:['confirm']});
export default function F(){
  const {control, handleSubmit} = useForm({resolver:zodResolver(schema), defaultValues:{password:'',confirm:''}});
  return <form onSubmit={handleSubmit((d)=>console.log(d))}>
    <AstryxTextField control={control} name="password" label="Password" type="password" />
    <AstryxTextField control={control} name="confirm" label="Confirm password" type="password" />
    <Button type="submit" label="Sign up">Sign up</Button>
  </form>;
}`,
};

const TARGETS: FormTarget[] = ['formentor', 'formisch', 'tanstack', 'rhf'];

describe('evaluateForm — good solutions score high in every framework', () => {
  for (const t of TARGETS) {
    it(`${t} good solution scores well`, () => {
      const s = evaluateForm(good[t], t, signupSpec);
      expect(s.schemaFidelity.score).toBeGreaterThanOrEqual(80);
      expect(s.validationCorrectness.score).toBeGreaterThanOrEqual(80);
      expect(s.formA11y.score).toBeGreaterThanOrEqual(80);
      expect(s.stateSubmission.score).toBeGreaterThanOrEqual(80);
      expect(s.idiomaticUse.score).toBeGreaterThanOrEqual(80);
    });
  }
});

describe('anti-bias: equivalent-quality solutions score within a tight band', () => {
  it('no framework wins or loses by more than 10 points on equal-quality code', () => {
    const averages = TARGETS.map((t) => getFormAverage(evaluateForm(good[t], t, signupSpec)));
    const spread = Math.max(...averages) - Math.min(...averages);
    expect(spread).toBeLessThanOrEqual(10);
  });
});

describe('evaluateForm — detects real deficiencies equally', () => {
  it('penalizes missing cross-field validation', () => {
    const noCross = `
import {useForm} from 'react-hook-form';
import {AstryxTextField} from '@astryxdesign/astryx-rhf';
export default function F(){
  const {control} = useForm({defaultValues:{password:'',confirm:''}});
  return <form><AstryxTextField control={control} name="password" label="Password" /></form>;
}`;
    const s = evaluateForm(noCross, 'rhf', signupSpec);
    expect(s.validationCorrectness.score).toBeLessThan(80);
  });

  it('penalizes raw HTML inputs (bypassing the constant design system)', () => {
    const rawHtml = `
export default function F(){
  return <form><input type="password" /><input type="password" /><button>Go</button></form>;
}`;
    const s = evaluateForm(rawHtml, 'rhf', signupSpec);
    expect(s.formA11y.score).toBeLessThan(60);
    expect(s.idiomaticUse.score).toBeLessThan(60);
  });

  it('penalizes hand-rolled useState instead of the framework', () => {
    const handRolled = `
import {useState} from 'react';
import {TextInput} from '@astryxdesign/core';
export default function F(){
  const [pw,setPw]=useState('');
  return <TextInput label="Password" value={pw} onChange={setPw} />;
}`;
    const s = evaluateForm(handRolled, 'formentor', signupSpec);
    expect(s.stateSubmission.score).toBeLessThan(70);
    expect(s.idiomaticUse.score).toBeLessThan(60);
  });
});
