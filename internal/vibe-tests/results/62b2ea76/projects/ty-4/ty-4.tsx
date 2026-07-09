// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Heading, Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Switch} from '@astryxdesign/core/Switch';
import {Selector} from '@astryxdesign/core/Selector';
import {Stack} from '@astryxdesign/core/Stack';
import {Section} from '@astryxdesign/core/Section';
import {Divider} from '@astryxdesign/core/Divider';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  page: {
    maxWidth: 640,
    padding: 24,
  },
});

export default function SettingsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [emailDigest, setEmailDigest] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <div {...stylex.props(styles.page)}>
      <Stack gap={6}>
        <Heading level={1}>Settings</Heading>

        <Section>
          <Stack gap={3}>
            <Heading level={2}>Profile</Heading>
            <Text type="supporting">Manage your personal information and display name.</Text>
            <TextInput label="Display Name" value={name} onChange={setName} />
            <TextInput label="Email" value={email} onChange={setEmail} type="email" />
          </Stack>
        </Section>

        <Divider />

        <Section>
          <Stack gap={3}>
            <Heading level={2}>Notifications</Heading>
            <Text type="supporting">Control how and when you receive notifications.</Text>
            <Switch label="Push notifications" isSelected={notifications} onChange={setNotifications} />
            <Switch label="Email digest" isSelected={emailDigest} onChange={setEmailDigest} />
          </Stack>
        </Section>

        <Divider />

        <Section>
          <Stack gap={3}>
            <Heading level={2}>Preferences</Heading>
            <Text type="supporting">Customize your experience with language and display options.</Text>
            <Selector
              label="Language"
              options={[
                {value: 'en', label: 'English'},
                {value: 'es', label: 'Spanish'},
                {value: 'fr', label: 'French'},
                {value: 'de', label: 'German'},
              ]}
              value={language}
              onChange={setLanguage}
            />
          </Stack>
        </Section>
      </Stack>
    </div>
  );
}
