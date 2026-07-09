// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Theme, defineTheme} from '@astryxdesign/core/theme';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Stack} from '@astryxdesign/core/Stack';
import {Grid} from '@astryxdesign/core/Grid';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    padding: 24,
  },
  preview: {
    padding: 16,
    borderRadius: 8,
  },
});

const defaultTheme = defineTheme({name: 'Default'});
const midnightTheme = defineTheme({
  name: 'Midnight',
  tokens: {
    colorBackground: '#1a1a2e',
    colorSurface: '#16213e',
    colorTextPrimary: '#e0e0e0',
    colorTextSecondary: '#a0a0b0',
    colorAccent: '#7c3aed',
  },
});
const earthTheme = defineTheme({
  name: 'Earth',
  tokens: {
    colorBackground: '#f5f0e8',
    colorSurface: '#ede6d6',
    colorTextPrimary: '#3d2c1e',
    colorTextSecondary: '#6b5744',
    colorAccent: '#8b5e3c',
  },
});

const themes = [
  {id: 'default', name: 'Default', theme: defaultTheme, desc: 'Clean, neutral palette'},
  {id: 'midnight', name: 'Midnight', theme: midnightTheme, desc: 'Dark purple tones'},
  {id: 'earth', name: 'Earth', theme: earthTheme, desc: 'Warm brown tones'},
];

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState('default');
  const current = themes.find(t => t.id === activeTheme) || themes[0];

  return (
    <div {...stylex.props(styles.container)}>
      <Stack gap={4}>
        <Heading level={1}>Theme Switcher</Heading>
        <Grid columns={3} gap={3}>
          {themes.map(t => (
            <Card key={t.id} padding={3}>
              <Stack gap={2}>
                <Heading level={3}>{t.name}</Heading>
                <Text type="supporting">{t.desc}</Text>
                <Button
                  label={activeTheme === t.id ? 'Active' : 'Apply'}
                  variant={activeTheme === t.id ? 'primary' : 'secondary'}
                  onClick={() => setActiveTheme(t.id)}
                  isDisabled={activeTheme === t.id}
                />
              </Stack>
            </Card>
          ))}
        </Grid>
        <Theme theme={current.theme}>
          <Card padding={4}>
            <Stack gap={2}>
              <Heading level={2}>Preview</Heading>
              <Text>This card uses the {current.name} theme.</Text>
              <Button label="Sample Button" variant="primary" />
            </Stack>
          </Card>
        </Theme>
      </Stack>
    </div>
  );
}
