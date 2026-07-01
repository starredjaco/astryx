// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const EMOJI_OPTIONS = ['📄', '📝', '📌', '🎯', '🚀', '💡', '📊', '🎨', '🔧', '📦', '🌟', '🏠', '📁', '🗂️', '📋', '✨'];

export default function NotionPageHeader({
  initialTitle = 'Untitled',
  initialIcon = '📄',
  initialCoverUrl = '',
}: {initialTitle?: string; initialIcon?: string; initialCoverUrl?: string}) {
  const [title, setTitle] = useState(initialTitle);
  const [icon, setIcon] = useState(initialIcon);
  const [coverUrl, setCoverUrl] = useState(initialCoverUrl);
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div style={{maxWidth: 900, margin: '0 auto'}}>
      {coverUrl ? (
        <img src={coverUrl} alt="Page cover" style={{width: '100%', height: 200, objectFit: 'cover', borderRadius: 8}} />
      ) : (
        <div style={{width: '100%', height: 200, backgroundColor: '#f0f0f0', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'}}>
          Add a cover image
        </div>
      )}
      <div style={{position: 'relative', marginTop: -40, padding: '0 24px'}}>
        <button
          onClick={() => setShowPicker(!showPicker)}
          style={{width: 72, height: 72, fontSize: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', borderRadius: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer', border: 'none'}}
          aria-label="Change page icon"
        >
          {icon}
        </button>
        {showPicker && (
          <div style={{position: 'absolute', top: 80, left: 24, backgroundColor: '#fff', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.15)', padding: 8, zIndex: 10}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 4}}>
              {EMOJI_OPTIONS.map(emoji => (
                <button
                  key={emoji}
                  onClick={() => { setIcon(emoji); setShowPicker(false); }}
                  style={{fontSize: 24, padding: 4, cursor: 'pointer', border: 'none', backgroundColor: 'transparent', borderRadius: 4}}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        )}
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Untitled"
          style={{fontSize: 32, fontWeight: 700, border: 'none', outline: 'none', width: '100%', padding: '8px 0', backgroundColor: 'transparent'}}
          aria-label="Page title"
        />
        <div style={{display: 'flex', gap: 8, marginTop: 8, opacity: 0.6}}>
          <button onClick={() => setCoverUrl('https://images.unsplash.com/photo-1557683316-973673baf926?w=900')} style={{padding: '4px 8px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: 14, color: '#666'}}>
            Add cover
          </button>
          <button style={{padding: '4px 8px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: 14, color: '#666'}}>
            Add comment
          </button>
        </div>
      </div>
    </div>
  );
}
