// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Loader2, Check} from 'lucide-react';

export default function SubmitButton() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleClick = async () => {
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <Button onClick={handleClick} disabled={status !== 'idle'}>
        {status === 'loading' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {status === 'success' && <Check className="mr-2 h-4 w-4" />}
        {status === 'success' ? 'Submitted!' : 'Submit'}
      </Button>
    </div>
  );
}
