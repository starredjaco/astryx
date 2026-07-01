// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';

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
  const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);

  return (
    <div className="max-w-[900px] mx-auto">
      {coverUrl ? (
        <img src={coverUrl} alt="Page cover" className="w-full h-[200px] object-cover rounded-lg" />
      ) : (
        <div className="w-full h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
          <Text color="secondary">Add a cover image</Text>
        </div>
      )}
      <div className="relative -mt-10 px-6">
        <button
          className="w-[72px] h-[72px] text-5xl flex items-center justify-center bg-white rounded-lg shadow-sm cursor-pointer border-none"
          onClick={() => setIsIconPickerOpen(!isIconPickerOpen)}
          aria-label="Change page icon"
        >
          {icon}
        </button>
        {isIconPickerOpen && (
          <Card padding={2}>
            <div className="grid grid-cols-8 gap-1 p-2">
              {EMOJI_OPTIONS.map((emoji) => (
                <button
                  key={emoji}
                  className="text-2xl cursor-pointer p-1 rounded border-none bg-transparent hover:bg-gray-100"
                  onClick={() => { setIcon(emoji); setIsIconPickerOpen(false); }}
                  aria-label={`Select ${emoji}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </Card>
        )}
        <input
          className="text-3xl font-bold border-none outline-none w-full py-2 bg-transparent"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled"
          aria-label="Page title"
        />
        <div className="flex gap-2 mt-2 opacity-60">
          <Button label="Add cover" variant="ghost" size="sm" onClick={() => setCoverUrl('https://images.unsplash.com/photo-1557683316-973673baf926?w=900')} />
          <Button label="Add comment" variant="ghost" size="sm" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
