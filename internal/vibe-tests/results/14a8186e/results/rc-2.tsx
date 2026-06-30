// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

const navItems = ['Dashboard', 'Projects', 'Settings'];

export default function ResponsiveSidebar() {
  const [active, setActive] = useState('Dashboard');

  return (
    <div style={{display: 'flex', minHeight: '100vh', fontFamily: 'system-ui'}}>
      <aside style={{width: 240, borderRight: '1px solid #e5e7eb', padding: 16}}>
        <nav>
          {navItems.map(item => (
            <button key={item} onClick={() => setActive(item)} style={{display: 'block', width: '100%', textAlign: 'left', padding: '8px 12px', marginBottom: 4, borderRadius: 6, border: 'none', backgroundColor: active === item ? '#2563eb' : 'transparent', color: active === item ? '#fff' : '#374151', cursor: 'pointer'}}>
              {item}
            </button>
          ))}
        </nav>
      </aside>
      <main style={{flex: 1, padding: 24}}>
        <h1 style={{fontSize: 24, fontWeight: 700}}>{active}</h1>
        <p style={{color: '#6b7280', marginTop: 8}}>Sidebar with navigation.</p>
      </main>
    </div>
  );
}