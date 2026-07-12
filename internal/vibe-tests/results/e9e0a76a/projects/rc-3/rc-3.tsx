// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';

const items = [
  {title: 'Design System', description: 'Reusable components and tokens.'},
  {title: 'Documentation', description: 'Guides and API references.'},
  {title: 'Accessibility', description: 'WCAG 2.1 AA compliant.'},
  {title: 'Theming', description: 'Customizable via config.'},
  {title: 'Performance', description: 'Optimized bundle size.'},
  {title: 'TypeScript', description: 'Full type safety.'},
];

export default function ResponsiveCards() {
  return (
    <div style={{padding: 24}}>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16}}>
        {items.map((item) => (
          <div key={item.title} style={{padding: 24, border: '1px solid #e0e0e0', borderRadius: 12}}>
            <h3 style={{margin: '0 0 8px'}}>{item.title}</h3>
            <p style={{margin: 0, color: '#666'}}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
