// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {Popover} from '@astryxdesign/core/Popover';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  wrapper: {
    width: '100%',
    maxWidth: 900,
    margin: '0 auto',
  },
  coverImage: {
    width: '100%',
    height: 200,
    objectFit: 'cover',
    borderRadius: 8,
  },
  coverPlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerArea: {
    position: 'relative',
    marginTop: -40,
    paddingLeft: 24,
    paddingRight: 24,
  },
  iconButton: {
    width: 72,
    height: 72,
    fontSize: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    border: 'none',
  },
  titleInput: {
    fontSize: 32,
    fontWeight: 700,
    border: 'none',
    outline: 'none',
    width: '100%',
    padding: '8px 0',
    backgroundColor: 'transparent',
  },
  emojiGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    gap: 4,
    padding: 8,
  },
  emojiItem: {
    fontSize: 24,
    cursor: 'pointer',
    padding: 4,
    borderRadius: 4,
    border: 'none',
    backgroundColor: 'transparent',
  },
  actions: {
    display: 'flex',
    gap: 8,
    marginTop: 8,
    opacity: 0.6,
  },
});

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
    <div {...stylex.props(styles.wrapper)}>
      {coverUrl ? (
        <img src={coverUrl} alt="Page cover" {...stylex.props(styles.coverImage)} />
      ) : (
        <div {...stylex.props(styles.coverPlaceholder)}>
          <Text color="secondary">Add a cover image</Text>
        </div>
      )}
      <div {...stylex.props(styles.headerArea)}>
        <button
          {...stylex.props(styles.iconButton)}
          onClick={() => setIsIconPickerOpen(!isIconPickerOpen)}
          aria-label="Change page icon"
        >
          {icon}
        </button>
        {isIconPickerOpen && (
          <Card padding={2}>
            <div {...stylex.props(styles.emojiGrid)}>
              {EMOJI_OPTIONS.map((emoji) => (
                <button
                  key={emoji}
                  {...stylex.props(styles.emojiItem)}
                  onClick={() => {
                    setIcon(emoji);
                    setIsIconPickerOpen(false);
                  }}
                  aria-label={`Select ${emoji}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </Card>
        )}
        <input
          {...stylex.props(styles.titleInput)}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled"
          aria-label="Page title"
        />
        <div {...stylex.props(styles.actions)}>
          <Button
            label="Add cover"
            variant="ghost"
            size="sm"
            onClick={() => setCoverUrl('https://images.unsplash.com/photo-1557683316-973673baf926?w=900')}
          />
          <Button
            label="Add comment"
            variant="ghost"
            size="sm"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
