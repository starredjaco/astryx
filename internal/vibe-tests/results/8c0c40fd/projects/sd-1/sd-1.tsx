// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState, useEffect} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Spinner} from '@astryxdesign/core/Spinner';
import {Banner} from '@astryxdesign/core/Banner';
import {Button} from '@astryxdesign/core/Button';

type State = 'loading' | 'error' | 'success';

export default function DashboardWidget() {
  const [state, setState] = useState<State>('loading');
  const [data, setData] = useState<{users: number; revenue: string; orders: number} | null>(null);

  const fetchData = () => {
    setState('loading');
    setTimeout(() => {
      if (Math.random() > 0.7) {
        setState('error');
      } else {
        setData({users: 1234, revenue: '$45,678', orders: 89});
        setState('success');
      }
    }, 1500);
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <Card>
      <div className="flex flex-col gap-4">
        <Heading level={3}>Dashboard</Heading>
        {state === 'loading' && <Spinner label="Loading dashboard data" />}
        {state === 'error' && (
          <div className="flex flex-col gap-2">
            <Banner variant="error">Failed to load data. Please try again.</Banner>
            <Button variant="outlined" onPress={fetchData}>Retry</Button>
          </div>
        )}
        {state === 'success' && data && (
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <Text size="lg" weight="bold">{data.users}</Text>
              <Text size="sm" color="secondary">Users</Text>
            </div>
            <div className="text-center">
              <Text size="lg" weight="bold">{data.revenue}</Text>
              <Text size="sm" color="secondary">Revenue</Text>
            </div>
            <div className="text-center">
              <Text size="lg" weight="bold">{data.orders}</Text>
              <Text size="sm" color="secondary">Orders</Text>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
