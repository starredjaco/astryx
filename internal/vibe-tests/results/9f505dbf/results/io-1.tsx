// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{type: 'error' | 'success'; message: string} | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({type: 'error', message: 'Please enter a valid email.'});
      return;
    }
    setIsSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch('/api/subscribe', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({email})});
      if (!res.ok) {throw new Error('Failed');}
      setStatus({type: 'success', message: 'Subscribed!'});
      setEmail('');
    } catch {
      setStatus({type: 'error', message: 'Something went wrong.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{maxWidth: 400, margin: '0 auto', border: '1px solid #ddd', borderRadius: 8, padding: 24}}>
      <h2 style={{marginTop: 0}}>Subscribe</h2>
      <p style={{color: '#666'}}>Get the latest updates.</p>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: 12}}>
        <label>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com"
            style={{display: 'block', width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4, marginTop: 4, boxSizing: 'border-box'}} />
        </label>
        {status && (
          <p style={{padding: 8, borderRadius: 4, background: status.type === 'error' ? '#fdecea' : '#e8f5e9', color: status.type === 'error' ? '#d32f2f' : '#2e7d32', margin: 0}}>
            {status.message}
          </p>
        )}
        <button type="submit" disabled={isSubmitting} style={{padding: '8px 16px', background: '#0066cc', color: '#fff', border: 'none', borderRadius: 4, cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.7 : 1}}>
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}
