// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

const STEPS = ['Cart', 'Shipping', 'Payment', 'Confirmation'];

export default function CheckoutFlow() {
  const [step, setStep] = useState(0);
  const [shipping, setShipping] = useState({name: '', address: '', city: '', zip: ''});
  const [payment, setPayment] = useState({card: '', expiry: '', cvv: ''});

  const inputStyle = {width: '100%', padding: '8px 12px', border: '1px solid #ccc', borderRadius: 6, fontSize: 14, marginTop: 4};
  const btnStyle = (primary: boolean) => ({padding: '10px 20px', backgroundColor: primary ? '#0066cc' : 'transparent', color: primary ? 'white' : '#0066cc', border: primary ? 'none' : '1px solid #0066cc', borderRadius: 6, cursor: 'pointer'});

  return (
    <div style={{maxWidth: 600, margin: '0 auto', padding: 24}}>
      <div style={{display: 'flex', gap: 8, marginBottom: 24}}>
        {STEPS.map((s, i) => (
          <span key={s} style={{fontSize: 14, fontWeight: i === step ? 600 : 400, color: i === step ? '#0066cc' : '#666'}}>
            {i + 1}. {s}
          </span>
        ))}
      </div>
      <div style={{border: '1px solid #e0e0e0', borderRadius: 12, padding: 24}}>
        {step === 0 && (
          <>
            <h3 style={{margin: '0 0 12px'}}>Cart Summary</h3>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0'}}><span>Widget Pro</span><span style={{fontWeight: 600}}>$49.99</span></div>
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0'}}><span>Adapter Cable</span><span style={{fontWeight: 600}}>$12.99</span></div>
            <hr style={{border: 'none', borderTop: '1px solid #e0e0e0', margin: '8px 0'}} />
            <div style={{display: 'flex', justifyContent: 'space-between', padding: '8px 0'}}><span style={{fontWeight: 700}}>Total</span><span style={{fontWeight: 700}}>$62.98</span></div>
          </>
        )}
        {step === 1 && (
          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            <h3 style={{margin: 0}}>Shipping</h3>
            <div><label>Full Name</label><input style={inputStyle} value={shipping.name} onChange={(e) => setShipping({...shipping, name: e.target.value})} /></div>
            <div><label>Address</label><input style={inputStyle} value={shipping.address} onChange={(e) => setShipping({...shipping, address: e.target.value})} /></div>
            <div><label>City</label><input style={inputStyle} value={shipping.city} onChange={(e) => setShipping({...shipping, city: e.target.value})} /></div>
            <div><label>ZIP Code</label><input style={inputStyle} value={shipping.zip} onChange={(e) => setShipping({...shipping, zip: e.target.value})} /></div>
          </div>
        )}
        {step === 2 && (
          <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
            <h3 style={{margin: 0}}>Payment</h3>
            <div><label>Card Number</label><input style={inputStyle} value={payment.card} onChange={(e) => setPayment({...payment, card: e.target.value})} /></div>
            <div><label>Expiry</label><input style={inputStyle} value={payment.expiry} onChange={(e) => setPayment({...payment, expiry: e.target.value})} /></div>
            <div><label>CVV</label><input style={inputStyle} value={payment.cvv} onChange={(e) => setPayment({...payment, cvv: e.target.value})} /></div>
          </div>
        )}
        {step === 3 && (
          <><h3 style={{margin: '0 0 8px'}}>Order Confirmed</h3><p>Your order has been placed. You will receive a confirmation email shortly.</p></>
        )}
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 24}}>
        {step > 0 && <button style={btnStyle(false)} onClick={() => setStep(step - 1)}>Back</button>}
        {step < 3 && <button style={btnStyle(true)} onClick={() => setStep(step + 1)}>{step === 2 ? 'Place Order' : 'Continue'}</button>}
      </div>
    </div>
  );
}
