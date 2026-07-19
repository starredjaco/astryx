// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file index.test.tsx
 * @output Smoke test: RHF Controller fields render through Astryx inputs with error wiring
 */

import {describe, it, expect} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import * as React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {AstryxTextField, AstryxSelectField} from './index';

const schema = z.object({
  email: z.string().email('Enter a valid email address'),
  role: z.enum(['admin', 'user']),
});

function TestForm() {
  const {control, handleSubmit} = useForm({
    resolver: zodResolver(schema),
    defaultValues: {email: '', role: 'user' as const},
  });
  return (
    <form onSubmit={handleSubmit(() => {})}>
      <AstryxTextField control={control} name="email" label="Email" type="email" />
      <AstryxSelectField
        control={control}
        name="role"
        label="Role"
        options={[
          {value: 'admin', label: 'Admin'},
          {value: 'user', label: 'User'},
        ]}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

describe('astryx-rhf', () => {
  it('renders Astryx inputs bound to RHF Controller', () => {
    render(<TestForm />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
  });

  it('surfaces zod validation errors on submit', async () => {
    render(<TestForm />);
    fireEvent.click(screen.getByText('Submit'));
    expect(await screen.findByText(/valid email/i)).toBeInTheDocument();
  });
});
