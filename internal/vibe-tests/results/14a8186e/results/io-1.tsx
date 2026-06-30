// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email');
      return;
    }
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/subscribe', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({email})});
      if (!res.ok) {throw new Error();}
      setStatus('success');
    } catch {
      setStatus('error');
      setError('Failed. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{maxWidth: 360, padding: 24, fontFamily: 'system-ui'}}>
      <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Subscribe</h2>
      {status === 'success' && <p style={{color: '#16a34a', fontSize: 14, marginBottom: 12}}>Subscribed!</p>}
      <div style={{marginBottom: 12}}>
        <label style={{display: 'block', fontSize: 14, fontWeight: 500, marginBottom: 4}}>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" style={{width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6}} />
        {error && <p style={{color: '#dc2626', fontSize: 12, marginTop: 4}}>{error}</p>}
      </div>
      <button type="submit" disabled={status === 'loading'} style={{padding: '10px 20px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', opacity: status === 'loading' ? 0.7 : 1}}>
        {status === 'loading' ? 'Sending...' : 'Subscribe'}
      </button>
    </form>
  );
}