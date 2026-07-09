// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Stack} from '@astryxdesign/core/Stack';
import {Divider} from '@astryxdesign/core/Divider';
import {TabList, Tab} from '@astryxdesign/core/TabList';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    maxWidth: 700,
    padding: 24,
  },
  stepContent: {
    marginTop: 24,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

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
    <div {...stylex.props(styles.container)}>
      <Heading level={1}>Checkout</Heading>

      <TabList value={step} onChange={(v) => setStep(v as Step)} hasDivider>
        <Tab value="cart" label="Cart" />
        <Tab value="shipping" label="Shipping" />
        <Tab value="payment" label="Payment" />
        <Tab value="confirmation" label="Confirmation" />
      </TabList>

      <div {...stylex.props(styles.stepContent)}>
        {step === 'cart' && (
          <Card padding={4}>
            <Stack gap={3}>
              <Heading level={2}>Cart Summary</Heading>
              <div {...stylex.props(styles.row)}>
                <Text>Widget Pro x2</Text>
                <Text>$49.98</Text>
              </div>
              <div {...stylex.props(styles.row)}>
                <Text>Shipping</Text>
                <Text>$5.00</Text>
              </div>
              <Divider />
              <div {...stylex.props(styles.row)}>
                <Text type="label">Total</Text>
                <Text type="label">$54.98</Text>
              </div>
              <Button label="Continue to Shipping" variant="primary" onClick={nextStep} />
            </Stack>
          </Card>
        )}
        {step === 'shipping' && (
          <Card padding={4}>
            <Stack gap={3}>
              <Heading level={2}>Shipping Address</Heading>
              <TextInput label="Street Address" value={address} onChange={setAddress} />
              <TextInput label="City" value={city} onChange={setCity} />
              <Button label="Continue to Payment" variant="primary" onClick={nextStep} />
            </Stack>
          </Card>
        )}
        {step === 'payment' && (
          <Card padding={4}>
            <Stack gap={3}>
              <Heading level={2}>Payment</Heading>
              <TextInput label="Card Number" value={cardNumber} onChange={setCardNumber} />
              <Button label="Place Order" variant="primary" onClick={nextStep} />
            </Stack>
          </Card>
        )}
        {step === 'confirmation' && (
          <Card padding={4}>
            <Stack gap={3}>
              <Heading level={2}>Order Confirmed</Heading>
              <Text>Your order has been placed. You will receive a confirmation email shortly.</Text>
            </Stack>
          </Card>
        )}
      </div>
    </div>
  );
}
