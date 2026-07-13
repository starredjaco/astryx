// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';

const navItems = ['Home', 'About', 'Services', 'Contact'];

export default function ResponsiveNav() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <h3 className="text-xl font-bold">Brand</h3>
        <div className="hidden md:flex gap-2">
          {navItems.map(item => (
            <Button key={item} variant="ghost" size="sm">{item}</Button>
          ))}
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">Menu</Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-2 mt-8">
                {navItems.map(item => (
                  <Button key={item} variant="ghost" className="justify-start">{item}</Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
