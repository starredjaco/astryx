// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Switch} from '@astryxdesign/core/Switch';
import {Divider} from '@astryxdesign/core/Divider';
import {useState} from 'react';

export default function NotificationPreferences() {
  const [prefs, setPrefs] = useState({
    email: true, push: true, sms: false, marketing: false, security: true,
  });

  const toggle = (key: keyof typeof prefs) => {
    setPrefs((prev) => ({...prev, [key]: !prev[key]}));
  };

  return (
    <div className="max-w-md p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Notification Preferences</h2>
        <p className="text-sm text-gray-500">Choose how you want to be notified.</p>
      </div>

      <div className="space-y-3">
        <Switch label="Email notifications" value={prefs.email} onChange={() => toggle('email')} />
        <Switch label="Push notifications" value={prefs.push} onChange={() => toggle('push')} />
        <Switch label="SMS notifications" value={prefs.sms} onChange={() => toggle('sms')} />
      </div>

      <Divider />

      <div className="space-y-3">
        <span className="text-sm font-medium text-gray-700">Other</span>
        <Switch label="Marketing emails" value={prefs.marketing} onChange={() => toggle('marketing')} />
        <Switch label="Security alerts" value={prefs.security} onChange={() => toggle('security')} />
      </div>
    </div>
  );
}
