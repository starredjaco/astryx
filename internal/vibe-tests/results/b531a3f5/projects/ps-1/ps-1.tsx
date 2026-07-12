// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '@/components/ui/button';

const NAV_ITEMS = ['General', 'Account', 'Notifications', 'Security'];

export default function SettingsDashboard() {
  const [activeSection, setActiveSection] = useState('General');

  return (
    <div className="flex h-screen">
      <aside className="w-64 border-r p-4">
        <h2 className="font-bold text-lg mb-4">Settings</h2>
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Button
              key={item}
              variant={activeSection === item ? 'secondary' : 'ghost'}
              className="justify-start"
              onClick={() => setActiveSection(item)}
            >
              {item}
            </Button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <header className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold">Settings</h1>
        </header>
        <h2 className="text-xl font-semibold mb-2">{activeSection}</h2>
        <p className="text-muted-foreground">Configure your {activeSection.toLowerCase()} settings here.</p>
      </main>
    </div>
  );
}
