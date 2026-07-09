// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';

const ITEMS = [
  {title: 'Analytics', description: 'Track usage and performance metrics.'},
  {title: 'Security', description: 'Manage access control and permissions.'},
  {title: 'Integrations', description: 'Connect third-party services.'},
  {title: 'Billing', description: 'View invoices and manage subscriptions.'},
];

export default function ResponsiveCards() {
  return (
    <div style={{padding: 24, fontFamily: 'system-ui'}}>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 16}}>
        {ITEMS.map(item => (
          <div key={item.title} style={{padding: 20, border: '1px solid #e5e7eb', borderRadius: 8}}>
            <h3 style={{margin: '0 0 8px 0'}}>{item.title}</h3>
            <p style={{margin: 0, color: '#6b7280', fontSize: 14}}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
