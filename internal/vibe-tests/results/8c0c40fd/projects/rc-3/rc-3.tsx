// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';

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
    <div className="flex flex-col gap-6">
      <Heading level={2}>Features</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ITEMS.map(item => (
          <Card key={item.id}>
            <div className="flex flex-col gap-2">
              <Heading level={3}>{item.title}</Heading>
              <Text>{item.description}</Text>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
