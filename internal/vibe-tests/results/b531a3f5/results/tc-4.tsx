// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';

const themes = [
  {id: 'default', name: 'Default', description: 'Clean and neutral', bg: 'bg-white', text: 'text-gray-900'},
  {id: 'midnight', name: 'Midnight', description: 'Dark purple tones', bg: 'bg-purple-950', text: 'text-purple-100'},
  {id: 'earth', name: 'Earth', description: 'Warm brown tones', bg: 'bg-amber-50', text: 'text-amber-900'},
];

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState('default');

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Choose a Theme</h2>
      <div className="grid grid-cols-3 gap-4">
        {themes.map((theme) => (
          <Card key={theme.id} className={activeTheme === theme.id ? 'ring-2 ring-primary' : ''}>
            <CardHeader>
              <CardTitle>{theme.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`${theme.bg} ${theme.text} p-4 rounded-md mb-3`}>
                <p className="font-semibold">Preview</p>
                <p className="text-sm">Sample text in this theme.</p>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{theme.description}</p>
              <Button
                variant={activeTheme === theme.id ? 'default' : 'outline'}
                onClick={() => setActiveTheme(theme.id)}
              >
                {activeTheme === theme.id ? 'Active' : 'Select'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
