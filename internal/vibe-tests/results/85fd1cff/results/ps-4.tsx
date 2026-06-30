// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Button} from '../components/ui/button';
import {Badge} from '../components/ui/badge';
import {Separator} from '../components/ui/separator';
import {Tabs, TabsList, TabsTrigger, TabsContent} from '../components/ui/tabs';

export default function ProductPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <nav className="text-sm text-muted-foreground">
        <a href="/" className="hover:underline">Home</a> / <a href="/electronics" className="hover:underline">Electronics</a> / <a href="/electronics/audio" className="hover:underline">Audio</a> / <span className="text-foreground">Headphones Pro</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">Image</div>
        <div className="space-y-4">
          <Badge>In Stock</Badge>
          <h1 className="text-3xl font-bold">Wireless Headphones Pro</h1>
          <p className="text-2xl font-semibold">$299.99</p>
          <p className="text-muted-foreground">Premium ANC headphones with 40h battery.</p>
          <Separator />
          <div className="flex gap-3">
            <Button size="lg">Add to Cart</Button>
            <Button variant="outline" size="lg">Wishlist</Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="desc">
        <TabsList>
          <TabsTrigger value="desc">Description</TabsTrigger>
          <TabsTrigger value="specs">Specs</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="desc"><p>Premium wireless headphones with adaptive ANC.</p></TabsContent>
      </Tabs>
    </div>
  );
}