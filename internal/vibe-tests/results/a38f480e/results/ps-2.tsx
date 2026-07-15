// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Theme} from '@astryxdesign/core';
import {neutralTheme} from '@astryxdesign/theme-neutral';
import {AppShell} from '@astryxdesign/core/AppShell';
import {TopNav} from '@astryxdesign/core/TopNav';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

export default function RootLayout({children}: {children?: React.ReactNode}) {
  return (
    <Theme theme={neutralTheme} mode="system">
      <AppShell
        header={
          <TopNav
            logo={<span className="font-semibold text-lg">Internal Tool</span>}
          />
        }
      >
        <main className="p-6">
          <Heading level={1}>Welcome</Heading>
          <div className="mt-4">
            {children}
          </div>
        </main>
      </AppShell>
    </Theme>
  );
}
