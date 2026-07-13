// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Table} from '@astryxdesign/core/Table';
import {CheckboxInput} from '@astryxdesign/core/CheckboxInput';
import {Button} from '@astryxdesign/core/Button';
import {DropdownMenu} from '@astryxdesign/core/DropdownMenu';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';

interface Email extends Record<string, unknown> {
  id: string;
  sender: string;
  subject: string;
  date: string;
  preview: string;
}

const emails: Email[] = [
  {id: '1', sender: 'Alice', subject: 'Project update', date: '2024-01-15', preview: 'Here is the latest...'},
  {id: '2', sender: 'Bob', subject: 'Meeting tomorrow', date: '2024-01-14', preview: 'Can we meet at...'},
  {id: '3', sender: 'Carol', subject: 'Invoice #1234', date: '2024-01-13', preview: 'Please find attached...'},
  {id: '4', sender: 'Dave', subject: 'Quick question', date: '2024-01-12', preview: 'Do you have time...'},
  {id: '5', sender: 'Eve', subject: 'Welcome aboard', date: '2024-01-11', preview: 'Congratulations on...'},
];

export default function EmailInbox() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleAll = () => {
    if (selected.size === emails.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(emails.map(e => e.id)));
    }
  };

  const toggleOne = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) {next.delete(id);}
    else {next.add(id);}
    setSelected(next);
  };

  return (
    <VStack gap={3} padding={4}>
      <HStack gap={2}>
        <CheckboxInput
          label="Select all"
          isLabelHidden
          value={selected.size === emails.length ? true : selected.size > 0 ? 'indeterminate' : false}
          onChange={toggleAll}
        />
        <DropdownMenu
          button={{label: 'Actions', variant: 'secondary', size: 'sm'}}
          items={[
            {label: 'Archive', onClick: () => {}},
            {label: 'Mark as read', onClick: () => {}},
            {type: 'divider'},
            {label: 'Delete', onClick: () => {}},
          ]}
        />
      </HStack>
      <Table
        data={emails}
        idKey="id"
        hasHover
        columns={[
          {key: 'select', header: '', width: 40, renderCell: (row) => (
            <CheckboxInput
              label={`Select ${row.sender}`}
              isLabelHidden
              value={selected.has(row.id)}
              onChange={() => toggleOne(row.id)}
            />
          )},
          {key: 'sender', header: 'From'},
          {key: 'subject', header: 'Subject'},
          {key: 'date', header: 'Date', width: 120},
          {key: 'preview', header: 'Preview'},
        ]}
      />
    </VStack>
  );
}
