// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Theme} from '@astryxdesign/core/theme';
import {Button} from '@astryxdesign/core/Button';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';
import {defineTheme} from '@astryxdesign/core/theme';

const light = defineTheme({tokens: {'--color-accent': '#0066cc', '--color-background-surface': '#fff'}});
const dark = defineTheme({tokens: {'--color-accent': '#4da6ff', '--color-background-surface': '#1a1a1a'}});

export default function DarkModeToggle() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return (
    <Theme theme={mode === 'light' ? light : dark} mode={mode}>
      <div className="min-h-screen flex items-center justify-center">
        <Card padding={6}>
          <Stack gap={4} align="center">
            <Text type="display" size="sm">Theme Demo</Text>
            <Text type="body" size="md">Toggle between light and dark.</Text>
            <Button onClick={() => setMode(m => m === 'light' ? 'dark' : 'light')} variant="filled">
              Switch to {mode === 'light' ? 'Dark' : 'Light'}
            </Button>
          </Stack>
        </Card>
      </div>
    </Theme>
  );
}