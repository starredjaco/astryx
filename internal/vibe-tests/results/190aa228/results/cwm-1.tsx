// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {Separator} from '@/components/ui/separator';
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';
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
        <p className="text-muted-foreground">Start free, upgrade when you need to.</p>
      </div>

      <Tabs value={billing} onValueChange={setBilling}>
        <TabsList>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="annual">Annual</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex gap-6 items-stretch">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex-1 min-w-[260px]">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CardTitle>{plan.name}</CardTitle>
                {plan.popular && <Badge>Popular</Badge>}
              </div>
              <CardDescription>
                <span className="text-3xl font-bold text-foreground">
                  ${billing === 'monthly' ? plan.monthly : plan.annual}
                </span>
                /month
              </CardDescription>
            </CardHeader>
            <CardContent>
              {billing === 'annual' && (
                <p className="text-sm text-green-600 mb-4">Save ${(plan.monthly - plan.annual) * 12}/year</p>
              )}
              <Separator className="mb-4" />
              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm">{f}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                {plan.popular ? 'Get started' : 'Choose plan'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
