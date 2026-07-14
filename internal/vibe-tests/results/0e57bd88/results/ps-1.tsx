// Copyright (c) Meta Platforms, Inc. and affiliates.

import {AppShell} from '@astryxdesign/core/AppShell';
import {TopNav} from '@astryxdesign/core/TopNav';
import {SideNav} from '@astryxdesign/core/SideNav';
import {SideNavItem} from '@astryxdesign/core/SideNavItem';
import {SideNavSection} from '@astryxdesign/core/SideNavSection';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {Switch} from '@astryxdesign/core/Switch';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Button} from '@astryxdesign/core/Button';
import {useState} from 'react';

export default function SettingsDashboard() {
  const [activePage, setActivePage] = useState('profile');
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState('');

  return (
    <AppShell
      height="fill"
      topNav={
        <TopNav
          label="App navigation"
          heading={<Heading level={1}>Settings</Heading>}
        />
      }
      sideNav={
        <SideNav>
          <SideNavSection title="Account">
            <SideNavItem label="Profile" isSelected={activePage === 'profile'} onPress={() => setActivePage('profile')} />
            <SideNavItem label="Security" isSelected={activePage === 'security'} onPress={() => setActivePage('security')} />
            <SideNavItem label="Notifications" isSelected={activePage === 'notifications'} onPress={() => setActivePage('notifications')} />
          </SideNavSection>
          <SideNavSection title="Preferences">
            <SideNavItem label="Appearance" isSelected={activePage === 'appearance'} onPress={() => setActivePage('appearance')} />
            <SideNavItem label="Language" isSelected={activePage === 'language'} onPress={() => setActivePage('language')} />
          </SideNavSection>
        </SideNav>
      }
      contentPadding={4}
    >
      {activePage === 'profile' && (
        <VStack gap="md">
          <Heading level={2}>Profile</Heading>
          <Text color="secondary">Manage your public profile information.</Text>
          <TextInput label="Display name" value={name} onChange={setName} />
          <Button label="Save changes" variant="primary" />
        </VStack>
      )}
      {activePage === 'appearance' && (
        <VStack gap="md">
          <Heading level={2}>Appearance</Heading>
          <Switch label="Dark mode" value={darkMode} onChange={setDarkMode} />
        </VStack>
      )}
      {activePage !== 'profile' && activePage !== 'appearance' && (
        <VStack gap="md">
          <Heading level={2}>{activePage.charAt(0).toUpperCase() + activePage.slice(1)}</Heading>
          <Text color="secondary">Settings for {activePage}.</Text>
        </VStack>
      )}
    </AppShell>
  );
}
