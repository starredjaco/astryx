// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file index.ts
 * @output Public schema surface: builders, modifiers, paths, and types
 * @position Schema barrel — re-exported from the package root
 */

export {
  string,
  number,
  boolean,
  enumOf,
  object,
  StringSchema,
  NumberSchema,
  BooleanSchema,
  EnumSchema,
  ObjectSchemaImpl,
} from './schemas';

export {
  nullable,
  omissible,
  getBaseSchema,
  NullableSchema,
  OmissibleSchema,
} from './modifiers';

export {ValuePath, rootPath} from './paths';

export {Schema} from './types';
export type {
  SchemaType,
  SchemaMeta,
  BaseConstraints,
  StringConstraints,
  NumberConstraints,
  EnumConstraints,
  EnumMember,
  ObjectSchema,
  ObjectValue,
  InferValue,
  InferPartial,
} from './types';
