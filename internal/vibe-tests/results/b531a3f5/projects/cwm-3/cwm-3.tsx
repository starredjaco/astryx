// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';

const ICONS = ['\u{1F4DD}', '\u{1F680}', '\u{1F4A1}', '\u{2B50}', '\u{1F3AF}', '\u{1F4DA}', '\u{1F525}', '\u{1F30D}', '\u{2705}', '\u{1F389}', '\u{1F4CA}', '\u{1F3C6}'];

export default function NotionPageHeader() {
  const [selectedIcon, setSelectedIcon] = useState('\u{1F4DD}');

  return (
    <div className="max-w-3xl mx-auto">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=200&fit=crop"
        alt="Page cover"
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="flex items-center gap-3 p-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="text-5xl p-2">{selectedIcon}</Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto">
            <div className="grid grid-cols-4 gap-1">
              {ICONS.map((icon) => (
                <Button key={icon} variant="ghost" onClick={() => setSelectedIcon(icon)} className="text-2xl p-2">
                  {icon}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <h1 className="text-3xl font-bold">My Page Title</h1>
      </div>
      <p className="text-sm text-muted-foreground px-4">Start writing here...</p>
    </div>
  );
}
