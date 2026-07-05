// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Skeleton} from '@/components/ui/skeleton';
import {Button} from '@/components/ui/button';

type WidgetState = 'loading' | 'error' | 'data';
type DashboardData = { revenue: number; orders: number; conversion: number };

export default function DashboardWidget() {
  const [state, setState] = useState<WidgetState>('loading');
  const [data, setData] = useState<DashboardData | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchData = async () => {
    setState('loading');
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

  useEffect(() => { fetchData(); }, []);

  return (
    <Card className="max-w-sm">
      <CardHeader><CardTitle>Revenue Overview</CardTitle></CardHeader>
      <CardContent>
        {state === 'loading' && (
          <div className="space-y-3">
            <Skeleton className="h-10 w-3/5" />
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-5 w-2/5" />
          </div>
        )}

        {state === 'error' && (
          <div className="space-y-2">
            <p className="text-destructive">{errorMessage}</p>
            <Button variant="secondary" onClick={fetchData}>Retry</Button>
          </div>
        )}

        {state === 'data' && data && (
          <div className="space-y-4">
            <span className="text-4xl font-bold">${data.revenue.toLocaleString()}</span>
            <div className="flex gap-6">
              <div><p className="text-sm text-muted-foreground">Orders</p><p className="font-semibold">{data.orders}</p></div>
              <div><p className="text-sm text-muted-foreground">Conversion</p><p className="font-semibold">{data.conversion}%</p></div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
