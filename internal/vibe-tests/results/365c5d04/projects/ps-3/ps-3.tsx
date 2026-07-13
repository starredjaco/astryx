// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Layout} from '@astryxdesign/core/Layout';
import {LayoutHeader} from '@astryxdesign/core/Layout';
import {LayoutContent} from '@astryxdesign/core/Layout';
import {LayoutPanel} from '@astryxdesign/core/Layout';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';

export default function AdminPanel() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = ['Dashboard', 'Users', 'Settings', 'Reports'];

  return (
    <Layout
      height="fill"
      header={
        <HStack gap={3} padding={3} hAlign="between">
          <HStack gap={2}>
            <Button
              label="Toggle sidebar"
              variant="ghost"
              isIconOnly
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <Heading level={3}>Admin Panel</Heading>
          </HStack>
          <Button label="Logout" variant="ghost" size="sm" />
        </HStack>
      }
      start={
        isSidebarOpen ? (
          <LayoutPanel width={240} hasDivider>
            <VStack gap={1} padding={2}>
              {navItems.map(item => (
                <Button key={item} label={item} variant="ghost" />
              ))}
            </VStack>
          </LayoutPanel>
        ) : null
      }
      content={
        <LayoutContent padding={4}>
          <VStack gap={4}>
            <Heading level={2}>Dashboard</Heading>
            <Text>Main content area. The sidebar can be toggled with the menu button.</Text>
          </VStack>
        </LayoutContent>
      }
    />
  );
}
