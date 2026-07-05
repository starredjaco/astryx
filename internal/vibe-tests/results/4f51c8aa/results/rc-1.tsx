// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const navLinks = [{label: 'Home', href: '/'}, {label: 'Products', href: '/products'}, {label: 'About', href: '/about'}, {label: 'Contact', href: '/contact'}];

export default function ResponsiveNav() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav>
      <div style={{padding: '12px 16px', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <h1 style={{fontSize: 18, fontWeight: 600, margin: 0}}>Acme Co</h1>
        <div className="desktop-links" style={{display: 'flex', gap: 16}}>
          {navLinks.map((link) => (<a key={link.href} href={link.href} style={{color: '#374151', textDecoration: 'none', fontSize: 14}}>{link.label}</a>))}
        </div>
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} aria-label={isMobileOpen ? 'Close menu' : 'Open menu'} style={{display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8}}>
          <svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
        </button>
      </div>
      {isMobileOpen && (
        <div style={{padding: 16, borderBottom: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', gap: 12}}>
          {navLinks.map((link) => (<a key={link.href} href={link.href} style={{color: '#374151', textDecoration: 'none'}}>{link.label}</a>))}
        </div>
      )}
      <style>{`@media (max-width: 768px) { .desktop-links { display: none !important; } nav button { display: block !important; } }`}</style>
    </nav>
  );
}
