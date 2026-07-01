// Copyright (c) Meta Platforms, Inc. and affiliates.

import {AppShell} from '@astryxdesign/core/AppShell';
import {TopNav} from '@astryxdesign/core/TopNav';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

export default function ResponsiveNavigation() {
  return (
    <AppShell
      topNav={
        <TopNav heading={<TopNav.Heading>My App</TopNav.Heading>}>
          <TopNav.Item href="/dashboard">Dashboard</TopNav.Item>
          <TopNav.Item href="/projects">Projects</TopNav.Item>
          <TopNav.Item href="/team">Team</TopNav.Item>
          <TopNav.Item href="/settings">Settings</TopNav.Item>
        </TopNav>
      }
    >
      <div className="max-w-3xl mx-auto p-8">
        <Heading level={1}>Welcome</Heading>
        <Text>This navigation collapses to a hamburger menu on mobile viewports. Resize the window to see the responsive behavior.</Text>
      </div>
    </AppShell>
  );
}
