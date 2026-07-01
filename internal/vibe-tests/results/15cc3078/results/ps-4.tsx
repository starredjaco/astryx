// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';

interface ProductDetailProps {
  product?: {
    name: string;
    category: string;
    subcategory: string;
    price: number;
    description: string;
  };
}

export default function ProductDetail({
  product = {
    name: 'Wireless Headphones',
    category: 'Electronics',
    subcategory: 'Audio',
    price: 79.99,
    description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
  },
}: ProductDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href={`/category/${product.category.toLowerCase()}`}>{product.category}</BreadcrumbItem>
        <BreadcrumbItem href={`/category/${product.category.toLowerCase()}/${product.subcategory.toLowerCase()}`}>{product.subcategory}</BreadcrumbItem>
        <BreadcrumbItem isCurrent>{product.name}</BreadcrumbItem>
      </Breadcrumbs>
      <div className="grid grid-cols-2 gap-6">
        <div className="w-full h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
          <Text color="secondary">Product Image</Text>
        </div>
        <Card padding={4}>
          <div className="flex flex-col gap-4">
            <Heading level={1}>{product.name}</Heading>
            <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
            <Text>{product.description}</Text>
            <Button label="Add to Cart" variant="primary" onClick={() => {}} />
            <Button label="Back" variant="ghost" onClick={() => window.history.back()} />
          </div>
        </Card>
      </div>
    </div>
  );
}
