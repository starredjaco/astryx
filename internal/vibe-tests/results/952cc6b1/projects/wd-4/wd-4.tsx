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

interface Todo {
  id: string;
  title: string;
  status: 'Open' | 'Closed';
  createdAt: string;
  updatedAt: string;
}

export default function TodoTracker() {
  const [todos, setTodos] = useState<Todo[]>([
    {id: '1', title: 'Set up CI pipeline', status: 'Open', createdAt: '2024-01-15', updatedAt: '2024-01-20'},
    {id: '2', title: 'Write unit tests', status: 'Open', createdAt: '2024-01-16', updatedAt: '2024-01-18'},
  ]);
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return todos.filter(t => {
      const matchesTitle = t.title.toLowerCase().includes(filter.toLowerCase());
      const matchesStatus = statusFilter === 'all' || t.status === statusFilter;
      return matchesTitle && matchesStatus;
    });
  }, [todos, filter, statusFilter]);

  const handleCreate = () => {
    if (!newTitle.trim()) {return;}
    const now = new Date().toISOString().split('T')[0];
    setTodos(prev => [...prev, {id: String(Date.now()), title: newTitle, status: 'Open', createdAt: now, updatedAt: now}]);
    setNewTitle('');
    setIsCreateOpen(false);
  };

  const columns = [
    {key: 'title' as const, header: 'Title'},
    {key: 'status' as const, header: 'Status'},
    {key: 'createdAt' as const, header: 'Created'},
    {key: 'updatedAt' as const, header: 'Updated'},
  ];

  return (
    <div className="space-y-4 p-6">
      <div className="flex items-center gap-3">
        <TextInput label="Filter" isLabelHidden value={filter} onChange={setFilter} placeholder="Filter..." hasClear />
        <SegmentedControl value={statusFilter} onChange={setStatusFilter} label="Status">
          <SegmentedControlItem value="all">All</SegmentedControlItem>
          <SegmentedControlItem value="Open">Open</SegmentedControlItem>
          <SegmentedControlItem value="Closed">Closed</SegmentedControlItem>
        </SegmentedControl>
        <Button onClick={() => setIsCreateOpen(true)}>Create Todo</Button>
      </div>

      <Table data={filtered.slice((page-1)*25, page*25)} columns={columns} idKey="id" hasHover />
      <Pagination page={page} onChange={setPage} totalItems={filtered.length} pageSize={25} />

      <Dialog isOpen={isCreateOpen} onOpenChange={setIsCreateOpen} purpose="form">
        <DialogHeader title="Create Todo" />
        <div className="p-4 space-y-3">
          <TextInput label="Title" value={newTitle} onChange={setNewTitle} hasAutoFocus />
          <Button onClick={handleCreate}>Create</Button>
        </div>
      </Dialog>

      <AlertDialog
        isOpen={deleteId !== null}
        onOpenChange={(open) => {if (!open) {setDeleteId(null);}}}
        title="Delete Todo"
        description="Are you sure?"
        confirmLabel="Delete"
        onConfirm={() => {setTodos(prev => prev.filter(t => t.id !== deleteId)); setDeleteId(null);}}
      />
    </div>
  );
}