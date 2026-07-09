// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Layout, LayoutHeader, LayoutPanel, LayoutContent} from '@astryxdesign/core/Layout';
import {SideNav, SideNavItem, SideNavSection} from '@astryxdesign/core/SideNav';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Theme} from '@astryxdesign/core/theme';

export default function SettingsDashboard() {
  return (
    <Theme>
      <Layout height="fill">
        <LayoutHeader>
          <div className="flex items-center px-4 py-3 border-b">
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
            </SideNavSection>
          </SideNav>
        </LayoutPanel>
        <LayoutContent>
          <div className="p-6 space-y-4">
            <Heading level={2}>General Settings</Heading>
            <Text>Configure your application preferences here.</Text>
          </div>
        </LayoutContent>
      </Layout>
    </Theme>
  );
}
