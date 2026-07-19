// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file modifiers.ts
 * @input types.ts, schemas.ts
 * @output nullable() and omissible() modifiers that wrap a schema and widen its type
 * @position Optionality layer over base schemas
 */

import {Schema, type SchemaMeta, type InferValue} from './types';

/**
 * A schema wrapped to accept `null`. The wrapped schema's constraints and type
 * still apply to non-null values.
 */
export class NullableSchema<
  S extends Schema,
> extends Schema<InferValue<S> | null> {
  readonly meta: SchemaMeta & {nullable: true};
  constructor(readonly inner: S) {
    super();
    this.meta = {...inner.meta, nullable: true};
  }
}

/**
 * A property schema that may be omitted from its containing object. The object
 * value type makes the corresponding key optional.
 */
export class OmissibleSchema<S extends Schema> extends Schema<InferValue<S>> {
  readonly meta: SchemaMeta & {omissible: true};
  constructor(readonly inner: S) {
    super();
    this.meta = {...inner.meta, omissible: true};
  }
}

export function nullable<S extends Schema>(inner: S): NullableSchema<S> {
  return new NullableSchema(inner);
}

export function omissible<S extends Schema>(inner: S): OmissibleSchema<S> {
  return new OmissibleSchema(inner);
}

/** Unwrap any number of modifiers to reach the underlying base schema. */
export function getBaseSchema(schema: Schema): Schema {
  let current = schema;
  while (
    current instanceof NullableSchema ||
    current instanceof OmissibleSchema
  ) {
    current = current.inner;
  }
  return current;
}
