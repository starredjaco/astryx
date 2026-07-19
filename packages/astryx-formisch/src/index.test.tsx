// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file index.test.tsx
 * @output Smoke test: Formisch fields render through Astryx inputs with error wiring
 */

import {describe, it, expect} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import * as React from 'react';
import {useForm, Form} from '@formisch/react';
import * as v from 'valibot';
import {AstryxTextField, AstryxSelectField} from './index';

const Schema = v.object({
  email: v.pipe(v.string(), v.email('Enter a valid email address')),
  role: v.picklist(['admin', 'user']),
});

function TestForm() {
  const form = useForm({schema: Schema});
  return (
    <Form of={form} onSubmit={() => {}}>
      <AstryxTextField of={form} path={['email']} label="Email" type="email" />
      <AstryxSelectField
        of={form}
        path={['role']}
        label="Role"
        options={[
          {value: 'admin', label: 'Admin'},
          {value: 'user', label: 'User'},
        ]}
      />
      <button type="submit">Submit</button>
    </Form>
  );
}

describe('astryx-formisch', () => {
  it('renders Astryx inputs bound to Formisch fields', () => {
    render(<TestForm />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
  });

  it('surfaces schema validation errors on submit', async () => {
    render(<TestForm />);
    fireEvent.click(screen.getByText('Submit'));
    expect(await screen.findByText(/valid email/i)).toBeInTheDocument();
  });
});
