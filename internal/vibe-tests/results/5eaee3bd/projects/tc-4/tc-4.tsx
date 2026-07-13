// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const themes = [
  {name: 'Default', bg: '#ffffff', text: '#1a1a1a', accent: '#0066cc'},
  {name: 'Midnight', bg: '#1a1a2e', text: '#ffffff', accent: '#7c3aed'},
  {name: 'Forest', bg: '#f0fdf4', text: '#14532d', accent: '#059669'},
];

export default function ThemeSwitcher() {
  const [active, setActive] = useState(themes[0]);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 16, padding: 24, minHeight: '100vh', background: active.bg, color: active.text, transition: 'all 0.3s'}}>
      <h2 style={{margin: 0, fontSize: 24, fontWeight: 700}}>Theme Switcher</h2>
      <div style={{display: 'flex', gap: 8}}>
        {themes.map(t => (
          <button
            key={t.name}
            onClick={() => setActive(t)}
            style={{
              padding: '8px 16px',
              background: t.name === active.name ? active.accent : 'transparent',
              color: t.name === active.name ? '#fff' : active.text,
              border: `1px solid ${active.accent}`,
              borderRadius: 6,
              cursor: 'pointer',
            }}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div style={{border: `1px solid ${active.accent}30`, borderRadius: 12, padding: 24}}>
        <h3 style={{margin: '0 0 8px'}}>Preview</h3>
        <p style={{margin: '0 0 16px'}}>This content is rendered with the {active.name} theme applied.</p>
        <button style={{padding: '8px 16px', background: active.accent, color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Sample Action</button>
      </div>
    </div>
  );
}
