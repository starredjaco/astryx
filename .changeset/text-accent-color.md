---
'@astryxdesign/core': patch
'@astryxdesign/cli': patch
---

[breaking] `Text`, `Heading`, `Link`, and `Timestamp` rename the `color="active"` value to `color="accent"`, now mapping to the dedicated `--color-text-accent` token (legible accent text ink) instead of `--color-accent`. Run `astryx upgrade` to migrate call sites automatically. (#2863)
@cixzhang
