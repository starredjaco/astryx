// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

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
  const [showCreate, setShowCreate] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Todo | null>(null);
  const pageSize = 25;

  const filtered = todos.filter(t => {
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

  const handleCreate = () => {
    if (!newTitle.trim()) {return;}
    const now = new Date().toISOString();
    setTodos(prev => [{id: crypto.randomUUID(), title: newTitle.trim(), status: 'open', createdAt: now, updatedAt: now, isPending: true}, ...prev]);
    setNewTitle('');
    setShowCreate(false);
  };

  return (
    <div style={{maxWidth: 900, margin: '0 auto', padding: 24}}>
      <h1 style={{fontSize: 24, fontWeight: 700, marginBottom: 16}}>Todo Tracker</h1>
      <div style={{display: 'flex', gap: 8, marginBottom: 16}}>
        <input
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
          placeholder="Filter by title..."
          style={{padding: '6px 12px', border: '1px solid #ccc', borderRadius: 4, flex: 1}}
        />
        <button onClick={() => setFilterStatus(s => s === 'all' ? 'open' : s === 'open' ? 'closed' : 'all')} style={{padding: '6px 12px', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer'}}>
          {filterStatus === 'all' ? 'All' : filterStatus}
        </button>
        <button onClick={() => setShowCreate(true)} style={{padding: '6px 12px', backgroundColor: '#0d6efd', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer'}}>
          Create Todo
        </button>
      </div>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr style={{borderBottom: '2px solid #dee2e6'}}>
            <th style={{textAlign: 'left', padding: 8, cursor: 'pointer'}} onClick={() => { if (sortBy === 'title') {setSortDir(d => d === 'asc' ? 'desc' : 'asc');} else { setSortBy('title'); setSortDir('asc'); } }}>Title</th>
            <th style={{textAlign: 'left', padding: 8}}>Status</th>
            <th style={{textAlign: 'left', padding: 8, cursor: 'pointer'}} onClick={() => { if (sortBy === 'createdAt') {setSortDir(d => d === 'asc' ? 'desc' : 'asc');} else { setSortBy('createdAt'); setSortDir('desc'); } }}>Created</th>
            <th style={{textAlign: 'left', padding: 8, cursor: 'pointer'}} onClick={() => { if (sortBy === 'updatedAt') {setSortDir(d => d === 'asc' ? 'desc' : 'asc');} else { setSortBy('updatedAt'); setSortDir('desc'); } }}>Updated</th>
            <th style={{padding: 8}}></th>
          </tr>
        </thead>
        <tbody>
          {paginated.map(todo => (
            <tr key={todo.id} style={{borderBottom: '1px solid #dee2e6'}}>
              <td style={{padding: 8}}>
                {editingId === todo.id ? (
                  <span style={{display: 'flex', gap: 4}}>
                    <input value={editText} onChange={e => setEditText(e.target.value)} style={{padding: '4px 8px', border: '1px solid #ccc', borderRadius: 4}} />
                    <button onClick={() => { setTodos(p => p.map(t => t.id === todo.id ? {...t, title: editText, updatedAt: new Date().toISOString()} : t)); setEditingId(null); }} style={{padding: '4px 8px', cursor: 'pointer'}}>Save</button>
                    <button onClick={() => setEditingId(null)} style={{padding: '4px 8px', cursor: 'pointer'}}>Cancel</button>
                  </span>
                ) : (
                  <span onDoubleClick={() => { setEditingId(todo.id); setEditText(todo.title); }} style={{cursor: 'pointer'}}>
                    {todo.title}{todo.isPending ? ' (pending)' : ''}
                  </span>
                )}
              </td>
              <td style={{padding: 8}}>
                <button onClick={() => setTodos(p => p.map(t => t.id === todo.id ? {...t, status: t.status === 'open' ? 'closed' : 'open', updatedAt: new Date().toISOString()} : t))} style={{padding: '2px 8px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: 4}}>
                  {todo.status}
                </button>
              </td>
              <td style={{padding: 8, fontSize: 14}}>{new Date(todo.createdAt).toLocaleDateString()}</td>
              <td style={{padding: 8, fontSize: 14}}>{new Date(todo.updatedAt).toLocaleDateString()}</td>
              <td style={{padding: 8}}><button onClick={() => setDeleteTarget(todo)} style={{padding: '2px 8px', color: '#dc3545', cursor: 'pointer', border: '1px solid #dc3545', borderRadius: 4}}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {showCreate && (
        <div style={{position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{backgroundColor: '#fff', borderRadius: 8, padding: 24, minWidth: 300}}>
            <h2 style={{marginTop: 0}}>Create Todo</h2>
            <input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="Todo title" style={{width: '100%', padding: '8px 12px', border: '1px solid #ccc', borderRadius: 4, marginBottom: 12}} />
            <div style={{display: 'flex', gap: 8}}>
              <button onClick={handleCreate} style={{padding: '8px 16px', backgroundColor: '#0d6efd', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer'}}>Create</button>
              <button onClick={() => setShowCreate(false)} style={{padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer'}}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {deleteTarget && (
        <div style={{position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{backgroundColor: '#fff', borderRadius: 8, padding: 24, minWidth: 300}}>
            <h2 style={{marginTop: 0}}>Confirm Delete</h2>
            <p>Delete &quot;{deleteTarget.title}&quot;?</p>
            <div style={{display: 'flex', gap: 8}}>
              <button onClick={() => { setTodos(p => p.filter(t => t.id !== deleteTarget.id)); setDeleteTarget(null); }} style={{padding: '8px 16px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer'}}>Delete</button>
              <button onClick={() => setDeleteTarget(null)} style={{padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer'}}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
