// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {HoverCard, HoverCardContent, HoverCardTrigger} from '../components/ui/hover-card';
import {Avatar, AvatarFallback} from '../components/ui/avatar';
import {Badge} from '../components/ui/badge';

const members = [
  {name: 'Alice Chen', role: 'Eng Manager', email: 'alice@co.com', dept: 'Engineering'},
  {name: 'Bob Smith', role: 'Senior Designer', email: 'bob@co.com', dept: 'Design'},
  {name: 'Carol Davis', role: 'PM', email: 'carol@co.com', dept: 'Product'},
];

export default function TeamMembersList() {
  return (
    <div className="space-y-3 max-w-sm">
      <h2 className="text-xl font-semibold">Team Members</h2>
      {members.map(m => (
        <HoverCard key={m.name}>
          <HoverCardTrigger className="flex items-center gap-2 cursor-pointer hover:bg-muted p-2 rounded">
            <Avatar><AvatarFallback>{m.name.split(' ').map(n => n[0]).join('')}</AvatarFallback></Avatar>
            <span>{m.name}</span>
          </HoverCardTrigger>
          <HoverCardContent className="w-72">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12"><AvatarFallback>{m.name.split(' ').map(n => n[0]).join('')}</AvatarFallback></Avatar>
              <div>
                <p className="font-semibold">{m.name}</p>
                <p className="text-sm text-muted-foreground">{m.role}</p>
                <Badge variant="secondary">{m.dept}</Badge>
                <p className="text-sm mt-1">{m.email}</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}