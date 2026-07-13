// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const navItems = ['Home', 'About', 'Services', 'Contact'];

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{width: '100%', borderBottom: '1px solid #e0e0e0'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px'}}>
        <h3 style={{margin: 0, fontSize: 20, fontWeight: 700}}>Brand</h3>
        <div style={{display: 'flex', gap: 8}}>
          {navItems.map(item => (
            <button key={item} style={{padding: '6px 12px', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 14}}>{item}</button>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} style={{padding: 8, background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 20}}>
          ☰
        </button>
      </div>
      {isOpen && (
        <div style={{display: 'flex', flexDirection: 'column', gap: 4, padding: 16, borderTop: '1px solid #e0e0e0'}}>
          {navItems.map(item => (
            <button key={item} style={{padding: '8px 12px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left'}}>{item}</button>
          ))}
        </div>
      )}
    </nav>
  );
}
