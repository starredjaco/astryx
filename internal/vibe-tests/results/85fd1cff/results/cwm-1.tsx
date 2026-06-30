// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '../components/ui/card';
import {Button} from '../components/ui/button';
import {Badge} from '../components/ui/badge';
import {Separator} from '../components/ui/separator';

const plans = [
  {name: 'Starter', monthly: 9, annual: 7, features: ['5 projects', '10GB', 'Email support']},
  {name: 'Pro', monthly: 29, annual: 24, features: ['Unlimited projects', '100GB', 'Priority support', 'API'], popular: true},
  {name: 'Enterprise', monthly: 99, annual: 79, features: ['Unlimited', '1TB', '24/7 support', 'SSO']},
];

export default function PricingTable() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="py-12 text-center space-y-8">
      <h2 className="text-3xl font-bold">Pricing</h2>
      <div className="inline-flex rounded-lg border p-1">
        <button className={`px-4 py-2 rounded-md ${!annual ? 'bg-primary text-primary-foreground' : ''}`} onClick={() => setAnnual(false)}>Monthly</button>
        <button className={`px-4 py-2 rounded-md ${annual ? 'bg-primary text-primary-foreground' : ''}`} onClick={() => setAnnual(true)}>Annual</button>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map(plan => (
          <Card key={plan.name} className={plan.popular ? 'border-primary' : ''}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {plan.name} {plan.popular && <Badge>Popular</Badge>}
              </CardTitle>
              <p className="text-3xl font-bold">${annual ? plan.annual : plan.monthly}<span className="text-sm font-normal">/mo</span></p>
            </CardHeader>
            <CardContent>
              <Separator className="mb-4" />
              <ul className="space-y-2 text-sm text-left mb-6">
                {plan.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>Get started</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}