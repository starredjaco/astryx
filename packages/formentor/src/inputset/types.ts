// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file types.ts
 * @input ../schema
 * @output InputSet contract: commonProps, per-type input resolution, form/field wrappers
 * @position Design-system integration seam — an InputSet crosses schemas with components
 */

import type {ComponentType, ReactNode} from 'react';
import type {Schema, SchemaType, ValuePath} from '../schema';
import type {FormentorError} from '../form/validation';

/** Display mode shared across all inputs. */
export type FieldMode = 'view' | 'edit';

/**
 * The props an InputSet guarantees to every input. Inputs may ACCEPT more
 * (optional) props, but may not REQUIRE anything beyond these.
 */
export interface CommonFieldProps<V = unknown> {
  label: string;
  description?: string;
  isOptional?: boolean;
  isDisabled?: boolean;
  mode?: FieldMode;
  errorMessage?: string;
  value: V;
  onChange: (value: V) => void;
  valuePath: ValuePath;
  schema: Schema;
  'data-testid'?: string;
}

/** A resolved input: the component plus any per-type prop coercion. */
export interface InputResolution<V = unknown> {
  Component: ComponentType<CommonFieldProps<V> & Record<string, unknown>>;
}

/**
 * An InputSet defines product/design-system conventions:
 * which component renders each schema type, and how form/field chrome wraps them.
 */
export interface InputSet {
  /** Human-readable name (used in tooling and the vibe-test report). */
  readonly name: string;
  /** Resolve the default component for a schema type. */
  resolve(type: SchemaType, schema: Schema): InputResolution;
  /** Optional wrapper around the whole form (context providers, form-level errors). */
  FormWrapper?: ComponentType<{
    children: ReactNode;
    errors: FormentorError[];
    onSubmit: (e: React.FormEvent) => void;
  }>;
  /** The submit button component. */
  SubmitButton: ComponentType<{
    isDisabled?: boolean;
    isSubmitting?: boolean;
    children?: ReactNode;
    onClick?: () => void;
  }>;
}
