// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const navSections = [
  {title: 'Account', items: ['Profile', 'Security', 'Notifications']},
  {title: 'Preferences', items: ['Appearance', 'Language']},
];

export default function SettingsDashboard() {
  const [activePage, setActivePage] = useState('Profile');
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState('');

  return (
    <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      <header style={{borderBottom: '1px solid #eee', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center'}}>
        <h1 style={{fontSize: 18, fontWeight: 700, margin: 0}}>Settings</h1>
      </header>
      <div style={{display: 'flex', flex: 1}}>
        <aside style={{width: 240, borderRight: '1px solid #eee', padding: 16}}>
          {navSections.map(s => (
            <div key={s.title} style={{marginBottom: 16}}>
              <span style={{fontSize: 11, fontWeight: 500, color: '#888', textTransform: 'uppercase'}}>{s.title}</span>
              {s.items.map(item => (
                <button key={item} onClick={() => setActivePage(item)} style={{display: 'block', width: '100%', textAlign: 'left', padding: '8px 12px', border: 'none', borderRadius: 6, backgroundColor: activePage === item ? '#f3f4f6' : 'transparent', fontWeight: activePage === item ? 500 : 400, cursor: 'pointer', marginTop: 2}}>
                  {item}
                </button>
              ))}
            </div>
          ))}
        </aside>
        <main style={{flex: 1, padding: 24}}>
          {activePage === 'Profile' && (
            <div>
              <h2 style={{fontSize: 20, fontWeight: 600, margin: '0 0 4px'}}>Profile</h2>
              <p style={{color: '#666', fontSize: 14, margin: '0 0 16px'}}>Manage your public profile.</p>
              <label style={{display: 'block', fontSize: 14, marginBottom: 4}}>Display name</label>
              <input value={name} onChange={e => setName(e.target.value)} style={{width: '100%', maxWidth: 320, padding: '8px 12px', border: '1px solid #ddd', borderRadius: 6, marginBottom: 12}} />
              <br/>
              <button style={{padding: '8px 16px', border: 'none', borderRadius: 6, backgroundColor: '#3b82f6', color: 'white', cursor: 'pointer'}}>Save changes</button>
            </div>
          )}
          {activePage === 'Appearance' && (
            <div>
              <h2 style={{fontSize: 20, fontWeight: 600, margin: '0 0 16px'}}>Appearance</h2>
              <label style={{display: 'flex', alignItems: 'center', gap: 8}}>
                <input type="checkbox" checked={darkMode} onChange={e => setDarkMode(e.target.checked)} /> Dark mode
              </label>
            </div>
          )}
          {activePage !== 'Profile' && activePage !== 'Appearance' && (
            <div>
              <h2 style={{fontSize: 20, fontWeight: 600, margin: '0 0 4px'}}>{activePage}</h2>
              <p style={{color: '#666', fontSize: 14}}>Settings for {activePage.toLowerCase()}.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
