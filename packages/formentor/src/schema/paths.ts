// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file paths.ts
 * @output Value paths for addressing fields within a form value
 * @position Used by cross-field validation to attach errors to nested fields
 */

/**
 * A value path points at a location within a form value (e.g. `['confirm']`).
 * Level B supports single-level object properties; nested paths are reserved
 * for the collections/nested milestone.
 */
export class ValuePath {
  constructor(readonly segments: ReadonlyArray<string>) {}

  property(key: string): ValuePath {
    return new ValuePath([...this.segments, key]);
  }

  /** Serialize to a slash-delimited string, e.g. `"address/street"`. */
  toString(): string {
    return this.segments.join('/');
  }

  /** Structural equality against another path. */
  equals(other: ValuePath): boolean {
    return this.toString() === other.toString();
  }
}

export function rootPath(): ValuePath {
  return new ValuePath([]);
}
