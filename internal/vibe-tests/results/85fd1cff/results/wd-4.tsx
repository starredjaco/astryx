// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState, useMemo} from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '../components/ui/table';
import {Button} from '../components/ui/button';
import {Input} from '../components/ui/input';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '../components/ui/dialog';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '../components/ui/select';

interface Todo {
  id: string;
  title: string;
  status: 'Open' | 'Closed';
  createdAt: string;
  updatedAt: string;
}

export default function TodoTracker() {
  const [todos, setTodos] = useState<Todo[]>([
    {id: '1', title: 'Set up CI', status: 'Open', createdAt: '2024-01-15', updatedAt: '2024-01-20'},
    {id: '2', title: 'Write tests', status: 'Closed', createdAt: '2024-01-10', updatedAt: '2024-01-17'},
  ]);
  const [filter, setFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [newTitle, setNewTitle] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 25;

  const filtered = useMemo(() => {
    return todos.filter(t => {
      const matchTitle = t.title.toLowerCase().includes(filter.toLowerCase());
      const matchStatus = statusFilter === 'all' || t.status === statusFilter;
      return matchTitle && matchStatus;
    });
  }, [todos, filter, statusFilter]);

  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  const handleCreate = () => {
    if (!newTitle.trim()) {return;}
    const now = new Date().toISOString().split('T')[0];
    setTodos(prev => [...prev, {id: String(Date.now()), title: newTitle, status: 'Open', createdAt: now, updatedAt: now}]);
    setNewTitle('');
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-3">
        <Input placeholder="Filter by title..." value={filter} onChange={e => setFilter(e.target.value)} className="max-w-sm" />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="Open">Open</SelectItem>
            <SelectItem value="Closed">Closed</SelectItem>
          </SelectContent>
        </Select>
        <Dialog>
          <DialogTrigger asChild><Button>Create Todo</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Create Todo</DialogTitle></DialogHeader>
            <div className="space-y-3">
              <Input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="Title" />
              <Button onClick={handleCreate}>Create</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginated.map(todo => (
            <TableRow key={todo.id}>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.status}</TableCell>
              <TableCell>{todo.createdAt}</TableCell>
              <TableCell>{todo.updatedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex gap-2">
        <Button variant="outline" disabled={page <= 1} onClick={() => setPage(p => p - 1)}>Prev</Button>
        <span className="flex items-center px-2">{page} / {totalPages || 1}</span>
        <Button variant="outline" disabled={page >= totalPages} onClick={() => setPage(p => p + 1)}>Next</Button>
      </div>
    </div>
  );
}