// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {TabList, Tab} from '@astryxdesign/core/TabList';
import {Card} from '@astryxdesign/core/Card';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Text';
import {Avatar} from '@astryxdesign/core/Avatar';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
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

      <div className="mt-4">
        {activeTab === 'overview' && (
          <Card>
            <Heading level={3}>About</Heading>
            <Text>Senior Product Designer with 8 years of experience in design systems.</Text>
          </Card>
        )}
        {activeTab === 'activity' && (
          <div className="space-y-3">
            <div className="py-3 border-b border-gray-200">
              <Text weight="semibold">Updated profile photo</Text>
              <Text type="supporting" color="secondary">2 hours ago</Text>
            </div>
            <div className="py-3 border-b border-gray-200">
              <Text weight="semibold">Completed project milestone</Text>
              <Text type="supporting" color="secondary">Yesterday</Text>
            </div>
          </div>
        )}
        {activeTab === 'settings' && (
          <Card>
            <Heading level={3}>Account Settings</Heading>
            <Text>Manage your account preferences.</Text>
          </Card>
        )}
      </div>
    </div>
  );
}
