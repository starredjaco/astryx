// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card} from '@astryxdesign/core/Card';
import {SegmentedControl} from '@astryxdesign/core/SegmentedControl';
import {Button} from '@astryxdesign/core/Button';
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
    <div className="flex flex-col items-center gap-8 py-12">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Choose your plan</h1>
        <p className="text-gray-500">Start free, upgrade when you need to.</p>
      </div>

      <SegmentedControl value={billing} onChange={setBilling} label="Billing period">
        <SegmentedControl.Segment value="monthly" label="Monthly" />
        <SegmentedControl.Segment value="annual" label="Annual" />
      </SegmentedControl>

      <div className="flex gap-6 items-stretch">
        {plans.map((plan) => (
          <Card key={plan.name} style={{flex: 1, minWidth: 260}}>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                {plan.popular && <Badge label="Popular" variant="accent" />}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">
                  ${billing === 'monthly' ? plan.monthly : plan.annual}
                </span>
                <span className="text-gray-500">/month</span>
              </div>
              {billing === 'annual' && (
                <p className="text-sm text-green-600">Save ${(plan.monthly - plan.annual) * 12}/year</p>
              )}
              <Divider />
              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm">{f}</li>
                ))}
              </ul>
              <Button
                label={plan.popular ? 'Get started' : 'Choose plan'}
                variant={plan.popular ? 'primary' : 'secondary'}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
