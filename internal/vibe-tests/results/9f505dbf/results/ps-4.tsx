// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';

export default function ProductDetail() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
      <nav aria-label="Breadcrumb">
        <ol style={{listStyle: 'none', display: 'flex', gap: 8, padding: 0, margin: 0, fontSize: 14}}>
          <li><a href="/" style={{color: '#0066cc'}}>Home</a> <span style={{color: '#999'}}>/</span></li>
          <li><a href="/cat" style={{color: '#0066cc'}}>Category</a> <span style={{color: '#999'}}>/</span></li>
          <li><a href="/cat/sub" style={{color: '#0066cc'}}>Subcategory</a> <span style={{color: '#999'}}>/</span></li>
          <li aria-current="page" style={{color: '#333'}}>Wireless Headphones Pro</li>
        </ol>
      </nav>
      <div style={{border: '1px solid #ddd', borderRadius: 8, padding: 24}}>
        <h1 style={{marginTop: 0}}>Wireless Headphones Pro</h1>
        <p style={{color: '#666'}}>Premium noise-cancelling headphones with 30-hour battery.</p>
        <p style={{fontSize: 24, fontWeight: 'bold'}}>$299.99</p>
        <p>Crystal-clear audio with active noise cancellation and Bluetooth 5.3.</p>
        <div style={{display: 'flex', gap: 8, marginTop: 16}}>
          <button style={{padding: '10px 20px', background: '#0066cc', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer'}}>Add to Cart</button>
          <button onClick={() => window.history.back()} style={{padding: '10px 20px', background: 'transparent', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer'}}>Back</button>
        </div>
      </div>
    </div>
  );
}
