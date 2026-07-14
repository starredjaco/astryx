// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card} from '@astryxdesign/core/Card';
import {SegmentedControl} from '@astryxdesign/core/SegmentedControl';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Badge} from '@astryxdesign/core/Badge';
import {Divider} from '@astryxdesign/core/Divider';
import {useState} from 'react';

const plans = [
  {name: 'Starter', monthly: 29, annual: 24, features: ['5 projects', '10GB storage', 'Email support']},
  {name: 'Pro', monthly: 79, annual: 64, features: ['Unlimited projects', '100GB storage', 'Priority support', 'API access'], popular: true},
  {name: 'Enterprise', monthly: 199, annual: 159, features: ['Everything in Pro', '1TB storage', 'Dedicated support', 'SSO', 'Custom integrations']},
];

export default function PricingTable() {
  const [billing, setBilling] = useState('monthly');

  return (
    <VStack gap="lg" align="center" style={{padding: 48}}>
      <VStack gap="sm" align="center">
        <Heading level={1}>Choose your plan</Heading>
        <Text color="secondary">Start free, upgrade when you need to.</Text>
      </VStack>

      <SegmentedControl value={billing} onChange={setBilling} label="Billing period">
        <SegmentedControl.Segment value="monthly" label="Monthly" />
        <SegmentedControl.Segment value="annual" label="Annual" />
      </SegmentedControl>

      <HStack gap="lg" align="stretch">
        {plans.map((plan) => (
          <Card key={plan.name} style={{flex: 1, minWidth: 260}}>
            <VStack gap="md" style={{padding: 24}}>
              <HStack gap="sm" align="center">
                <Heading level={3}>{plan.name}</Heading>
                {plan.popular && <Badge label="Popular" variant="accent" />}
              </HStack>
              <HStack gap="xs" align="baseline">
                <Heading level={2}>
                  ${billing === 'monthly' ? plan.monthly : plan.annual}
                </Heading>
                <Text color="secondary">/month</Text>
              </HStack>
              {billing === 'annual' && (
                <Text color="success" size="sm">Save ${(plan.monthly - plan.annual) * 12}/year</Text>
              )}
              <Divider />
              <VStack gap="sm">
                {plan.features.map((feature) => (
                  <Text key={feature}>{feature}</Text>
                ))}
              </VStack>
              <Button
                label={plan.popular ? 'Get started' : 'Choose plan'}
                variant={plan.popular ? 'primary' : 'secondary'}
              />
            </VStack>
          </Card>
        ))}
      </HStack>
    </VStack>
  );
}
