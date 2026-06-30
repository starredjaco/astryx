// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Breadcrumbs} from '@astryxdesign/core/Breadcrumbs';
import {BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Badge} from '@astryxdesign/core/Badge';
import {TabList} from '@astryxdesign/core/TabList';
import {Tab} from '@astryxdesign/core/TabList';

export default function ProductPage() {
  const [tab, setTab] = useState('desc');

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/cat">Electronics</BreadcrumbItem>
        <BreadcrumbItem href="/cat/audio">Audio</BreadcrumbItem>
        <BreadcrumbItem isCurrent>Headphones Pro</BreadcrumbItem>
      </Breadcrumbs>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
          <Text type="body">Image</Text>
        </div>
        <Stack gap={4}>
          <Badge>In Stock</Badge>
          <Text type="display" size="md">Wireless Headphones Pro</Text>
          <Text type="display" size="sm">$299.99</Text>
          <Text type="body" size="md">Premium ANC headphones with 40h battery.</Text>
          <div className="flex gap-3">
            <Button variant="filled" size="lg">Add to Cart</Button>
            <Button variant="outlined" size="lg">Wishlist</Button>
          </div>
        </Stack>
      </div>

      <TabList value={tab} onChange={setTab} hasDivider>
        <Tab value="desc">Description</Tab>
        <Tab value="specs">Specs</Tab>
        <Tab value="reviews">Reviews</Tab>
      </TabList>
    </div>
  );
}