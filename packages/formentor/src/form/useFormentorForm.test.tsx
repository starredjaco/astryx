// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file useFormentorForm.test.tsx
 * @output Smoke tests: schema validation ladder + rendering through the XDS InputSet
 * @position Proves the Level B runtime works end-to-end, not just compiles
 */

import {describe, it, expect} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import * as React from 'react';

import {
  useFormentorForm,
  object,
  string,
  number,
  enumOf,
  omissible,
  XDSInputSet,
  validateSchemaConstraint,
  helpers,
  rootPath,
} from '../index';

describe('schema constraints (ladder rung 1)', () => {
  it('validates email format', () => {
    const s = string({format: 'email'});
    expect(validateSchemaConstraint(s, 'not-an-email')).toMatch(/valid email/i);
    expect(validateSchemaConstraint(s, 'a@b.co')).toBeNull();
  });

  it('validates number bounds and integer scale', () => {
    const s = number({minimum: 1, maximum: 99, scale: 0});
    expect(validateSchemaConstraint(s, 0)).toMatch(/at least 1/i);
    expect(validateSchemaConstraint(s, 100)).toMatch(/at most 99/i);
    expect(validateSchemaConstraint(s, 2.5)).toMatch(/whole number/i);
    expect(validateSchemaConstraint(s, 50)).toBeNull();
  });

  it('validates minLength', () => {
    const s = string({minLength: 8});
    expect(validateSchemaConstraint(s, 'short')).toMatch(/at least 8/i);
    expect(validateSchemaConstraint(s, 'longenough')).toBeNull();
  });
});

function Harness({
  schema,
  ...cfg
}: {
  schema: Parameters<typeof useFormentorForm>[0]['schema'];
} & Partial<Parameters<typeof useFormentorForm>[0]>) {
  const form = useFormentorForm({schema, inputSet: XDSInputSet, ...cfg});
  return form.render();
}

describe('rendering through the XDS InputSet', () => {
  it('renders a labelled text input for a string field', () => {
    const schema = object({properties: {email: string({format: 'email'})}});
    render(<Harness schema={schema} />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('title-cases field names into labels', () => {
    const schema = object({properties: {displayName: string()}});
    render(<Harness schema={schema} />);
    expect(screen.getByText('Display Name')).toBeInTheDocument();
  });

  it('marks omissible fields optional and renders a submit button', () => {
    const schema = object({
      properties: {
        title: string(),
        note: omissible(string({format: 'multiline'})),
      },
    });
    render(<Harness schema={schema} />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders enum as a selector with member titles', () => {
    const schema = object({
      properties: {
        priority: enumOf({
          members: [
            {const: 'low', key: 'LOW', title: 'Low Priority'},
            {const: 'high', key: 'HIGH', title: 'High Priority'},
          ],
        }),
      },
    });
    render(<Harness schema={schema} />);
    expect(screen.getByText('Priority')).toBeInTheDocument();
  });
});

describe('required-gating and submit', () => {
  it('shows a required error on submit for empty required field', () => {
    const schema = object({properties: {name: string()}});
    let submitted = false;
    render(
      <Harness
        schema={schema}
        onSubmit={() => {
          submitted = true;
        }}
      />,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/required/i)).toBeInTheDocument();
    expect(submitted).toBe(false);
  });
});

describe('cross-field validation (ladder rung 3)', () => {
  it('reports mismatched passwords on the confirm field', () => {
    const schema = object({
      properties: {
        password: string(),
        confirm: string(),
      },
    });
    function CrossHarness() {
      const form = useFormentorForm({
        schema,
        inputSet: XDSInputSet,
        initialValue: {password: 'abc12345', confirm: 'nope'},
        validate: (value, {pass, fail}) =>
          value.password === value.confirm
            ? pass()
            : fail({
                message: 'Passwords do not match',
                valuePath: rootPath().property('confirm'),
              }),
      });
      return form.render();
    }
    render(<CrossHarness />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/do not match/i)).toBeInTheDocument();
  });
});

describe('validator helpers', () => {
  it('pass/fail produce the right shapes', () => {
    expect(helpers.pass()).toEqual({ok: true});
    const f = helpers.fail('bad');
    expect(f.ok).toBe(false);
  });
});
