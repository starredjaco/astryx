// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const plans = [
  {name: 'Starter', monthly: 29, annual: 24, features: ['5 projects', '10GB storage', 'Email support']},
  {name: 'Pro', monthly: 79, annual: 64, features: ['Unlimited projects', '100GB storage', 'Priority support', 'API access'], popular: true},
  {name: 'Enterprise', monthly: 199, annual: 159, features: ['Everything in Pro', '1TB storage', 'Dedicated support', 'SSO', 'Custom integrations']},
];

export default function PricingTable() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, padding: 48}}>
      <div style={{textAlign: 'center'}}>
        <h1 style={{fontSize: 30, fontWeight: 700, margin: '0 0 8px'}}>Choose your plan</h1>
        <p style={{color: '#666', margin: 0}}>Start free, upgrade when you need to.</p>
      </div>
      <div style={{display: 'flex', gap: 4, padding: 4, backgroundColor: '#f3f4f6', borderRadius: 8}}>
        <button onClick={() => setBilling('monthly')} style={{padding: '6px 16px', borderRadius: 6, border: 'none', backgroundColor: billing === 'monthly' ? 'white' : 'transparent', fontWeight: billing === 'monthly' ? 600 : 400, cursor: 'pointer', boxShadow: billing === 'monthly' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'}}>Monthly</button>
        <button onClick={() => setBilling('annual')} style={{padding: '6px 16px', borderRadius: 6, border: 'none', backgroundColor: billing === 'annual' ? 'white' : 'transparent', fontWeight: billing === 'annual' ? 600 : 400, cursor: 'pointer', boxShadow: billing === 'annual' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'}}>Annual</button>
      </div>
      <div style={{display: 'flex', gap: 24}}>
        {plans.map((plan) => (
          <div key={plan.name} style={{flex: 1, minWidth: 260, border: plan.popular ? '2px solid #3b82f6' : '1px solid #e5e7eb', borderRadius: 12, padding: 24}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8}}>
              <h3 style={{margin: 0, fontSize: 18, fontWeight: 600}}>{plan.name}</h3>
              {plan.popular && <span style={{padding: '2px 8px', fontSize: 12, backgroundColor: '#eff6ff', color: '#3b82f6', borderRadius: 12}}>Popular</span>}
            </div>
            <div style={{marginBottom: 16}}>
              <span style={{fontSize: 30, fontWeight: 700}}>${billing === 'monthly' ? plan.monthly : plan.annual}</span>
              <span style={{color: '#666'}}>/month</span>
            </div>
            {billing === 'annual' && <p style={{fontSize: 14, color: '#16a34a', margin: '0 0 16px'}}>Save ${(plan.monthly - plan.annual) * 12}/year</p>}
            <hr style={{border: 'none', borderTop: '1px solid #e5e7eb', margin: '16px 0'}} />
            <ul style={{listStyle: 'none', padding: 0, margin: '0 0 24px'}}>
              {plan.features.map((f) => <li key={f} style={{padding: '4px 0', fontSize: 14}}>{f}</li>)}
            </ul>
            <button style={{width: '100%', padding: '10px 16px', border: plan.popular ? 'none' : '1px solid #ddd', borderRadius: 6, backgroundColor: plan.popular ? '#3b82f6' : 'white', color: plan.popular ? 'white' : '#111', cursor: 'pointer', fontWeight: 500}}>
              {plan.popular ? 'Get started' : 'Choose plan'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
