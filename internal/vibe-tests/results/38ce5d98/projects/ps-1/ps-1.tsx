// Copyright (c) Meta Platforms, Inc. and affiliates.

import {AppShell} from '@astryxdesign/core/AppShell';
import {TopNav} from '@astryxdesign/core/TopNav';
import {SideNav} from '@astryxdesign/core/SideNav';
import {SideNavItem} from '@astryxdesign/core/SideNavItem';
import {SideNavSection} from '@astryxdesign/core/SideNavSection';
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
      topNav={<TopNav label="App nav" heading={<span className="font-bold text-lg">Settings</span>} />}
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
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Profile</h2>
          <p className="text-sm text-gray-500">Manage your public profile information.</p>
          <TextInput label="Display name" value={name} onChange={setName} />
          <Button label="Save changes" variant="primary" />
        </div>
      )}
      {activePage === 'appearance' && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Appearance</h2>
          <Switch label="Dark mode" value={darkMode} onChange={setDarkMode} />
        </div>
      )}
      {activePage !== 'profile' && activePage !== 'appearance' && (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{activePage.charAt(0).toUpperCase() + activePage.slice(1)}</h2>
          <p className="text-sm text-gray-500">Settings for {activePage}.</p>
        </div>
      )}
    </AppShell>
  );
}
