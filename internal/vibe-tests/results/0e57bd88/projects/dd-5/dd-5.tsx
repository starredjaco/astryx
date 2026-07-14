// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Table, proportional, pixel} from '@astryxdesign/core/Table';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {useState} from 'react';

interface EmailRow extends Record<string, unknown> {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  date: string;
  isRead: boolean;
}

const emails: EmailRow[] = [
  {id: '1', sender: 'Alice Johnson', subject: 'Project update', preview: 'Hi, just wanted to share the latest progress on...', date: '2024-03-15', isRead: true},
  {id: '2', sender: 'Bob Smith', subject: 'Meeting tomorrow', preview: 'Can we reschedule our sync to 3pm instead?', date: '2024-03-15', isRead: false},
  {id: '3', sender: 'Carol White', subject: 'Design review feedback', preview: 'I reviewed the mockups and have some suggestions...', date: '2024-03-14', isRead: true},
  {id: '4', sender: 'Dave Brown', subject: 'Invoice #4521', preview: 'Please find attached the invoice for March...', date: '2024-03-14', isRead: false},
  {id: '5', sender: 'Eve Davis', subject: 'Welcome to the team!', preview: 'We are thrilled to have you join us. Here is...', date: '2024-03-13', isRead: true},
];

const columns = [
  {key: 'sender' as const, header: 'From', width: pixel(160)},
  {key: 'subject' as const, header: 'Subject', width: proportional(2)},
  {key: 'preview' as const, header: 'Preview', width: proportional(3)},
  {key: 'date' as const, header: 'Date', width: pixel(120)},
];

export default function EmailInbox() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <VStack gap="md" style={{padding: 24}}>
      <Heading level={2}>Inbox</Heading>
      <Text color="secondary">{emails.filter(e => !e.isRead).length} unread messages</Text>
      <Table
        data={emails}
        columns={columns}
        idKey="id"
        density="balanced"
        selection={selected}
        onSelectionChange={setSelected}
        isHoverable
      />
    </VStack>
  );
}
