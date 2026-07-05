// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const ICONS = ['\u{1F4DD}', '\u{1F680}', '\u{1F4A1}', '\u{1F3AF}', '\u{1F4DA}', '\u{2728}', '\u{1F30D}', '\u{1F3A8}', '\u{1F4CA}', '\u{1F527}', '\u{2764}\u{FE0F}', '\u{1F31F}'];
const COVERS = ['/covers/gradient-blue.jpg', '/covers/gradient-purple.jpg', '/covers/nature.jpg', '/covers/abstract.jpg'];

export default function NotionPageHeader() {
  const [icon, setIcon] = useState('\u{1F4DD}');
  const [coverUrl, setCoverUrl] = useState<string | null>(null);
  const [showIconPicker, setShowIconPicker] = useState(false);

  return (
    <div style={{maxWidth: 800, margin: '0 auto'}}>
      {coverUrl ? (
        <div style={{position: 'relative'}}>
          <img src={coverUrl} alt="Page cover" style={{width: '100%', height: 280, objectFit: 'cover'}} />
          <button onClick={() => setCoverUrl(COVERS[Math.floor(Math.random() * COVERS.length)])} style={{position: 'absolute', top: 12, right: 12, padding: '6px 12px', backgroundColor: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: 4, cursor: 'pointer'}}>Change cover</button>
        </div>
      ) : (
        <div style={{width: '100%', height: 280, backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <button onClick={() => setCoverUrl(COVERS[0])} style={{padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer', backgroundColor: 'white'}}>Add cover</button>
        </div>
      )}

      <div style={{padding: '24px 24px 0'}}>
        <div style={{position: 'relative', display: 'inline-block'}}>
          <button onClick={() => setShowIconPicker(!showIconPicker)} style={{fontSize: 64, background: 'none', border: 'none', cursor: 'pointer'}} aria-label="Change page icon">{icon}</button>
          {showIconPicker && (
            <div style={{position: 'absolute', top: '100%', left: 0, backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: 8, padding: 16, zIndex: 10, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 4, width: 280}}>
              {ICONS.map((emoji) => (
                <button key={emoji} onClick={() => { setIcon(emoji); setShowIconPicker(false); }} style={{fontSize: 24, padding: 8, border: 'none', background: 'none', cursor: 'pointer', borderRadius: 4}} aria-label={`Select icon ${emoji}`}>{emoji}</button>
              ))}
            </div>
          )}
        </div>
        <h1 style={{fontSize: 40, fontWeight: 700, margin: '8px 0'}}>Untitled</h1>
        <p style={{color: '#9ca3af'}}>Start writing or press / for commands</p>
      </div>
    </div>
  );
}
