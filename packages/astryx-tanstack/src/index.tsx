// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file index.tsx
 * @input @tanstack/react-form, @astryxdesign/core
 * @output Astryx bridge field components for TanStack Form (via createFormHook)
 * @position Reusable field components that read useFieldContext and render Astryx inputs
 */

import * as React from 'react';
import {createFormHookContexts} from '@tanstack/react-form';
import {
  TextInput,
  TextArea,
  NumberInput,
  CheckboxInput,
  Selector,
} from '@astryxdesign/core';

/**
 * Shared field/form contexts. A consumer wires these into `createFormHook`
 * to bind the field components below to their forms.
 */
export const {fieldContext, formContext, useFieldContext, useFormContext} =
  createFormHookContexts();

/** Coerce TanStack's error array (strings or Standard Schema issues) to a message. */
function firstErrorMessage(errors: ReadonlyArray<unknown>): string | undefined {
  if (!errors || errors.length === 0) {
    return undefined;
  }
  const first = errors[0];
  if (typeof first === 'string') {
    return first;
  }
  if (first && typeof first === 'object' && 'message' in first) {
    return String((first as {message: unknown}).message);
  }
  return undefined;
}

function errorStatus(
  errors: ReadonlyArray<unknown>,
): {type: 'error'; message: string} | undefined {
  const message = firstErrorMessage(errors);
  return message ? {type: 'error', message} : undefined;
}

interface CommonProps {
  label: string;
  description?: string;
  isOptional?: boolean;
  isDisabled?: boolean;
  'data-testid'?: string;
}

/** Text field (text/email/password) backed by Astryx TextInput. */
export function AstryxTextField(
  props: CommonProps & {type?: 'text' | 'email' | 'password'; placeholder?: string},
): React.ReactElement {
  const field = useFieldContext<string>();
  return (
    <TextInput
      label={props.label}
      description={props.description}
      isOptional={props.isOptional}
      isDisabled={props.isDisabled}
      type={props.type ?? 'text'}
      placeholder={props.placeholder}
      status={errorStatus(field.state.meta.errors)}
      value={field.state.value ?? ''}
      onChange={(v: string) => field.handleChange(v)}
      onBlur={() => field.handleBlur()}
      data-testid={props['data-testid']}
    />
  );
}

/** Multiline text backed by Astryx TextArea. */
export function AstryxTextAreaField(
  props: CommonProps & {placeholder?: string},
): React.ReactElement {
  const field = useFieldContext<string>();
  return (
    <TextArea
      label={props.label}
      description={props.description}
      isOptional={props.isOptional}
      isDisabled={props.isDisabled}
      placeholder={props.placeholder}
      status={errorStatus(field.state.meta.errors)}
      value={field.state.value ?? ''}
      onChange={(v: string) => field.handleChange(v)}
      onBlur={() => field.handleBlur()}
      data-testid={props['data-testid']}
    />
  );
}

/** Number field backed by Astryx NumberInput. */
export function AstryxNumberField(
  props: CommonProps & {min?: number; max?: number; isIntegerOnly?: boolean},
): React.ReactElement {
  const field = useFieldContext<number | null>();
  return (
    <NumberInput
      label={props.label}
      description={props.description}
      isOptional={props.isOptional}
      isDisabled={props.isDisabled}
      min={props.min}
      max={props.max}
      isIntegerOnly={props.isIntegerOnly}
      hasClear
      status={errorStatus(field.state.meta.errors)}
      value={field.state.value ?? null}
      onChange={(v: number | null) => field.handleChange(v)}
      onBlur={() => field.handleBlur()}
      data-testid={props['data-testid']}
    />
  );
}

/** Boolean field backed by Astryx CheckboxInput. */
export function AstryxCheckboxField(props: CommonProps): React.ReactElement {
  const field = useFieldContext<boolean>();
  return (
    <CheckboxInput
      label={props.label}
      description={props.description}
      isDisabled={props.isDisabled}
      status={errorStatus(field.state.meta.errors)}
      value={field.state.value ?? false}
      onChange={(checked: boolean) => field.handleChange(checked)}
      data-testid={props['data-testid']}
    />
  );
}

/** Select field backed by Astryx Selector. */
export function AstryxSelectField(
  props: CommonProps & {options: Array<{value: string; label: string}>},
): React.ReactElement {
  const field = useFieldContext<string | null>();
  return (
    <Selector
      label={props.label}
      description={props.description}
      isOptional={props.isOptional}
      isDisabled={props.isDisabled}
      options={props.options}
      hasClear
      status={errorStatus(field.state.meta.errors)}
      value={field.state.value ?? null}
      onChange={(v: string | null) => field.handleChange(v)}
      data-testid={props['data-testid']}
    />
  );
}
