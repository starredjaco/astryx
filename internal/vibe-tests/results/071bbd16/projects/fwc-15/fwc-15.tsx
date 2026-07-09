// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {MultiSelector} from '@astryxdesign/core/MultiSelector';
import {Table, TableRow, TableCell, TableHeaderCell} from '@astryxdesign/core/Table';

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
    <div className="space-y-4">
      <div className="flex items-center gap-3 px-1">
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
        {selectedTags.length > 0 && (
          <button
            className="text-sm text-blue-600 hover:underline"
            onClick={() => setSelectedTags([])}
          >
            Clear
          </button>
        )}
      </div>
      <Table>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Tags</TableHeaderCell>
        </TableRow>
        {filtered.map(item => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <div className="flex gap-1">
                {item.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 bg-gray-100 rounded text-xs">{t}</span>
                ))}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
}
