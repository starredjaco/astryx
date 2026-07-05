// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';

const navLinks = [
  {label: 'Home', href: '/'},
  {label: 'Products', href: '/products'},
  {label: 'About', href: '/about'},
  {label: 'Contact', href: '/contact'},
];

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Acme Co</h1>

        <div className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm hover:text-primary transition-colors">{link.label}</a>
          ))}
        </div>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" aria-label="Open menu">
                <svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="text-lg hover:text-primary" onClick={() => setIsOpen(false)}>{link.label}</a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
