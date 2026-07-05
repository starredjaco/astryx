// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

export default function ThemeSettings() {
  const [accentColor, setAccentColor] = useState('#0066FF');
  const [borderRadius, setBorderRadius] = useState(8);
  const [spacingScale, setSpacingScale] = useState(4);

  const labelStyle = {display: 'block', fontSize: 14, fontWeight: 500 as const, marginBottom: 4};
  const inputStyle = {width: '100%', padding: '8px 12px', border: '1px solid #ccc', borderRadius: 4, fontSize: 14};

  return (
    <div style={{padding: 24, maxWidth: 600}}>
      <h1 style={{fontSize: 28, fontWeight: 700, marginBottom: 8}}>Appearance Settings</h1>
      <p style={{color: '#6b7280', marginBottom: 24}}>Customize how the app looks.</p>

      <div style={{border: '1px solid #e5e7eb', borderRadius: 8, padding: 24, marginBottom: 24}}>
        <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 16}}>Theme Controls</h3>
        <div style={{marginBottom: 16}}>
          <label style={labelStyle}>Accent Color</label>
          <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
            <input style={{...inputStyle, maxWidth: 200}} value={accentColor} onChange={(e) => setAccentColor(e.target.value)} />
            <div style={{width: 32, height: 32, borderRadius: 4, backgroundColor: accentColor, border: '1px solid #ccc'}} />
          </div>
        </div>
        <div style={{marginBottom: 16}}>
          <label style={labelStyle}>Border Radius: {borderRadius}px</label>
          <input type="range" min={0} max={24} step={2} value={borderRadius} onChange={(e) => setBorderRadius(Number(e.target.value))} style={{width: '100%'}} />
        </div>
        <div style={{marginBottom: 16}}>
          <label style={labelStyle}>Spacing Scale: {spacingScale}px base</label>
          <input type="range" min={2} max={8} step={1} value={spacingScale} onChange={(e) => setSpacingScale(Number(e.target.value))} style={{width: '100%'}} />
        </div>
        <button onClick={() => { setAccentColor('#0066FF'); setBorderRadius(8); setSpacingScale(4); }} style={{padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer', backgroundColor: 'white'}}>Reset to defaults</button>
      </div>

      <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Preview</h3>
      <div style={{border: '1px solid #e5e7eb', borderRadius: borderRadius, padding: spacingScale * 4}}>
        <h4 style={{fontWeight: 600, marginBottom: 8}}>Preview Card</h4>
        <p style={{color: '#6b7280', marginBottom: 12}}>This card reflects your settings.</p>
        <div style={{display: 'flex', gap: 8}}>
          <button style={{padding: '8px 16px', backgroundColor: accentColor, color: 'white', border: 'none', borderRadius: borderRadius / 2, cursor: 'pointer'}}>Primary Action</button>
          <button style={{padding: '8px 16px', backgroundColor: '#f3f4f6', border: '1px solid #ccc', borderRadius: borderRadius / 2, cursor: 'pointer'}}>Secondary</button>
        </div>
      </div>
    </div>
  );
}
