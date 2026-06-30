// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {SegmentedControl} from '@astryxdesign/core/SegmentedControl';
import {SegmentedControlItem} from '@astryxdesign/core/SegmentedControl';
import {Badge} from '@astryxdesign/core/Badge';
import {Divider} from '@astryxdesign/core/Divider';
import {Grid} from '@astryxdesign/core/Grid';

interface Plan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  isPopular?: boolean;
}

const plans: Plan[] = [
  {name: 'Starter', monthlyPrice: 9, annualPrice: 7, features: ['5 projects', '10GB storage', 'Email support']},
  {name: 'Pro', monthlyPrice: 29, annualPrice: 24, features: ['Unlimited projects', '100GB storage', 'Priority support', 'API access'], isPopular: true},
  {name: 'Enterprise', monthlyPrice: 99, annualPrice: 79, features: ['Unlimited everything', '1TB storage', '24/7 support', 'Custom integrations', 'SSO']},
];

export default function PricingTable() {
  const [billing, setBilling] = useState<string>('monthly');

  return (
    <Stack gap={6} align="center">
      <Stack gap={2} align="center">
        <Text type="display" size="md">Simple, transparent pricing</Text>
        <Text type="body" size="lg">Choose the plan that works for you</Text>
      </Stack>

      <SegmentedControl value={billing} onChange={setBilling} label="Billing period">
        <SegmentedControlItem value="monthly">Monthly</SegmentedControlItem>
        <SegmentedControlItem value="annual">Annual (save 20%)</SegmentedControlItem>
      </SegmentedControl>

      <Grid columns={3} gap={4}>
        {plans.map(plan => (
          <Card key={plan.name} padding={5}>
            <Stack gap={4}>
              <Stack gap={1}>
                <Stack direction="horizontal" gap={2} align="center">
                  <Text type="label" size="lg">{plan.name}</Text>
                  {plan.isPopular && <Badge>Popular</Badge>}
                </Stack>
                <Stack direction="horizontal" align="end" gap={1}>
                  <Text type="display" size="sm">
                    ${billing === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </Text>
                  <Text type="body" size="sm">/month</Text>
                </Stack>
              </Stack>

              <Divider />

              <Stack gap={2}>
                {plan.features.map(feature => (
                  <Text key={feature} type="body" size="sm">{feature}</Text>
                ))}
              </Stack>

              <Button variant={plan.isPopular ? 'filled' : 'outlined'} size="lg">
                Get started
              </Button>
            </Stack>
          </Card>
        ))}
      </Grid>
    </Stack>
  );
}