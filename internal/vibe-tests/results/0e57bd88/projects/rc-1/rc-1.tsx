// Copyright (c) Meta Platforms, Inc. and affiliates.

import {AppShell} from '@astryxdesign/core/AppShell';
import {TopNav} from '@astryxdesign/core/TopNav';
import {NavItem} from '@astryxdesign/core/NavItem';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {useState} from 'react';

export default function ResponsiveNav() {
  const [activePage, setActivePage] = useState('home');

  return (
    <AppShell
      topNav={
        <TopNav
          label="Main navigation"
          heading={<Heading level={1}>MyApp</Heading>}
          startContent={
            <>
              <NavItem label="Home" isSelected={activePage === 'home'} onPress={() => setActivePage('home')} />
              <NavItem label="Products" isSelected={activePage === 'products'} onPress={() => setActivePage('products')} />
              <NavItem label="About" isSelected={activePage === 'about'} onPress={() => setActivePage('about')} />
              <NavItem label="Contact" isSelected={activePage === 'contact'} onPress={() => setActivePage('contact')} />
            </>
          }
        />
      }
      mobileNav={{
        items: [
          {label: 'Home', onPress: () => setActivePage('home')},
          {label: 'Products', onPress: () => setActivePage('products')},
          {label: 'About', onPress: () => setActivePage('about')},
          {label: 'Contact', onPress: () => setActivePage('contact')},
        ],
      }}
      contentPadding={4}
    >
      <Text>Current page: {activePage}</Text>
    </AppShell>
  );
}
