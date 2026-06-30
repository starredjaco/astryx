// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';

export default function LandingHero() {
  return (
    <section style={{padding: '80px 16px', textAlign: 'center', fontFamily: 'system-ui'}}>
      <div style={{maxWidth: 720, margin: '0 auto'}}>
        <h1 style={{fontSize: 48, fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 16}}>Build faster with XDS</h1>
        <p style={{fontSize: 18, color: '#6b7280', marginBottom: 32}}>A composable design system for polished UIs without the complexity.</p>
        <button style={{padding: '14px 28px', fontSize: 16, backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer'}}>Get Started</button>
      </div>
    </section>
  );
}