# @astryxdesign/astryx-formisch

Astryx bindings for [Formisch](https://formisch.dev). Thin bridge components that
connect Formisch's schema-driven field state to Astryx inputs, so you can build
type-safe forms with the Astryx design system.

## Install

```
pnpm add @astryxdesign/astryx-formisch @formisch/react valibot @astryxdesign/core
```

## How it works

Formisch drives form state from a [Valibot](https://valibot.dev) schema. You create
a form with `useForm`, wrap it in `<Form>`, and this package's bridge components
render each field with the matching Astryx input. Errors from the schema are wired
into each input's status automatically.

## Quick start

```tsx
import {useForm, Form} from '@formisch/react';
import * as v from 'valibot';
import {AstryxTextField} from '@astryxdesign/astryx-formisch';
import {Button} from '@astryxdesign/core';

const LoginSchema = v.object({
  email: v.pipe(v.string(), v.email()),
  password: v.pipe(v.string(), v.minLength(8)),
});

export function LoginForm() {
  const form = useForm({schema: LoginSchema});

  return (
    <Form of={form} onSubmit={(output) => console.log(output)}>
      <AstryxTextField of={form} path={['email']} label="Email" type="email" />
      <AstryxTextField of={form} path={['password']} label="Password" type="password" />
      <Button type="submit" label="Log in">Log in</Button>
    </Form>
  );
}
```

## Bridge components

Each takes `of` (the form store), `path` (the field path), and `label`, plus the
common `description`, `isOptional`, `isDisabled`, and `data-testid`.

| Component | Astryx input | Extra props |
| --- | --- | --- |
| `AstryxTextField` | `TextInput` | `type` ('text' \| 'email' \| 'password'), `placeholder` |
| `AstryxTextAreaField` | `TextArea` | `placeholder` |
| `AstryxNumberField` | `NumberInput` | `min`, `max`, `isIntegerOnly` |
| `AstryxCheckboxField` | `CheckboxInput` | — |
| `AstryxSelectField` | `Selector` | `options` |

## Validation

Validation lives in the Valibot schema. Add constraints with `v.pipe`:

```tsx
const Schema = v.object({
  quantity: v.pipe(v.number(), v.minValue(1), v.maxValue(99), v.integer()),
  priority: v.picklist(['low', 'high']),
});
```

Errors surface on the corresponding field's Astryx input. For cross-field rules,
use Valibot's `v.forward` / `v.check` on the object schema. For async / server-side
checks, handle them in the `<Form>` `onSubmit`.

## Notes

`AstryxSelectField` needs an `options` array (`{value, label}`) since Astryx
`Selector` renders explicit options. Everything else is inferred from the schema.
