// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Layout, LayoutHeader, LayoutPanel, LayoutContent} from '@astryxdesign/core/Layout';
import {SideNav, SideNavItem, SideNavSection} from '@astryxdesign/core/SideNav';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Theme} from '@astryxdesign/core/theme';
import {Stack} from '@astryxdesign/core/Stack';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: 16,
  },
  content: {
    padding: 24,
  },
});

export default function SettingsDashboard() {
  return (
    <Theme>
      <Layout height="fill">
        <LayoutHeader>
          <div {...stylex.props(styles.header)}>
            <Heading level={1}>Settings</Heading>
          </div>
        </LayoutHeader>
        <LayoutPanel position="start" width={240}>
          <SideNav>
            <SideNavSection title="Settings">
              <SideNavItem label="General" isSelected />
              <SideNavItem label="Account" />
              <SideNavItem label="Notifications" />
              <SideNavItem label="Security" />
              <SideNavItem label="Integrations" />
            </SideNavSection>
          </SideNav>
        </LayoutPanel>
        <LayoutContent>
          <div {...stylex.props(styles.content)}>
            <Stack gap={4}>
              <Heading level={2}>General Settings</Heading>
              <Text>Configure your application preferences here.</Text>
            </Stack>
          </div>
        </LayoutContent>
      </Layout>
    </Theme>
  );
}
