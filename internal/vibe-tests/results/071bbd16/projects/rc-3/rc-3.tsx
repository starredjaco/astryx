// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';

const ITEMS = [
  {title: 'Analytics', description: 'Track usage and performance metrics.'},
  {title: 'Security', description: 'Manage access control and permissions.'},
  {title: 'Integrations', description: 'Connect third-party services.'},
  {title: 'Billing', description: 'View invoices and manage subscriptions.'},
];

export default function ResponsiveCards() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ITEMS.map(item => (
          <Card key={item.title} padding={4}>
            <div className="space-y-2">
              <Heading level={3}>{item.title}</Heading>
              <Text type="supporting">{item.description}</Text>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
