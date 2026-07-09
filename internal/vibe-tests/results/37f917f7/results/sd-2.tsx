// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

export default function SubmitButton() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleClick = async () => {
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: 24, fontFamily: 'system-ui'}}>
      <button
        onClick={handleClick}
        disabled={status !== 'idle'}
        style={{padding: '10px 24px', border: 'none', borderRadius: 6, background: status === 'success' ? '#16a34a' : '#3b82f6', color: '#fff', cursor: status === 'idle' ? 'pointer' : 'default', opacity: status === 'loading' ? 0.7 : 1, display: 'flex', alignItems: 'center', gap: 8}}
      >
        {status === 'loading' && <span style={{width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid #fff', borderRadius: '50%', animation: 'spin 1s linear infinite'}} />}
        {status === 'success' && <span>✓</span>}
        {status === 'success' ? 'Submitted!' : 'Submit'}
      </button>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
