// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';

export default function ArticlePage() {
  return (
    <article style={{maxWidth: 720, margin: '0 auto'}}>
      <header style={{marginBottom: 32}}>
        <h1 style={{fontSize: 36, lineHeight: 1.2, marginBottom: 8}}>Building Accessible Design Systems</h1>
        <p style={{fontSize: 18, color: '#666', marginBottom: 16}}>How to create components that work for everyone.</p>
        <hr />
        <div style={{display: 'flex', alignItems: 'center', gap: 12, marginTop: 12}}>
          <img src="https://i.pravatar.cc/40?u=sarah" alt="Sarah Johnson" style={{width: 36, height: 36, borderRadius: '50%'}} />
          <div>
            <p style={{fontWeight: 'bold', fontSize: 14, margin: 0}}>Sarah Johnson</p>
            <p style={{fontSize: 12, color: '#666', margin: 0}}>July 18, 2026</p>
          </div>
        </div>
      </header>
      <hr />
      <section style={{lineHeight: 1.7}}>
        <h2>Why Accessibility Matters</h2>
        <p>Every component in a design system is a multiplier. If accessible, every instance benefits.</p>
        <blockquote style={{borderLeft: '3px solid #ddd', paddingLeft: 16, margin: '16px 0', color: '#555', fontStyle: 'italic'}}>
          The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect. -- Tim Berners-Lee
        </blockquote>
        <h3>Key Principles</h3>
        <ul>
          <li>Semantic HTML provides a foundation for assistive technology</li>
          <li>Keyboard navigation must work without a mouse</li>
          <li>Color alone should never convey meaning</li>
          <li>Focus management preserves user orientation</li>
        </ul>
        <h2>Implementation</h2>
        <p>Consider a Dialog component. It must trap focus and return focus on close.</p>
        <pre style={{background: '#f5f5f5', padding: 16, borderRadius: 4, overflow: 'auto', fontSize: 14}}><code>{`function Dialog({ title, children, onClose }) {
  return (
    <dialog aria-labelledby="dialog-title">
      <h2 id="dialog-title">{title}</h2>
      {children}
      <button onClick={onClose}>Close</button>
    </dialog>
  );
}`}</code></pre>
        <h3>Testing Checklist</h3>
        <ol>
          <li>Tab through all interactive elements</li>
          <li>Verify screen reader announcements</li>
          <li>Test with high contrast mode</li>
          <li>Ensure focus is visible</li>
        </ol>
      </section>
    </article>
  );
}
