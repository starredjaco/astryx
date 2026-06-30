// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  const bg = dark ? '#1a1a2e' : '#ffffff';
  const text = dark ? '#e5e5e5' : '#1a1a1a';
  const accent = dark ? '#4da6ff' : '#2563eb';

  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: bg, transition: 'background-color 0.3s', fontFamily: 'system-ui'}}>
      <div style={{border: `1px solid ${dark ? '#333' : '#e5e7eb'}`, borderRadius: 12, padding: 32, textAlign: 'center', maxWidth: 320}}>
        <h2 style={{fontSize: 20, fontWeight: 600, color: text, marginBottom: 8}}>Theme Demo</h2>
        <p style={{fontSize: 14, color: dark ? '#aaa' : '#6b7280', marginBottom: 24}}>Toggle between light and dark.</p>
        <button onClick={() => setDark(d => !d)} style={{padding: '10px 20px', backgroundColor: accent, color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer'}}>
          Switch to {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </div>
  );
}