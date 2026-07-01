// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {Badge} from '@/components/ui/badge';

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
  const [sortBy, setSortBy] = useState<'updatedAt' | 'createdAt' | 'title'>('updatedAt');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [page, setPage] = useState(0);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Todo | null>(null);
  const pageSize = 25;

  const filtered = todos.filter((t) => {
    if (filterStatus !== 'all' && t.status !== filterStatus) {return false;}
    if (filterText && !t.title.toLowerCase().includes(filterText.toLowerCase())) {return false;}
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    const mul = sortDir === 'asc' ? 1 : -1;
    if (sortBy === 'title') {return mul * a.title.localeCompare(b.title);}
    return mul * (new Date(a[sortBy]).getTime() - new Date(b[sortBy]).getTime());
  });

  const paginated = sorted.slice(page * pageSize, (page + 1) * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  const handleCreate = () => {
    if (!newTitle.trim()) {return;}
    const now = new Date().toISOString();
    setTodos(prev => [{id: crypto.randomUUID(), title: newTitle.trim(), status: 'open', createdAt: now, updatedAt: now, isPending: true}, ...prev]);
    setNewTitle('');
    setIsCreateOpen(false);
    setTimeout(() => setTodos(prev => prev.map(t => t.isPending ? {...t, isPending: false} : t)), 500);
  };

  const handleSort = (col: typeof sortBy) => {
    if (sortBy === col) {setSortDir(d => d === 'asc' ? 'desc' : 'asc');}
    else { setSortBy(col); setSortDir('desc'); }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Todo Tracker</h1>
      <div className="flex items-center gap-3">
        <Input placeholder="Filter by title..." value={filterText} onChange={(e) => setFilterText(e.target.value)} className="max-w-xs" />
        <Button variant="outline" onClick={() => setFilterStatus(s => s === 'all' ? 'open' : s === 'open' ? 'closed' : 'all')}>
          {filterStatus === 'all' ? 'All' : filterStatus}
        </Button>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild><Button>Create Todo</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Create Todo</DialogTitle></DialogHeader>
            <div className="space-y-3">
              <Input placeholder="Todo title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
              <Button onClick={handleCreate}>Create</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="cursor-pointer" onClick={() => handleSort('title')}>Title {sortBy === 'title' && (sortDir === 'asc' ? '↑' : '↓')}</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort('createdAt')}>Created {sortBy === 'createdAt' && (sortDir === 'asc' ? '↑' : '↓')}</TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort('updatedAt')}>Updated {sortBy === 'updatedAt' && (sortDir === 'asc' ? '↑' : '↓')}</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginated.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>
                {editingId === todo.id ? (
                  <div className="flex gap-2">
                    <Input value={editText} onChange={(e) => setEditText(e.target.value)} />
                    <Button size="sm" onClick={() => { setTodos(p => p.map(t => t.id === todo.id ? {...t, title: editText, updatedAt: new Date().toISOString()} : t)); setEditingId(null); }}>Save</Button>
                    <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>Cancel</Button>
                  </div>
                ) : (
                  <span className="cursor-pointer" onDoubleClick={() => { setEditingId(todo.id); setEditText(todo.title); }}>
                    {todo.title} {todo.isPending && <Badge variant="outline">pending</Badge>}
                  </span>
                )}
              </TableCell>
              <TableCell>
                <Button size="sm" variant="outline" onClick={() => setTodos(p => p.map(t => t.id === todo.id ? {...t, status: t.status === 'open' ? 'closed' : 'open', updatedAt: new Date().toISOString()} : t))}>
                  {todo.status}
                </Button>
              </TableCell>
              <TableCell>{new Date(todo.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(todo.updatedAt).toLocaleDateString()}</TableCell>
              <TableCell><Button size="sm" variant="destructive" onClick={() => setDeleteTarget(todo)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {totalPages > 1 && (
        <div className="flex gap-2 justify-center">
          <Button variant="outline" size="sm" disabled={page === 0} onClick={() => setPage(p => p - 1)}>Prev</Button>
          <span className="py-1 px-2 text-sm">Page {page + 1} of {totalPages}</span>
          <Button variant="outline" size="sm" disabled={page >= totalPages - 1} onClick={() => setPage(p => p + 1)}>Next</Button>
        </div>
      )}
      {deleteTarget && (
        <Dialog open onOpenChange={() => setDeleteTarget(null)}>
          <DialogContent>
            <DialogHeader><DialogTitle>Confirm Delete</DialogTitle></DialogHeader>
            <p>Delete &quot;{deleteTarget.title}&quot;?</p>
            <div className="flex gap-2">
              <Button variant="destructive" onClick={() => { setTodos(p => p.filter(t => t.id !== deleteTarget.id)); setDeleteTarget(null); }}>Delete</Button>
              <Button variant="ghost" onClick={() => setDeleteTarget(null)}>Cancel</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
