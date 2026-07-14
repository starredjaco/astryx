// Copyright (c) Meta Platforms, Inc. and affiliates.

import {AppShell} from '@astryxdesign/core/AppShell';
import {TopNav} from '@astryxdesign/core/TopNav';
import {NavItem} from '@astryxdesign/core/NavItem';
import {useState} from 'react';

export default function ResponsiveNav() {
  const [activePage, setActivePage] = useState('home');

  return (
    <AppShell
      topNav={
        <TopNav
          label="Main navigation"
          heading={<span className="text-lg font-bold">MyApp</span>}
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
      <p className="text-gray-600">Current page: {activePage}</p>
    </AppShell>
  );
}
