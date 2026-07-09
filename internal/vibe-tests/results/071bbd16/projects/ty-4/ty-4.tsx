// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Heading, Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Switch} from '@astryxdesign/core/Switch';
import {Selector} from '@astryxdesign/core/Selector';
import {Divider} from '@astryxdesign/core/Divider';

export default function SettingsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [emailDigest, setEmailDigest] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <div className="max-w-xl p-6 space-y-8">
      <Heading level={1}>Settings</Heading>

      <section className="space-y-3">
        <Heading level={2}>Profile</Heading>
        <Text type="supporting">Manage your personal information.</Text>
        <div className="space-y-4 mt-2">
          <TextInput label="Display Name" value={name} onChange={setName} />
          <TextInput label="Email" value={email} onChange={setEmail} type="email" />
        </div>
      </section>

      <Divider />

      <section className="space-y-3">
        <Heading level={2}>Notifications</Heading>
        <Text type="supporting">Control how you receive notifications.</Text>
        <div className="space-y-3 mt-2">
          <Switch label="Push notifications" isSelected={notifications} onChange={setNotifications} />
          <Switch label="Email digest" isSelected={emailDigest} onChange={setEmailDigest} />
        </div>
      </section>

      <Divider />

      <section className="space-y-3">
        <Heading level={2}>Preferences</Heading>
        <Text type="supporting">Customize your experience.</Text>
        <div className="mt-2">
          <Selector
            label="Language"
            options={[
              {value: 'en', label: 'English'},
              {value: 'es', label: 'Spanish'},
              {value: 'fr', label: 'French'},
            ]}
            value={language}
            onChange={setLanguage}
          />
        </div>
      </section>
    </div>
  );
}
