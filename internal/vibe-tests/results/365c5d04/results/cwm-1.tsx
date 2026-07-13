// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';

const plans = [
  {name: 'Starter', monthly: 12, annual: 120, features: ['5 projects', '1 GB storage', 'Email support']},
  {name: 'Pro', monthly: 29, annual: 290, features: ['Unlimited projects', '10 GB storage', 'Priority support']},
  {name: 'Enterprise', monthly: 79, annual: 790, features: ['Unlimited everything', '100 GB storage', 'Dedicated account manager']},
];

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <VStack gap={4} padding={4} hAlign="center">
      <Heading level={2}>Pricing</Heading>
      <HStack gap={2}>
        <Button
          label="Monthly"
          variant={!isAnnual ? 'primary' : 'secondary'}
          onClick={() => setIsAnnual(false)}
        />
        <Button
          label="Annual"
          variant={isAnnual ? 'primary' : 'secondary'}
          onClick={() => setIsAnnual(true)}
        />
      </HStack>
      <HStack gap={4}>
        {plans.map(plan => (
          <Card key={plan.name} width={280} padding={4}>
            <VStack gap={3}>
              <Heading level={3}>{plan.name}</Heading>
              <Text type="display-2">
                ${isAnnual ? plan.annual : plan.monthly}
              </Text>
              <Text type="supporting">{isAnnual ? '/year' : '/month'}</Text>
              <VStack gap={1}>
                {plan.features.map(f => (
                  <Text key={f}>{f}</Text>
                ))}
              </VStack>
              <Button label="Choose Plan" variant="primary" />
            </VStack>
          </Card>
        ))}
      </HStack>
    </VStack>
  );
}
