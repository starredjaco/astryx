// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {useState} from 'react';

const navItems = ['Home', 'Products', 'About', 'Contact'];

export default function ResponsiveNav() {
  const [activePage, setActivePage] = useState('Home');

  return (
    <div>
      <nav className="border-b">
        <div className="flex items-center justify-between px-6 h-16">
          <span className="text-lg font-bold">MyApp</span>
          <div className="hidden md:flex gap-4">
            {navItems.map((item) => (
              <Button
                key={item}
                variant={activePage === item ? 'default' : 'ghost'}
                onClick={() => setActivePage(item)}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-2 mt-8">
                  {navItems.map((item) => (
                    <Button key={item} variant="ghost" className="justify-start" onClick={() => setActivePage(item)}>
                      {item}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      <main className="p-6">
        <p className="text-muted-foreground">Current page: {activePage}</p>
      </main>
    </div>
  );
}
