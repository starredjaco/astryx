// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file types.ts
 * @output Schema type definitions and value-type inference for Formentor
 * @position Foundation — every other module builds on these schema types
 */

/** Constraints shared by all schemas. */
export interface BaseConstraints {
  /** Human-readable label. Falls back to a title-cased field name. */
  title?: string;
  /** Help text rendered near the field. */
  description?: string;
}

export interface StringConstraints extends BaseConstraints {
  minLength?: number;
  maxLength?: number;
  /** RegExp source; the value must match. */
  pattern?: string;
  /** Semantic format hint. Drives the default control (e.g. password field). */
  format?: 'email' | 'password' | 'multiline';
}

export interface NumberConstraints extends BaseConstraints {
  minimum?: number;
  maximum?: number;
  /** Decimal places allowed. `0` means integer-only. */
  scale?: number;
}

export interface EnumMember<V extends string | number = string | number> {
  /** The stored value. */
  const: V;
  /** Stable key used in code. */
  key: string;
  /** Human-readable label. */
  title: string;
}

export interface EnumConstraints<
  V extends string | number,
> extends BaseConstraints {
  members: ReadonlyArray<EnumMember<V>>;
}

export type SchemaType = 'string' | 'number' | 'boolean' | 'enum' | 'object';

/** Discriminant + modifier flags carried by every schema instance. */
export interface SchemaMeta {
  readonly type: SchemaType;
  /** Value may be `null`. */
  readonly nullable: boolean;
  /** Property may be omitted from its parent object. */
  readonly omissible: boolean;
}

/**
 * The inferred TypeScript value type of a schema `S`.
 * Modifiers widen the type: `nullable` adds `| null`; `omissible` is applied by
 * the parent object type (makes the key optional).
 */
export type InferValue<S> = S extends Schema<infer V> ? V : never;

/**
 * The inferred *partial* value type — what a value looks like mid-edit, before
 * validation. Objects become deeply partial; leaves keep their type but may be
 * `undefined`.
 */
export type InferPartial<S> =
  S extends ObjectSchema<infer P>
    ? {[K in keyof P]?: InferPartial<P[K]>}
    : InferValue<S> | undefined;

/**
 * Base class for all schemas. Generic over the value type `V` it accepts.
 * Schemas are reified: they exist at runtime and carry their constraints, so
 * the same object drives both validation and rendering.
 */
export abstract class Schema<V = unknown> {
  abstract readonly meta: SchemaMeta;
  /**
   * Phantom field to make `V` participate in structural typing. Never read at
   * runtime; typed as optional so it needs no initializer.
   */
  readonly __value?: V;
}

/** Forward declaration; the concrete class lives in object.ts. */
export interface ObjectSchema<
  P extends Record<string, Schema> = Record<string, Schema>,
> extends Schema<ObjectValue<P>> {
  readonly meta: SchemaMeta & {type: 'object'};
  readonly properties: P;
}

/** Keys whose schema is omissible become optional in the object value type. */
type OmissibleKeys<P extends Record<string, Schema>> = {
  [K in keyof P]: P[K]['meta']['omissible'] extends true ? K : never;
}[keyof P];

type RequiredKeys<P extends Record<string, Schema>> = Exclude<
  keyof P,
  OmissibleKeys<P>
>;

/** The value type of an object schema, honoring omissible keys. */
export type ObjectValue<P extends Record<string, Schema>> = {
  [K in RequiredKeys<P>]: InferValue<P[K]>;
} & {
  [K in OmissibleKeys<P>]?: InferValue<P[K]>;
};
