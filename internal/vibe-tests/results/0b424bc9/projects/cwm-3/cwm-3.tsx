// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/Stack';
import {Popover} from '@astryxdesign/core/Popover';
import {Grid} from '@astryxdesign/core/Grid';

const ICONS = ['\u{1F4DD}', '\u{1F680}', '\u{1F4A1}', '\u{1F3AF}', '\u{1F4DA}', '\u{2728}', '\u{1F30D}', '\u{1F3A8}', '\u{1F4CA}', '\u{1F527}', '\u{2764}\u{FE0F}', '\u{1F31F}'];
const COVERS = ['/covers/gradient-blue.jpg', '/covers/gradient-purple.jpg', '/covers/nature.jpg', '/covers/abstract.jpg'];

export default function NotionPageHeader() {
  const [icon, setIcon] = useState('\u{1F4DD}');
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto">
      {coverUrl ? (
        <div className="relative">
          <img src={coverUrl} alt="Page cover" className="w-full h-72 object-cover" />
          <div className="absolute top-3 right-3">
            <Button label="Change cover" variant="ghost" onClick={() => setCoverUrl(COVERS[Math.floor(Math.random() * COVERS.length)])} />
          </div>
        </div>
      ) : (
        <div className="w-full h-72 bg-gray-100 flex items-center justify-center">
          <Button label="Add cover" variant="ghost" onClick={() => setCoverUrl(COVERS[0])} />
        </div>
      )}

      <div className="px-6 pt-6">
        <VStack gap={2}>
          <Popover
            isOpen={isIconPickerOpen}
            onOpenChange={setIsIconPickerOpen}
            trigger={
              <button className="text-6xl cursor-pointer" onClick={() => setIsIconPickerOpen(true)} aria-label="Change page icon">
                {icon}
              </button>
            }
          >
            <Card padding={3}>
              <VStack gap={2}>
                <Text type="label">Choose an icon</Text>
                <Grid columns={6} gap={1}>
                  {ICONS.map((emoji) => (
                    <span
                      key={emoji}
                      className="text-3xl cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      onClick={() => { setIcon(emoji); setIsIconPickerOpen(false); }}
                      role="button"
                      tabIndex={0}
                      aria-label={`Select icon ${emoji}`}
                    >
                      {emoji}
                    </span>
                  ))}
                </Grid>
              </VStack>
            </Card>
          </Popover>

          <Heading level={1}>Untitled</Heading>
          <Text type="supporting">Start writing or press / for commands</Text>
        </VStack>
      </div>
    </div>
  );
}
