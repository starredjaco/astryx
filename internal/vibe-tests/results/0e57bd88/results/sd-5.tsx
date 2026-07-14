// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Switch} from '@astryxdesign/core/Switch';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Divider} from '@astryxdesign/core/Divider';
import {useState} from 'react';

export default function NotificationPreferences() {
  const [prefs, setPrefs] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false,
    security: true,
  });

  const toggle = (key: keyof typeof prefs) => {
    setPrefs((prev) => ({...prev, [key]: !prev[key]}));
  };

  return (
    <VStack gap="lg" style={{maxWidth: 480, padding: 24}}>
      <VStack gap="xs">
        <Heading level={2}>Notification Preferences</Heading>
        <Text color="secondary">Choose how you want to be notified.</Text>
      </VStack>

      <VStack gap="md">
        <Switch
          label="Email notifications"
          value={prefs.email}
          onChange={() => toggle('email')}
        />
        <Switch
          label="Push notifications"
          value={prefs.push}
          onChange={() => toggle('push')}
        />
        <Switch
          label="SMS notifications"
          value={prefs.sms}
          onChange={() => toggle('sms')}
        />
      </VStack>

      <Divider />

      <VStack gap="md">
        <Text variant="label">Other</Text>
        <Switch
          label="Marketing emails"
          value={prefs.marketing}
          onChange={() => toggle('marketing')}
        />
        <Switch
          label="Security alerts"
          value={prefs.security}
          onChange={() => toggle('security')}
        />
      </VStack>
    </VStack>
  );
}
