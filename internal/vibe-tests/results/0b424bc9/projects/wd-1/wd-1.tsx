// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/Stack';
import {HStack} from '@astryxdesign/core/Stack';
import {Divider} from '@astryxdesign/core/Divider';

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
          <div
            key={s}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              i <= currentIndex ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>

      <Card padding={4}>
        <VStack gap={4}>
          {step === 'cart' && (
            <>
              <Heading level={2}>Cart Summary</Heading>
              <VStack gap={2}>
                <HStack gap={2} hAlign="between"><Text>Widget Pro x2</Text><Text>$59.98</Text></HStack>
                <HStack gap={2} hAlign="between"><Text>Gadget Lite x1</Text><Text>$24.99</Text></HStack>
                <Divider />
                <HStack gap={2} hAlign="between"><Text weight="bold">Total</Text><Text weight="bold">$84.97</Text></HStack>
              </VStack>
            </>
          )}

          {step === 'shipping' && (
            <>
              <Heading level={2}>Shipping Address</Heading>
              <VStack gap={3}>
                <TextInput label="Full Name" value={shipping.name} onChange={(v) => setShipping({...shipping, name: v})} />
                <TextInput label="Address" value={shipping.address} onChange={(v) => setShipping({...shipping, address: v})} />
                <div className="grid grid-cols-2 gap-4">
                  <TextInput label="City" value={shipping.city} onChange={(v) => setShipping({...shipping, city: v})} />
                  <TextInput label="ZIP Code" value={shipping.zip} onChange={(v) => setShipping({...shipping, zip: v})} />
                </div>
              </VStack>
            </>
          )}

          {step === 'payment' && (
            <>
              <Heading level={2}>Payment</Heading>
              <VStack gap={3}>
                <TextInput label="Card Number" value={payment.card} onChange={(v) => setPayment({...payment, card: v})} placeholder="1234 5678 9012 3456" />
                <div className="grid grid-cols-2 gap-4">
                  <TextInput label="Expiry" value={payment.expiry} onChange={(v) => setPayment({...payment, expiry: v})} placeholder="MM/YY" />
                  <TextInput label="CVV" value={payment.cvv} onChange={(v) => setPayment({...payment, cvv: v})} placeholder="123" />
                </div>
              </VStack>
            </>
          )}

          {step === 'confirmation' && (
            <>
              <Heading level={2}>Order Confirmed</Heading>
              <Text>Your order has been placed. Confirmation email incoming.</Text>
              <Text type="supporting">Order #ORD-2024-7842</Text>
            </>
          )}

          <HStack gap={2} hAlign="end">
            {currentIndex > 0 && step !== 'confirmation' && <Button label="Back" variant="ghost" onClick={goBack} />}
            {step !== 'confirmation' && <Button label={step === 'payment' ? 'Place Order' : 'Continue'} variant="primary" onClick={goNext} />}
          </HStack>
        </VStack>
      </Card>
    </div>
  );
}
