// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

const NAV_ITEMS = ['General', 'Account', 'Notifications', 'Security'];

export default function SettingsDashboard() {
  const [activeSection, setActiveSection] = useState('General');

  return (
    <div style={{display: 'flex', height: '100vh'}}>
      <aside style={{width: 240, borderRight: '1px solid #e0e0e0', padding: 16}}>
        <h2 style={{fontSize: 18, fontWeight: 700, marginBottom: 16}}>Settings</h2>
        <nav style={{display: 'flex', flexDirection: 'column', gap: 4}}>
          {NAV_ITEMS.map((item) => (
            <button key={item} onClick={() => setActiveSection(item)} style={{padding: '8px 12px', textAlign: 'left', border: 'none', borderRadius: 6, background: activeSection === item ? '#f0f0f0' : 'transparent', cursor: 'pointer', fontWeight: activeSection === item ? 600 : 400}}>
              {item}
            </button>
          ))}
        </nav>
      </aside>
      <main style={{flex: 1, padding: 32}}>
        <header style={{borderBottom: '1px solid #e0e0e0', paddingBottom: 16, marginBottom: 24}}>
          <h1 style={{margin: 0, fontSize: 28}}>Settings</h1>
        </header>
        <h2 style={{fontSize: 20, marginBottom: 8}}>{activeSection}</h2>
        <p style={{color: '#666'}}>Configure your {activeSection.toLowerCase()} settings here.</p>
      </main>
    </div>
  );
}
