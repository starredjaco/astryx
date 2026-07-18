// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Divider} from '@astryxdesign/core/Divider';
import {Code} from '@astryxdesign/core/Code';
import {CodeBlock} from '@astryxdesign/core/CodeBlock';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {List} from '@astryxdesign/core/List';
import {Blockquote} from '@astryxdesign/core/Blockquote';

export default function ArticlePage() {
  return (
    <article>
      <VStack gap="lg">
        <VStack gap="md">
          <Heading level={1}>Building Accessible Design Systems</Heading>
          <Text size="lg" color="secondary">
            How to create components that work for everyone, from keyboard-only users to screen reader audiences.
          </Text>
          <Divider />
          <HStack gap="sm" align="center">
            <Avatar name="Sarah Johnson" size="sm" />
            <VStack gap="xs">
              <Text weight="bold" size="sm">Sarah Johnson</Text>
              <Text size="sm" color="secondary">July 18, 2026</Text>
            </VStack>
          </HStack>
        </VStack>

        <Divider />

        <VStack gap="md">
          <Heading level={2}>Why Accessibility Matters</Heading>
          <Text>
            Accessibility is not an afterthought. When you build a design system, every component
            becomes a multiplier — if it is accessible, every instance across your app benefits.
            If it is not, every instance inherits the same barrier.
          </Text>

          <Blockquote>
            The power of the Web is in its universality. Access by everyone regardless of disability
            is an essential aspect. — Tim Berners-Lee
          </Blockquote>

          <Heading level={3}>Key Principles</Heading>
          <List>
            <List.Item>Semantic HTML provides a foundation for assistive technology</List.Item>
            <List.Item>Keyboard navigation must work without a mouse</List.Item>
            <List.Item>Color alone should never convey meaning</List.Item>
            <List.Item>Focus management preserves user orientation</List.Item>
          </List>

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

          <Heading level={3}>Testing Checklist</Heading>
          <List ordered>
            <List.Item>Tab through all interactive elements</List.Item>
            <List.Item>Verify screen reader announcements</List.Item>
            <List.Item>Test with high contrast mode</List.Item>
            <List.Item>Ensure focus is visible at all times</List.Item>
          </List>
        </VStack>
      </VStack>
    </article>
  );
}
