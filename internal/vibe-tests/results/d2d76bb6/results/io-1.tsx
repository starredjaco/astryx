// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Button} from '@astryxdesign/core/Button';
import {VStack} from '@astryxdesign/core/VStack';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Heading';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{type: 'error' | 'success'; message: string} | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const validate = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async () => {
    if (!validate(email)) {
      setStatus({type: 'error', message: 'Please enter a valid email address'});
      return;
    }
    setIsLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
      });
      if (!res.ok) {throw new Error('Subscription failed');}
      setStatus({type: 'success', message: 'Subscribed successfully!'});
      setEmail('');
    } catch {
      setStatus({type: 'error', message: 'Something went wrong. Please try again.'});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack gap={3} padding={4}>
      <Heading level={2}>Subscribe to our newsletter</Heading>
      <TextInput
        label="Email address"
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="you@example.com"
        status={status?.type === 'error' ? {type: 'error', message: status.message} : undefined}
      />
      <Button
        label="Subscribe"
        variant="primary"
        isLoading={isLoading}
        onClick={handleSubmit}
      />
      {status?.type === 'success' && <Text color="accent">{status.message}</Text>}
    </VStack>
  );
}
