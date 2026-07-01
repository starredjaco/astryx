// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';

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
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li><a href="/" className="hover:text-foreground">Home</a></li>
          <li>/</li>
          <li><a href={`/category/${product.category.toLowerCase()}`} className="hover:text-foreground">{product.category}</a></li>
          <li>/</li>
          <li><a href={`/category/${product.category.toLowerCase()}/${product.subcategory.toLowerCase()}`} className="hover:text-foreground">{product.subcategory}</a></li>
          <li>/</li>
          <li className="text-foreground font-medium">{product.name}</li>
        </ol>
      </nav>
      <div className="grid grid-cols-2 gap-6">
        <div className="w-full h-[300px] bg-muted rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground">Product Image</span>
        </div>
        <Card>
          <CardContent className="p-6 space-y-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-3xl font-semibold">${product.price.toFixed(2)}</p>
            <Separator />
            <p className="text-muted-foreground">{product.description}</p>
            <div className="flex gap-3">
              <Button>Add to Cart</Button>
              <Button variant="ghost" onClick={() => window.history.back()}>Back</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
