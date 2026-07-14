// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

export default function ConfirmDeleteDialog() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {return null;}

  return (
    <div style={{position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50}}>
      <div style={{position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)'}} onClick={() => setIsOpen(false)} />
      <div style={{position: 'relative', backgroundColor: 'white', borderRadius: 8, padding: 24, maxWidth: 400, width: '100%', boxShadow: '0 4px 24px rgba(0,0,0,0.15)'}}>
        <h2 style={{margin: '0 0 8px', fontSize: 18, fontWeight: 600}}>Delete Item</h2>
        <p style={{margin: '0 0 24px', color: '#666'}}>
          Are you sure you want to delete this item? This action cannot be undone.
        </p>
        <div style={{display: 'flex', gap: 8, justifyContent: 'flex-end'}}>
          <button onClick={() => setIsOpen(false)} style={{padding: '8px 16px', border: '1px solid #ddd', borderRadius: 6, backgroundColor: 'white', cursor: 'pointer'}}>
            Cancel
          </button>
          <button onClick={() => setIsOpen(false)} style={{padding: '8px 16px', border: 'none', borderRadius: 6, backgroundColor: '#dc2626', color: 'white', cursor: 'pointer'}}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
