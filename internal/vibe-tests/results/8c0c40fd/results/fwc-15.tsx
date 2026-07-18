// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {MultiSelector} from '@astryxdesign/core/MultiSelector';
import {Table} from '@astryxdesign/core/Table';

const TAGS = ['Bug', 'Feature', 'Enhancement', 'Documentation', 'Help Wanted'];

const RESULTS = [
  {id: 1, title: 'Fix login flow', tags: ['Bug']},
  {id: 2, title: 'Add dark mode', tags: ['Feature', 'Enhancement']},
  {id: 3, title: 'Update README', tags: ['Documentation']},
  {id: 4, title: 'Refactor auth', tags: ['Enhancement']},
  {id: 5, title: 'Add search', tags: ['Feature', 'Help Wanted']},
];

export default function FilterBar() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filtered = selectedTags.length === 0
    ? RESULTS
    : RESULTS.filter(r => r.tags.some(t => selectedTags.includes(t)));

  return (
    <div className="flex flex-col gap-4">
      <MultiSelector
        label="Filter by tags"
        isLabelHidden
        placeholder="Filter by tags"
        options={TAGS}
        value={selectedTags}
        onChange={setSelectedTags}
        size="sm"
        triggerDisplay="badges"
        hasSearch
      />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Tags</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filtered.map(row => (
            <Table.Row key={row.id}>
              <Table.Cell>{row.title}</Table.Cell>
              <Table.Cell>{row.tags.join(', ')}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
