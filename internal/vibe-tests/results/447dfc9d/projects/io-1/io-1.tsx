// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';

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
    <div className="flex flex-col gap-4 p-6 max-w-sm">
      <h2 className="text-2xl font-bold">Subscribe to our newsletter</h2>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
      <Button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Subscribing...' : 'Subscribe'}
      </Button>
      {success && <p className="text-sm text-green-600">{success}</p>}
    </div>
  );
}
