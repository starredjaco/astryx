// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function MetricsDashboardCard() {
  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 20, background: 'white', maxWidth: 280}}>
      <p style={{margin: 0, fontSize: 13, color: '#6b7280'}}>Total Revenue</p>
      <p style={{margin: '4px 0', fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em'}}>$12,340.56</p>
      <p style={{margin: 0, fontSize: 13, color: '#16a34a'}}>+12% from last month</p>
    </div>
  );
}
