// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {HStack} from '@astryxdesign/core/HStack';
import {VStack} from '@astryxdesign/core/VStack';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Heading';

const navItems = ['Home', 'About', 'Services', 'Contact'];

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VStack gap={0}>
      <HStack gap={3} padding={3} hAlign="between">
        <Heading level={3}>Brand</Heading>
        <HStack gap={2}>
          {navItems.map(item => (
            <Button key={item} label={item} variant="ghost" size="sm" />
          ))}
        </HStack>
        <Button
          label="Menu"
          variant="ghost"
          isIconOnly
          onClick={() => setIsOpen(!isOpen)}
        />
      </HStack>
      {isOpen && (
        <VStack gap={1} padding={3}>
          {navItems.map(item => (
            <Button key={item} label={item} variant="ghost" />
          ))}
        </VStack>
      )}
    </VStack>
  );
}
