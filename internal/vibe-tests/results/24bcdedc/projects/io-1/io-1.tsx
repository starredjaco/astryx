// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Banner} from '@astryxdesign/core/Banner';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{type: 'error' | 'success'; message: string} | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setStatus({type: 'error', message: 'Please enter a valid email address.'});
      return;
    }
    setIsSubmitting(true);
    setStatus(null);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
      });
      if (!res.ok) {throw new Error('Subscription failed');}
      setStatus({type: 'success', message: 'Successfully subscribed!'});
      setEmail('');
    } catch {
      setStatus({type: 'error', message: 'Something went wrong. Please try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <VStack gap="md">
        <Heading level={2}>Subscribe</Heading>
        <Text>Get the latest updates delivered to your inbox.</Text>
        <TextInput
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="you@example.com"
          status={status?.type === 'error' ? {type: 'error', message: status.message} : undefined}
        />
        {status?.type === 'success' && (
          <Banner variant="success">{status.message}</Banner>
        )}
        <Button onPress={handleSubmit} isDisabled={isSubmitting}>
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </VStack>
    </Card>
  );
}
