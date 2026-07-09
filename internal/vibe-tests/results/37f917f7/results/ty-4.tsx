// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

export default function SettingsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [emailDigest, setEmailDigest] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <div style={{maxWidth: 600, padding: 24, fontFamily: 'system-ui'}}>
      <h1>Settings</h1>

      <section style={{marginBottom: 32}}>
        <h2>Profile</h2>
        <p style={{color: '#6b7280', fontSize: 14}}>Manage your personal information.</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12}}>
          <div><label style={{display: 'block', marginBottom: 4, fontWeight: 500, fontSize: 14}}>Display Name</label><input value={name} onChange={e => setName(e.target.value)} style={{width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6}} /></div>
          <div><label style={{display: 'block', marginBottom: 4, fontWeight: 500, fontSize: 14}}>Email</label><input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6}} /></div>
        </div>
      </section>

      <hr style={{border: 'none', borderTop: '1px solid #e5e7eb', margin: '24px 0'}} />

      <section style={{marginBottom: 32}}>
        <h2>Notifications</h2>
        <p style={{color: '#6b7280', fontSize: 14}}>Control how you receive notifications.</p>
        <div style={{display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12}}>
          <label style={{display: 'flex', alignItems: 'center', gap: 8}}><input type="checkbox" checked={notifications} onChange={e => setNotifications(e.target.checked)} /> Push notifications</label>
          <label style={{display: 'flex', alignItems: 'center', gap: 8}}><input type="checkbox" checked={emailDigest} onChange={e => setEmailDigest(e.target.checked)} /> Email digest</label>
        </div>
      </section>

      <hr style={{border: 'none', borderTop: '1px solid #e5e7eb', margin: '24px 0'}} />

      <section>
        <h2>Preferences</h2>
        <p style={{color: '#6b7280', fontSize: 14}}>Customize your experience.</p>
        <div style={{marginTop: 12}}>
          <label style={{display: 'block', marginBottom: 4, fontWeight: 500, fontSize: 14}}>Language</label>
          <select value={language} onChange={e => setLanguage(e.target.value)} style={{width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6}}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
      </section>
    </div>
  );
}
