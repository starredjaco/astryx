// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Label} from '@/components/ui/label';
import {Separator} from '@/components/ui/separator';

const STEPS = ['Cart', 'Shipping', 'Payment', 'Confirmation'];

export default function CheckoutFlow() {
  const [step, setStep] = useState(0);
  const [shipping, setShipping] = useState({name: '', address: '', city: '', zip: ''});
  const [payment, setPayment] = useState({card: '', expiry: '', cvv: ''});

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="flex gap-2 mb-6">
        {STEPS.map((s, i) => (
          <span key={s} className={`text-sm ${i === step ? 'font-semibold text-primary' : 'text-muted-foreground'}`}>
            {i + 1}. {s}
          </span>
        ))}
      </div>

      <Card>
        <CardHeader><CardTitle>{STEPS[step]}</CardTitle></CardHeader>
        <CardContent>
          {step === 0 && (
            <>
              <div className="flex justify-between py-2"><span>Widget Pro</span><span className="font-semibold">$49.99</span></div>
              <div className="flex justify-between py-2"><span>Adapter Cable</span><span className="font-semibold">$12.99</span></div>
              <Separator className="my-2" />
              <div className="flex justify-between py-2"><span className="font-bold">Total</span><span className="font-bold">$62.98</span></div>
            </>
          )}
          {step === 1 && (
            <div className="flex flex-col gap-3">
              <div><Label>Full Name</Label><Input value={shipping.name} onChange={(e) => setShipping({...shipping, name: e.target.value})} /></div>
              <div><Label>Address</Label><Input value={shipping.address} onChange={(e) => setShipping({...shipping, address: e.target.value})} /></div>
              <div><Label>City</Label><Input value={shipping.city} onChange={(e) => setShipping({...shipping, city: e.target.value})} /></div>
              <div><Label>ZIP Code</Label><Input value={shipping.zip} onChange={(e) => setShipping({...shipping, zip: e.target.value})} /></div>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col gap-3">
              <div><Label>Card Number</Label><Input value={payment.card} onChange={(e) => setPayment({...payment, card: e.target.value})} /></div>
              <div><Label>Expiry</Label><Input value={payment.expiry} onChange={(e) => setPayment({...payment, expiry: e.target.value})} /></div>
              <div><Label>CVV</Label><Input value={payment.cvv} onChange={(e) => setPayment({...payment, cvv: e.target.value})} /></div>
            </div>
          )}
          {step === 3 && <p>Your order has been placed. You will receive a confirmation email shortly.</p>}
        </CardContent>
      </Card>

      <div className="flex justify-between mt-6">
        {step > 0 && <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>}
        {step < 3 && <Button onClick={() => setStep(step + 1)}>{step === 2 ? 'Place Order' : 'Continue'}</Button>}
      </div>
    </div>
  );
}
