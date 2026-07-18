// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {HoverCard} from '@astryxdesign/core/HoverCard';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Button} from '@astryxdesign/core/Button';
import {Heading, Text} from '@astryxdesign/core/Text';
import {Link} from '@astryxdesign/core/Link';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
}

const TEAM: TeamMember[] = [
  {id: '1', name: 'Alice Chen', role: 'Engineering Lead', email: 'alice@co.com', avatar: 'https://i.pravatar.cc/80?u=alice'},
  {id: '2', name: 'Bob Martinez', role: 'Designer', email: 'bob@co.com', avatar: 'https://i.pravatar.cc/80?u=bob'},
  {id: '3', name: 'Carol Wu', role: 'Product Manager', email: 'carol@co.com', avatar: 'https://i.pravatar.cc/80?u=carol'},
  {id: '4', name: 'Dan Patel', role: 'Frontend Dev', email: 'dan@co.com', avatar: 'https://i.pravatar.cc/80?u=dan'},
];

export default function TeamList() {
  return (
    <div className="flex flex-col gap-4">
      <Heading level={2}>Team Members</Heading>
      <ul className="divide-y">
        {TEAM.map(member => (
          <li key={member.id} className="py-3">
            <HoverCard
              trigger={<Link href={`mailto:${member.email}`}>{member.name}</Link>}
            >
              <div className="flex flex-col gap-3 p-2">
                <div className="flex items-center gap-3">
                  <Avatar src={member.avatar} name={member.name} size="lg" />
                  <div>
                    <Text weight="bold">{member.name}</Text>
                    <Text color="secondary" size="sm">{member.role}</Text>
                  </div>
                </div>
                <Text size="sm">{member.email}</Text>
                <Button size="sm" onPress={() => window.open(`mailto:${member.email}`)}>Message</Button>
              </div>
            </HoverCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
