// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const navItems = ['Dashboard', 'Projects', 'Team', 'Settings'];

export default function ResponsiveNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header style={{borderBottom: '1px solid #e0e0e0'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', height: 64, maxWidth: 1200, margin: '0 auto'}}>
          <span style={{fontSize: 18, fontWeight: 700}}>My App</span>
          <nav style={{display: 'flex', gap: 24}}>
            {navItems.map(item => (
              <a key={item} href={`/${item.toLowerCase()}`} style={{textDecoration: 'none', color: '#333', fontSize: 14, fontWeight: 500}}>
                {item}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{display: 'none', padding: 8, border: 'none', backgroundColor: 'transparent', cursor: 'pointer'}}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div style={{position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 100}} onClick={() => setIsMenuOpen(false)}>
          <div style={{position: 'absolute', right: 0, top: 0, bottom: 0, width: 280, backgroundColor: '#fff', padding: 24}} onClick={e => e.stopPropagation()}>
            <nav style={{display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32}}>
              {navItems.map(item => (
                <a key={item} href={`/${item.toLowerCase()}`} style={{textDecoration: 'none', color: '#333', fontSize: 18, fontWeight: 500}}>
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
      <main style={{maxWidth: 1200, margin: '0 auto', padding: 32}}>
        <h1 style={{fontSize: 24, fontWeight: 700, marginBottom: 16}}>Welcome</h1>
        <p style={{color: '#666'}}>Resize the window to see the navigation collapse into a hamburger menu on mobile.</p>
      </main>
      <style>{`
        @media (max-width: 768px) {
          header nav { display: none !important; }
          header button { display: block !important; }
        }
      `}</style>
    </div>
  );
}
