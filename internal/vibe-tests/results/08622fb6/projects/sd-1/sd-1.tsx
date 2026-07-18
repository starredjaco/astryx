// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState, useEffect} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '../components/ui/card';
import {Button} from '../components/ui/button';
import {Alert, AlertDescription} from '../components/ui/alert';

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
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        {state === 'loading' && (
          <div className="flex items-center gap-2">
            <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full" />
            <span className="text-muted-foreground">Loading...</span>
          </div>
        )}
        {state === 'error' && (
          <div className="space-y-2">
            <Alert variant="destructive">
              <AlertDescription>Failed to load dashboard data.</AlertDescription>
            </Alert>
            <Button variant="outline" onClick={fetchData}>Retry</Button>
          </div>
        )}
        {state === 'success' && data && (
          <div className="grid grid-cols-3 gap-4 text-center">
            <div><p className="text-2xl font-bold">{data.users}</p><p className="text-sm text-muted-foreground">Users</p></div>
            <div><p className="text-2xl font-bold">{data.revenue}</p><p className="text-sm text-muted-foreground">Revenue</p></div>
            <div><p className="text-2xl font-bold">{data.orders}</p><p className="text-sm text-muted-foreground">Orders</p></div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
