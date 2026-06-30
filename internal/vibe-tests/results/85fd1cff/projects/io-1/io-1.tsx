// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Input} from '../components/ui/input';
import {Button} from '../components/ui/button';
import {Label} from '../components/ui/label';

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
      setEmail('');
    } catch {
      setStatus('error');
      setError('Failed. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
      <h2 className="text-xl font-semibold">Subscribe</h2>
      {status === 'success' && <p className="text-green-600 text-sm">Subscribed!</p>}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
      <Button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending...' : 'Subscribe'}</Button>
    </form>
  );
}