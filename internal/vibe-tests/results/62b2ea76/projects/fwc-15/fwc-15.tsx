// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {MultiSelector} from '@astryxdesign/core/MultiSelector';
import {Table, TableRow, TableCell, TableHeaderCell} from '@astryxdesign/core/Table';
import {Stack} from '@astryxdesign/core/Stack';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  filterBar: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
});

const TAGS = [
  {value: 'frontend', label: 'Frontend'},
  {value: 'backend', label: 'Backend'},
  {value: 'design', label: 'Design'},
  {value: 'devops', label: 'DevOps'},
  {value: 'mobile', label: 'Mobile'},
];

const RESULTS = [
  {id: 1, name: 'Auth Service', tags: ['backend', 'devops']},
  {id: 2, name: 'Dashboard UI', tags: ['frontend', 'design']},
  {id: 3, name: 'Mobile App', tags: ['mobile', 'frontend']},
  {id: 4, name: 'API Gateway', tags: ['backend']},
];

export default function FilterableTable() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filtered = selectedTags.length === 0
    ? RESULTS
    : RESULTS.filter(r => r.tags.some(t => selectedTags.includes(t)));

  return (
    <Stack gap={3}>
      <div {...stylex.props(styles.filterBar)}>
        <MultiSelector
          label="Filter by tags"
          isLabelHidden
          options={TAGS}
          value={selectedTags}
          onChange={setSelectedTags}
          placeholder="Filter by tags"
          triggerDisplay="badges"
          hasSearch
          size="sm"
        />
      </div>
      <Table>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Tags</TableHeaderCell>
        </TableRow>
        {filtered.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.tags.join(', ')}</TableCell>
          </TableRow>
        ))}
      </Table>
    </Stack>
  );
}
