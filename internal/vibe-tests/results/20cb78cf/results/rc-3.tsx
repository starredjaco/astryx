// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Grid} from '@astryxdesign/core/Layout';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Text';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    padding: 24,
  },
});

const items = [
  {title: 'Design System', description: 'Build consistent UIs with reusable components and tokens.'},
  {title: 'Documentation', description: 'Comprehensive guides and API references for every component.'},
  {title: 'Accessibility', description: 'WCAG 2.1 AA compliant with full keyboard and screen reader support.'},
  {title: 'Theming', description: 'Customize colors, typography, and spacing with a single theme object.'},
  {title: 'Performance', description: 'Tree-shakeable, zero-runtime CSS with StyleX.'},
  {title: 'TypeScript', description: 'Full type safety with detailed prop interfaces.'},
];

export default function ResponsiveCards() {
  return (
    <div {...stylex.props(styles.container)}>
      <Grid columns={{minWidth: 280}} gap={4}>
        {items.map((item) => (
          <Card key={item.title} padding={4}>
            <Heading level={3}>{item.title}</Heading>
            <Text color="secondary">{item.description}</Text>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
