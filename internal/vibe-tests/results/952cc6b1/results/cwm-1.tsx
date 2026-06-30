// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {SegmentedControl} from '@astryxdesign/core/SegmentedControl';
import {SegmentedControlItem} from '@astryxdesign/core/SegmentedControl';
import {Badge} from '@astryxdesign/core/Badge';

const plans = [
  {name: 'Starter', monthly: 9, annual: 7, features: ['5 projects', '10GB', 'Email support']},
  {name: 'Pro', monthly: 29, annual: 24, features: ['Unlimited projects', '100GB', 'Priority support', 'API'], isPopular: true},
  {name: 'Enterprise', monthly: 99, annual: 79, features: ['Unlimited', '1TB', '24/7 support', 'SSO', 'Custom']},
];

export default function PricingTable() {
  const [billing, setBilling] = useState('monthly');

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <Stack gap={6} align="center">
        <Text type="display" size="md">Pricing</Text>
        <SegmentedControl value={billing} onChange={setBilling} label="Billing">
          <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
          <SegmentedControlItem value="annual">Annual</SegmentedControlItem>
        </SegmentedControl>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {plans.map(plan => (
            <Card key={plan.name} padding={5}>
              <Stack gap={4}>
                <Stack direction="horizontal" gap={2} align="center">
                  <Text type="label" size="lg">{plan.name}</Text>
                  {plan.isPopular && <Badge>Popular</Badge>}
                </Stack>
                <Text type="display" size="sm">${billing === 'monthly' ? plan.monthly : plan.annual}/mo</Text>
                <ul className="space-y-2">
                  {plan.features.map(f => <li key={f} className="text-sm">{f}</li>)}
                </ul>
                <Button variant={plan.isPopular ? 'filled' : 'outlined'}>Get started</Button>
              </Stack>
            </Card>
          ))}
        </div>
      </Stack>
    </div>
  );
}