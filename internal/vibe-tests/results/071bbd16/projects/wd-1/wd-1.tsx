// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Divider} from '@astryxdesign/core/Divider';
import {TabList, Tab} from '@astryxdesign/core/TabList';

type Step = 'cart' | 'shipping' | 'payment' | 'confirmation';

export default function CheckoutFlow() {
  const [step, setStep] = useState<Step>('cart');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const nextStep = () => {
    const steps: Step[] = ['cart', 'shipping', 'payment', 'confirmation'];
    const idx = steps.indexOf(step);
    if (idx < steps.length - 1) {setStep(steps[idx + 1]);}
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Heading level={1}>Checkout</Heading>
      <TabList value={step} onChange={(v) => setStep(v as Step)} hasDivider>
        <Tab value="cart" label="Cart" />
        <Tab value="shipping" label="Shipping" />
        <Tab value="payment" label="Payment" />
        <Tab value="confirmation" label="Confirmation" />
      </TabList>
      <div className="mt-6">
        {step === 'cart' && (
          <Card padding={4}>
            <div className="space-y-3">
              <Heading level={2}>Cart Summary</Heading>
              <div className="flex justify-between"><Text>Widget Pro x2</Text><Text>$49.98</Text></div>
              <div className="flex justify-between"><Text>Shipping</Text><Text>$5.00</Text></div>
              <Divider />
              <div className="flex justify-between font-semibold"><Text type="label">Total</Text><Text type="label">$54.98</Text></div>
              <Button label="Continue to Shipping" variant="primary" onClick={nextStep} />
            </div>
          </Card>
        )}
        {step === 'shipping' && (
          <Card padding={4}>
            <div className="space-y-3">
              <Heading level={2}>Shipping Address</Heading>
              <TextInput label="Street Address" value={address} onChange={setAddress} />
              <TextInput label="City" value={city} onChange={setCity} />
              <Button label="Continue to Payment" variant="primary" onClick={nextStep} />
            </div>
          </Card>
        )}
        {step === 'payment' && (
          <Card padding={4}>
            <div className="space-y-3">
              <Heading level={2}>Payment</Heading>
              <TextInput label="Card Number" value={cardNumber} onChange={setCardNumber} />
              <Button label="Place Order" variant="primary" onClick={nextStep} />
            </div>
          </Card>
        )}
        {step === 'confirmation' && (
          <Card padding={4}>
            <div className="space-y-3">
              <Heading level={2}>Order Confirmed</Heading>
              <Text>Your order has been placed. Confirmation email incoming.</Text>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
