// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const navItems = ['Home', 'Products', 'About', 'Contact'];

export default function ResponsiveNav() {
  const [activePage, setActivePage] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav style={{borderBottom: '1px solid #eee', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <span style={{fontSize: 18, fontWeight: 700}}>MyApp</span>
        <div style={{display: 'flex', gap: 8}}>
          {navItems.map(item => (
            <button key={item} onClick={() => setActivePage(item)} style={{padding: '6px 12px', border: 'none', borderRadius: 6, backgroundColor: activePage === item ? '#f3f4f6' : 'transparent', fontWeight: activePage === item ? 600 : 400, cursor: 'pointer'}}>
              {item}
            </button>
          ))}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{display: 'none', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontSize: 24}}>
          &#9776;
        </button>
      </nav>
      {menuOpen && (
        <div style={{position: 'absolute', top: 64, left: 0, right: 0, backgroundColor: 'white', borderBottom: '1px solid #eee', padding: 16}}>
          {navItems.map(item => (
            <button key={item} onClick={() => {setActivePage(item); setMenuOpen(false);}} style={{display: 'block', width: '100%', textAlign: 'left', padding: '8px 12px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer'}}>
              {item}
            </button>
          ))}
        </div>
      )}
      <main style={{padding: 24}}>
        <p style={{color: '#666'}}>Current page: {activePage}</p>
      </main>
    </div>
  );
}
