// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {Checkbox} from '@/components/ui/checkbox';
import {Button} from '@/components/ui/button';

interface Email {
  id: string;
  sender: string;
  subject: string;
  date: string;
  preview: string;
}

const MOCK_EMAILS: Email[] = [
  {id: '1', sender: 'Alice Johnson', subject: 'Q3 Planning Meeting', date: '2026-06-30', preview: 'Hi team, let us schedule our Q3 planning...'},
  {id: '2', sender: 'Bob Smith', subject: 'Code Review Request', date: '2026-06-30', preview: 'Can you take a look at PR #342?...'},
  {id: '3', sender: 'Carol Lee', subject: 'Design System Update', date: '2026-06-29', preview: 'The new components are ready for review...'},
  {id: '4', sender: 'Dave Chen', subject: 'Lunch Tomorrow?', date: '2026-06-29', preview: 'Anyone up for trying that new place...'},
  {id: '5', sender: 'Eve Martinez', subject: 'Bug Report: Login Flow', date: '2026-06-28', preview: 'Found an issue with the OAuth redirect...'},
];

export default function EmailInbox() {
  const [emails, setEmails] = useState<Email[]>(MOCK_EMAILS);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {next.delete(id);}
      else {next.add(id);}
      return next;
    });
  };

  const toggleAll = () => {
    if (selectedIds.size === emails.length) {setSelectedIds(new Set());}
    else {setSelectedIds(new Set(emails.map(e => e.id)));}
  };

  const handleBulkDelete = () => {
    setEmails(prev => prev.filter(e => !selectedIds.has(e.id)));
    setSelectedIds(new Set());
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Inbox</h1>
      {selectedIds.size > 0 && (
        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
          <span className="text-sm">{selectedIds.size} selected</span>
          <Button size="sm" variant="outline" onClick={() => { setEmails(p => p.filter(e => !selectedIds.has(e.id))); setSelectedIds(new Set()); }}>Archive</Button>
          <Button size="sm" variant="destructive" onClick={handleBulkDelete}>Delete</Button>
          <Button size="sm" variant="ghost">Mark as Read</Button>
        </div>
      )}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10"><Checkbox checked={selectedIds.size === emails.length && emails.length > 0} onCheckedChange={toggleAll} /></TableHead>
            <TableHead>Sender</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Preview</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {emails.map(email => (
            <TableRow key={email.id} className="hover:bg-muted/50">
              <TableCell><Checkbox checked={selectedIds.has(email.id)} onCheckedChange={() => toggleSelect(email.id)} /></TableCell>
              <TableCell className="font-medium">{email.sender}</TableCell>
              <TableCell>{email.subject}</TableCell>
              <TableCell>{email.date}</TableCell>
              <TableCell className="text-muted-foreground truncate max-w-[200px]">{email.preview}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
