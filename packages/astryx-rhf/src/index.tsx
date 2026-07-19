// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file index.tsx
 * @input react-hook-form, @astryxdesign/core
 * @output Astryx bridge components for React Hook Form Controller fields
 * @position Connects RHF's <Controller> render-prop state to Astryx inputs
 */

import * as React from 'react';
import {Controller} from 'react-hook-form';
import type {Control, FieldValues, FieldPath} from 'react-hook-form';
import {
  TextInput,
  TextArea,
  NumberInput,
  CheckboxInput,
  Selector,
} from '@astryxdesign/core';

/** Map an RHF field error to the Astryx status object. */
function errorStatus(
  message: string | undefined,
): {type: 'error'; message: string} | undefined {
  return message ? {type: 'error', message} : undefined;
}

interface BridgeProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> {
  control: Control<TFieldValues>;
  name: TName;
  label: string;
  description?: string;
  isOptional?: boolean;
  isDisabled?: boolean;
  'data-testid'?: string;
}

/** Text field (text/email/password) backed by Astryx TextInput. */
export function AstryxTextField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>(
  props: BridgeProps<TFieldValues, TName> & {
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
  },
): React.ReactElement {
  const {control, name, label, description, isOptional, isDisabled, type, placeholder} =
    props;
  const testid = props['data-testid'];
  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <TextInput
          label={label}
          description={description}
          isOptional={isOptional}
          isDisabled={isDisabled}
          type={type ?? 'text'}
          placeholder={placeholder}
          status={errorStatus(fieldState.error?.message)}
          value={(field.value as string | undefined) ?? ''}
          onChange={(v: string) => field.onChange(v)}
          data-testid={testid}
        />
      )}
    />
  );
}

/** Multiline text backed by Astryx TextArea. */
export function AstryxTextAreaField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>(
  props: BridgeProps<TFieldValues, TName> & {placeholder?: string},
): React.ReactElement {
  const {control, name, label, description, isOptional, isDisabled, placeholder} = props;
  const testid = props['data-testid'];
  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <TextArea
          label={label}
          description={description}
          isOptional={isOptional}
          isDisabled={isDisabled}
          placeholder={placeholder}
          status={errorStatus(fieldState.error?.message)}
          value={(field.value as string | undefined) ?? ''}
          onChange={(v: string) => field.onChange(v)}
          data-testid={testid}
        />
      )}
    />
  );
}

/** Number field backed by Astryx NumberInput. */
export function AstryxNumberField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>(
  props: BridgeProps<TFieldValues, TName> & {
    min?: number;
    max?: number;
    isIntegerOnly?: boolean;
  },
): React.ReactElement {
  const {control, name, label, description, isOptional, isDisabled, min, max, isIntegerOnly} =
    props;
  const testid = props['data-testid'];
  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <NumberInput
          label={label}
          description={description}
          isOptional={isOptional}
          isDisabled={isDisabled}
          min={min}
          max={max}
          isIntegerOnly={isIntegerOnly}
          hasClear
          status={errorStatus(fieldState.error?.message)}
          value={(field.value as number | null | undefined) ?? null}
          onChange={(v: number | null) => field.onChange(v)}
          data-testid={testid}
        />
      )}
    />
  );
}

/** Boolean field backed by Astryx CheckboxInput. */
export function AstryxCheckboxField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>(props: BridgeProps<TFieldValues, TName>): React.ReactElement {
  const {control, name, label, description, isDisabled} = props;
  const testid = props['data-testid'];
  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <CheckboxInput
          label={label}
          description={description}
          isDisabled={isDisabled}
          status={errorStatus(fieldState.error?.message)}
          value={(field.value as boolean | undefined) ?? false}
          onChange={(checked: boolean) => field.onChange(checked)}
          data-testid={testid}
        />
      )}
    />
  );
}

/** Select field backed by Astryx Selector. */
export function AstryxSelectField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>(
  props: BridgeProps<TFieldValues, TName> & {
    options: Array<{value: string; label: string}>;
  },
): React.ReactElement {
  const {control, name, label, description, isOptional, isDisabled, options} = props;
  const testid = props['data-testid'];
  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <Selector
          label={label}
          description={description}
          isOptional={isOptional}
          isDisabled={isDisabled}
          options={options}
          hasClear
          status={errorStatus(fieldState.error?.message)}
          value={(field.value as string | null | undefined) ?? null}
          onChange={(v: string | null) => field.onChange(v)}
          data-testid={testid}
        />
      )}
    />
  );
}
