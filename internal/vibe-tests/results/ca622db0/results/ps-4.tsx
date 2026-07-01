// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  page: {
    maxWidth: 960,
    margin: '0 auto',
    padding: 24,
  },
  header: {
    marginBottom: 24,
  },
  productInfo: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 24,
  },
  productImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  price: {
    fontSize: 28,
    fontWeight: 600,
  },
});

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
    <div {...stylex.props(styles.page)}>
      <div {...stylex.props(styles.header)}>
        <Breadcrumbs>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href={`/category/${product.category.toLowerCase()}`}>
            {product.category}
          </BreadcrumbItem>
          <BreadcrumbItem href={`/category/${product.category.toLowerCase()}/${product.subcategory.toLowerCase()}`}>
            {product.subcategory}
          </BreadcrumbItem>
          <BreadcrumbItem isCurrent>{product.name}</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      <div {...stylex.props(styles.productInfo)}>
        <div {...stylex.props(styles.productImage)}>
          <Text color="secondary">Product Image</Text>
        </div>
        <Card padding={4}>
          <div {...stylex.props(styles.details)}>
            <Heading level={1}>{product.name}</Heading>
            <span {...stylex.props(styles.price)}>${product.price.toFixed(2)}</span>
            <Text>{product.description}</Text>
            <Button label="Add to Cart" variant="primary" onClick={() => {}} />
            <Button label="Back" variant="ghost" onClick={() => window.history.back()} />
          </div>
        </Card>
      </div>
    </div>
  );
}
