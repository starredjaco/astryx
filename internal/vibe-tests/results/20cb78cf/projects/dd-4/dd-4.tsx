// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {TabList, Tab} from '@astryxdesign/core/TabList';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Text';
import {Avatar} from '@astryxdesign/core/Avatar';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    maxWidth: 800,
    margin: '0 auto',
    padding: 24,
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  content: {
    marginTop: 16,
  },
  activityItem: {
    padding: '12px 0',
    borderBottom: '1px solid var(--color-border)',
  },
});

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.profileHeader)}>
        <Avatar name="Jane Smith" size="lg" />
        <div>
          <Heading level={2}>Jane Smith</Heading>
          <Text type="supporting" color="secondary">Product Designer</Text>
        </div>
      </div>

      <TabList value={activeTab} onChange={setActiveTab} hasDivider>
        <Tab value="overview" label="Overview" />
        <Tab value="activity" label="Activity" />
        <Tab value="settings" label="Settings" />
      </TabList>

      <div {...stylex.props(styles.content)}>
        {activeTab === 'overview' && (
          <Card>
            <Heading level={3}>About</Heading>
            <Text>Senior Product Designer with 8 years of experience in design systems, interaction design, and accessibility.</Text>
          </Card>
        )}
        {activeTab === 'activity' && (
          <div>
            <div {...stylex.props(styles.activityItem)}>
              <Text weight="semibold">Updated profile photo</Text>
              <Text type="supporting" color="secondary">2 hours ago</Text>
            </div>
            <div {...stylex.props(styles.activityItem)}>
              <Text weight="semibold">Completed project milestone</Text>
              <Text type="supporting" color="secondary">Yesterday</Text>
            </div>
          </div>
        )}
        {activeTab === 'settings' && (
          <Card>
            <Heading level={3}>Account Settings</Heading>
            <Text>Manage your account preferences and notification settings.</Text>
          </Card>
        )}
      </div>
    </div>
  );
}
