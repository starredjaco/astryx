// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file validation.ts
 * @input ../schema
 * @output Validation ladder: schema constraints, field/form validators, pass/fail helpers
 * @position Shared by useFormentorForm for change- and submit-time checks
 */

import {
  StringSchema,
  NumberSchema,
  EnumSchema,
  getBaseSchema,
  type Schema,
  type ValuePath,
} from '../schema';

/** A single validation error, optionally targeting a nested field. */
export interface FormentorError {
  message: string;
  valuePath?: ValuePath;
}

/** Result helpers handed to every validator. */
export interface ValidatorHelpers {
  pass: () => ValidationResult;
  fail: (error: string | FormentorError) => ValidationResult;
}

export type ValidationResult =
  {ok: true} | {ok: false; errors: FormentorError[]};

/** Sync validator signature used at field and form level. */
export type Validator<V> = (
  value: V,
  helpers: ValidatorHelpers,
) => ValidationResult;

/** Async validator (submit-time and field-level accelerator). */
export type AsyncValidator<V> = (
  value: V,
  helpers: ValidatorHelpers & {signal: AbortSignal},
) => Promise<ValidationResult>;

export const helpers: ValidatorHelpers = {
  pass: () => ({ok: true}),
  fail: error => ({
    ok: false,
    errors: [typeof error === 'string' ? {message: error} : error],
  }),
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Rung 1 of the ladder: validate a single leaf value against its schema
 * constraints. Returns an error message or `null` when valid. Empty/undefined
 * values are considered valid here unless the field is required — requiredness
 * is enforced by the object layer, not the leaf.
 */
export function validateSchemaConstraint(
  schema: Schema,
  value: unknown,
): string | null {
  const base = getBaseSchema(schema);

  if (value === undefined || value === null || value === '') {
    return null;
  }

  if (base instanceof StringSchema) {
    const s = value as string;
    const c = base.constraints;
    if (c.minLength != null && s.length < c.minLength) {
      return `Must be at least ${c.minLength} characters`;
    }
    if (c.maxLength != null && s.length > c.maxLength) {
      return `Must be at most ${c.maxLength} characters`;
    }
    if (c.format === 'email' && !EMAIL_RE.test(s)) {
      return 'Enter a valid email address';
    }
    if (c.pattern != null && !new RegExp(c.pattern).test(s)) {
      return 'Invalid format';
    }
    return null;
  }

  if (base instanceof NumberSchema) {
    const n = value as number;
    const c = base.constraints;
    if (c.minimum != null && n < c.minimum) {
      return `Must be at least ${c.minimum}`;
    }
    if (c.maximum != null && n > c.maximum) {
      return `Must be at most ${c.maximum}`;
    }
    if (c.scale === 0 && !Number.isInteger(n)) {
      return 'Must be a whole number';
    }
    return null;
  }

  if (base instanceof EnumSchema) {
    const allowed = base.constraints.members.some(m => m.const === value);
    return allowed ? null : 'Select a valid option';
  }

  return null;
}

/** True when a required field is empty (missing/null/blank). */
export function isEmpty(value: unknown): boolean {
  return value === undefined || value === null || value === '';
}
