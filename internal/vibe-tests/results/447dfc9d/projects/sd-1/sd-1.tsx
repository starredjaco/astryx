// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Skeleton} from '@/components/ui/skeleton';
import {Button} from '@/components/ui/button';

type State = 'loading' | 'error' | 'success';

export default function DashboardWidget() {
  const [state, setState] = useState<State>('loading');

  useEffect(() => {
    const timer = setTimeout(() => setState('success'), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-[360px]">
      <CardContent className="p-6">
        {state === 'loading' && (
          <div className="flex flex-col gap-3">
            <Skeleton className="h-6 w-[60%]" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
        )}
        {state === 'error' && (
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Error</h3>
            <p className="text-muted-foreground">Failed to load data. Please try again.</p>
            <Button variant="outline" onClick={() => setState('loading')}>Retry</Button>
          </div>
        )}
        {state === 'success' && (
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Revenue</h3>
            <p className="text-3xl font-bold">$12,450</p>
            <p className="text-sm text-muted-foreground">+8.2% from last month</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
