// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card} from '@astryxdesign/core/Card';
import {VStack} from '@astryxdesign/core/VStack';

export default function MetricsDashboardCard() {
  return (
    <Card padding={4}>
      <VStack gap={1}>
        <span className="text-sm text-gray-500">Total Revenue</span>
        <span className="text-3xl font-bold tracking-tight">$12,340.56</span>
        <span className="text-sm text-green-600">+12% from last month</span>
      </VStack>
    </Card>
  );
}
