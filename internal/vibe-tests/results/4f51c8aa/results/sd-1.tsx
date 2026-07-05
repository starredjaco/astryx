// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';

type WidgetState = 'loading' | 'error' | 'data';
type DashboardData = { revenue: number; orders: number; conversion: number };

export default function DashboardWidget() {
  const [state, setState] = useState<WidgetState>('loading');
  const [data, setData] = useState<DashboardData | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = async () => {
    setState('loading');
    try {
      const response = await fetch('/api/dashboard/metrics');
      if (!response.ok) {throw new Error('Failed to load metrics');}
      const result = await response.json();
      setData(result);
      setState('data');
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Unknown error');
      setState('error');
    }
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 8, padding: 24, maxWidth: 400}}>
      <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 16}}>Revenue Overview</h3>

      {state === 'loading' && (
        <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
          <div style={{height: 40, width: '60%', backgroundColor: '#f3f4f6', borderRadius: 4, animation: 'pulse 2s infinite'}} />
          <div style={{height: 20, width: '80%', backgroundColor: '#f3f4f6', borderRadius: 4, animation: 'pulse 2s infinite'}} />
          <div style={{height: 20, width: '40%', backgroundColor: '#f3f4f6', borderRadius: 4, animation: 'pulse 2s infinite'}} />
        </div>
      )}

      {state === 'error' && (
        <div>
          <p style={{color: '#dc2626', marginBottom: 8}}>{errorMessage}</p>
          <button onClick={fetchData} style={{padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer'}}>Retry</button>
        </div>
      )}

      {state === 'data' && data && (
        <div>
          <div style={{fontSize: 36, fontWeight: 700, marginBottom: 16}}>${data.revenue.toLocaleString()}</div>
          <div style={{display: 'flex', gap: 24}}>
            <div><p style={{fontSize: 14, color: '#6b7280'}}>Orders</p><p style={{fontWeight: 600}}>{data.orders}</p></div>
            <div><p style={{fontSize: 14, color: '#6b7280'}}>Conversion</p><p style={{fontWeight: 600}}>{data.conversion}%</p></div>
          </div>
        </div>
      )}
    </div>
  );
}
