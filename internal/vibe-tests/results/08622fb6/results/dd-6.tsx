// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Avatar, AvatarImage, AvatarFallback} from '../components/ui/avatar';
import {Button} from '../components/ui/button';
import {HoverCard, HoverCardTrigger, HoverCardContent} from '../components/ui/hover-card';

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
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Team Members</h2>
      <ul className="divide-y">
        {TEAM.map(member => (
          <li key={member.id} className="py-3">
            <HoverCard>
              <HoverCardTrigger asChild>
                <button className="text-blue-600 hover:underline">{member.name}</button>
              </HoverCardTrigger>
              <HoverCardContent className="w-72">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-sm">{member.email}</p>
                  </div>
                </div>
                <Button size="sm" className="mt-3 w-full" onClick={() => window.open(`mailto:${member.email}`)}>
                  Message
                </Button>
              </HoverCardContent>
            </HoverCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
