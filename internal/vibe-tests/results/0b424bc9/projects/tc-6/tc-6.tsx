// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useMemo} from 'react';
import {Theme, defineTheme} from '@astryxdesign/core/theme';
import {Card} from '@astryxdesign/core/Card';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Slider} from '@astryxdesign/core/Slider';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/Stack';
import {HStack} from '@astryxdesign/core/Stack';

export default function ThemeSettings() {
  const [accentColor, setAccentColor] = useState('#0066FF');
  const [borderRadius, setBorderRadius] = useState(8);
  const [spacingScale, setSpacingScale] = useState(4);

  const customTheme = useMemo(
    () => defineTheme({
      name: 'custom',
      tokens: {
        '--color-accent': accentColor,
        '--radius-2': `${borderRadius}px`,
        '--radius-3': `${borderRadius * 1.5}px`,
        '--radius-4': `${borderRadius * 2}px`,
        '--spacing-2': `${spacingScale * 2}px`,
        '--spacing-3': `${spacingScale * 3}px`,
        '--spacing-4': `${spacingScale * 4}px`,
      },
    }),
    [accentColor, borderRadius, spacingScale]
  );

  return (
    <div className="p-6 space-y-6">
      <Heading level={1}>Appearance Settings</Heading>
      <Text>Customize how the app looks. Changes apply to the preview below.</Text>

      <Card padding={4}>
        <VStack gap={4}>
          <Heading level={3}>Theme Controls</Heading>
          <TextInput label="Accent Color" value={accentColor} onChange={setAccentColor} placeholder="#0066FF" />
          <Slider label="Border Radius" value={borderRadius} onChange={setBorderRadius} min={0} max={24} step={2} formatValue={(v) => `${v}px`} />
          <Slider label="Spacing Scale" value={spacingScale} onChange={setSpacingScale} min={2} max={8} step={1} formatValue={(v) => `${v}px base`} />
          <Button label="Reset to defaults" variant="ghost" onClick={() => { setAccentColor('#0066FF'); setBorderRadius(8); setSpacingScale(4); }} />
        </VStack>
      </Card>

      <Heading level={3}>Preview</Heading>
      <Theme theme={customTheme} mode="light">
        <Card padding={4}>
          <VStack gap={3}>
            <Heading level={4}>Preview Card</Heading>
            <Text>This card uses your custom theme settings.</Text>
            <HStack gap={2}>
              <Button label="Primary Action" variant="primary" />
              <Button label="Secondary" variant="secondary" />
            </HStack>
          </VStack>
        </Card>
      </Theme>
    </div>
  );
}
