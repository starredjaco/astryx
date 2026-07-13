// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Skeleton} from '@astryxdesign/core/Skeleton';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';

type State = 'loading' | 'error' | 'success';

export default function DashboardWidget() {
  const [state, setState] = useState<State>('loading');

  useEffect(() => {
    const timer = setTimeout(() => setState('success'), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card width={360} padding={4}>
      {state === 'loading' && (
        <div className="flex flex-col gap-3">
          <Skeleton width="60%" height={24} />
          <Skeleton width="100%" height={16} index={1} />
          <Skeleton width="80%" height={16} index={2} />
        </div>
      )}
      {state === 'error' && (
        <div className="flex flex-col gap-3">
          <Heading level={3}>Error</Heading>
          <Text color="secondary">Failed to load data. Please try again.</Text>
          <Button label="Retry" variant="secondary" onClick={() => setState('loading')} />
        </div>
      )}
      {state === 'success' && (
        <div className="flex flex-col gap-3">
          <Heading level={3}>Revenue</Heading>
          <Text type="display-2">$12,450</Text>
          <Text type="supporting" color="secondary">+8.2% from last month</Text>
        </div>
      )}
    </Card>
  );
}
