// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Text';
import {Divider} from '@astryxdesign/core/Divider';

const STEPS = ['Cart', 'Shipping', 'Payment', 'Confirmation'];

export default function CheckoutFlow() {
  const [step, setStep] = useState(0);
  const [shipping, setShipping] = useState({name: '', address: '', city: '', zip: ''});
  const [payment, setPayment] = useState({card: '', expiry: '', cvv: ''});

  return (
    <div className="max-w-xl mx-auto p-6">
      <div className="flex gap-2 mb-6">
        {STEPS.map((s, i) => (
          <Text key={s} weight={i === step ? 'semibold' : 'normal'} color={i === step ? 'accent' : 'secondary'}>
            {i + 1}. {s}
          </Text>
        ))}
      </div>

      <Card padding={4}>
        {step === 0 && (
          <>
            <Heading level={3}>Cart Summary</Heading>
            <div className="flex justify-between py-2"><Text>Widget Pro</Text><Text weight="semibold">$49.99</Text></div>
            <div className="flex justify-between py-2"><Text>Adapter Cable</Text><Text weight="semibold">$12.99</Text></div>
            <Divider />
            <div className="flex justify-between py-2"><Text weight="bold">Total</Text><Text weight="bold">$62.98</Text></div>
          </>
        )}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <Heading level={3}>Shipping</Heading>
            <TextInput label="Full Name" value={shipping.name} onChange={(v) => setShipping({...shipping, name: v})} />
            <TextInput label="Address" value={shipping.address} onChange={(v) => setShipping({...shipping, address: v})} />
            <TextInput label="City" value={shipping.city} onChange={(v) => setShipping({...shipping, city: v})} />
            <TextInput label="ZIP Code" value={shipping.zip} onChange={(v) => setShipping({...shipping, zip: v})} />
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <Heading level={3}>Payment</Heading>
            <TextInput label="Card Number" value={payment.card} onChange={(v) => setPayment({...payment, card: v})} />
            <TextInput label="Expiry" value={payment.expiry} onChange={(v) => setPayment({...payment, expiry: v})} />
            <TextInput label="CVV" value={payment.cvv} onChange={(v) => setPayment({...payment, cvv: v})} />
          </div>
        )}
        {step === 3 && (
          <>
            <Heading level={3}>Order Confirmed</Heading>
            <Text>Your order has been placed successfully.</Text>
          </>
        )}
      </Card>

      <div className="flex justify-between mt-6">
        {step > 0 && <Button label="Back" variant="secondary" onClick={() => setStep(step - 1)} />}
        {step < 3 && <Button label={step === 2 ? 'Place Order' : 'Continue'} variant="primary" onClick={() => setStep(step + 1)} />}
      </div>
    </div>
  );
}
