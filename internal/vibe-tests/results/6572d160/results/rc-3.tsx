// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Text';

const items = [
  {title: 'Design System', description: 'Reusable components and tokens.'},
  {title: 'Documentation', description: 'Guides and API references.'},
  {title: 'Accessibility', description: 'WCAG 2.1 AA compliant.'},
  {title: 'Theming', description: 'Customizable via theme objects.'},
  {title: 'Performance', description: 'Zero-runtime CSS with StyleX.'},
  {title: 'TypeScript', description: 'Full type safety.'},
];

export default function ResponsiveCards() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Card key={item.title} padding={4}>
            <Heading level={3}>{item.title}</Heading>
            <Text color="secondary">{item.description}</Text>
          </Card>
        ))}
      </div>
    </div>
  );
}
