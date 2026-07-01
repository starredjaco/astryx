// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Theme} from '@astryxdesign/core';
import {neutralTheme} from '@astryxdesign/theme-neutral';
import {defineTheme} from '@astryxdesign/core/theme';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';

const darkTheme = defineTheme({
  name: 'dark-sidebar',
  extends: neutralTheme,
  tokens: {},
});

export default function NestedThemeDemo() {
  return (
    <Theme theme={neutralTheme} mode="light">
      <div className="flex h-screen">
        <Theme theme={darkTheme} mode="dark">
          <nav className="w-64 p-4 flex flex-col gap-2">
            <Heading level={3}>Navigation</Heading>
            <Button label="Dashboard" variant="ghost" onClick={() => {}} />
            <Button label="Projects" variant="ghost" onClick={() => {}} />
            <Button label="Settings" variant="ghost" onClick={() => {}} />
          </nav>
        </Theme>
        <main className="flex-1 p-6">
          <Heading level={1}>Content Area</Heading>
          <Text>
            This content area uses the light theme while the sidebar uses a dark theme.
            Each section is wrapped in its own Theme provider to scope the color mode.
          </Text>
        </main>
      </div>
    </Theme>
  );
}
