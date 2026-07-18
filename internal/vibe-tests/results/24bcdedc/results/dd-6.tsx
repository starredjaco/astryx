// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {HoverCard} from '@astryxdesign/core/HoverCard';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Button} from '@astryxdesign/core/Button';
import {Heading, Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {List} from '@astryxdesign/core/List';
import {Link} from '@astryxdesign/core/Link';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
}

const TEAM: TeamMember[] = [
  {id: '1', name: 'Alice Chen', role: 'Engineering Lead', email: 'alice@company.com', avatar: 'https://i.pravatar.cc/80?u=alice'},
  {id: '2', name: 'Bob Martinez', role: 'Designer', email: 'bob@company.com', avatar: 'https://i.pravatar.cc/80?u=bob'},
  {id: '3', name: 'Carol Wu', role: 'Product Manager', email: 'carol@company.com', avatar: 'https://i.pravatar.cc/80?u=carol'},
  {id: '4', name: 'Dan Patel', role: 'Frontend Engineer', email: 'dan@company.com', avatar: 'https://i.pravatar.cc/80?u=dan'},
];

export default function TeamList() {
  return (
    <VStack gap="md">
      <Heading level={2}>Team Members</Heading>
      <List>
        {TEAM.map(member => (
          <List.Item key={member.id}>
            <HoverCard
              trigger={
                <Link href={`mailto:${member.email}`}>
                  {member.name}
                </Link>
              }
            >
              <VStack gap="sm">
                <HStack gap="md" align="center">
                  <Avatar src={member.avatar} name={member.name} size="lg" />
                  <VStack gap="xs">
                    <Text weight="bold">{member.name}</Text>
                    <Text color="secondary">{member.role}</Text>
                  </VStack>
                </HStack>
                <Text size="sm">{member.email}</Text>
                <Button size="sm" onPress={() => window.open(`mailto:${member.email}`)}>
                  Message
                </Button>
              </VStack>
            </HoverCard>
          </List.Item>
        ))}
      </List>
    </VStack>
  );
}
