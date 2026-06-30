// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

const plans = [
  {name: 'Starter', monthly: 9, annual: 7, features: ['5 projects', '10GB', 'Email support']},
  {name: 'Pro', monthly: 29, annual: 24, features: ['Unlimited projects', '100GB', 'Priority support', 'API'], popular: true},
  {name: 'Enterprise', monthly: 99, annual: 79, features: ['Unlimited', '1TB', '24/7 support', 'SSO']},
];

export default function PricingTable() {
  const [annual, setAnnual] = useState(false);

  return (
    <div style={{textAlign: 'center', padding: '48px 16px', fontFamily: 'system-ui'}}>
      <h2 style={{fontSize: 32, fontWeight: 700, marginBottom: 24}}>Pricing</h2>
      <div style={{display: 'inline-flex', borderRadius: 8, border: '1px solid #d1d5db', padding: 4, marginBottom: 32}}>
        <button onClick={() => setAnnual(false)} style={{padding: '8px 16px', borderRadius: 6, border: 'none', backgroundColor: !annual ? '#2563eb' : 'transparent', color: !annual ? '#fff' : '#374151', cursor: 'pointer'}}>Monthly</button>
        <button onClick={() => setAnnual(true)} style={{padding: '8px 16px', borderRadius: 6, border: 'none', backgroundColor: annual ? '#2563eb' : 'transparent', color: annual ? '#fff' : '#374151', cursor: 'pointer'}}>Annual</button>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 900, margin: '0 auto'}}>
        {plans.map(plan => (
          <div key={plan.name} style={{border: plan.popular ? '2px solid #2563eb' : '1px solid #e5e7eb', borderRadius: 12, padding: 24, textAlign: 'left'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8}}>
              <h3 style={{fontSize: 18, fontWeight: 600}}>{plan.name}</h3>
              {plan.popular && <span style={{fontSize: 12, backgroundColor: '#dbeafe', color: '#1d4ed8', padding: '2px 8px', borderRadius: 12}}>Popular</span>}
            </div>
            <p style={{fontSize: 32, fontWeight: 700, marginBottom: 16}}>${annual ? plan.annual : plan.monthly}<span style={{fontSize: 14, fontWeight: 400}}>/mo</span></p>
            <ul style={{listStyle: 'none', padding: 0, marginBottom: 24}}>
              {plan.features.map(f => <li key={f} style={{padding: '4px 0', fontSize: 14}}>{f}</li>)}
            </ul>
            <button style={{width: '100%', padding: '10px 0', borderRadius: 6, border: plan.popular ? 'none' : '1px solid #d1d5db', backgroundColor: plan.popular ? '#2563eb' : 'transparent', color: plan.popular ? '#fff' : '#374151', cursor: 'pointer'}}>Get started</button>
          </div>
        ))}
      </div>
    </div>
  );
}