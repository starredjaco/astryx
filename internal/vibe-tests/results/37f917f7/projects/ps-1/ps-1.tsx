// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';

const navItems = ['General', 'Account', 'Notifications', 'Security', 'Integrations'];

export default function SettingsDashboard() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'system-ui'}}>
      <header style={{padding: '12px 24px', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center'}}>
        <h1 style={{margin: 0, fontSize: 20}}>Settings</h1>
      </header>
      <div style={{display: 'flex', flex: 1}}>
        <aside style={{width: 240, borderRight: '1px solid #e5e7eb', padding: 16}}>
          <nav>
            {navItems.map((item, i) => (
              <div key={item} style={{padding: '8px 12px', borderRadius: 6, marginBottom: 2, cursor: 'pointer', background: i === 0 ? '#f3f4f6' : 'transparent', fontWeight: i === 0 ? 600 : 400}}>
                {item}
              </div>
            ))}
          </nav>
        </aside>
        <main style={{flex: 1, padding: 24}}>
          <h2 style={{marginTop: 0}}>General Settings</h2>
          <p style={{color: '#6b7280'}}>Configure your application preferences here.</p>
        </main>
      </div>
    </div>
  );
}
