# @astryxdesign/astryx-rhf

Astryx bindings for [React Hook Form](https://react-hook-form.com). Thin bridge
components that connect RHF's `Controller` field state to Astryx inputs.

## Install

```
pnpm add @astryxdesign/astryx-rhf react-hook-form @hookform/resolvers zod @astryxdesign/core
```

## How it works

React Hook Form manages form state through `useForm`. Validation typically comes
from a Zod schema via `zodResolver`. This package's bridge components wrap RHF's
`Controller` so each field renders the matching Astryx input, with the field's
error wired into the input's status.

## Quick start

```tsx
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {AstryxTextField} from '@astryxdesign/astryx-rhf';
import {Button} from '@astryxdesign/core';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export function LoginForm() {
  const {control, handleSubmit} = useForm({
    resolver: zodResolver(schema),
    defaultValues: {email: '', password: ''},
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <AstryxTextField control={control} name="email" label="Email" type="email" />
      <AstryxTextField control={control} name="password" label="Password" type="password" />
      <Button type="submit" label="Log in">Log in</Button>
    </form>
  );
}
```

## Bridge components

Each takes `control` (from `useForm`), `name` (the field name), and `label`, plus
the common `description`, `isOptional`, `isDisabled`, and `data-testid`.

| Component | Astryx input | Extra props |
| --- | --- | --- |
| `AstryxTextField` | `TextInput` | `type` ('text' \| 'email' \| 'password'), `placeholder` |
| `AstryxTextAreaField` | `TextArea` | `placeholder` |
| `AstryxNumberField` | `NumberInput` | `min`, `max`, `isIntegerOnly` |
| `AstryxCheckboxField` | `CheckboxInput` | — |
| `AstryxSelectField` | `Selector` | `options` |

## Validation

Define rules in a Zod schema and pass `zodResolver(schema)` to `useForm`. Field
errors appear on the corresponding Astryx input. For cross-field rules use Zod's
`.refine` / `.superRefine`. For async / server-side validation, run it in your
`handleSubmit` callback and call `setError` for server responses.

## Notes

`AstryxSelectField` needs an `options` array (`{value, label}`). Set
`defaultValues` on `useForm` so fields are controlled from the first render.
