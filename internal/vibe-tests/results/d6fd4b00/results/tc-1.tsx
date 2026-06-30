// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Theme} from '@astryxdesign/core/theme';
import {Button} from '@astryxdesign/core/Button';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';
import {defineTheme} from '@astryxdesign/core/theme';

const lightTheme = defineTheme({
  tokens: {
    '--color-accent': '#0066cc',
    '--color-background-surface': '#ffffff',
    '--color-text-primary': '#1a1a1a',
  },
});

const darkTheme = defineTheme({
  tokens: {
    '--color-accent': '#4da6ff',
    '--color-background-surface': '#1a1a1a',
    '--color-text-primary': '#f5f5f5',
  },
});

export default function DarkModeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Theme theme={mode === 'light' ? lightTheme : darkTheme} mode={mode}>
      <Card padding={6}>
        <Stack gap={4} align="center">
          <Text type="display" size="sm">Theme Demo</Text>
          <Text type="body" size="md">
            Click the button to switch between light and dark themes.
          </Text>
          <Button onClick={toggleTheme} variant="filled">
            Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </Stack>
      </Card>
    </Theme>
  );
}