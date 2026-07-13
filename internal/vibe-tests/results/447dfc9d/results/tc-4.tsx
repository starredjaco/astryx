// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';

const themes = [
  {name: 'Default', bg: 'bg-white', text: 'text-gray-900', accent: 'bg-blue-600'},
  {name: 'Midnight', bg: 'bg-slate-900', text: 'text-white', accent: 'bg-purple-600'},
  {name: 'Forest', bg: 'bg-green-50', text: 'text-green-900', accent: 'bg-emerald-600'},
];

export default function ThemeSwitcher() {
  const [active, setActive] = useState(themes[0]);

  return (
    <div className={`flex flex-col gap-4 p-6 min-h-screen ${active.bg} ${active.text}`}>
      <h2 className="text-2xl font-bold">Theme Switcher</h2>
      <div className="flex gap-2">
        {themes.map(t => (
          <Button
            key={t.name}
            variant={t.name === active.name ? 'default' : 'outline'}
            onClick={() => setActive(t)}
          >
            {t.name}
          </Button>
        ))}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This content is rendered with the {active.name} theme applied.</p>
          <Button className="mt-4">Sample Action</Button>
        </CardContent>
      </Card>
    </div>
  );
}
