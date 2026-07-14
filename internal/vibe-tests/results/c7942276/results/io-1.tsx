// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = async () => {
    setError(''); setSuccess('');
    if (!validateEmail(email)) { setError('Please enter a valid email address'); return; }
    setIsLoading(true);
    try {
      const res = await fetch('/api/subscribe', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({email})});
      if (res.ok) { setSuccess('Subscribed!'); setEmail(''); }
      else { setError('Subscription failed.'); }
    } catch { setError('Network error.'); }
    finally { setIsLoading(false); }
  };

  return (
    <div style={{maxWidth: 400, padding: 24}}>
      <h2 style={{fontSize: 20, fontWeight: 600, margin: '0 0 4px'}}>Subscribe to updates</h2>
      <p style={{color: '#666', fontSize: 14, margin: '0 0 16px'}}>Get the latest news delivered to your inbox.</p>
      <div style={{marginBottom: 12}}>
        <label style={{display: 'block', fontSize: 14, marginBottom: 4}}>Email address</label>
        <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)}
          style={{width: '100%', padding: '8px 12px', border: `1px solid ${error ? '#dc2626' : '#ddd'}`, borderRadius: 6}} />
        {error && <p style={{fontSize: 12, color: '#dc2626', margin: '4px 0 0'}}>{error}</p>}
        {success && <p style={{fontSize: 12, color: '#16a34a', margin: '4px 0 0'}}>{success}</p>}
      </div>
      <button onClick={handleSubmit} disabled={isLoading} style={{width: '100%', padding: '10px 16px', border: 'none', borderRadius: 6, backgroundColor: '#3b82f6', color: 'white', cursor: 'pointer', fontWeight: 500}}>
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </button>
    </div>
  );
}
