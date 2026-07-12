// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

const themes = [
  {id: 'default', name: 'Default', description: 'Clean and neutral', bg: '#ffffff', text: '#1a1a1a', accent: '#0066cc'},
  {id: 'midnight', name: 'Midnight', description: 'Dark purple tones', bg: '#1a1025', text: '#e8dff5', accent: '#9b59b6'},
  {id: 'earth', name: 'Earth', description: 'Warm brown tones', bg: '#faf5f0', text: '#3d2c1e', accent: '#8b5e3c'},
];

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState('default');

  return (
    <div style={{padding: 24}}>
      <h2 style={{marginBottom: 16}}>Choose a Theme</h2>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16}}>
        {themes.map((theme) => (
          <div key={theme.id} style={{border: activeTheme === theme.id ? `2px solid ${theme.accent}` : '1px solid #e0e0e0', borderRadius: 12, padding: 20}}>
            <h3 style={{margin: '0 0 8px'}}>{theme.name}</h3>
            <div style={{backgroundColor: theme.bg, color: theme.text, padding: 16, borderRadius: 8, marginBottom: 12}}>
              <p style={{fontWeight: 600, margin: '0 0 4px'}}>Preview</p>
              <p style={{margin: 0, fontSize: 14}}>Sample text</p>
            </div>
            <p style={{color: '#666', fontSize: 14, marginBottom: 12}}>{theme.description}</p>
            <button onClick={() => setActiveTheme(theme.id)} style={{padding: '8px 16px', backgroundColor: activeTheme === theme.id ? theme.accent : 'transparent', color: activeTheme === theme.id ? '#fff' : theme.accent, border: `1px solid ${theme.accent}`, borderRadius: 6, cursor: 'pointer'}}>
              {activeTheme === theme.id ? 'Active' : 'Select'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
