// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {Button} from '@/components/ui/button';

const themes = [
  {id: 'default', name: 'Default', desc: 'Clean, neutral palette', bg: '#ffffff', text: '#000000', accent: '#3b82f6'},
  {id: 'midnight', name: 'Midnight', desc: 'Dark purple tones', bg: '#1a1a2e', text: '#e0e0e0', accent: '#7c3aed'},
  {id: 'earth', name: 'Earth', desc: 'Warm brown tones', bg: '#f5f0e8', text: '#3d2c1e', accent: '#8b5e3c'},
];

export default function ThemeSwitcher() {
  const [active, setActive] = useState('default');
  const current = themes.find(t => t.id === active) || themes[0];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Theme Switcher</h1>
      <div className="grid grid-cols-3 gap-4">
        {themes.map(t => (
          <Card key={t.id}>
            <CardHeader>
              <CardTitle>{t.name}</CardTitle>
              <CardDescription>{t.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-12 rounded mb-3" style={{backgroundColor: t.bg, border: '1px solid #e5e7eb'}}>
                <div className="h-full flex items-center justify-center">
                  <span className="w-4 h-4 rounded-full" style={{backgroundColor: t.accent}} />
                </div>
              </div>
              <Button variant={active === t.id ? 'default' : 'outline'} onClick={() => setActive(t.id)} disabled={active === t.id} className="w-full">
                {active === t.id ? 'Active' : 'Apply'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card style={{backgroundColor: current.bg, color: current.text}}>
        <CardHeader><CardTitle>Preview</CardTitle></CardHeader>
        <CardContent>
          <p>This card uses the {current.name} theme.</p>
          <Button className="mt-3" style={{backgroundColor: current.accent, color: 'white'}}>Sample Button</Button>
        </CardContent>
      </Card>
    </div>
  );
}
