// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Table} from '@astryxdesign/core/Table';
import {useTableSortable} from '@astryxdesign/core/Table';
import {useTablePagination} from '@astryxdesign/core/Table';
import {Button} from '@astryxdesign/core/Button';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Dialog} from '@astryxdesign/core/Dialog';
import {Heading} from '@astryxdesign/core/Heading';

interface Todo {
  id: string;
  title: string;
  status: 'open' | 'closed';
  createdAt: string;
  updatedAt: string;
  isPending?: boolean;
}

export default function TodoTracker() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterText, setFilterText] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'open' | 'closed'>('all');
  const [sort, setSort] = useState<Array<{sortKey: string; direction: 'asc' | 'desc'}>>([
    {sortKey: 'updatedAt', direction: 'desc'},
  ]);
  const [page, setPage] = useState(1);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [deleteTarget, setDeleteTarget] = useState<Todo | null>(null);
  const pageSize = 25;

  const filteredTodos = todos.filter((t) => {
    if (filterStatus !== 'all' && t.status !== filterStatus) {return false;}
    if (filterText && !t.title.toLowerCase().includes(filterText.toLowerCase())) {return false;}
    return true;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    const {sortKey, direction} = sort[0] || {sortKey: 'updatedAt', direction: 'desc'};
    const mul = direction === 'asc' ? 1 : -1;
    if (sortKey === 'title') {return mul * a.title.localeCompare(b.title);}
    return mul * (new Date(a[sortKey as keyof Todo] as string).getTime() - new Date(b[sortKey as keyof Todo] as string).getTime());
  });

  const paginatedTodos = sortedTodos.slice((page - 1) * pageSize, page * pageSize);

  const sortPlugin = useTableSortable({sort, onSortChange: setSort});
  const paginationPlugin = useTablePagination({
    page,
    onPageChange: setPage,
    totalItems: filteredTodos.length,
    pageSize,
  });

  const handleCreate = () => {
    if (!newTitle.trim()) {return;}
    const now = new Date().toISOString();
    setTodos((prev) => [{id: crypto.randomUUID(), title: newTitle.trim(), status: 'open', createdAt: now, updatedAt: now, isPending: true}, ...prev]);
    setNewTitle('');
    setIsCreateOpen(false);
  };

  const handleToggleStatus = (todo: Todo) => {
    setTodos((prev) => prev.map((t) => t.id === todo.id ? {...t, status: t.status === 'open' ? 'closed' : 'open', updatedAt: new Date().toISOString(), isPending: true} : t));
  };

  const handleDelete = () => {
    if (!deleteTarget) {return;}
    setTodos((prev) => prev.filter((t) => t.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  const columns = [
    {
      key: 'title' as const,
      header: 'Title',
      renderCell: (item: Todo) =>
        editingId === item.id ? (
          <div className="flex items-center gap-2">
            <TextInput value={editText} onChange={setEditText} label="Edit title" />
            <Button label="Save" size="sm" onClick={() => { setTodos(p => p.map(t => t.id === item.id ? {...t, title: editText, updatedAt: new Date().toISOString()} : t)); setEditingId(null); }} />
            <Button label="Cancel" size="sm" variant="ghost" onClick={() => setEditingId(null)} />
          </div>
        ) : (
          <span onDoubleClick={() => { setEditingId(item.id); setEditText(item.title); }}>
            {item.title}{item.isPending && ' (pending)'}
          </span>
        ),
    },
    {key: 'status' as const, header: 'Status', renderCell: (item: Todo) => <Button label={item.status === 'open' ? 'Open' : 'Closed'} variant="ghost" size="sm" onClick={() => handleToggleStatus(item)} />},
    {key: 'createdAt' as const, header: 'Created'},
    {key: 'updatedAt' as const, header: 'Updated'},
    {key: 'actions' as const, header: '', renderCell: (item: Todo) => <Button label="Delete" variant="destructive" size="sm" onClick={() => setDeleteTarget(item)} />},
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-4">
      <Heading level={1}>Todo Tracker</Heading>
      <div className="flex items-center gap-3">
        <TextInput value={filterText} onChange={setFilterText} label="Filter by title" placeholder="Search todos..." />
        <Button label={filterStatus === 'all' ? 'All' : filterStatus === 'open' ? 'Open' : 'Closed'} variant="ghost" onClick={() => setFilterStatus(s => s === 'all' ? 'open' : s === 'open' ? 'closed' : 'all')} />
        <Button label="Create Todo" variant="primary" onClick={() => setIsCreateOpen(true)} />
      </div>
      <Table data={paginatedTodos} columns={columns} idKey="id" plugins={{sort: sortPlugin, pagination: paginationPlugin}} />
      {isCreateOpen && (
        <Dialog title="Create Todo" onClose={() => setIsCreateOpen(false)}>
          <div className="space-y-3 p-4">
            <TextInput value={newTitle} onChange={setNewTitle} label="Todo title" />
            <Button label="Create" variant="primary" onClick={handleCreate} />
          </div>
        </Dialog>
      )}
      {deleteTarget && (
        <Dialog title="Confirm Delete" onClose={() => setDeleteTarget(null)}>
          <div className="space-y-3 p-4">
            <p>Delete &quot;{deleteTarget.title}&quot;?</p>
            <div className="flex gap-2">
              <Button label="Delete" variant="destructive" onClick={handleDelete} />
              <Button label="Cancel" variant="ghost" onClick={() => setDeleteTarget(null)} />
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}
