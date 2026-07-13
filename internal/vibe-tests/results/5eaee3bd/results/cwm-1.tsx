// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const plans = [
  {name: 'Starter', monthly: 12, annual: 120, features: ['5 projects', '1 GB storage', 'Email support']},
  {name: 'Pro', monthly: 29, annual: 290, features: ['Unlimited projects', '10 GB storage', 'Priority support']},
  {name: 'Enterprise', monthly: 79, annual: 790, features: ['Unlimited everything', '100 GB storage', 'Dedicated account manager']},
];

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  const btnStyle = (active: boolean) => ({
    padding: '10px 20px',
    background: active ? '#0066cc' : 'white',
    color: active ? 'white' : '#333',
    border: '1px solid #ccc',
    borderRadius: 6,
    cursor: 'pointer' as const,
  });

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, padding: 32}}>
      <h2 style={{margin: 0, fontSize: 28}}>Pricing</h2>
      <div style={{display: 'flex', gap: 8}}>
        <button style={btnStyle(!isAnnual)} onClick={() => setIsAnnual(false)}>Monthly</button>
        <button style={btnStyle(isAnnual)} onClick={() => setIsAnnual(true)}>Annual</button>
      </div>
      <div style={{display: 'flex', gap: 16}}>
        {plans.map(plan => (
          <div key={plan.name} style={{border: '1px solid #e0e0e0', borderRadius: 12, padding: 24, width: 260}}>
            <h3 style={{margin: '0 0 8px'}}>{plan.name}</h3>
            <p style={{fontSize: 32, fontWeight: 700, margin: '0 0 4px'}}>${isAnnual ? plan.annual : plan.monthly}</p>
            <p style={{color: '#666', margin: '0 0 16px'}}>{isAnnual ? '/year' : '/month'}</p>
            <ul style={{padding: '0 0 0 20px', margin: '0 0 16px'}}>
              {plan.features.map(f => <li key={f} style={{marginBottom: 4}}>{f}</li>)}
            </ul>
            <button style={{width: '100%', padding: '10px', background: '#0066cc', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}
