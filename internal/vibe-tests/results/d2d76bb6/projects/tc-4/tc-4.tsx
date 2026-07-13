// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Theme, defineTheme} from '@astryxdesign/core/theme';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';

const defaultTheme = defineTheme({
  name: 'default',
  tokens: {
    '--color-accent': '#0066cc',
    '--color-background-surface': '#ffffff',
  },
});

const midnightTheme = defineTheme({
  name: 'midnight',
  tokens: {
    '--color-accent': '#7c3aed',
    '--color-background-surface': '#1a1a2e',
  },
});

const forestTheme = defineTheme({
  name: 'forest',
  tokens: {
    '--color-accent': '#059669',
    '--color-background-surface': '#f0fdf4',
  },
});

const themes = [
  {name: 'Default', theme: defaultTheme},
  {name: 'Midnight', theme: midnightTheme},
  {name: 'Forest', theme: forestTheme},
];

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState(themes[0]);

  return (
    <Theme theme={activeTheme.theme}>
      <VStack gap={4} padding={4}>
        <Heading level={2}>Theme Switcher</Heading>
        <HStack gap={2}>
          {themes.map(t => (
            <Button
              key={t.name}
              label={t.name}
              variant={t.name === activeTheme.name ? 'primary' : 'secondary'}
              onClick={() => setActiveTheme(t)}
            />
          ))}
        </HStack>
        <Card padding={4}>
          <VStack gap={2}>
            <Heading level={3}>Preview</Heading>
            <Text>This content is rendered with the {activeTheme.name} theme applied.</Text>
            <Button label="Sample Action" variant="primary" />
          </VStack>
        </Card>
      </VStack>
    </Theme>
  );
}
