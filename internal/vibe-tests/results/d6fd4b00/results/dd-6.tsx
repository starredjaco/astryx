// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {HoverCard} from '@astryxdesign/core/HoverCard';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import {Badge} from '@astryxdesign/core/Badge';
import {Link} from '@astryxdesign/core/Link';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
  department: string;
}

const members: TeamMember[] = [
  {id: '1', name: 'Alice Chen', role: 'Engineering Manager', email: 'alice@company.com', avatar: '', department: 'Engineering'},
  {id: '2', name: 'Bob Smith', role: 'Senior Designer', email: 'bob@company.com', avatar: '', department: 'Design'},
  {id: '3', name: 'Carol Davis', role: 'Product Manager', email: 'carol@company.com', avatar: '', department: 'Product'},
  {id: '4', name: 'Dan Wilson', role: 'Staff Engineer', email: 'dan@company.com', avatar: '', department: 'Engineering'},
];

export default function TeamMembersList() {
  return (
    <Stack gap={3}>
      <Text type="display" size="sm">Team Members</Text>
      <Stack gap={2}>
        {members.map(member => (
          <HoverCard
            key={member.id}
            content={
              <Stack gap={3} style={{padding: 16, minWidth: 280}}>
                <Stack direction="horizontal" gap={3} align="center">
                  <Avatar name={member.name} size="lg" />
                  <Stack gap={0.5}>
                    <Text type="label" size="md">{member.name}</Text>
                    <Text type="body" size="sm">{member.role}</Text>
                  </Stack>
                </Stack>
                <Stack gap={1}>
                  <Badge>{member.department}</Badge>
                  <Link href={`mailto:${member.email}`}>{member.email}</Link>
                </Stack>
              </Stack>
            }
          >
            <Stack direction="horizontal" gap={2} align="center">
              <Avatar name={member.name} size="sm" />
              <Text type="body" size="md">{member.name}</Text>
            </Stack>
          </HoverCard>
        ))}
      </Stack>
    </Stack>
  );
}