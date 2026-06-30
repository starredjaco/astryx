// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Center} from '@astryxdesign/core/Center';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  hero: {
    paddingTop: 80,
    paddingBottom: 80,
  },
});

export default function LandingHero() {
  return (
    <Center xstyle={styles.hero}>
      <Stack gap={6} align="center" style={{maxWidth: 720, textAlign: 'center'}}>
        <Text type="display" size="lg">
          Build faster with XDS
        </Text>
        <Text type="body" size="lg">
          A composable design system that scales from prototype to production.
          Ship polished UIs without wrestling with CSS or reinventing components.
        </Text>
        <Button variant="filled" size="lg">
          Get Started
        </Button>
      </Stack>
    </Center>
  );
}