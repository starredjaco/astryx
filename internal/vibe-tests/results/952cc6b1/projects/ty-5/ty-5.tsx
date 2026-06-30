// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Stack} from '@astryxdesign/core/Stack';

export default function LandingHero() {
  return (
    <section className="py-20 px-4 text-center">
      <Stack gap={6} align="center">
        <Text type="display" size="lg">Build faster with XDS</Text>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A composable design system for polished UIs without the complexity.
        </p>
        <Button variant="filled" size="lg">Get Started</Button>
      </Stack>
    </section>
  );
}