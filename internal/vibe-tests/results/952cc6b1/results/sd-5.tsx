// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Switch} from '@astryxdesign/core/Switch';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';

export default function NotificationPreferences() {
  const [email, setEmail] = useState(true);
  const [push, setPush] = useState(true);
  const [sms, setSms] = useState(false);

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl border border-gray-200">
      <Stack gap={4}>
        <Text type="display" size="sm">Notification Preferences</Text>
        <Text type="body" size="sm" className="text-gray-500">Choose how you want to be notified.</Text>
        <div className="divide-y">
          <div className="py-3">
            <Switch label="Email notifications" description="Activity digests and announcements" value={email} onChange={setEmail} />
          </div>
          <div className="py-3">
            <Switch label="Push notifications" description="Real-time alerts on your device" value={push} onChange={setPush} />
          </div>
          <div className="py-3">
            <Switch label="SMS alerts" description="Critical security notifications" value={sms} onChange={setSms} />
          </div>
        </div>
      </Stack>
    </div>
  );
}