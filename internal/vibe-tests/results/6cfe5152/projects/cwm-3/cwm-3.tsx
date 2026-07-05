// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {HStack} from '@astryxdesign/core/Stack';
import {VStack} from '@astryxdesign/core/Stack';
import {Popover} from '@astryxdesign/core/Popover';
import {Grid} from '@astryxdesign/core/Grid';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    maxWidth: 800,
    margin: '0 auto',
  },
  coverImage: {
    width: '100%',
    height: 280,
    objectFit: 'cover',
    borderRadius: 0,
  },
  coverPlaceholder: {
    width: '100%',
    height: 280,
    backgroundColor: 'var(--color-background-muted)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerArea: {
    padding: 24,
    position: 'relative',
  },
  iconDisplay: {
    fontSize: 64,
    marginBottom: 8,
    cursor: 'pointer',
  },
  iconOption: {
    fontSize: 32,
    cursor: 'pointer',
    padding: 8,
    borderRadius: 8,
  },
});

const ICONS = ['\u{1F4DD}', '\u{1F680}', '\u{1F4A1}', '\u{1F3AF}', '\u{1F4DA}', '\u{2728}', '\u{1F30D}', '\u{1F3A8}', '\u{1F4CA}', '\u{1F527}', '\u{2764}\u{FE0F}', '\u{1F31F}'];
const COVERS = [
  '/covers/gradient-blue.jpg',
  '/covers/gradient-purple.jpg',
  '/covers/nature.jpg',
  '/covers/abstract.jpg',
];

export default function NotionPageHeader() {
  const [icon, setIcon] = useState('\u{1F4DD}');
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);
  const [title, setTitle] = useState('Untitled');

  return (
    <div {...stylex.props(styles.container)}>
      {coverUrl ? (
        <div style={{position: 'relative'}}>
          <img src={coverUrl} alt="Page cover" {...stylex.props(styles.coverImage)} />
          <div style={{position: 'absolute', top: 12, right: 12}}>
            <Button label="Change cover" variant="ghost" onClick={() => setCoverUrl(COVERS[Math.floor(Math.random() * COVERS.length)])} />
          </div>
        </div>
      ) : (
        <div {...stylex.props(styles.coverPlaceholder)}>
          <Button label="Add cover" variant="ghost" onClick={() => setCoverUrl(COVERS[0])} />
        </div>
      )}

      <div {...stylex.props(styles.headerArea)}>
        <VStack gap={2}>
          <Popover
            isOpen={isIconPickerOpen}
            onOpenChange={setIsIconPickerOpen}
            trigger={
              <button
                {...stylex.props(styles.iconDisplay)}
                onClick={() => setIsIconPickerOpen(true)}
                aria-label="Change page icon"
              >
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
                      {...stylex.props(styles.iconOption)}
                      onClick={() => {
                        setIcon(emoji);
                        setIsIconPickerOpen(false);
                      }}
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

          <Heading level={1}>{title}</Heading>
          <Text type="supporting">Start writing or press / for commands</Text>
        </VStack>
      </div>
    </div>
  );
}
