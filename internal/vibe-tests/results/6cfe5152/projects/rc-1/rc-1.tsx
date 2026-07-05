// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {HStack} from '@astryxdesign/core/Stack';
import {VStack} from '@astryxdesign/core/Stack';
import {Heading} from '@astryxdesign/core/Heading';
import {Link} from '@astryxdesign/core/Link';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  nav: {
    padding: 16,
    borderBottom: '1px solid var(--color-border)',
  },
  desktopLinks: {
    display: 'flex',
    gap: 16,
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  hamburger: {
    display: 'none',
    '@media (max-width: 768px)': {
      display: 'flex',
    },
  },
  mobileMenu: {
    padding: 16,
    borderBottom: '1px solid var(--color-border)',
    '@media (min-width: 769px)': {
      display: 'none',
    },
  },
});

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
      <div {...stylex.props(styles.nav)}>
        <HStack gap={4} vAlign="center" hAlign="between">
          <Heading level={4}>Acme Co</Heading>

          <div {...stylex.props(styles.desktopLinks)}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </div>

          <div {...stylex.props(styles.hamburger)}>
            <IconButton
              label={isMobileOpen ? 'Close menu' : 'Open menu'}
              icon={<MenuIcon />}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            />
          </div>
        </HStack>
      </div>

      {isMobileOpen && (
        <div {...stylex.props(styles.mobileMenu)}>
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
