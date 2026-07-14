// Copyright (c) Meta Platforms, Inc. and affiliates.

import {TextInput} from '@astryxdesign/core/TextInput';
import {Button} from '@astryxdesign/core/Button';
import {useState} from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{type: 'error' | 'success', message: string} | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setStatus({type: 'error', message: 'Please enter a valid email address'});
      return;
    }
    setIsLoading(true);
    setStatus(undefined);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
      });
      if (res.ok) {
        setStatus({type: 'success', message: 'Subscribed!'});
        setEmail('');
      } else {
        setStatus({type: 'error', message: 'Subscription failed.'});
      }
    } catch {
      setStatus({type: 'error', message: 'Network error.'});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-sm p-6 space-y-4">
      <h2 className="text-xl font-semibold">Subscribe to updates</h2>
      <p className="text-sm text-gray-500">Get the latest news delivered to your inbox.</p>
      <TextInput label="Email address" value={email} onChange={setEmail} placeholder="you@example.com" status={status} />
      <Button label="Subscribe" variant="primary" isLoading={isLoading} onPress={handleSubmit} />
    </div>
  );
}
