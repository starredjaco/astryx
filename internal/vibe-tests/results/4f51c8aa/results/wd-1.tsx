// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

type Step = 'cart' | 'shipping' | 'payment' | 'confirmation';

export default function CheckoutFlow() {
  const [step, setStep] = useState<Step>('cart');
  const [shipping, setShipping] = useState({name: '', address: '', city: '', zip: ''});
  const [payment, setPayment] = useState({card: '', expiry: '', cvv: ''});

  const steps: Step[] = ['cart', 'shipping', 'payment', 'confirmation'];
  const currentIndex = steps.indexOf(step);
  const goNext = () => { const next = steps[currentIndex + 1]; if (next) {setStep(next);} };
  const goBack = () => { const prev = steps[currentIndex - 1]; if (prev) {setStep(prev);} };

  const inputStyle = {width: '100%', padding: '8px 12px', border: '1px solid #ccc', borderRadius: 4, fontSize: 14};
  const labelStyle = {display: 'block', marginBottom: 4, fontSize: 14, fontWeight: 500 as const};
  const btnPrimary = {padding: '10px 20px', backgroundColor: '#0066FF', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 14};
  const btnGhost = {padding: '10px 20px', backgroundColor: 'transparent', border: '1px solid #ccc', borderRadius: 6, cursor: 'pointer', fontSize: 14};

  return (
    <div style={{maxWidth: 600, margin: '0 auto', padding: 24}}>
      <div style={{display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 24}}>
        {steps.map((s, i) => (
          <div key={s} style={{width: 32, height: 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, backgroundColor: i <= currentIndex ? '#0066FF' : '#e5e7eb', color: i <= currentIndex ? 'white' : '#6b7280'}}>{i + 1}</div>
        ))}
      </div>

      <div style={{border: '1px solid #e5e7eb', borderRadius: 8, padding: 24}}>
        {step === 'cart' && (
          <>
            <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Cart Summary</h2>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}><span>Widget Pro x2</span><span>$59.98</span></div>
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}><span>Gadget Lite x1</span><span>$24.99</span></div>
            <hr style={{margin: '12px 0', border: 'none', borderTop: '1px solid #e5e7eb'}} />
            <div style={{display: 'flex', justifyContent: 'space-between', fontWeight: 700}}><span>Total</span><span>$84.97</span></div>
          </>
        )}

        {step === 'shipping' && (
          <>
            <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Shipping Address</h2>
            <div style={{marginBottom: 12}}><label style={labelStyle}>Full Name</label><input style={inputStyle} value={shipping.name} onChange={(e) => setShipping({...shipping, name: e.target.value})} /></div>
            <div style={{marginBottom: 12}}><label style={labelStyle}>Address</label><input style={inputStyle} value={shipping.address} onChange={(e) => setShipping({...shipping, address: e.target.value})} /></div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
              <div><label style={labelStyle}>City</label><input style={inputStyle} value={shipping.city} onChange={(e) => setShipping({...shipping, city: e.target.value})} /></div>
              <div><label style={labelStyle}>ZIP</label><input style={inputStyle} value={shipping.zip} onChange={(e) => setShipping({...shipping, zip: e.target.value})} /></div>
            </div>
          </>
        )}

        {step === 'payment' && (
          <>
            <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Payment</h2>
            <div style={{marginBottom: 12}}><label style={labelStyle}>Card Number</label><input style={inputStyle} value={payment.card} onChange={(e) => setPayment({...payment, card: e.target.value})} placeholder="1234 5678 9012 3456" /></div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
              <div><label style={labelStyle}>Expiry</label><input style={inputStyle} value={payment.expiry} onChange={(e) => setPayment({...payment, expiry: e.target.value})} placeholder="MM/YY" /></div>
              <div><label style={labelStyle}>CVV</label><input style={inputStyle} value={payment.cvv} onChange={(e) => setPayment({...payment, cvv: e.target.value})} placeholder="123" /></div>
            </div>
          </>
        )}

        {step === 'confirmation' && (
          <>
            <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Order Confirmed</h2>
            <p>Your order has been placed. Confirmation email incoming.</p>
            <p style={{fontSize: 14, color: '#6b7280', marginTop: 8}}>Order #ORD-2024-7842</p>
          </>
        )}

        <div style={{display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 24}}>
          {currentIndex > 0 && step !== 'confirmation' && <button style={btnGhost} onClick={goBack}>Back</button>}
          {step !== 'confirmation' && <button style={btnPrimary} onClick={goNext}>{step === 'payment' ? 'Place Order' : 'Continue'}</button>}
        </div>
      </div>
    </div>
  );
}
