// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from '../components/ui/breadcrumb';
import {Button} from '../components/ui/button';
import {Card, CardContent} from '../components/ui/card';

export default function ProductDetail() {
  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink href="/cat">Category</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink href="/cat/sub">Subcategory</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>Wireless Headphones Pro</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardContent className="pt-6 space-y-4">
          <h1 className="text-3xl font-bold">Wireless Headphones Pro</h1>
          <p className="text-muted-foreground">Premium noise-cancelling headphones.</p>
          <p className="text-2xl font-bold">$299.99</p>
          <p>Experience crystal-clear audio with active noise cancellation and 30-hour battery.</p>
          <div className="flex gap-2">
            <Button>Add to Cart</Button>
            <Button variant="outline" onClick={() => window.history.back()}>Back</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
