// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {TabList, Tab} from '@astryxdesign/core/TabList';
import {Text, Heading} from '@astryxdesign/core/Text';
import {Stack} from '@astryxdesign/core/Stack';
import {Card} from '@astryxdesign/core/Card';
import {Avatar} from '@astryxdesign/core/Avatar';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  page: {
    padding: 24,
    maxWidth: 800,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
});

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div {...stylex.props(styles.page)}>
      <div {...stylex.props(styles.header)}>
        <Avatar name="Jane Doe" size="lg" />
        <Stack gap={1}>
          <Heading level={1}>Jane Doe</Heading>
          <Text type="supporting">Software Engineer</Text>
        </Stack>
      </div>

      <TabList value={activeTab} onChange={setActiveTab} hasDivider>
        <Tab value="overview" label="Overview" />
        <Tab value="activity" label="Activity" />
        <Tab value="settings" label="Settings" />
      </TabList>

      <Stack gap={4} xstyle={{marginTop: 24}}>
        {activeTab === 'overview' && (
          <Card>
            <Stack gap={2}>
              <Heading level={2}>About</Heading>
              <Text>Full-stack developer with 5 years of experience building web applications.</Text>
            </Stack>
          </Card>
        )}
        {activeTab === 'activity' && (
          <Card>
            <Stack gap={2}>
              <Heading level={2}>Recent Activity</Heading>
              <Text>Pushed 3 commits to main branch</Text>
              <Text>Opened PR #42: Fix navigation bug</Text>
            </Stack>
          </Card>
        )}
        {activeTab === 'settings' && (
          <Card>
            <Stack gap={2}>
              <Heading level={2}>Account Settings</Heading>
              <Text>Manage your profile and preferences.</Text>
            </Stack>
          </Card>
        )}
      </Stack>
    </div>
  );
}
