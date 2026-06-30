// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Button} from '../components/ui/button';

export default function LandingHero() {
  return (
    <section className="py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">Build faster with XDS</h1>
        <p className="text-xl text-muted-foreground">A composable design system for polished UIs without the complexity.</p>
        <Button size="lg">Get Started</Button>
      </div>
    </section>
  );
}