// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Switch} from '../components/ui/switch';
import {Label} from '../components/ui/label';
import {Separator} from '../components/ui/separator';

export default function NotificationPreferences() {
  const [email, setEmail] = useState(true);
  const [push, setPush] = useState(true);
  const [sms, setSms] = useState(false);

  return (
    <div className="max-w-md space-y-6 p-6">
      <div>
        <h2 className="text-xl font-semibold">Notification Preferences</h2>
        <p className="text-sm text-muted-foreground">Choose how you want to be notified.</p>
      </div>
      <Separator />
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div><Label htmlFor="email">Email notifications</Label><p className="text-sm text-muted-foreground">Digests and announcements</p></div>
          <Switch id="email" checked={email} onCheckedChange={setEmail} />
        </div>
        <div className="flex items-center justify-between">
          <div><Label htmlFor="push">Push notifications</Label><p className="text-sm text-muted-foreground">Real-time device alerts</p></div>
          <Switch id="push" checked={push} onCheckedChange={setPush} />
        </div>
        <div className="flex items-center justify-between">
          <div><Label htmlFor="sms">SMS alerts</Label><p className="text-sm text-muted-foreground">Critical security notifications</p></div>
          <Switch id="sms" checked={sms} onCheckedChange={setSms} />
        </div>
      </div>
    </div>
  );
}