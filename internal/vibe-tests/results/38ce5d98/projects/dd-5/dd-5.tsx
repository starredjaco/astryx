// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Table, proportional, pixel} from '@astryxdesign/core/Table';
import {useState} from 'react';

interface EmailRow extends Record<string, unknown> {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  date: string;
}

const emails: EmailRow[] = [
  {id: '1', sender: 'Alice Johnson', subject: 'Project update', preview: 'Hi, just wanted to share the latest progress...', date: '2024-03-15'},
  {id: '2', sender: 'Bob Smith', subject: 'Meeting tomorrow', preview: 'Can we reschedule to 3pm?', date: '2024-03-15'},
  {id: '3', sender: 'Carol White', subject: 'Design review', preview: 'I reviewed the mockups and have suggestions...', date: '2024-03-14'},
  {id: '4', sender: 'Dave Brown', subject: 'Invoice #4521', preview: 'Please find attached the invoice...', date: '2024-03-14'},
  {id: '5', sender: 'Eve Davis', subject: 'Welcome!', preview: 'Thrilled to have you join us...', date: '2024-03-13'},
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
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Inbox</h2>
      <p className="text-sm text-gray-500">{emails.length} messages</p>
      <Table
        data={emails}
        columns={columns}
        idKey="id"
        density="balanced"
        selection={selected}
        onSelectionChange={setSelected}
        isHoverable
      />
    </div>
  );
}
