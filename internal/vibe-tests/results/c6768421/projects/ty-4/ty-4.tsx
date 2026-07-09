// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Switch} from '@/components/ui/switch';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Label} from '@/components/ui/label';
import {Separator} from '@/components/ui/separator';

export default function SettingsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [emailDigest, setEmailDigest] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <div className="max-w-xl p-6 space-y-8">
      <h1 className="text-2xl font-bold">Settings</h1>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Profile</h2>
        <p className="text-sm text-muted-foreground">Manage your personal information.</p>
        <div className="space-y-3">
          <div><Label htmlFor="name">Display Name</Label><Input id="name" value={name} onChange={e => setName(e.target.value)} /></div>
          <div><Label htmlFor="email">Email</Label><Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} /></div>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <p className="text-sm text-muted-foreground">Control how you receive notifications.</p>
        <div className="space-y-3">
          <div className="flex items-center justify-between"><Label>Push notifications</Label><Switch checked={notifications} onCheckedChange={setNotifications} /></div>
          <div className="flex items-center justify-between"><Label>Email digest</Label><Switch checked={emailDigest} onCheckedChange={setEmailDigest} /></div>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Preferences</h2>
        <p className="text-sm text-muted-foreground">Customize your experience.</p>
        <div><Label>Language</Label><Select value={language} onValueChange={setLanguage}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="en">English</SelectItem><SelectItem value="es">Spanish</SelectItem><SelectItem value="fr">French</SelectItem></SelectContent></Select></div>
      </section>
    </div>
  );
}
