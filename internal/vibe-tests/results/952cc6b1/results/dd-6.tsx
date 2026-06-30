// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {HoverCard} from '@astryxdesign/core/HoverCard';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';

const members = [
  {id: '1', name: 'Alice Chen', role: 'Eng Manager', email: 'alice@co.com', dept: 'Engineering'},
  {id: '2', name: 'Bob Smith', role: 'Senior Designer', email: 'bob@co.com', dept: 'Design'},
  {id: '3', name: 'Carol Davis', role: 'PM', email: 'carol@co.com', dept: 'Product'},
];

export default function TeamMembersList() {
  return (
    <div className="max-w-md p-4">
      <Stack gap={3}>
        <Text type="display" size="sm">Team</Text>
        {members.map(m => (
          <HoverCard
            key={m.id}
            content={
              <div className="p-4 min-w-[260px]">
                <Stack direction="horizontal" gap={3} align="center">
                  <Avatar name={m.name} size="lg" />
                  <Stack gap={0.5}>
                    <Text type="label" size="md">{m.name}</Text>
                    <Text type="body" size="sm">{m.role}</Text>
                    <Badge>{m.dept}</Badge>
                    <Text type="body" size="sm">{m.email}</Text>
                  </Stack>
                </Stack>
              </div>
            }
          >
            <div className="flex items-center gap-2 py-1 cursor-pointer hover:bg-gray-50 rounded px-2">
              <Avatar name={m.name} size="sm" />
              <Text type="body" size="md">{m.name}</Text>
            </div>
          </HoverCard>
        ))}
      </Stack>
    </div>
  );
}