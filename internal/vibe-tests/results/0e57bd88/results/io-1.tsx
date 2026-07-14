// Copyright (c) Meta Platforms, Inc. and affiliates.

import {TextInput} from '@astryxdesign/core/TextInput';
import {Button} from '@astryxdesign/core/Button';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {useState} from 'react';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{type: 'error' | 'success', message: string} | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setStatus({type: 'error', message: 'Please enter a valid email address'});
      return;
    }

    setIsLoading(true);
    setStatus(undefined);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
      });

      if (response.ok) {
        setStatus({type: 'success', message: 'Successfully subscribed!'});
        setEmail('');
      } else {
        setStatus({type: 'error', message: 'Subscription failed. Please try again.'});
      }
    } catch {
      setStatus({type: 'error', message: 'Network error. Please try again.'});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <VStack gap="md" style={{maxWidth: 400, padding: 24}}>
      <Heading level={2}>Subscribe to updates</Heading>
      <Text color="secondary">Get the latest news delivered to your inbox.</Text>
      <TextInput
        label="Email address"
        value={email}
        onChange={setEmail}
        placeholder="you@example.com"
        status={status}
      />
      <Button
        label="Subscribe"
        variant="primary"
        isLoading={isLoading}
        onPress={handleSubmit}
      />
    </VStack>
  );
}
