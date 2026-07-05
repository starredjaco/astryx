// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';

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
            <Button variant="secondary" size="sm" onClick={() => setCoverUrl(COVERS[Math.floor(Math.random() * COVERS.length)])}>Change cover</Button>
          </div>
        </div>
      ) : (
        <div className="w-full h-72 bg-muted flex items-center justify-center">
          <Button variant="ghost" onClick={() => setCoverUrl(COVERS[0])}>Add cover</Button>
        </div>
      )}

      <div className="px-6 pt-6 space-y-2">
        <Popover open={isIconPickerOpen} onOpenChange={setIsIconPickerOpen}>
          <PopoverTrigger asChild>
            <button className="text-6xl cursor-pointer hover:opacity-80" aria-label="Change page icon">{icon}</button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <p className="text-sm font-medium mb-2">Choose an icon</p>
            <div className="grid grid-cols-6 gap-1">
              {ICONS.map((emoji) => (
                <button
                  key={emoji}
                  className="text-2xl p-2 rounded hover:bg-muted cursor-pointer"
                  onClick={() => { setIcon(emoji); setIsIconPickerOpen(false); }}
                  aria-label={`Select icon ${emoji}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <h1 className="text-4xl font-bold">Untitled</h1>
        <p className="text-muted-foreground">Start writing or press / for commands</p>
      </div>
    </div>
  );
}
