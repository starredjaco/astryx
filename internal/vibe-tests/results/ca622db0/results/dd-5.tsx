// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useCallback} from 'react';
import {Table} from '@astryxdesign/core/Table';
import {useTableSelection} from '@astryxdesign/core/Table';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';
import {Toolbar} from '@astryxdesign/core/Toolbar';
import {Text} from '@astryxdesign/core/Text';

interface Email {
  id: string;
  sender: string;
  subject: string;
  date: string;
  preview: string;
}

const MOCK_EMAILS: Email[] = [
  {id: '1', sender: 'Alice Johnson', subject: 'Q3 Planning Meeting', date: '2026-06-30', preview: 'Hi team, let us schedule our Q3 planning...'},
  {id: '2', sender: 'Bob Smith', subject: 'Code Review Request', date: '2026-06-30', preview: 'Can you take a look at PR #342? It has...'},
  {id: '3', sender: 'Carol Lee', subject: 'Design System Update', date: '2026-06-29', preview: 'The new components are ready for review...'},
  {id: '4', sender: 'Dave Chen', subject: 'Lunch Tomorrow?', date: '2026-06-29', preview: 'Anyone up for trying that new place on...'},
  {id: '5', sender: 'Eve Martinez', subject: 'Bug Report: Login Flow', date: '2026-06-28', preview: 'Found an issue with the OAuth redirect...'},
];

export default function EmailInbox() {
  const [emails, setEmails] = useState<Email[]>(MOCK_EMAILS);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const selectionPlugin = useTableSelection<Email>({
    getIsItemSelected: (item) => selectedIds.has(item.id),
    onSelectItem: ({item, isSelected}) => {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        if (isSelected) {next.add(item.id);}
        else {next.delete(item.id);}
        return next;
      });
    },
    onSelectAll: ({isAllSelected}) => {
      if (isAllSelected) {
        setSelectedIds(new Set(emails.map((e) => e.id)));
      } else {
        setSelectedIds(new Set());
      }
    },
    getIsAllSelected: () => selectedIds.size === emails.length && emails.length > 0,
    getIsIndeterminate: () => selectedIds.size > 0 && selectedIds.size < emails.length,
  });

  const handleBulkDelete = () => {
    setEmails((prev) => prev.filter((e) => !selectedIds.has(e.id)));
    setSelectedIds(new Set());
  };

  const handleBulkArchive = () => {
    setEmails((prev) => prev.filter((e) => !selectedIds.has(e.id)));
    setSelectedIds(new Set());
  };

  const columns = [
    {key: 'sender' as const, header: 'Sender'},
    {key: 'subject' as const, header: 'Subject'},
    {key: 'date' as const, header: 'Date'},
    {
      key: 'preview' as const,
      header: 'Preview',
      renderCell: (item: Email) => (
        <Text color="secondary" maxLines={1}>{item.preview}</Text>
      ),
    },
  ];

  return (
    <div>
      <Heading level={1}>Inbox</Heading>
      {selectedIds.size > 0 && (
        <Toolbar>
          <Text>{selectedIds.size} selected</Text>
          <Button label="Archive" variant="secondary" size="sm" onClick={handleBulkArchive} />
          <Button label="Delete" variant="destructive" size="sm" onClick={handleBulkDelete} />
          <Button label="Mark as Read" variant="ghost" size="sm" onClick={() => {}} />
        </Toolbar>
      )}
      <Table
        data={emails}
        columns={columns}
        idKey="id"
        hasHover
        plugins={{selection: selectionPlugin}}
      />
    </div>
  );
}
