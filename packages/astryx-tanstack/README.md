# @astryxdesign/astryx-tanstack

Astryx bindings for [TanStack Form](https://tanstack.com/form/latest). Reusable
field components that connect TanStack Form's field state to Astryx inputs.

## Install

```
pnpm add @astryxdesign/astryx-tanstack @tanstack/react-form @astryxdesign/core
```

## How it works

This package exposes the shared field/form contexts and a set of field components
built on top of them. You wire the contexts into `createFormHook` once, which
gives you a `useAppForm` hook whose fields render Astryx inputs. Errors from your
validators are wired into each input's status.

## Quick start

```tsx
import {createFormHook} from '@tanstack/react-form';
import * as z from 'zod';
import {
  fieldContext,
  formContext,
  AstryxTextField,
} from '@astryxdesign/astryx-tanstack';
import {Button} from '@astryxdesign/core';

const {useAppForm} = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {AstryxTextField},
  formComponents: {},
});

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function LoginForm() {
  const form = useAppForm({
    defaultValues: {email: '', password: ''},
    validators: {onChange: schema},
    onSubmit: ({value}) => console.log(value),
  });

  return (
    <form onSubmit={(e) => {e.preventDefault(); form.handleSubmit();}}>
      <form.AppField name="email">
        {() => <AstryxTextField label="Email" type="email" />}
      </form.AppField>
      <form.AppField name="password">
        {() => <AstryxTextField label="Password" type="password" />}
      </form.AppField>
      <Button type="submit" label="Log in">Log in</Button>
    </form>
  );
}
```

## Field components

Each reads the field it's bound to via context, so it only needs presentational
props: `label`, plus the common `description`, `isOptional`, `isDisabled`, and
`data-testid`.

| Component | Astryx input | Extra props |
| --- | --- | --- |
| `AstryxTextField` | `TextInput` | `type` ('text' \| 'email' \| 'password'), `placeholder` |
| `AstryxTextAreaField` | `TextArea` | `placeholder` |
| `AstryxNumberField` | `NumberInput` | `min`, `max`, `isIntegerOnly` |
| `AstryxCheckboxField` | `CheckboxInput` | — |
| `AstryxSelectField` | `Selector` | `options` |

## Validation

TanStack Form accepts any Standard Schema validator (Zod, Valibot, etc.) via the
`validators` option (`onChange`, `onBlur`, `onSubmit`, `onChangeAsync`, …). Field
errors surface on the corresponding Astryx input. For async / server-side checks,
use `onSubmitAsync` or an async field validator.

## Notes

Register the field components you use in `createFormHook`'s `fieldComponents` so
`form.AppField` can resolve them. `AstryxSelectField` needs an `options` array.
