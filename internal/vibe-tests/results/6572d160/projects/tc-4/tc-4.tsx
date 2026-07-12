// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Text';

const themes = [
  {id: 'default', name: 'Default', description: 'Clean and neutral'},
  {id: 'midnight', name: 'Midnight', description: 'Dark purple tones'},
  {id: 'earth', name: 'Earth', description: 'Warm brown tones'},
];

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState('default');

  return (
    <div className="p-6">
      <Heading level={2}>Choose a Theme</Heading>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {themes.map((theme) => (
          <Card
            key={theme.id}
            padding={4}
          >
            <Heading level={3}>{theme.name}</Heading>
            <Text color="secondary">{theme.description}</Text>
            <Button
              label={activeTheme === theme.id ? 'Active' : 'Select'}
              variant={activeTheme === theme.id ? 'primary' : 'secondary'}
              onClick={() => setActiveTheme(theme.id)}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
