// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {SideNav} from '@astryxdesign/core/SideNav';
import {SideNavItem} from '@astryxdesign/core/SideNav';
import {SideNavSection} from '@astryxdesign/core/SideNav';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';

export default function ResponsiveSidebar() {
  const [active, setActive] = useState('dashboard');

  return (
    <div className="flex min-h-screen md:flex-row flex-col-reverse">
      <aside className="md:w-64 md:border-r md:static fixed bottom-0 left-0 right-0 md:bottom-auto md:left-auto md:right-auto border-t md:border-t-0 bg-white z-10 md:max-h-none max-h-[50vh] overflow-auto rounded-t-2xl md:rounded-none">
        <SideNav>
          <SideNavSection label="Navigation">
            <SideNavItem isSelected={active === 'dashboard'} onClick={() => setActive('dashboard')}>Dashboard</SideNavItem>
            <SideNavItem isSelected={active === 'projects'} onClick={() => setActive('projects')}>Projects</SideNavItem>
            <SideNavItem isSelected={active === 'settings'} onClick={() => setActive('settings')}>Settings</SideNavItem>
          </SideNavSection>
        </SideNav>
      </aside>
      <main className="flex-1 p-6">
        <Stack gap={4}>
          <Text type="display" size="md">Content</Text>
          <Text type="body" size="md">Sidebar becomes a bottom sheet on mobile.</Text>
        </Stack>
      </main>
    </div>
  );
}