// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {HStack} from '@astryxdesign/core/Stack';
import {VStack} from '@astryxdesign/core/Stack';
import {Heading} from '@astryxdesign/core/Heading';
import {Link} from '@astryxdesign/core/Link';

const navLinks = [
  {label: 'Home', href: '/'},
  {label: 'Products', href: '/products'},
  {label: 'About', href: '/about'},
  {label: 'Contact', href: '/contact'},
];

export default function ResponsiveNav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav>
      <div className="px-4 py-3 border-b border-gray-200">
        <HStack gap={4} vAlign="center" hAlign="between">
          <Heading level={4}>Acme Co</Heading>
          <div className="hidden md:flex gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>
          <div className="md:hidden">
            <IconButton
              label={isMobileOpen ? 'Close menu' : 'Open menu'}
              icon={<MenuIcon />}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            />
          </div>
        </HStack>
      </div>

      {isMobileOpen && (
        <div className="md:hidden px-4 py-3 border-b border-gray-200">
          <VStack gap={2}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </VStack>
        </div>
      )}
    </nav>
  );
}

function MenuIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );
}
