// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

type CardData = {
  title: string;
  description: string;
};

const cards: CardData[] = [
  {title: 'Design System', description: 'A collection of reusable components and guidelines for building consistent UIs.'},
  {title: 'Component Library', description: 'Pre-built React components that follow accessibility and theming best practices.'},
  {title: 'Theme Engine', description: 'Customize colors, typography, and spacing to match your brand identity.'},
  {title: 'CLI Tools', description: 'Command-line utilities for scaffolding projects and generating component docs.'},
  {title: 'Documentation', description: 'Comprehensive guides and API references for every component.'},
  {title: 'Accessibility', description: 'Built-in ARIA support, keyboard navigation, and screen reader compatibility.'},
];

export default function ResponsiveCards() {
  return (
    <Grid columns={{minWidth: 280, max: 3}} gap={4}>
      {cards.map(card => (
        <Card key={card.title} padding={4}>
          <VStack gap={2}>
            <Heading level={3}>{card.title}</Heading>
            <Text type="supporting">{card.description}</Text>
          </VStack>
        </Card>
      ))}
    </Grid>
  );
}
