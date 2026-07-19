// Copyright (c) Meta Platforms, Inc. and affiliates.

/**
 * @file index.test.tsx
 * @output Smoke test: TanStack Form fields render through Astryx inputs with error wiring
 */

import {describe, it, expect} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
import * as React from 'react';
import {createFormHook} from '@tanstack/react-form';
import * as z from 'zod';
import {fieldContext, formContext, AstryxTextField, AstryxSelectField} from './index';

const {useAppForm} = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {AstryxTextField, AstryxSelectField},
  formComponents: {},
});

const schema = z.object({
  email: z.string().email('Enter a valid email address'),
  role: z.enum(['admin', 'user']),
});

function TestForm() {
  const form = useAppForm({
    defaultValues: {email: '', role: 'user' as 'admin' | 'user'},
    validators: {onSubmit: schema},
    onSubmit: () => {},
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <form.AppField name="email">
        {() => <AstryxTextField label="Email" type="email" />}
      </form.AppField>
      <form.AppField name="role">
        {() => (
          <AstryxSelectField
            label="Role"
            options={[
              {value: 'admin', label: 'Admin'},
              {value: 'user', label: 'User'},
            ]}
          />
        )}
      </form.AppField>
      <button type="submit">Submit</button>
    </form>
  );
}

describe('astryx-tanstack', () => {
  it('renders Astryx inputs bound to TanStack fields', () => {
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
