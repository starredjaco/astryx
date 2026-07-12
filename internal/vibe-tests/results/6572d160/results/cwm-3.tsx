// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Text';
import {Text} from '@astryxdesign/core/Text';
import {Popover} from '@astryxdesign/core/Popover';

const ICONS = ['\u{1F4DD}', '\u{1F680}', '\u{1F4A1}', '\u{2B50}', '\u{1F3AF}', '\u{1F4DA}', '\u{1F525}', '\u{1F30D}', '\u{2705}', '\u{1F389}', '\u{1F4CA}', '\u{1F3C6}'];

export default function NotionPageHeader() {
  const [selectedIcon, setSelectedIcon] = useState('\u{1F4DD}');
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto">
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=200&fit=crop"
        alt="Page cover"
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="flex items-center gap-3 p-4">
        <Popover
          isOpen={isPickerOpen}
          onOpenChange={setIsPickerOpen}
          trigger={
            <Button label="Change icon" variant="ghost" onClick={() => setIsPickerOpen(true)}>
              <span className="text-5xl cursor-pointer">{selectedIcon}</span>
            </Button>
          }
        >
          <div className="grid grid-cols-4 gap-1 p-2">
            {ICONS.map((icon) => (
              <Button
                key={icon}
                label={icon}
                variant="ghost"
                onClick={() => {
                  setSelectedIcon(icon);
                  setIsPickerOpen(false);
                }}
              >
                {icon}
              </Button>
            ))}
          </div>
        </Popover>
        <Heading level={1}>My Page Title</Heading>
      </div>
      <Text type="supporting" color="secondary">Start writing here...</Text>
    </div>
  );
}
