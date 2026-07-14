// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Switch} from '@/components/ui/switch';
import {Separator} from '@/components/ui/separator';
import {useState} from 'react';

const navSections = [
  {title: 'Account', items: ['Profile', 'Security', 'Notifications']},
  {title: 'Preferences', items: ['Appearance', 'Language']},
];

export default function SettingsDashboard() {
  const [activePage, setActivePage] = useState('Profile');
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b px-6 h-16 flex items-center">
        <h1 className="text-lg font-bold">Settings</h1>
      </header>
      <div className="flex flex-1">
        <aside className="w-64 border-r p-4 space-y-4">
          {navSections.map((section) => (
            <div key={section.title} className="space-y-1">
              <span className="text-xs font-medium text-muted-foreground uppercase">{section.title}</span>
              {section.items.map((item) => (
                <button
                  key={item}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm ${activePage === item ? 'bg-muted font-medium' : 'hover:bg-muted/50'}`}
                  onClick={() => setActivePage(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
        </aside>
        <main className="flex-1 p-6">
          {activePage === 'Profile' && (
            <div className="space-y-4 max-w-lg">
              <h2 className="text-xl font-semibold">Profile</h2>
              <p className="text-sm text-muted-foreground">Manage your public profile information.</p>
              <div className="space-y-2">
                <Label htmlFor="displayName">Display name</Label>
                <Input id="displayName" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <Button>Save changes</Button>
            </div>
          )}
          {activePage === 'Appearance' && (
            <div className="space-y-4 max-w-lg">
              <h2 className="text-xl font-semibold">Appearance</h2>
              <div className="flex items-center justify-between">
                <Label htmlFor="darkMode">Dark mode</Label>
                <Switch id="darkMode" checked={darkMode} onCheckedChange={setDarkMode} />
              </div>
            </div>
          )}
          {activePage !== 'Profile' && activePage !== 'Appearance' && (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{activePage}</h2>
              <p className="text-sm text-muted-foreground">Settings for {activePage.toLowerCase()}.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
