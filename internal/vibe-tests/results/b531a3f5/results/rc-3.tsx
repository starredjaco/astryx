// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

const items = [
  {title: 'Design System', description: 'Reusable components and tokens.'},
  {title: 'Documentation', description: 'Guides and API references.'},
  {title: 'Accessibility', description: 'WCAG 2.1 AA compliant.'},
  {title: 'Theming', description: 'Customizable via theme config.'},
  {title: 'Performance', description: 'Optimized bundle size.'},
  {title: 'TypeScript', description: 'Full type safety.'},
];

export default function ResponsiveCards() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Card key={item.title}>
            <CardHeader><CardTitle>{item.title}</CardTitle></CardHeader>
            <CardContent><p className="text-muted-foreground">{item.description}</p></CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
