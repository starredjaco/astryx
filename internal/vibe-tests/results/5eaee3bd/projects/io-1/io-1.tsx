// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validate = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async () => {
    setError('');
    setSuccess('');
    if (!validate(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
      });
      if (!res.ok) {throw new Error('Failed');}
      setSuccess('Subscribed successfully!');
      setEmail('');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 16, padding: 24, maxWidth: 360}}>
      <h2 style={{margin: 0, fontSize: 24, fontWeight: 700}}>Subscribe to our newsletter</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
        <label htmlFor="email" style={{fontWeight: 500}}>Email address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={{padding: '8px 12px', border: `1px solid ${error ? '#ef4444' : '#ccc'}`, borderRadius: 6}}
        />
        {error && <p style={{margin: 0, color: '#ef4444', fontSize: 14}}>{error}</p>}
      </div>
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        style={{padding: '10px 20px', background: '#0066cc', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', opacity: isLoading ? 0.7 : 1}}
      >
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </button>
      {success && <p style={{margin: 0, color: '#16a34a', fontSize: 14}}>{success}</p>}
    </div>
  );
}
