// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState, useMemo} from 'react';
import {Table} from '@astryxdesign/core/Table';
import {Button} from '@astryxdesign/core/Button';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Dialog} from '@astryxdesign/core/Dialog';
import {DialogHeader} from '@astryxdesign/core/Dialog';
import {AlertDialog} from '@astryxdesign/core/AlertDialog';
import {Pagination} from '@astryxdesign/core/Pagination';
import {Stack} from '@astryxdesign/core/Stack';
import {SegmentedControl} from '@astryxdesign/core/SegmentedControl';
import {SegmentedControlItem} from '@astryxdesign/core/SegmentedControl';
import {useTableSortable} from '@astryxdesign/core/Table';
import {useTablePagination} from '@astryxdesign/core/Table';

interface Todo {
  id: string;
  title: string;
  status: 'Open' | 'Closed';
  createdAt: string;
  updatedAt: string;
  isPending?: boolean;
}

export default function TodoTracker() {
  const [todos, setTodos] = useState<Todo[]>([
    {id: '1', title: 'Set up CI pipeline', status: 'Open', createdAt: '2024-01-15', updatedAt: '2024-01-20'},
    {id: '2', title: 'Write unit tests', status: 'Open', createdAt: '2024-01-16', updatedAt: '2024-01-18'},
    {id: '3', title: 'Deploy staging', status: 'Closed', createdAt: '2024-01-10', updatedAt: '2024-01-17'},
  ]);
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'Open' | 'Closed'>('all');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 25;

  const filtered = useMemo(() => {
    return todos.filter(t => {
      const matchesTitle = t.title.toLowerCase().includes(filter.toLowerCase());
      const matchesStatus = statusFilter === 'all' || t.status === statusFilter;
      return matchesTitle && matchesStatus;
    });
  }, [todos, filter, statusFilter]);

  const paginatedData = filtered.slice((page - 1) * pageSize, page * pageSize);

  const handleCreate = () => {
    if (!newTitle.trim()) {return;}
    const now = new Date().toISOString().split('T')[0];
    setTodos(prev => [...prev, {
      id: String(Date.now()),
      title: newTitle.trim(),
      status: 'Open',
      createdAt: now,
      updatedAt: now,
    }]);
    setNewTitle('');
    setIsCreateOpen(false);
  };

  const handleToggleStatus = (id: string) => {
    setTodos(prev => prev.map(t =>
      t.id === id
        ? {...t, status: t.status === 'Open' ? 'Closed' : 'Open', updatedAt: new Date().toISOString().split('T')[0], isPending: true}
        : t
    ));
  };

  const handleDelete = () => {
    if (!deleteId) {return;}
    setTodos(prev => prev.filter(t => t.id !== deleteId));
    setDeleteId(null);
  };

  const handleSaveEdit = (id: string) => {
    setTodos(prev => prev.map(t =>
      t.id === id ? {...t, title: editTitle, updatedAt: new Date().toISOString().split('T')[0]} : t
    ));
    setEditingId(null);
  };

  const columns = [
    {key: 'title' as const, header: 'Title', width: {type: 'proportional' as const, value: 3}},
    {key: 'status' as const, header: 'Status', width: {type: 'proportional' as const, value: 1}},
    {key: 'createdAt' as const, header: 'Created', width: {type: 'proportional' as const, value: 1}},
    {key: 'updatedAt' as const, header: 'Updated', width: {type: 'proportional' as const, value: 1}},
  ];

  return (
    <Stack gap={4}>
      <Stack gap={2} direction="horizontal" align="center">
        <TextInput
          label="Filter"
          isLabelHidden
          value={filter}
          onChange={setFilter}
          placeholder="Filter by title..."
          hasClear
        />
        <SegmentedControl value={statusFilter} onChange={(v) => setStatusFilter(v as 'all' | 'Open' | 'Closed')} label="Status filter">
          <SegmentedControlItem value="all">All</SegmentedControlItem>
          <SegmentedControlItem value="Open">Open</SegmentedControlItem>
          <SegmentedControlItem value="Closed">Closed</SegmentedControlItem>
        </SegmentedControl>
        <Button onClick={() => setIsCreateOpen(true)}>Create Todo</Button>
      </Stack>

      <Table
        data={paginatedData}
        columns={columns}
        idKey="id"
        hasHover
      />

      <Pagination
        page={page}
        onChange={setPage}
        totalItems={filtered.length}
        pageSize={pageSize}
      />

      <Dialog isOpen={isCreateOpen} onOpenChange={setIsCreateOpen} purpose="form">
        <DialogHeader title="Create Todo" />
        <Stack gap={3} style={{padding: 16}}>
          <TextInput
            label="Title"
            value={newTitle}
            onChange={setNewTitle}
            placeholder="Enter todo title"
            hasAutoFocus
          />
          <Button onClick={handleCreate}>Create</Button>
        </Stack>
      </Dialog>

      <AlertDialog
        isOpen={deleteId !== null}
        onOpenChange={(open) => {if (!open) {setDeleteId(null);}}}
        title="Delete Todo"
        description="Are you sure you want to delete this todo? This action cannot be undone."
        confirmLabel="Delete"
        onConfirm={handleDelete}
      />
    </Stack>
  );
}