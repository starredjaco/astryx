// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';
import {Text} from '@astryxdesign/core/Text';

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
      <Button
        label={status === 'success' ? 'Submitted!' : 'Submit'}
        variant="primary"
        isLoading={status === 'loading'}
        icon={status === 'success' ? <Icon name="check" /> : undefined}
        onClick={handleClick}
        isDisabled={status === 'success'}
      />
      {status === 'success' && (
        <div className="flex items-center gap-2 text-green-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <Text type="supporting">Submission successful</Text>
        </div>
      )}
    </div>
  );
}
