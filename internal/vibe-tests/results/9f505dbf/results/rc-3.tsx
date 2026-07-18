// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';

const ITEMS = [
  {id: 1, title: 'Analytics', description: 'Track user behavior'},
  {id: 2, title: 'Automation', description: 'Run workflows on autopilot'},
  {id: 3, title: 'Integration', description: 'Connect tools'},
  {id: 4, title: 'Security', description: 'Enterprise-grade protection'},
  {id: 5, title: 'Support', description: '24/7 expert help'},
  {id: 6, title: 'Scaling', description: 'Grows with you'},
];

const styles = {
  container: {display: 'flex', flexDirection: 'column' as const, gap: 24},
  grid: {display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16},
  card: {border: '1px solid #ddd', borderRadius: 8, padding: 20},
};

export default function ResponsiveCards() {
  return (
    <div style={styles.container}>
      <h2>Features</h2>
      <div style={styles.grid}>
        {ITEMS.map(item => (
          <div key={item.id} style={styles.card}>
            <h3 style={{margin: '0 0 8px'}}>{item.title}</h3>
            <p style={{color: '#666', margin: 0}}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
