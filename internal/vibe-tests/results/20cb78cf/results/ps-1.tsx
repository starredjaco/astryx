// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Layout} from '@astryxdesign/core/Layout';
import {SideNav, SideNavItem, SideNavHeading} from '@astryxdesign/core/Navigation';
import {Heading} from '@astryxdesign/core/Text';
import {Text} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  header: {
    padding: 16,
    borderBottom: '1px solid var(--color-border)',
  },
  content: {
    padding: 24,
  },
});

export default function SettingsDashboard() {
  const [activeSection, setActiveSection] = useState('general');

  return (
    <Layout
      header={
        <div {...stylex.props(styles.header)}>
          <Heading level={1}>Settings</Heading>
        </div>
      }
      start={
        <SideNav header={<SideNavHeading>Settings</SideNavHeading>}>
          <SideNavItem
            label="General"
            isSelected={activeSection === 'general'}
            onClick={() => setActiveSection('general')}
          />
          <SideNavItem
            label="Account"
            isSelected={activeSection === 'account'}
            onClick={() => setActiveSection('account')}
          />
          <SideNavItem
            label="Notifications"
            isSelected={activeSection === 'notifications'}
            onClick={() => setActiveSection('notifications')}
          />
          <SideNavItem
            label="Security"
            isSelected={activeSection === 'security'}
            onClick={() => setActiveSection('security')}
          />
        </SideNav>
      }
    >
      <div {...stylex.props(styles.content)}>
        <Heading level={2}>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</Heading>
        <Text>Configure your {activeSection} settings here.</Text>
      </div>
    </Layout>
  );
}
