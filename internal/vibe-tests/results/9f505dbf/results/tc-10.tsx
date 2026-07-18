// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

const INSTALL_COMMAND = 'npm install react react-dom';

export default function DocsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24}}>
      <h1>Getting Started</h1>
      <p style={{color: '#666'}}>Install the dependencies to begin.</p>
      <div style={{position: 'relative', background: '#1e1e2e', borderRadius: 8, padding: 16}}>
        <pre style={{margin: 0, color: '#a6e3a1', fontFamily: 'monospace', fontSize: 14}}>
          <code>$ {INSTALL_COMMAND}</code>
        </pre>
        <button
          onClick={handleCopy}
          style={{position: 'absolute', top: 8, right: 8, padding: '4px 8px', background: 'rgba(255,255,255,0.1)', color: '#cdd6f4', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 12}}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <p style={{color: '#666'}}>Then import React in your files:</p>
      <pre style={{background: '#f5f5f5', padding: 12, borderRadius: 4, fontSize: 14}}>
        <code>{`import React from 'react';`}</code>
      </pre>
    </div>
  );
}
