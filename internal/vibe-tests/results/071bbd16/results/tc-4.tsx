// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Theme, defineTheme} from '@astryxdesign/core/theme';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Heading, Text} from '@astryxdesign/core/Text';

const defaultTheme = defineTheme({name: 'Default'});
const midnightTheme = defineTheme({
  name: 'Midnight',
  tokens: {
    colorBackground: '#1a1a2e',
    colorSurface: '#16213e',
    colorTextPrimary: '#e0e0e0',
    colorAccent: '#7c3aed',
  },
});
const earthTheme = defineTheme({
  name: 'Earth',
  tokens: {
    colorBackground: '#f5f0e8',
    colorSurface: '#ede6d6',
    colorTextPrimary: '#3d2c1e',
    colorAccent: '#8b5e3c',
  },
});

const themes = [
  {id: 'default', name: 'Default', theme: defaultTheme, desc: 'Clean neutral palette'},
  {id: 'midnight', name: 'Midnight', theme: midnightTheme, desc: 'Dark purple tones'},
  {id: 'earth', name: 'Earth', theme: earthTheme, desc: 'Warm brown tones'},
];

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState('default');
  const current = themes.find(t => t.id === activeTheme) || themes[0];

  return (
    <div className="p-6 space-y-6">
      <Heading level={1}>Theme Switcher</Heading>
      <div className="grid grid-cols-3 gap-4">
        {themes.map(t => (
          <Card key={t.id} padding={3}>
            <div className="space-y-2">
              <Heading level={3}>{t.name}</Heading>
              <Text type="supporting">{t.desc}</Text>
              <Button
                label={activeTheme === t.id ? 'Active' : 'Apply'}
                variant={activeTheme === t.id ? 'primary' : 'secondary'}
                onClick={() => setActiveTheme(t.id)}
                isDisabled={activeTheme === t.id}
              />
            </div>
          </Card>
        ))}
      </div>
      <Theme theme={current.theme}>
        <Card padding={4}>
          <div className="space-y-2">
            <Heading level={2}>Preview</Heading>
            <Text>This card uses the {current.name} theme.</Text>
            <Button label="Sample Button" variant="primary" />
          </div>
        </Card>
      </Theme>
    </div>
  );
}
