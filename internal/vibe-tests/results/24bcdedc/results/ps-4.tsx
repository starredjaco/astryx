// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';

export default function ProductDetail() {
  return (
    <VStack gap="lg">
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/electronics">Electronics</BreadcrumbItem>
        <BreadcrumbItem href="/electronics/audio">Audio</BreadcrumbItem>
        <BreadcrumbItem isCurrent>Wireless Headphones Pro</BreadcrumbItem>
      </Breadcrumbs>

      <Card>
        <VStack gap="md">
          <Heading level={1}>Wireless Headphones Pro</Heading>
          <Text color="secondary">Premium noise-cancelling headphones with 30-hour battery life.</Text>
          <Text size="lg" weight="bold">$299.99</Text>
          <Text>
            Experience crystal-clear audio with active noise cancellation.
            Features Bluetooth 5.3, multipoint connection, and a comfortable over-ear design
            perfect for long listening sessions.
          </Text>
          <HStack gap="sm">
            <Button onPress={() => {}}>Add to Cart</Button>
            <Button variant="outlined" onPress={() => window.history.back()}>
              Back
            </Button>
          </HStack>
        </VStack>
      </Card>
    </VStack>
  );
}
