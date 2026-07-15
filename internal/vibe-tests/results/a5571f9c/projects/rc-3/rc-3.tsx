// Copyright (c) Meta Platforms, Inc. and affiliates.

type CardData = {title: string; description: string};

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
    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24, padding: 16}}>
      {cards.map(card => (
        <div key={card.title} style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 20, background: 'white'}}>
          <h3 style={{margin: '0 0 8px', fontSize: 16, fontWeight: 600}}>{card.title}</h3>
          <p style={{margin: 0, color: '#6b7280', fontSize: 14, lineHeight: 1.5}}>{card.description}</p>
        </div>
      ))}
    </div>
  );
}
