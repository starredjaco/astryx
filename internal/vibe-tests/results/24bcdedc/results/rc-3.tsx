// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading, Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';

const ITEMS = [
  {id: 1, title: 'Analytics', description: 'Track user behavior and conversion metrics'},
  {id: 2, title: 'Automation', description: 'Set up workflows that run on autopilot'},
  {id: 3, title: 'Integration', description: 'Connect with your favorite tools'},
  {id: 4, title: 'Security', description: 'Enterprise-grade protection for your data'},
  {id: 5, title: 'Support', description: '24/7 help from our expert team'},
  {id: 6, title: 'Scaling', description: 'Infrastructure that grows with you'},
];

export default function ResponsiveCards() {
  return (
    <VStack gap="lg">
      <Heading level={2}>Features</Heading>
      <Grid columns={{base: 1, sm: 2, lg: 3}} gap="md">
        {ITEMS.map(item => (
          <Card key={item.id}>
            <VStack gap="sm">
              <Heading level={3}>{item.title}</Heading>
              <Text>{item.description}</Text>
            </VStack>
          </Card>
        ))}
      </Grid>
    </VStack>
  );
}
