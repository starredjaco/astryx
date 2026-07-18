// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';

export default function ProductDetail() {
  return (
    <div className="flex flex-col gap-6">
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/electronics">Electronics</BreadcrumbItem>
        <BreadcrumbItem href="/electronics/audio">Audio</BreadcrumbItem>
        <BreadcrumbItem isCurrent>Wireless Headphones Pro</BreadcrumbItem>
      </Breadcrumbs>

      <Card>
        <div className="flex flex-col gap-4">
          <Heading level={1}>Wireless Headphones Pro</Heading>
          <Text color="secondary">Premium noise-cancelling headphones with 30-hour battery life.</Text>
          <Text size="lg" weight="bold">$299.99</Text>
          <Text>
            Experience crystal-clear audio with active noise cancellation. Features Bluetooth 5.3,
            multipoint connection, and a comfortable over-ear design.
          </Text>
          <div className="flex gap-2">
            <Button onPress={() => {}}>Add to Cart</Button>
            <Button variant="outlined" onPress={() => window.history.back()}>Back</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
