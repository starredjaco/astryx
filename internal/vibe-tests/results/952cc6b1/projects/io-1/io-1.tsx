// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Button} from '@astryxdesign/core/Button';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Banner} from '@astryxdesign/core/Banner';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      setErrorMsg('Please enter a valid email');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/subscribe', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({email})});
      if (!res.ok) {throw new Error();}
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMsg('Failed. Try again.');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6">
      <Stack gap={4}>
        <Text type="display" size="sm">Subscribe</Text>
        {status === 'success' && <Banner type="success">Subscribed!</Banner>}
        <TextInput label="Email" type="email" value={email} onChange={setEmail} placeholder="you@example.com" status={errorMsg ? {type: 'error', message: errorMsg} : undefined} />
        <Button onClick={handleSubmit} isLoading={status === 'loading'} variant="filled">Subscribe</Button>
      </Stack>
    </div>
  );
}