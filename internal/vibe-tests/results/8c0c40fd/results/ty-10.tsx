// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Divider} from '@astryxdesign/core/Divider';
import {Code} from '@astryxdesign/core/Code';
import {CodeBlock} from '@astryxdesign/core/CodeBlock';
import {Blockquote} from '@astryxdesign/core/Blockquote';

export default function ArticlePage() {
  return (
    <article className="max-w-3xl mx-auto flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <Heading level={1}>Building Accessible Design Systems</Heading>
        <Text size="lg" color="secondary">
          How to create components that work for everyone.
        </Text>
        <Divider />
        <div className="flex items-center gap-3">
          <Avatar name="Sarah Johnson" size="sm" />
          <div>
            <Text weight="bold" size="sm">Sarah Johnson</Text>
            <Text size="sm" color="secondary">July 18, 2026</Text>
          </div>
        </div>
      </header>

      <Divider />

      <section className="flex flex-col gap-4">
        <Heading level={2}>Why Accessibility Matters</Heading>
        <Text>
          When you build a design system, every component becomes a multiplier. If accessible,
          every instance benefits. If not, every instance inherits the same barrier.
        </Text>

        <Blockquote>
          The power of the Web is in its universality. Access by everyone regardless of disability
          is an essential aspect. -- Tim Berners-Lee
        </Blockquote>

        <Heading level={3}>Key Principles</Heading>
        <ul className="list-disc pl-6 space-y-1">
          <li><Text>Semantic HTML provides a foundation for assistive technology</Text></li>
          <li><Text>Keyboard navigation must work without a mouse</Text></li>
          <li><Text>Color alone should never convey meaning</Text></li>
          <li><Text>Focus management preserves user orientation</Text></li>
        </ul>

        <Heading level={2}>Implementation Example</Heading>
        <Text>
          Consider a <Code>Dialog</Code> component. It must trap focus, return focus on close,
          and announce its label to screen readers.
        </Text>

        <CodeBlock language="tsx">{`function Dialog({ title, children, onClose }) {
  return (
    <dialog aria-labelledby="dialog-title">
      <h2 id="dialog-title">{title}</h2>
      {children}
      <button onClick={onClose}>Close</button>
    </dialog>
  );
}`}</CodeBlock>
      </section>
    </article>
  );
}
