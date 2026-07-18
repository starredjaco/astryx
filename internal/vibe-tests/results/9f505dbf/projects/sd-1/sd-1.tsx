// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState, useEffect} from 'react';

type State = 'loading' | 'error' | 'success';

export default function DashboardWidget() {
  const [state, setState] = useState<State>('loading');
  const [data, setData] = useState<{users: number; revenue: string; orders: number} | null>(null);

  const fetchData = () => {
    setState('loading');
    setTimeout(() => {
      if (Math.random() > 0.7) {setState('error');}
      else { setData({users: 1234, revenue: '$45,678', orders: 89}); setState('success'); }
    }, 1500);
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div style={{border: '1px solid #ddd', borderRadius: 8, padding: 24}}>
      <h3 style={{margin: '0 0 16px'}}>Dashboard</h3>
      {state === 'loading' && <p style={{color: '#666'}}>Loading...</p>}
      {state === 'error' && (
        <div>
          <p style={{color: '#d32f2f', padding: 8, background: '#fdecea', borderRadius: 4}}>Failed to load data.</p>
          <button onClick={fetchData} style={{marginTop: 8, padding: '6px 12px', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer'}}>Retry</button>
        </div>
      )}
      {state === 'success' && data && (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, textAlign: 'center'}}>
          <div><p style={{fontSize: 24, fontWeight: 'bold', margin: 0}}>{data.users}</p><p style={{fontSize: 12, color: '#666', margin: 0}}>Users</p></div>
          <div><p style={{fontSize: 24, fontWeight: 'bold', margin: 0}}>{data.revenue}</p><p style={{fontSize: 12, color: '#666', margin: 0}}>Revenue</p></div>
          <div><p style={{fontSize: 24, fontWeight: 'bold', margin: 0}}>{data.orders}</p><p style={{fontSize: 12, color: '#666', margin: 0}}>Orders</p></div>
        </div>
      )}
    </div>
  );
}
