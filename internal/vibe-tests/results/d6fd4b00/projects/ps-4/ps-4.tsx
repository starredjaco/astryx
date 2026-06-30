// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Breadcrumbs} from '@astryxdesign/core/Breadcrumbs';
import {BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Badge} from '@astryxdesign/core/Badge';
import {Divider} from '@astryxdesign/core/Divider';
import {Grid} from '@astryxdesign/core/Grid';
import {Card} from '@astryxdesign/core/Card';
import {TabList} from '@astryxdesign/core/TabList';
import {Tab} from '@astryxdesign/core/TabList';

export default function ProductDetailPage() {
  const [activeTab, setActiveTab] = React.useState('description');

  return (
    <Stack gap={6}>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/electronics">Electronics</BreadcrumbItem>
        <BreadcrumbItem href="/electronics/audio">Audio</BreadcrumbItem>
        <BreadcrumbItem isCurrent>Wireless Headphones Pro</BreadcrumbItem>
      </Breadcrumbs>

      <Grid columns={2} gap={6}>
        <Card padding={4}>
          <div style={{aspectRatio: '1', backgroundColor: '#f5f5f5', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Text type="body" size="lg">Product Image</Text>
          </div>
        </Card>

        <Stack gap={4}>
          <Stack gap={2}>
            <Badge>In Stock</Badge>
            <Text type="display" size="md">Wireless Headphones Pro</Text>
            <Text type="display" size="sm">$299.99</Text>
          </Stack>

          <Text type="body" size="md">
            Premium wireless headphones with active noise cancellation,
            40-hour battery life, and spatial audio support.
          </Text>

          <Divider />

          <Stack direction="horizontal" gap={3}>
            <Button variant="filled" size="lg">Add to Cart</Button>
            <Button variant="outlined" size="lg">Add to Wishlist</Button>
          </Stack>
        </Stack>
      </Grid>

      <TabList value={activeTab} onChange={setActiveTab} hasDivider>
        <Tab value="description">Description</Tab>
        <Tab value="specs">Specifications</Tab>
        <Tab value="reviews">Reviews</Tab>
      </TabList>

      {activeTab === 'description' && (
        <Text type="body" size="md">
          Experience immersive audio with our flagship wireless headphones.
          Featuring premium drivers, adaptive noise cancellation, and a comfortable
          over-ear design for all-day listening.
        </Text>
      )}
    </Stack>
  );
}