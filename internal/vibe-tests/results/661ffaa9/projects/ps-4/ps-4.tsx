// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function ProductDetail({
  product = {name: 'Wireless Headphones', category: 'Electronics', subcategory: 'Audio', price: 79.99, description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.'}
}: {product?: {name: string; category: string; subcategory: string; price: number; description: string}}) {
  return (
    <div style={{maxWidth: 960, margin: '0 auto', padding: 24}}>
      <nav aria-label="Breadcrumb" style={{marginBottom: 24}}>
        <ol style={{display: 'flex', gap: 8, listStyle: 'none', padding: 0, margin: 0, fontSize: 14, color: '#666'}}>
          <li><a href="/" style={{color: '#666', textDecoration: 'none'}}>Home</a></li>
          <li>/</li>
          <li><a href={`/category/${product.category.toLowerCase()}`} style={{color: '#666', textDecoration: 'none'}}>{product.category}</a></li>
          <li>/</li>
          <li><a href={`/category/${product.category.toLowerCase()}/${product.subcategory.toLowerCase()}`} style={{color: '#666', textDecoration: 'none'}}>{product.subcategory}</a></li>
          <li>/</li>
          <li style={{color: '#333', fontWeight: 500}}>{product.name}</li>
        </ol>
      </nav>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24}}>
        <div style={{height: 300, backgroundColor: '#f5f5f5', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999'}}>Product Image</div>
        <div style={{border: '1px solid #e0e0e0', borderRadius: 8, padding: 24, display: 'flex', flexDirection: 'column', gap: 16}}>
          <h1 style={{margin: 0, fontSize: 24, fontWeight: 700}}>{product.name}</h1>
          <span style={{fontSize: 28, fontWeight: 600}}>${product.price.toFixed(2)}</span>
          <p style={{color: '#666', margin: 0}}>{product.description}</p>
          <button style={{padding: '12px 24px', backgroundColor: '#0d6efd', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 500}}>Add to Cart</button>
          <button onClick={() => window.history.back()} style={{padding: '12px 24px', border: '1px solid #ccc', borderRadius: 6, cursor: 'pointer', backgroundColor: 'transparent'}}>Back</button>
        </div>
      </div>
    </div>
  );
}
