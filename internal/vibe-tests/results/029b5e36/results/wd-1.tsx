// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Separator} from '@/components/ui/separator';

type Step = 'cart' | 'shipping' | 'payment' | 'confirmation';

export default function CheckoutFlow() {
  const [step, setStep] = useState<Step>('cart');
  const [shipping, setShipping] = useState({name: '', address: '', city: '', zip: ''});
  const [payment, setPayment] = useState({card: '', expiry: '', cvv: ''});

  const steps: Step[] = ['cart', 'shipping', 'payment', 'confirmation'];
  const currentIndex = steps.indexOf(step);
  const goNext = () => { const next = steps[currentIndex + 1]; if (next) {setStep(next);} };
  const goBack = () => { const prev = steps[currentIndex - 1]; if (prev) {setStep(prev);} };

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="flex justify-center gap-2 mb-6">
        {steps.map((s, i) => (
          <div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${i <= currentIndex ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
            {i + 1}
          </div>
        ))}
      </div>

      <Card>
        <CardContent className="pt-6 space-y-4">
          {step === 'cart' && (
            <>
              <CardHeader className="p-0"><CardTitle>Cart Summary</CardTitle></CardHeader>
              <div className="space-y-2">
                <div className="flex justify-between"><span>Widget Pro x2</span><span>$59.98</span></div>
                <div className="flex justify-between"><span>Gadget Lite x1</span><span>$24.99</span></div>
                <Separator />
                <div className="flex justify-between font-bold"><span>Total</span><span>$84.97</span></div>
              </div>
            </>
          )}

          {step === 'shipping' && (
            <>
              <CardHeader className="p-0"><CardTitle>Shipping Address</CardTitle></CardHeader>
              <div className="space-y-3">
                <div><Label htmlFor="name">Full Name</Label><Input id="name" value={shipping.name} onChange={(e) => setShipping({...shipping, name: e.target.value})} /></div>
                <div><Label htmlFor="address">Address</Label><Input id="address" value={shipping.address} onChange={(e) => setShipping({...shipping, address: e.target.value})} /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><Label htmlFor="city">City</Label><Input id="city" value={shipping.city} onChange={(e) => setShipping({...shipping, city: e.target.value})} /></div>
                  <div><Label htmlFor="zip">ZIP</Label><Input id="zip" value={shipping.zip} onChange={(e) => setShipping({...shipping, zip: e.target.value})} /></div>
                </div>
              </div>
            </>
          )}

          {step === 'payment' && (
            <>
              <CardHeader className="p-0"><CardTitle>Payment</CardTitle></CardHeader>
              <div className="space-y-3">
                <div><Label htmlFor="card">Card Number</Label><Input id="card" value={payment.card} onChange={(e) => setPayment({...payment, card: e.target.value})} placeholder="1234 5678 9012 3456" /></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><Label htmlFor="expiry">Expiry</Label><Input id="expiry" value={payment.expiry} onChange={(e) => setPayment({...payment, expiry: e.target.value})} placeholder="MM/YY" /></div>
                  <div><Label htmlFor="cvv">CVV</Label><Input id="cvv" value={payment.cvv} onChange={(e) => setPayment({...payment, cvv: e.target.value})} placeholder="123" /></div>
                </div>
              </div>
            </>
          )}

          {step === 'confirmation' && (
            <>
              <CardHeader className="p-0"><CardTitle>Order Confirmed</CardTitle></CardHeader>
              <p>Your order has been placed. Confirmation email incoming.</p>
              <p className="text-sm text-muted-foreground">Order #ORD-2024-7842</p>
            </>
          )}

          <div className="flex justify-end gap-2 pt-4">
            {currentIndex > 0 && step !== 'confirmation' && <Button variant="ghost" onClick={goBack}>Back</Button>}
            {step !== 'confirmation' && <Button onClick={goNext}>{step === 'payment' ? 'Place Order' : 'Continue'}</Button>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
