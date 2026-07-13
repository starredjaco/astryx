// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';

type State = 'loading' | 'error' | 'success';

export default function DashboardWidget() {
  const [state, setState] = useState<State>('loading');

  useEffect(() => {
    const timer = setTimeout(() => setState('success'), 2000);
    return () => clearTimeout(timer);
  }, []);

  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    padding: 24,
    width: 340,
  };

  const skeletonStyle = (width: string, height: number) => ({
    width,
    height,
    background: '#e0e0e0',
    borderRadius: 4,
    animation: 'pulse 1.5s infinite',
  });

  return (
    <div style={cardStyle}>
      {state === 'loading' && (
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <div style={skeletonStyle('60%', 24)} />
          <div style={skeletonStyle('100%', 16)} />
          <div style={skeletonStyle('80%', 16)} />
        </div>
      )}
      {state === 'error' && (
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <h3 style={{margin: 0}}>Error</h3>
          <p style={{margin: 0, color: '#666'}}>Failed to load data. Please try again.</p>
          <button onClick={() => setState('loading')} style={{padding: '8px 16px', border: '1px solid #ccc', borderRadius: 6, cursor: 'pointer', background: 'white'}}>Retry</button>
        </div>
      )}
      {state === 'success' && (
        <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
          <h3 style={{margin: 0}}>Revenue</h3>
          <p style={{fontSize: 32, fontWeight: 700, margin: 0}}>$12,450</p>
          <p style={{margin: 0, color: '#666', fontSize: 14}}>+8.2% from last month</p>
        </div>
      )}
    </div>
  );
}
