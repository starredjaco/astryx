// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Button} from '@/components/ui/button';

export default function SettingsDashboard() {
  return (
    <div className="flex h-screen">
      <header className="fixed top-0 left-0 right-0 h-14 border-b flex items-center px-4 bg-background z-10">
        <h1 className="text-lg font-semibold">Settings</h1>
      </header>
      <aside className="fixed top-14 left-0 w-60 h-[calc(100vh-3.5rem)] border-r p-4">
        <nav className="space-y-1">
          {['General', 'Account', 'Notifications', 'Security'].map(item => (
            <Button key={item} variant={item === 'General' ? 'secondary' : 'ghost'} className="w-full justify-start">
              {item}
            </Button>
          ))}
        </nav>
      </aside>
      <main className="ml-60 mt-14 p-6 flex-1">
        <h2 className="text-xl font-semibold mb-2">General Settings</h2>
        <p className="text-muted-foreground">Configure your application preferences here.</p>
      </main>
    </div>
  );
}
