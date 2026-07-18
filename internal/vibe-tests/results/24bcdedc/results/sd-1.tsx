// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState, useEffect} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Spinner} from '@astryxdesign/core/Spinner';
import {Banner} from '@astryxdesign/core/Banner';
import {Button} from '@astryxdesign/core/Button';
import {VStack} from '@astryxdesign/core/VStack';

type State = 'loading' | 'error' | 'success';

interface DashboardData {
  users: number;
  revenue: string;
  orders: number;
}

export default function DashboardWidget() {
  const [state, setState] = useState<State>('loading');
  const [data, setData] = useState<DashboardData | null>(null);

  const fetchData = () => {
    setState('loading');
    setTimeout(() => {
      const shouldError = Math.random() > 0.7;
      if (shouldError) {
        setState('error');
      } else {
        setData({users: 1234, revenue: '$45,678', orders: 89});
        setState('success');
      }
    }, 1500);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card>
      <VStack gap="md">
        <Heading level={3}>Dashboard</Heading>
        {state === 'loading' && <Spinner label="Loading dashboard data" />}
        {state === 'error' && (
          <VStack gap="sm">
            <Banner variant="error">Failed to load dashboard data. Please try again.</Banner>
            <Button variant="outlined" onPress={fetchData}>Retry</Button>
          </VStack>
        )}
        {state === 'success' && data && (
          <VStack gap="sm">
            <Text>Active Users: {data.users}</Text>
            <Text>Revenue: {data.revenue}</Text>
            <Text>Orders: {data.orders}</Text>
          </VStack>
        )}
      </VStack>
    </Card>
  );
}
