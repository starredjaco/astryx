// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file index.tsx
 * @input @formisch/react, @astryxdesign/core
 * @output Astryx bridge components for Formisch fields
 * @position Connects Formisch's <Field> render-prop state to Astryx inputs
 */

import * as React from 'react';
import type * as v from 'valibot';
import {Field} from '@formisch/react';
import type {
  FieldStore,
  FormStore,
  FormSchema,
  RequiredPath,
  ValidPath,
} from '@formisch/react';
import {
  TextInput,
  TextArea,
  NumberInput,
  CheckboxInput,
  Selector,
} from '@astryxdesign/core';

/** Map a Formisch field's errors to the Astryx status object. */
function errorStatus(
  errors: readonly [string, ...string[]] | null,
): {type: 'error'; message: string} | undefined {
  return errors && errors.length > 0
    ? {type: 'error', message: errors[0]}
    : undefined;
}

interface BridgeProps<TSchema extends FormSchema, TPath extends RequiredPath> {
  of: FormStore<TSchema>;
  path: ValidPath<v.InferInput<TSchema>, TPath>;
  label: string;
  description?: string;
  isOptional?: boolean;
  isDisabled?: boolean;
  'data-testid'?: string;
}

/** Text field (text/email/password) backed by Astryx TextInput. */
export function AstryxTextField<
  TSchema extends FormSchema,
  TPath extends RequiredPath,
>(
  props: BridgeProps<TSchema, TPath> & {
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
  },
): React.ReactElement {
  const {of, path, label, description, isOptional, isDisabled, type, placeholder} =
    props;
  const testid = props['data-testid'];
  return (
    <Field of={of} path={path}>
      {(field: FieldStore<TSchema, TPath>) => (
        <TextInput
          label={label}
          description={description}
          isOptional={isOptional}
          isDisabled={isDisabled}
          type={type ?? 'text'}
          placeholder={placeholder}
          status={errorStatus(field.errors)}
          value={(field.input as string | undefined) ?? ''}
          onChange={(v: string) => field.onChange(v as never)}
          data-testid={testid}
        />
      )}
    </Field>
  );
}

/** Multiline text backed by Astryx TextArea. */
export function AstryxTextAreaField<
  TSchema extends FormSchema,
  TPath extends RequiredPath,
>(
  props: BridgeProps<TSchema, TPath> & {placeholder?: string},
): React.ReactElement {
  const {of, path, label, description, isOptional, isDisabled, placeholder} = props;
  const testid = props['data-testid'];
  return (
    <Field of={of} path={path}>
      {(field: FieldStore<TSchema, TPath>) => (
        <TextArea
          label={label}
          description={description}
          isOptional={isOptional}
          isDisabled={isDisabled}
          placeholder={placeholder}
          status={errorStatus(field.errors)}
          value={(field.input as string | undefined) ?? ''}
          onChange={(v: string) => field.onChange(v as never)}
          data-testid={testid}
        />
      )}
    </Field>
  );
}

/** Number field backed by Astryx NumberInput. */
export function AstryxNumberField<
  TSchema extends FormSchema,
  TPath extends RequiredPath,
>(
  props: BridgeProps<TSchema, TPath> & {
    min?: number;
    max?: number;
    isIntegerOnly?: boolean;
  },
): React.ReactElement {
  const {of, path, label, description, isOptional, isDisabled, min, max, isIntegerOnly} =
    props;
  const testid = props['data-testid'];
  return (
    <Field of={of} path={path}>
      {(field: FieldStore<TSchema, TPath>) => (
        <NumberInput
          label={label}
          description={description}
          isOptional={isOptional}
          isDisabled={isDisabled}
          min={min}
          max={max}
          isIntegerOnly={isIntegerOnly}
          hasClear
          status={errorStatus(field.errors)}
          value={(field.input as number | null | undefined) ?? null}
          onChange={(v: number | null) => field.onChange(v as never)}
          data-testid={testid}
        />
      )}
    </Field>
  );
}

/** Boolean field backed by Astryx CheckboxInput. */
export function AstryxCheckboxField<
  TSchema extends FormSchema,
  TPath extends RequiredPath,
>(props: BridgeProps<TSchema, TPath>): React.ReactElement {
  const {of, path, label, description, isDisabled} = props;
  const testid = props['data-testid'];
  return (
    <Field of={of} path={path}>
      {(field: FieldStore<TSchema, TPath>) => (
        <CheckboxInput
          label={label}
          description={description}
          isDisabled={isDisabled}
          status={errorStatus(field.errors)}
          value={(field.input as boolean | undefined) ?? false}
          onChange={(checked: boolean) => field.onChange(checked as never)}
          data-testid={testid}
        />
      )}
    </Field>
  );
}

/** Select field backed by Astryx Selector. */
export function AstryxSelectField<
  TSchema extends FormSchema,
  TPath extends RequiredPath,
>(
  props: BridgeProps<TSchema, TPath> & {
    options: Array<{value: string; label: string}>;
  },
): React.ReactElement {
  const {of, path, label, description, isOptional, isDisabled, options} = props;
  const testid = props['data-testid'];
  return (
    <Field of={of} path={path}>
      {(field: FieldStore<TSchema, TPath>) => (
        <Selector
          label={label}
          description={description}
          isOptional={isOptional}
          isDisabled={isDisabled}
          options={options}
          hasClear
          status={errorStatus(field.errors)}
          value={(field.input as string | null | undefined) ?? null}
          onChange={(v: string | null) => field.onChange(v as never)}
          data-testid={testid}
        />
      )}
    </Field>
  );
}
