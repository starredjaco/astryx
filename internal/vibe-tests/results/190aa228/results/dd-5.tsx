// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {Checkbox} from '@/components/ui/checkbox';
import {useState} from 'react';

const emails = [
  {id: '1', sender: 'Alice Johnson', subject: 'Project update', preview: 'Hi, just wanted to share the latest...', date: '2024-03-15'},
  {id: '2', sender: 'Bob Smith', subject: 'Meeting tomorrow', preview: 'Can we reschedule to 3pm?', date: '2024-03-15'},
  {id: '3', sender: 'Carol White', subject: 'Design review', preview: 'I reviewed the mockups and have...', date: '2024-03-14'},
  {id: '4', sender: 'Dave Brown', subject: 'Invoice #4521', preview: 'Please find attached...', date: '2024-03-14'},
  {id: '5', sender: 'Eve Davis', subject: 'Welcome!', preview: 'Thrilled to have you join...', date: '2024-03-13'},
];

export default function EmailInbox() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleRow = (id: string) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Inbox</h2>
      <p className="text-sm text-muted-foreground">{emails.length} messages</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px]" />
            <TableHead className="w-[160px]">From</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Preview</TableHead>
            <TableHead className="w-[120px]">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {emails.map((email) => (
            <TableRow key={email.id} className="cursor-pointer hover:bg-muted/50">
              <TableCell>
                <Checkbox checked={selected.includes(email.id)} onCheckedChange={() => toggleRow(email.id)} />
              </TableCell>
              <TableCell className="font-medium">{email.sender}</TableCell>
              <TableCell>{email.subject}</TableCell>
              <TableCell className="text-muted-foreground">{email.preview}</TableCell>
              <TableCell>{email.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
