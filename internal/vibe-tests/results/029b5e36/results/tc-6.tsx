// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Slider} from '@/components/ui/slider';

export default function ThemeSettings() {
  const [accentColor, setAccentColor] = useState('#0066FF');
  const [borderRadius, setBorderRadius] = useState([8]);
  const [spacingScale, setSpacingScale] = useState([4]);

  return (
    <div className="p-6 space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold">Appearance Settings</h1>
        <p className="text-muted-foreground mt-1">Customize how the app looks.</p>
      </div>

      <Card>
        <CardHeader><CardTitle>Theme Controls</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="accent">Accent Color</Label>
            <div className="flex gap-2 items-center">
              <Input id="accent" value={accentColor} onChange={(e) => setAccentColor(e.target.value)} className="max-w-[200px]" />
              <div className="w-8 h-8 rounded border" style={{backgroundColor: accentColor}} />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Border Radius: {borderRadius[0]}px</Label>
            <Slider value={borderRadius} onValueChange={setBorderRadius} min={0} max={24} step={2} />
          </div>

          <div className="space-y-2">
            <Label>Spacing Scale: {spacingScale[0]}px base</Label>
            <Slider value={spacingScale} onValueChange={setSpacingScale} min={2} max={8} step={1} />
          </div>

          <Button variant="ghost" onClick={() => { setAccentColor('#0066FF'); setBorderRadius([8]); setSpacingScale([4]); }}>Reset to defaults</Button>
        </CardContent>
      </Card>

      <div>
        <h3 className="text-lg font-semibold mb-3">Preview</h3>
        <Card style={{'--radius': `${borderRadius[0]}px`, '--accent-color': accentColor} as React.CSSProperties}>
          <CardContent className="pt-6 space-y-3">
            <h4 className="font-semibold">Preview Card</h4>
            <p className="text-sm text-muted-foreground">This card reflects your settings.</p>
            <div className="flex gap-2">
              <Button>Primary Action</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
