// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Theme} from '@astryxdesign/core';
import {neutralTheme} from '@astryxdesign/theme-neutral';
import {defineTheme} from '@astryxdesign/core/theme';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  layout: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: 260,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  content: {
    flex: 1,
    padding: 24,
  },
});

const darkTheme = defineTheme({
  name: 'dark-sidebar',
  extends: neutralTheme,
  tokens: {},
});

export default function NestedThemeDemo() {
  return (
    <Theme theme={neutralTheme} mode="light">
      <div {...stylex.props(styles.layout)}>
        <Theme theme={darkTheme} mode="dark">
          <nav {...stylex.props(styles.sidebar)}>
            <Heading level={3}>Navigation</Heading>
            <Button label="Dashboard" variant="ghost" onClick={() => {}} />
            <Button label="Projects" variant="ghost" onClick={() => {}} />
            <Button label="Settings" variant="ghost" onClick={() => {}} />
          </nav>
        </Theme>
        <main {...stylex.props(styles.content)}>
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
