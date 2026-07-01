// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';

const navItems = [
  {label: 'Dashboard', href: '/dashboard'},
  {label: 'Projects', href: '/projects'},
  {label: 'Team', href: '/team'},
  {label: 'Settings', href: '/settings'},
];

export default function ResponsiveNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="border-b">
        <div className="flex items-center justify-between px-4 h-16 max-w-6xl mx-auto">
          <span className="text-lg font-bold">My App</span>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <a key={item.href} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" aria-label="Open menu">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map(item => (
                    <a key={item.href} href={item.href} className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                      {item.label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
        <p className="text-muted-foreground">Resize the window to see the navigation collapse into a hamburger menu on mobile.</p>
      </main>
    </div>
  );
}
