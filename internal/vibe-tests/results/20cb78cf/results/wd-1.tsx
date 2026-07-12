// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Text';
import {Divider} from '@astryxdesign/core/Divider';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    maxWidth: 600,
    margin: '0 auto',
    padding: 24,
  },
  steps: {
    display: 'flex',
    gap: 8,
    marginBottom: 24,
  },
  stepIndicator: {
    padding: '4px 12px',
    borderRadius: 16,
    backgroundColor: 'var(--color-surface)',
  },
  activeStep: {
    backgroundColor: 'var(--color-accent)',
    color: 'white',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    marginTop: 16,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
  },
});

const STEPS = ['Cart', 'Shipping', 'Payment', 'Confirmation'];

export default function CheckoutFlow() {
  const [step, setStep] = useState(0);
  const [shipping, setShipping] = useState({name: '', address: '', city: '', zip: ''});
  const [payment, setPayment] = useState({card: '', expiry: '', cvv: ''});

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.steps)}>
        {STEPS.map((s, i) => (
          <Text
            key={s}
            weight={i === step ? 'semibold' : 'normal'}
            color={i === step ? 'accent' : 'secondary'}
          >
            {i + 1}. {s}
          </Text>
        ))}
      </div>

      <Card padding={4}>
        {step === 0 && (
          <>
            <Heading level={3}>Cart Summary</Heading>
            <div {...stylex.props(styles.cartItem)}>
              <Text>Widget Pro</Text>
              <Text weight="semibold">$49.99</Text>
            </div>
            <div {...stylex.props(styles.cartItem)}>
              <Text>Adapter Cable</Text>
              <Text weight="semibold">$12.99</Text>
            </div>
            <Divider />
            <div {...stylex.props(styles.cartItem)}>
              <Text weight="bold">Total</Text>
              <Text weight="bold">$62.98</Text>
            </div>
          </>
        )}
        {step === 1 && (
          <div {...stylex.props(styles.form)}>
            <Heading level={3}>Shipping</Heading>
            <TextInput label="Full Name" value={shipping.name} onChange={(v) => setShipping({...shipping, name: v})} />
            <TextInput label="Address" value={shipping.address} onChange={(v) => setShipping({...shipping, address: v})} />
            <TextInput label="City" value={shipping.city} onChange={(v) => setShipping({...shipping, city: v})} />
            <TextInput label="ZIP Code" value={shipping.zip} onChange={(v) => setShipping({...shipping, zip: v})} />
          </div>
        )}
        {step === 2 && (
          <div {...stylex.props(styles.form)}>
            <Heading level={3}>Payment</Heading>
            <TextInput label="Card Number" value={payment.card} onChange={(v) => setPayment({...payment, card: v})} />
            <TextInput label="Expiry" value={payment.expiry} onChange={(v) => setPayment({...payment, expiry: v})} />
            <TextInput label="CVV" value={payment.cvv} onChange={(v) => setPayment({...payment, cvv: v})} />
          </div>
        )}
        {step === 3 && (
          <>
            <Heading level={3}>Order Confirmed</Heading>
            <Text>Your order has been placed. You will receive a confirmation email shortly.</Text>
          </>
        )}
      </Card>

      <div {...stylex.props(styles.actions)}>
        {step > 0 && <Button label="Back" variant="secondary" onClick={() => setStep(step - 1)} />}
        {step < 3 && <Button label={step === 2 ? 'Place Order' : 'Continue'} variant="primary" onClick={() => setStep(step + 1)} />}
      </div>
    </div>
  );
}
