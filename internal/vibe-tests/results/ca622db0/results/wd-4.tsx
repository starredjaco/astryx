// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useCallback} from 'react';
import {Table} from '@astryxdesign/core/Table';
import {useTableSortable} from '@astryxdesign/core/Table';
import {useTablePagination} from '@astryxdesign/core/Table';
import {useTableSelection} from '@astryxdesign/core/Table';
import {Button} from '@astryxdesign/core/Button';
import {IconButton} from '@astryxdesign/core/IconButton';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Dialog} from '@astryxdesign/core/Dialog';
import {Heading} from '@astryxdesign/core/Heading';
import {Toolbar} from '@astryxdesign/core/Toolbar';

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

  const sortPlugin = useTableSortable({
    sort,
    onSortChange: setSort,
  });

  const paginationPlugin = useTablePagination({
    page,
    onPageChange: setPage,
    totalItems: filteredTodos.length,
    pageSize,
  });

  const handleCreate = () => {
    if (!newTitle.trim()) {return;}
    const now = new Date().toISOString();
    const todo: Todo = {
      id: crypto.randomUUID(),
      title: newTitle.trim(),
      status: 'open',
      createdAt: now,
      updatedAt: now,
      isPending: true,
    };
    setTodos((prev) => [todo, ...prev]);
    setNewTitle('');
    setIsCreateOpen(false);
    setTimeout(() => {
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? {...t, isPending: false} : t)));
    }, 500);
  };

  const handleToggleStatus = (todo: Todo) => {
    const newStatus = todo.status === 'open' ? 'closed' : 'open';
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id
          ? {...t, status: newStatus, updatedAt: new Date().toISOString(), isPending: true}
          : t,
      ),
    );
    setTimeout(() => {
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? {...t, isPending: false} : t)));
    }, 500);
  };

  const handleSaveEdit = (todo: Todo) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id
          ? {...t, title: editText, updatedAt: new Date().toISOString(), isPending: true}
          : t,
      ),
    );
    setEditingId(null);
    setTimeout(() => {
      setTodos((prev) => prev.map((t) => (t.id === todo.id ? {...t, isPending: false} : t)));
    }, 500);
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
          <span style={{display: 'flex', gap: 8, alignItems: 'center'}}>
            <TextInput value={editText} onChange={setEditText} label="Edit title" />
            <Button label="Save" size="sm" onClick={() => handleSaveEdit(item)} />
            <Button label="Cancel" size="sm" variant="ghost" onClick={() => setEditingId(null)} />
          </span>
        ) : (
          <span
            onDoubleClick={() => {
              setEditingId(item.id);
              setEditText(item.title);
            }}
          >
            {item.title}
            {item.isPending && ' (pending)'}
          </span>
        ),
    },
    {
      key: 'status' as const,
      header: 'Status',
      renderCell: (item: Todo) => (
        <Button
          label={item.status === 'open' ? 'Open' : 'Closed'}
          variant="ghost"
          size="sm"
          onClick={() => handleToggleStatus(item)}
        />
      ),
    },
    {key: 'createdAt' as const, header: 'Created'},
    {key: 'updatedAt' as const, header: 'Updated'},
    {
      key: 'actions' as const,
      header: '',
      renderCell: (item: Todo) => (
        <Button label="Delete" variant="destructive" size="sm" onClick={() => setDeleteTarget(item)} />
      ),
    },
  ];

  return (
    <div>
      <Heading level={1}>Todo Tracker</Heading>
      <Toolbar>
        <TextInput
          value={filterText}
          onChange={setFilterText}
          label="Filter by title"
          placeholder="Search todos..."
        />
        <Button
          label={filterStatus === 'all' ? 'All' : filterStatus === 'open' ? 'Open' : 'Closed'}
          variant="ghost"
          onClick={() =>
            setFilterStatus((s) => (s === 'all' ? 'open' : s === 'open' ? 'closed' : 'all'))
          }
        />
        <Button label="Create Todo" variant="primary" onClick={() => setIsCreateOpen(true)} />
      </Toolbar>
      <Table
        data={paginatedTodos}
        columns={columns}
        idKey="id"
        plugins={{sort: sortPlugin, pagination: paginationPlugin}}
      />
      {isCreateOpen && (
        <Dialog title="Create Todo" onClose={() => setIsCreateOpen(false)}>
          <TextInput value={newTitle} onChange={setNewTitle} label="Todo title" />
          <Button label="Create" variant="primary" onClick={handleCreate} />
        </Dialog>
      )}
      {deleteTarget && (
        <Dialog title="Confirm Delete" onClose={() => setDeleteTarget(null)}>
          <p>Delete &quot;{deleteTarget.title}&quot;?</p>
          <Button label="Delete" variant="destructive" onClick={handleDelete} />
          <Button label="Cancel" variant="ghost" onClick={() => setDeleteTarget(null)} />
        </Dialog>
      )}
    </div>
  );
}
