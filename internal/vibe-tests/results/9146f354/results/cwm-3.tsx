// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';

const EMOJI_OPTIONS = ['📄', '📝', '📌', '🎯', '🚀', '💡', '📊', '🎨', '🔧', '📦', '🌟', '🏠', '📁', '🗂️', '📋', '✨'];

interface PageHeaderProps {
  initialTitle?: string;
  initialIcon?: string;
  initialCoverUrl?: string;
}

export default function NotionPageHeader({
  initialTitle = 'Untitled',
  initialIcon = '📄',
  initialCoverUrl,
}: PageHeaderProps) {
  const [title, setTitle] = useState(initialTitle);
  const [icon, setIcon] = useState(initialIcon);
  const [coverUrl, setCoverUrl] = useState(initialCoverUrl || '');
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <div className="max-w-[900px] mx-auto">
      {coverUrl ? (
        <img src={coverUrl} alt="Page cover" className="w-full h-[200px] object-cover rounded-lg" />
      ) : (
        <div className="w-full h-[200px] bg-muted rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground">Add a cover image</span>
        </div>
      )}
      <div className="relative -mt-10 px-6">
        <Popover open={isPickerOpen} onOpenChange={setIsPickerOpen}>
          <PopoverTrigger asChild>
            <button className="w-[72px] h-[72px] text-5xl flex items-center justify-center bg-background rounded-lg shadow-sm cursor-pointer border">
              {icon}
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto">
            <div className="grid grid-cols-8 gap-1">
              {EMOJI_OPTIONS.map((emoji) => (
                <button
                  key={emoji}
                  className="text-2xl p-1 rounded hover:bg-muted cursor-pointer border-none bg-transparent"
                  onClick={() => { setIcon(emoji); setIsPickerOpen(false); }}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
        <input
          className="text-3xl font-bold border-none outline-none w-full py-2 bg-transparent"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled"
        />
        <div className="flex gap-2 mt-2 opacity-60">
          <Button variant="ghost" size="sm" onClick={() => setCoverUrl('https://images.unsplash.com/photo-1557683316-973673baf926?w=900')}>
            Add cover
          </Button>
          <Button variant="ghost" size="sm">Add comment</Button>
        </div>
      </div>
    </div>
  );
}
