// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Skeleton} from '@astryxdesign/core/Skeleton';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/Stack';
import {HStack} from '@astryxdesign/core/Stack';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  widget: {
    maxWidth: 400,
  },
  metric: {
    fontSize: 36,
    fontWeight: 700,
  },
});

type WidgetState = 'loading' | 'error' | 'data';
type DashboardData = {
  revenue: number;
  orders: number;
  conversion: number;
};

export default function DashboardWidget() {
  const [state, setState] = useState<WidgetState>('loading');
  const [data, setData] = useState<DashboardData | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = async () => {
    setState('loading');
    setErrorMessage('');
    try {
      const response = await fetch('/api/dashboard/metrics');
      if (!response.ok) {throw new Error('Failed to load metrics');}
      const result = await response.json();
      setData(result);
      setState('data');
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Unknown error');
      setState('error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card padding={4} xstyle={styles.widget}>
      <VStack gap={3}>
        <Heading level={3}>Revenue Overview</Heading>

        {state === 'loading' && (
          <VStack gap={2}>
            <Skeleton width="60%" height={40} index={0} />
            <Skeleton width="80%" height={20} index={1} />
            <Skeleton width="40%" height={20} index={2} />
          </VStack>
        )}

        {state === 'error' && (
          <VStack gap={2}>
            <Text color="accent">{errorMessage}</Text>
            <Button label="Retry" variant="secondary" onClick={fetchData} />
          </VStack>
        )}

        {state === 'data' && data && (
          <VStack gap={3}>
            <div {...stylex.props(styles.metric)}>${data.revenue.toLocaleString()}</div>
            <HStack gap={4}>
              <VStack gap={0.5}>
                <Text type="supporting">Orders</Text>
                <Text weight="semibold">{data.orders}</Text>
              </VStack>
              <VStack gap={0.5}>
                <Text type="supporting">Conversion</Text>
                <Text weight="semibold">{data.conversion}%</Text>
              </VStack>
            </HStack>
          </VStack>
        )}
      </VStack>
    </Card>
  );
}
