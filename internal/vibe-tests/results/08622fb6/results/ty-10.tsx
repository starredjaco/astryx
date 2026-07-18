// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Avatar, AvatarImage, AvatarFallback} from '../components/ui/avatar';
import {Separator} from '../components/ui/separator';

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto space-y-8">
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Building Accessible Design Systems</h1>
        <p className="text-xl text-muted-foreground">
          How to create components that work for everyone.
        </p>
        <Separator />
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/40?u=sarah" alt="Sarah Johnson" />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">Sarah Johnson</p>
            <p className="text-xs text-muted-foreground">July 18, 2026</p>
          </div>
        </div>
      </header>

      <Separator />

      <section className="space-y-6 prose prose-neutral dark:prose-invert">
        <h2>Why Accessibility Matters</h2>
        <p>
          When you build a design system, every component becomes a multiplier. If accessible,
          every instance benefits. If not, every instance inherits the same barrier.
        </p>
        <blockquote>
          The power of the Web is in its universality. Access by everyone regardless of disability
          is an essential aspect. -- Tim Berners-Lee
        </blockquote>
        <h3>Key Principles</h3>
        <ul>
          <li>Semantic HTML provides a foundation for assistive technology</li>
          <li>Keyboard navigation must work without a mouse</li>
          <li>Color alone should never convey meaning</li>
          <li>Focus management preserves user orientation</li>
        </ul>
        <h2>Implementation</h2>
        <p>Consider a Dialog component. It must trap focus and return focus on close.</p>
        <pre><code>{`function Dialog({ title, children, onClose }) {
  return (
    <dialog aria-labelledby="dialog-title">
      <h2 id="dialog-title">{title}</h2>
      {children}
      <button onClick={onClose}>Close</button>
    </dialog>
  );
}`}</code></pre>
        <h3>Testing Checklist</h3>
        <ol>
          <li>Tab through all interactive elements</li>
          <li>Verify screen reader announcements</li>
          <li>Test with high contrast mode</li>
          <li>Ensure focus is visible at all times</li>
        </ol>
      </section>
    </article>
  );
}
