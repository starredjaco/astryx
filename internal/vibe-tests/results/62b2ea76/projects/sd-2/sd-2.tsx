// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
});

export default function SubmitButton() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleClick = async () => {
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div {...stylex.props(styles.container)}>
      <Button
        label={status === 'success' ? 'Submitted!' : 'Submit'}
        variant="primary"
        isLoading={status === 'loading'}
        icon={status === 'success' ? <Icon name="check" /> : undefined}
        onClick={handleClick}
        isDisabled={status === 'success'}
      />
      {status === 'success' && (
        <Text type="supporting" color="accent">Your submission was successful.</Text>
      )}
    </div>
  );
}
