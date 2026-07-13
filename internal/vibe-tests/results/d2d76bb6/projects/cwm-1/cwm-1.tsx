// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

const plans = [
  {name: 'Starter', monthly: 12, annual: 120, features: ['5 projects', '1 GB storage', 'Email support']},
  {name: 'Pro', monthly: 29, annual: 290, features: ['Unlimited projects', '10 GB storage', 'Priority support']},
  {name: 'Enterprise', monthly: 79, annual: 790, features: ['Unlimited everything', '100 GB storage', 'Dedicated account manager']},
];

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <Heading level={2}>Pricing</Heading>
      <div className="flex gap-2">
        <Button label="Monthly" variant={!isAnnual ? 'primary' : 'secondary'} onClick={() => setIsAnnual(false)} />
        <Button label="Annual" variant={isAnnual ? 'primary' : 'secondary'} onClick={() => setIsAnnual(true)} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {plans.map(plan => (
          <Card key={plan.name} width={280} padding={4}>
            <div className="flex flex-col gap-3">
              <Heading level={3}>{plan.name}</Heading>
              <Text type="display-2">${isAnnual ? plan.annual : plan.monthly}</Text>
              <Text type="supporting">{isAnnual ? '/year' : '/month'}</Text>
              <ul className="space-y-1">
                {plan.features.map(f => <li key={f}><Text>{f}</Text></li>)}
              </ul>
              <Button label="Choose Plan" variant="primary" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
