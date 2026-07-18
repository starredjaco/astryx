// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '../components/ui/card';

const ITEMS = [
  {id: 1, title: 'Analytics', description: 'Track user behavior and conversion metrics'},
  {id: 2, title: 'Automation', description: 'Set up workflows that run on autopilot'},
  {id: 3, title: 'Integration', description: 'Connect with your favorite tools'},
  {id: 4, title: 'Security', description: 'Enterprise-grade protection'},
  {id: 5, title: 'Support', description: '24/7 help from our team'},
  {id: 6, title: 'Scaling', description: 'Infrastructure that grows with you'},
];

export default function ResponsiveCards() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ITEMS.map(item => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
