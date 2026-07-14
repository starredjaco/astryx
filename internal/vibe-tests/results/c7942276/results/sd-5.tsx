// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

export default function NotificationPreferences() {
  const [prefs, setPrefs] = useState({email: true, push: true, sms: false, marketing: false, security: true});
  const toggle = (key: keyof typeof prefs) => setPrefs(p => ({...p, [key]: !p[key]}));

  const SwitchRow = ({label, checked, onChange}: {label: string, checked: boolean, onChange: () => void}) => (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0'}}>
      <span style={{fontSize: 14}}>{label}</span>
      <button onClick={onChange} style={{width: 44, height: 24, borderRadius: 12, border: 'none', backgroundColor: checked ? '#3b82f6' : '#ddd', cursor: 'pointer', position: 'relative'}}>
        <span style={{position: 'absolute', top: 2, left: checked ? 22 : 2, width: 20, height: 20, borderRadius: 10, backgroundColor: 'white', transition: 'left 0.2s'}} />
      </button>
    </div>
  );

  return (
    <div style={{maxWidth: 480, padding: 24}}>
      <h2 style={{fontSize: 20, fontWeight: 600, margin: '0 0 4px'}}>Notification Preferences</h2>
      <p style={{color: '#666', fontSize: 14, margin: '0 0 24px'}}>Choose how you want to be notified.</p>
      <SwitchRow label="Email notifications" checked={prefs.email} onChange={() => toggle('email')} />
      <SwitchRow label="Push notifications" checked={prefs.push} onChange={() => toggle('push')} />
      <SwitchRow label="SMS notifications" checked={prefs.sms} onChange={() => toggle('sms')} />
      <hr style={{border: 'none', borderTop: '1px solid #eee', margin: '16px 0'}} />
      <span style={{fontSize: 12, fontWeight: 500, color: '#888'}}>Other</span>
      <SwitchRow label="Marketing emails" checked={prefs.marketing} onChange={() => toggle('marketing')} />
      <SwitchRow label="Security alerts" checked={prefs.security} onChange={() => toggle('security')} />
    </div>
  );
}
