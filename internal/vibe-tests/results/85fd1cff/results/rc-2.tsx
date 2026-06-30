// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Sheet, SheetContent, SheetTrigger} from '../components/ui/sheet';
import {Button} from '../components/ui/button';

const navItems = ['Dashboard', 'Projects', 'Settings'];

export default function ResponsiveSidebar() {
  const [active, setActive] = useState('Dashboard');

  return (
    <div className="flex min-h-screen">
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-64 border-r p-4">
        <nav className="space-y-2">
          {navItems.map(item => (
            <button key={item} onClick={() => setActive(item)} className={`w-full text-left px-3 py-2 rounded ${active === item ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile bottom sheet */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background p-2 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">Menu</Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <nav className="space-y-2 py-4">
              {navItems.map(item => (
                <button key={item} onClick={() => setActive(item)} className={`w-full text-left px-3 py-2 rounded ${active === item ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>
                  {item}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold">{active}</h1>
        <p className="mt-2 text-muted-foreground">Sidebar becomes bottom sheet on mobile.</p>
      </main>
    </div>
  );
}