// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

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
          <Card key={item.title}>
            <CardHeader><CardTitle>{item.title}</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">{item.description}</p></CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
