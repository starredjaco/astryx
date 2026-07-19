---
'@astryxdesign/cli': patch
---

[fix] Extend the v0.1.0 upgrade codemods to cover test files that mock `@xds/core` modules, which were previously left half-migrated and broke after upgrade:

- **migrate-xds-module-specifiers**: rewrite the mocked-module path in `vi.mock`/`vi.doMock`/`jest.mock`/`jest.doMock` (and bare `mock`) calls, plus `import(...)` specifiers used in TS type positions (`typeof import('@xds/core/Text')`), so the mock still intercepts the renamed `@astryxdesign/*` import.
- **drop-xds-prefix-imports**: un-prefix partial-mock override keys inside an `@xds/core` mock factory (e.g. `useXDSTruncation` → `useTruncation`) so the override matches the renamed export instead of silently overriding nothing. Scoped to recognized `@xds/core` mock factories only; unrelated object keys are untouched.

@ejhammond
