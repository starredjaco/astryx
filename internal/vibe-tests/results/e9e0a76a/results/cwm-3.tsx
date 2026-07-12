// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

const ICONS = ['\u{1F4DD}', '\u{1F680}', '\u{1F4A1}', '\u{2B50}', '\u{1F3AF}', '\u{1F4DA}', '\u{1F525}', '\u{1F30D}', '\u{2705}', '\u{1F389}', '\u{1F4CA}', '\u{1F3C6}'];

export default function NotionPageHeader() {
  const [selectedIcon, setSelectedIcon] = useState('\u{1F4DD}');
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div style={{maxWidth: 800, margin: '0 auto'}}>
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=200&fit=crop"
        alt="Page cover"
        style={{width: '100%', height: 200, objectFit: 'cover', borderRadius: 8}}
      />
      <div style={{display: 'flex', alignItems: 'center', gap: 12, padding: 16}}>
        <div style={{position: 'relative'}}>
          <button onClick={() => setShowPicker(!showPicker)} style={{fontSize: 48, background: 'none', border: 'none', cursor: 'pointer'}}>
            {selectedIcon}
          </button>
          {showPicker && (
            <div style={{position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #ddd', borderRadius: 8, padding: 8, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4, zIndex: 10}}>
              {ICONS.map((icon) => (
                <button key={icon} onClick={() => { setSelectedIcon(icon); setShowPicker(false); }} style={{fontSize: 24, background: 'none', border: 'none', cursor: 'pointer', padding: 4}}>
                  {icon}
                </button>
              ))}
            </div>
          )}
        </div>
        <h1 style={{margin: 0, fontSize: 32}}>My Page Title</h1>
      </div>
      <p style={{color: '#666', fontSize: 14, padding: '0 16px'}}>Start writing here...</p>
    </div>
  );
}
