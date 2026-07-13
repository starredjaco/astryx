// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';

const navItems = ['Home', 'About', 'Services', 'Contact'];

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="flex items-center justify-between p-4">
        <Heading level={3}>Brand</Heading>
        <div className="hidden md:flex gap-2">
          {navItems.map(item => (
            <Button key={item} label={item} variant="ghost" size="sm" />
          ))}
        </div>
        <div className="md:hidden">
          <Button label="Menu" variant="ghost" isIconOnly onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-1 p-4 md:hidden">
          {navItems.map(item => (
            <Button key={item} label={item} variant="ghost" />
          ))}
        </div>
      )}
    </nav>
  );
}
