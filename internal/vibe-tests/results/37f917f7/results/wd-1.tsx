// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

type Step = 'cart' | 'shipping' | 'payment' | 'confirmation';

export default function CheckoutFlow() {
  const [step, setStep] = useState<Step>('cart');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const steps: Step[] = ['cart', 'shipping', 'payment', 'confirmation'];
  const nextStep = () => { const idx = steps.indexOf(step); if (idx < steps.length - 1) {setStep(steps[idx + 1]);} };

  const tabStyle = (s: Step) => ({padding: '8px 16px', border: 'none', borderBottom: step === s ? '2px solid #3b82f6' : '2px solid transparent', background: 'none', cursor: 'pointer', fontWeight: step === s ? 600 : 400, color: step === s ? '#3b82f6' : '#6b7280'});

  return (
    <div style={{maxWidth: 700, margin: '0 auto', padding: 24, fontFamily: 'system-ui'}}>
      <h1>Checkout</h1>
      <div style={{borderBottom: '1px solid #e5e7eb', marginBottom: 24}}>
        {steps.map(s => <button key={s} style={tabStyle(s)} onClick={() => setStep(s)}>{s.charAt(0).toUpperCase() + s.slice(1)}</button>)}
      </div>
      {step === 'cart' && (
        <div style={{padding: 16, border: '1px solid #e5e7eb', borderRadius: 8}}>
          <h2 style={{marginTop: 0}}>Cart Summary</h2>
          <div style={{display: 'flex', justifyContent: 'space-between'}}><span>Widget Pro x2</span><span>$49.98</span></div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}><span>Shipping</span><span>$5.00</span></div>
          <hr />
          <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 700}}><span>Total</span><span>$54.98</span></div>
          <button onClick={nextStep} style={{marginTop: 16, padding: '10px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Continue to Shipping</button>
        </div>
      )}
      {step === 'shipping' && (
        <div style={{padding: 16, border: '1px solid #e5e7eb', borderRadius: 8}}>
          <h2 style={{marginTop: 0}}>Shipping Address</h2>
          <div style={{marginBottom: 12}}><label style={{display: 'block', marginBottom: 4}}>Street Address</label><input value={address} onChange={e => setAddress(e.target.value)} style={{width: '100%', padding: 8, border: '1px solid #d1d5db', borderRadius: 6}} /></div>
          <div style={{marginBottom: 12}}><label style={{display: 'block', marginBottom: 4}}>City</label><input value={city} onChange={e => setCity(e.target.value)} style={{width: '100%', padding: 8, border: '1px solid #d1d5db', borderRadius: 6}} /></div>
          <button onClick={nextStep} style={{padding: '10px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Continue to Payment</button>
        </div>
      )}
      {step === 'payment' && (
        <div style={{padding: 16, border: '1px solid #e5e7eb', borderRadius: 8}}>
          <h2 style={{marginTop: 0}}>Payment</h2>
          <div style={{marginBottom: 12}}><label style={{display: 'block', marginBottom: 4}}>Card Number</label><input value={cardNumber} onChange={e => setCardNumber(e.target.value)} style={{width: '100%', padding: 8, border: '1px solid #d1d5db', borderRadius: 6}} /></div>
          <button onClick={nextStep} style={{padding: '10px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Place Order</button>
        </div>
      )}
      {step === 'confirmation' && (
        <div style={{padding: 16, border: '1px solid #e5e7eb', borderRadius: 8}}>
          <h2 style={{marginTop: 0}}>Order Confirmed</h2>
          <p>Your order has been placed. You will receive a confirmation email shortly.</p>
        </div>
      )}
    </div>
  );
}
