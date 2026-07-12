// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';

export default function InstallationExample() {
  return (
    <div style={{maxWidth: 500, margin: '0 auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 8}}>
      <h3 style={{margin: 0}}>Installation</h3>
      <pre style={{backgroundColor: '#f5f5f5', padding: 16, borderRadius: 8, fontFamily: 'monospace', fontSize: 14, margin: 0}}>
        yarn add @astryxdesign/core
      </pre>
      <p style={{color: '#666', fontSize: 13, margin: 0}}>
        Requires React 19 and StyleX as peer dependencies.
      </p>
    </div>
  );
}
