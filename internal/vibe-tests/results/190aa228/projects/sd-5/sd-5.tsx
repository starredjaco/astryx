// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Switch} from '@/components/ui/switch';
import {Label} from '@/components/ui/label';
import {Separator} from '@/components/ui/separator';
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
        <p className="text-sm text-muted-foreground">Choose how you want to be notified.</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="email">Email notifications</Label>
          <Switch id="email" checked={prefs.email} onCheckedChange={() => toggle('email')} />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="push">Push notifications</Label>
          <Switch id="push" checked={prefs.push} onCheckedChange={() => toggle('push')} />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="sms">SMS notifications</Label>
          <Switch id="sms" checked={prefs.sms} onCheckedChange={() => toggle('sms')} />
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <span className="text-sm font-medium">Other</span>
        <div className="flex items-center justify-between">
          <Label htmlFor="marketing">Marketing emails</Label>
          <Switch id="marketing" checked={prefs.marketing} onCheckedChange={() => toggle('marketing')} />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="security">Security alerts</Label>
          <Switch id="security" checked={prefs.security} onCheckedChange={() => toggle('security')} />
        </div>
      </div>
    </div>
  );
}
