// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cards.map(card => (
        <Card key={card.title}>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
