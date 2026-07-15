// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card, CardContent} from '@/components/ui/card';

export default function MetricsDashboardCard() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Total Revenue</p>
          <p className="text-3xl font-bold tracking-tight">$12,340.56</p>
          <p className="text-sm text-green-600">+12% from last month</p>
        </div>
      </CardContent>
    </Card>
  );
}
