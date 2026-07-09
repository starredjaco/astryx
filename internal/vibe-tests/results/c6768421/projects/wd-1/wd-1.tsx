// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '@/components/ui/tabs';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {Separator} from '@/components/ui/separator';

export default function CheckoutFlow() {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <Tabs defaultValue="cart">
        <TabsList><TabsTrigger value="cart">Cart</TabsTrigger><TabsTrigger value="shipping">Shipping</TabsTrigger><TabsTrigger value="payment">Payment</TabsTrigger><TabsTrigger value="confirmation">Confirmation</TabsTrigger></TabsList>
        <TabsContent value="cart">
          <Card><CardHeader><CardTitle>Cart Summary</CardTitle></CardHeader><CardContent className="space-y-2">
            <div className="flex justify-between"><span>Widget Pro x2</span><span>$49.98</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>$5.00</span></div>
            <Separator />
            <div className="flex justify-between font-bold"><span>Total</span><span>$54.98</span></div>
          </CardContent></Card>
        </TabsContent>
        <TabsContent value="shipping">
          <Card><CardHeader><CardTitle>Shipping</CardTitle></CardHeader><CardContent className="space-y-3">
            <div><Label>Street Address</Label><Input value={address} onChange={e => setAddress(e.target.value)} /></div>
            <div><Label>City</Label><Input value={city} onChange={e => setCity(e.target.value)} /></div>
          </CardContent></Card>
        </TabsContent>
        <TabsContent value="payment">
          <Card><CardHeader><CardTitle>Payment</CardTitle></CardHeader><CardContent className="space-y-3">
            <div><Label>Card Number</Label><Input value={cardNumber} onChange={e => setCardNumber(e.target.value)} /></div>
            <Button className="w-full">Place Order</Button>
          </CardContent></Card>
        </TabsContent>
        <TabsContent value="confirmation">
          <Card><CardHeader><CardTitle>Order Confirmed</CardTitle></CardHeader><CardContent>
            <p>Your order has been placed. Confirmation email incoming.</p>
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
