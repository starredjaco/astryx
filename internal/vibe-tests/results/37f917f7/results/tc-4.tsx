// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

const themes = [
  {id: 'default', name: 'Default', desc: 'Clean, neutral palette', bg: '#ffffff', surface: '#f9fafb', text: '#111827', accent: '#3b82f6'},
  {id: 'midnight', name: 'Midnight', desc: 'Dark purple tones', bg: '#1a1a2e', surface: '#16213e', text: '#e0e0e0', accent: '#7c3aed'},
  {id: 'earth', name: 'Earth', desc: 'Warm brown tones', bg: '#f5f0e8', surface: '#ede6d6', text: '#3d2c1e', accent: '#8b5e3c'},
];

export default function ThemeSwitcher() {
  const [active, setActive] = useState('default');
  const current = themes.find(t => t.id === active) || themes[0];

  return (
    <div style={{padding: 24, fontFamily: 'system-ui'}}>
      <h1 style={{marginBottom: 24}}>Theme Switcher</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24}}>
        {themes.map(t => (
          <div key={t.id} style={{padding: 16, border: '1px solid #e5e7eb', borderRadius: 8}}>
            <h3 style={{margin: '0 0 4px'}}>{t.name}</h3>
            <p style={{margin: '0 0 12px', color: '#6b7280', fontSize: 14}}>{t.desc}</p>
            <div style={{height: 32, borderRadius: 4, background: t.bg, border: '1px solid #e5e7eb', marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span style={{width: 12, height: 12, borderRadius: '50%', background: t.accent}} />
            </div>
            <button onClick={() => setActive(t.id)} disabled={active === t.id} style={{width: '100%', padding: '6px 12px', border: '1px solid #d1d5db', borderRadius: 6, background: active === t.id ? '#3b82f6' : '#fff', color: active === t.id ? '#fff' : '#111', cursor: active === t.id ? 'default' : 'pointer'}}>
              {active === t.id ? 'Active' : 'Apply'}
            </button>
          </div>
        ))}
      </div>
      <div style={{padding: 20, borderRadius: 8, background: current.bg, color: current.text, border: '1px solid #e5e7eb'}}>
        <h2 style={{margin: '0 0 8px'}}>Preview</h2>
        <p style={{marginBottom: 12}}>This card uses the {current.name} theme.</p>
        <button style={{padding: '8px 16px', background: current.accent, color: '#fff', border: 'none', borderRadius: 6}}>Sample Button</button>
      </div>
    </div>
  );
}
