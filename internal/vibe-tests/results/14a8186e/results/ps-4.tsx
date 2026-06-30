// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';

export default function ProductPage() {
  return (
    <div style={{maxWidth: 1000, margin: '0 auto', padding: 24, fontFamily: 'system-ui'}}>
      <nav style={{fontSize: 14, color: '#6b7280', marginBottom: 24}}>
        <a href="/" style={{color: '#6b7280'}}>Home</a> / <a href="/electronics" style={{color: '#6b7280'}}>Electronics</a> / <a href="/audio" style={{color: '#6b7280'}}>Audio</a> / <span style={{color: '#111'}}>Headphones Pro</span>
      </nav>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32}}>
        <div style={{aspectRatio: '1', backgroundColor: '#f3f4f6', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Image</div>
        <div>
          <span style={{display: 'inline-block', fontSize: 12, backgroundColor: '#dcfce7', color: '#16a34a', padding: '2px 8px', borderRadius: 12, marginBottom: 8}}>In Stock</span>
          <h1 style={{fontSize: 28, fontWeight: 700, marginBottom: 8}}>Wireless Headphones Pro</h1>
          <p style={{fontSize: 24, fontWeight: 600, marginBottom: 16}}>$299.99</p>
          <p style={{color: '#6b7280', marginBottom: 24}}>Premium ANC headphones with 40h battery.</p>
          <div style={{display: 'flex', gap: 12}}>
            <button style={{padding: '12px 24px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Add to Cart</button>
            <button style={{padding: '12px 24px', border: '1px solid #d1d5db', borderRadius: 6, cursor: 'pointer'}}>Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}