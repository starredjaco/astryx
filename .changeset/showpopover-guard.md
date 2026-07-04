---
'@astryxdesign/core': patch
---

[fix] useLayer: guard `showPopover()`/`hidePopover()` behind a feature check so overlays degrade gracefully instead of throwing a TypeError on browsers without the Popover API (Safari <17, Firefox <125) (#3343).

@cixzhang
