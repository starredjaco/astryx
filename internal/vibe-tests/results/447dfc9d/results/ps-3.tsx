// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@/components/ui/button';

const navItems = ['Dashboard', 'Users', 'Settings', 'Reports'];

export default function AdminPanel() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="h-screen flex flex-col">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            ☰
          </Button>
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <Button variant="ghost" size="sm">Logout</Button>
      </header>
      <div className="flex flex-1 overflow-hidden">
        {isSidebarOpen && (
          <aside className="w-60 border-r p-4 flex flex-col gap-1">
            {navItems.map(item => (
              <Button key={item} variant="ghost" className="justify-start">{item}</Button>
            ))}
          </aside>
        )}
        <main className="flex-1 p-6 overflow-auto">
          <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
          <p className="text-muted-foreground">Main content area. The sidebar can be toggled with the menu button.</p>
        </main>
      </div>
    </div>
  );
}
