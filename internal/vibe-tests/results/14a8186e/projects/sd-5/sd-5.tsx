// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

function Toggle({label, description, checked, onChange}: {label: string; description: string; checked: boolean; onChange: (v: boolean) => void}) {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0'}}>
      <div>
        <div style={{fontSize: 14, fontWeight: 500}}>{label}</div>
        <div style={{fontSize: 12, color: '#6b7280'}}>{description}</div>
      </div>
      <button
        onClick={() => onChange(!checked)}
        style={{width: 44, height: 24, borderRadius: 12, border: 'none', backgroundColor: checked ? '#2563eb' : '#d1d5db', position: 'relative', cursor: 'pointer', transition: 'background-color 0.2s'}}
      >
        <div style={{width: 20, height: 20, borderRadius: '50%', backgroundColor: '#fff', position: 'absolute', top: 2, left: checked ? 22 : 2, transition: 'left 0.2s'}} />
      </button>
    </div>
  );
}

export default function NotificationPreferences() {
  const [email, setEmail] = useState(true);
  const [push, setPush] = useState(true);
  const [sms, setSms] = useState(false);

  return (
    <div style={{maxWidth: 400, padding: 24, fontFamily: 'system-ui'}}>
      <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 4}}>Notification Preferences</h2>
      <p style={{fontSize: 14, color: '#6b7280', marginBottom: 16}}>Choose how you want to be notified.</p>
      <div style={{borderTop: '1px solid #e5e7eb'}}>
        <Toggle label="Email notifications" description="Digests and announcements" checked={email} onChange={setEmail} />
        <Toggle label="Push notifications" description="Real-time device alerts" checked={push} onChange={setPush} />
        <Toggle label="SMS alerts" description="Critical security notifications" checked={sms} onChange={setSms} />
      </div>
    </div>
  );
}