// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file XDSInputSet.tsx
 * @input ../schema, ../form/validation, ./types, @astryxdesign/core
 * @output The Astryx InputSet — binds each schema type to an Astryx component
 * @position Default InputSet crossing Formentor schemas with the Astryx design system
 */

import * as React from 'react';
import {
  TextInput,
  TextArea,
  NumberInput,
  CheckboxInput,
  Selector,
  Button,
  Text,
} from '@astryxdesign/core';

import {
  StringSchema,
  NumberSchema,
  EnumSchema,
  getBaseSchema,
  type SchemaType,
  type Schema,
} from '../schema';
import type {InputSet, InputResolution, CommonFieldProps} from './types';

/** Coerce a Formentor error string into the Astryx status object shape. */
function errorStatus(
  message: string | undefined,
): {type: 'error'; message: string} | undefined {
  return message ? {type: 'error', message} : undefined;
}

/** Read-only rendering shared by every input in `view` mode. */
function ViewValue({
  label,
  value,
}: {
  label: string;
  value: unknown;
}): React.ReactNode {
  const display =
    value === undefined || value === null || value === '' ? '—' : String(value);
  return (
    <div>
      <Text type="supporting" color="secondary">
        {label}
      </Text>
      <Text type="body">{display}</Text>
    </div>
  );
}

function StringInput(
  props: CommonFieldProps<string | undefined> & Record<string, unknown>,
): React.ReactNode {
  const {
    label,
    description,
    isOptional,
    isDisabled,
    mode,
    errorMessage,
    value,
    onChange,
    schema,
  } = props;
  if (mode === 'view') {
    return <ViewValue label={label} value={value} />;
  }
  const base = getBaseSchema(schema);
  const format =
    base instanceof StringSchema ? base.constraints.format : undefined;
  const testid = props['data-testid'] as string | undefined;
  if (format === 'multiline') {
    return (
      <TextArea
        label={label}
        description={description}
        isOptional={isOptional}
        isDisabled={isDisabled}
        status={errorStatus(errorMessage)}
        value={value ?? ''}
        onChange={(v: string) => onChange(v)}
        data-testid={testid}
      />
    );
  }
  return (
    <TextInput
      label={label}
      description={description}
      isOptional={isOptional}
      isDisabled={isDisabled}
      status={errorStatus(errorMessage)}
      type={
        format === 'password'
          ? 'password'
          : format === 'email'
            ? 'email'
            : 'text'
      }
      value={value ?? ''}
      onChange={(v: string) => onChange(v)}
      data-testid={testid}
    />
  );
}

function NumberField(
  props: CommonFieldProps<number | undefined> & Record<string, unknown>,
): React.ReactNode {
  const {
    label,
    description,
    isOptional,
    isDisabled,
    mode,
    errorMessage,
    value,
    onChange,
    schema,
  } = props;
  if (mode === 'view') {
    return <ViewValue label={label} value={value} />;
  }
  const base = getBaseSchema(schema);
  const c = base instanceof NumberSchema ? base.constraints : {};
  return (
    <NumberInput
      label={label}
      description={description}
      isOptional={isOptional}
      isDisabled={isDisabled}
      status={errorStatus(errorMessage)}
      value={value ?? null}
      min={c.minimum}
      max={c.maximum}
      isIntegerOnly={c.scale === 0}
      hasClear
      onChange={(v: number | null) => onChange(v ?? undefined)}
      data-testid={props['data-testid'] as string | undefined}
    />
  );
}

function BooleanField(
  props: CommonFieldProps<boolean | undefined> & Record<string, unknown>,
): React.ReactNode {
  const {label, description, isDisabled, mode, errorMessage, value, onChange} =
    props;
  if (mode === 'view') {
    return <ViewValue label={label} value={value ? 'Yes' : 'No'} />;
  }
  return (
    <CheckboxInput
      label={label}
      description={description}
      isDisabled={isDisabled}
      status={errorStatus(errorMessage)}
      value={value ?? false}
      onChange={(checked: boolean) => onChange(checked)}
      data-testid={props['data-testid'] as string | undefined}
    />
  );
}

function EnumField(
  props: CommonFieldProps<string | undefined> & Record<string, unknown>,
): React.ReactNode {
  const {
    label,
    description,
    isOptional,
    isDisabled,
    mode,
    errorMessage,
    value,
    onChange,
    schema,
  } = props;
  const base = getBaseSchema(schema);
  const members = base instanceof EnumSchema ? base.constraints.members : [];
  if (mode === 'view') {
    const selected = members.find(m => String(m.const) === String(value));
    return <ViewValue label={label} value={selected?.title ?? value} />;
  }
  return (
    <Selector
      label={label}
      description={description}
      isOptional={isOptional}
      isDisabled={isDisabled}
      status={errorStatus(errorMessage)}
      options={members.map(m => ({value: String(m.const), label: m.title}))}
      hasClear
      value={value ?? null}
      onChange={(v: string | null) => onChange(v ?? undefined)}
      data-testid={props['data-testid'] as string | undefined}
    />
  );
}

const RESOLVERS: Record<SchemaType, InputResolution['Component']> = {
  string: StringInput as InputResolution['Component'],
  number: NumberField as InputResolution['Component'],
  boolean: BooleanField as InputResolution['Component'],
  enum: EnumField as InputResolution['Component'],
  object: StringInput as InputResolution['Component'],
};

export const XDSInputSet: InputSet = {
  name: 'Astryx',
  resolve(type: SchemaType, _schema: Schema): InputResolution {
    return {Component: RESOLVERS[type]};
  },
  SubmitButton: ({isDisabled, isSubmitting, children, onClick}) => (
    <Button
      type="submit"
      label={typeof children === 'string' ? children : 'Submit'}
      variant="primary"
      isDisabled={isDisabled}
      isLoading={isSubmitting}
      onClick={onClick ? () => onClick() : undefined}>
      {children ?? 'Submit'}
    </Button>
  ),
};
