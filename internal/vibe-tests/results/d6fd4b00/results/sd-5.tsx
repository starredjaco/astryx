// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Switch} from '@astryxdesign/core/Switch';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Divider} from '@astryxdesign/core/Divider';
import {Section} from '@astryxdesign/core/Section';

export default function NotificationPreferences() {
  const [email, setEmail] = useState(true);
  const [push, setPush] = useState(true);
  const [sms, setSms] = useState(false);

  return (
    <Section>
      <Stack gap={4}>
        <Text type="display" size="sm">Notification Preferences</Text>
        <Text type="body" size="md">
          Choose how you want to be notified about updates and activity.
        </Text>

        <Divider />

        <Stack gap={3}>
          <Switch
            label="Email notifications"
            description="Receive updates about activity, digests, and announcements via email"
            value={email}
            onChange={setEmail}
          />

          <Switch
            label="Push notifications"
            description="Get real-time notifications on your device for mentions and messages"
            value={push}
            onChange={setPush}
          />

          <Switch
            label="SMS alerts"
            description="Receive critical alerts and security notifications via text message"
            value={sms}
            onChange={setSms}
          />
        </Stack>
      </Stack>
    </Section>
  );
}