// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Layout} from '@astryxdesign/core/Layout';
import {SideNav, SideNavItem, SideNavHeading} from '@astryxdesign/core/Navigation';
import {Heading} from '@astryxdesign/core/Text';
import {Text} from '@astryxdesign/core/Text';

export default function SettingsDashboard() {
  const [activeSection, setActiveSection] = useState('general');

  return (
    <Layout
      header={
        <div className="p-4 border-b border-gray-200">
          <Heading level={1}>Settings</Heading>
        </div>
      }
      start={
        <SideNav header={<SideNavHeading>Settings</SideNavHeading>}>
          <SideNavItem label="General" isSelected={activeSection === 'general'} onClick={() => setActiveSection('general')} />
          <SideNavItem label="Account" isSelected={activeSection === 'account'} onClick={() => setActiveSection('account')} />
          <SideNavItem label="Notifications" isSelected={activeSection === 'notifications'} onClick={() => setActiveSection('notifications')} />
          <SideNavItem label="Security" isSelected={activeSection === 'security'} onClick={() => setActiveSection('security')} />
        </SideNav>
      }
    >
      <div className="p-6">
        <Heading level={2}>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</Heading>
        <Text>Configure your {activeSection} settings here.</Text>
      </div>
    </Layout>
  );
}
