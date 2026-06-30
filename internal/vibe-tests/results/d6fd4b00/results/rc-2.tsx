// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Layout} from '@astryxdesign/core/Layout';
import {LayoutPanel} from '@astryxdesign/core/Layout';
import {LayoutContent} from '@astryxdesign/core/Layout';
import {SideNav} from '@astryxdesign/core/SideNav';
import {SideNavItem} from '@astryxdesign/core/SideNav';
import {SideNavSection} from '@astryxdesign/core/SideNav';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  sidebar: {
    '@media (max-width: 768px)': {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      top: 'auto',
      height: 'auto',
      maxHeight: '50vh',
      borderTop: '1px solid var(--color-border)',
      borderRadius: '16px 16px 0 0',
    },
  },
});

export default function ResponsiveSidebar() {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <Layout>
      <LayoutPanel position="start" xstyle={styles.sidebar}>
        <SideNav>
          <SideNavSection label="Main">
            <SideNavItem
              href="#dashboard"
              isSelected={activeItem === 'dashboard'}
              onClick={() => setActiveItem('dashboard')}
            >
              Dashboard
            </SideNavItem>
            <SideNavItem
              href="#projects"
              isSelected={activeItem === 'projects'}
              onClick={() => setActiveItem('projects')}
            >
              Projects
            </SideNavItem>
            <SideNavItem
              href="#settings"
              isSelected={activeItem === 'settings'}
              onClick={() => setActiveItem('settings')}
            >
              Settings
            </SideNavItem>
          </SideNavSection>
        </SideNav>
      </LayoutPanel>
      <LayoutContent>
        <Stack gap={4}>
          <Text type="display" size="md">Content Area</Text>
          <Text type="body" size="md">
            The sidebar on the left becomes a bottom sheet on mobile viewports.
          </Text>
        </Stack>
      </LayoutContent>
    </Layout>
  );
}