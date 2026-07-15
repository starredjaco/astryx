// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Theme} from '@astryxdesign/core';
import {neutralTheme} from '@astryxdesign/theme-neutral';
import {AppShell} from '@astryxdesign/core/AppShell';
import {TopNav} from '@astryxdesign/core/TopNav';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

export default function RootLayout({children}: {children?: React.ReactNode}) {
  return (
    <Theme theme={neutralTheme} mode="system">
      <AppShell
        header={
          <TopNav
            logo={<Text type="label">Internal Tool</Text>}
          />
        }
      >
        <VStack gap={4} padding={4}>
          <Heading level={1}>Welcome</Heading>
          {children}
        </VStack>
      </AppShell>
    </Theme>
  );
}
