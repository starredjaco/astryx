// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {TabList, Tab} from '@astryxdesign/core/TabList';
import {Text, Heading} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';
import {Avatar} from '@astryxdesign/core/Avatar';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <Avatar name="Jane Doe" size="lg" />
        <div>
          <Heading level={1}>Jane Doe</Heading>
          <Text type="supporting">Software Engineer</Text>
        </div>
      </div>

      <TabList value={activeTab} onChange={setActiveTab} hasDivider>
        <Tab value="overview" label="Overview" />
        <Tab value="activity" label="Activity" />
        <Tab value="settings" label="Settings" />
      </TabList>

      <div className="mt-6">
        {activeTab === 'overview' && (
          <Card padding={4}>
            <div className="space-y-2">
              <Heading level={2}>About</Heading>
              <Text>Full-stack developer building web apps for 5 years.</Text>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <Text type="label">Repositories</Text>
                  <p className="text-2xl font-semibold mt-1">42</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <Text type="label">Contributions</Text>
                  <p className="text-2xl font-semibold mt-1">1,234</p>
                </div>
              </div>
            </div>
          </Card>
        )}
        {activeTab === 'activity' && (
          <Card padding={4}>
            <Heading level={2}>Recent Activity</Heading>
            <ul className="mt-3 space-y-3 divide-y">
              <li className="pt-3">Pushed 3 commits to main</li>
              <li className="pt-3">Opened PR #42: Fix navigation bug</li>
              <li className="pt-3">Reviewed PR #38: Add dark mode</li>
            </ul>
          </Card>
        )}
        {activeTab === 'settings' && (
          <Card padding={4}>
            <Heading level={2}>Account Settings</Heading>
            <Text className="mt-2">Manage your profile and preferences.</Text>
          </Card>
        )}
      </div>
    </div>
  );
}
