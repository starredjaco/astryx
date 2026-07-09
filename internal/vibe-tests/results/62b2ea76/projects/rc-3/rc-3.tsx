// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Stack} from '@astryxdesign/core/Stack';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    padding: 24,
  },
});

const ITEMS = [
  {title: 'Analytics', description: 'Track usage and performance metrics across your application.'},
  {title: 'Security', description: 'Manage access control, permissions, and audit logs.'},
  {title: 'Integrations', description: 'Connect third-party services and APIs to your workflow.'},
  {title: 'Billing', description: 'View invoices, update payment methods, and manage subscriptions.'},
];

export default function ResponsiveCards() {
  return (
    <div {...stylex.props(styles.container)}>
      <Grid columns={{default: 1, sm: 2, lg: 4}} gap={4}>
        {ITEMS.map(item => (
          <Card key={item.title} padding={4}>
            <Stack gap={2}>
              <Heading level={3}>{item.title}</Heading>
              <Text type="supporting">{item.description}</Text>
            </Stack>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
