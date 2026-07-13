// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const navItems = ['Dashboard', 'Users', 'Settings', 'Reports'];

export default function AdminPanel() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
      <header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid #e0e0e0'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} style={{padding: 8, background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 18}}>☰</button>
          <h1 style={{margin: 0, fontSize: 20}}>Admin Panel</h1>
        </div>
        <button style={{padding: '6px 12px', background: 'transparent', border: 'none', cursor: 'pointer'}}>Logout</button>
      </header>
      <div style={{display: 'flex', flex: 1, overflow: 'hidden'}}>
        {isSidebarOpen && (
          <aside style={{width: 240, borderRight: '1px solid #e0e0e0', padding: 16, display: 'flex', flexDirection: 'column', gap: 4}}>
            {navItems.map(item => (
              <button key={item} style={{padding: '8px 12px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', borderRadius: 6}}>{item}</button>
            ))}
          </aside>
        )}
        <main style={{flex: 1, padding: 24, overflow: 'auto'}}>
          <h2 style={{margin: '0 0 16px'}}>Dashboard</h2>
          <p style={{color: '#666'}}>Main content area. The sidebar can be toggled with the menu button.</p>
        </main>
      </div>
    </div>
  );
}
