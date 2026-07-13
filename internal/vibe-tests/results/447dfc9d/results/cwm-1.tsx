// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';

const plans = [
  {name: 'Starter', monthly: 12, annual: 120, features: ['5 projects', '1 GB storage', 'Email support']},
  {name: 'Pro', monthly: 29, annual: 290, features: ['Unlimited projects', '10 GB storage', 'Priority support']},
  {name: 'Enterprise', monthly: 79, annual: 790, features: ['Unlimited everything', '100 GB storage', 'Dedicated account manager']},
];

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <h2 className="text-3xl font-bold">Pricing</h2>
      <div className="flex gap-2">
        <Button variant={!isAnnual ? 'default' : 'outline'} onClick={() => setIsAnnual(false)}>Monthly</Button>
        <Button variant={isAnnual ? 'default' : 'outline'} onClick={() => setIsAnnual(true)}>Annual</Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {plans.map(plan => (
          <Card key={plan.name} className="w-[280px]">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <p className="text-3xl font-bold">${isAnnual ? plan.annual : plan.monthly}</p>
              <p className="text-sm text-muted-foreground">{isAnnual ? '/year' : '/month'}</p>
              <ul className="space-y-1 text-sm">
                {plan.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <Button className="w-full">Choose Plan</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
