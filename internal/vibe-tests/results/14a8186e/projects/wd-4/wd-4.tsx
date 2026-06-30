// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState, useMemo} from 'react';

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
  const [showCreate, setShowCreate] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 25;

  const filtered = useMemo(() => todos.filter(t => {
    const matchTitle = t.title.toLowerCase().includes(filter.toLowerCase());
    const matchStatus = statusFilter === 'all' || t.status === statusFilter;
    return matchTitle && matchStatus;
  }), [todos, filter, statusFilter]);

  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filtered.length / pageSize);

  const handleCreate = () => {
    if (!newTitle.trim()) {return;}
    const now = new Date().toISOString().split('T')[0];
    setTodos(prev => [...prev, {id: String(Date.now()), title: newTitle, status: 'Open', createdAt: now, updatedAt: now}]);
    setNewTitle('');
    setShowCreate(false);
  };

  const cellStyle: React.CSSProperties = {padding: '8px 12px', borderBottom: '1px solid #e5e7eb', textAlign: 'left'};
  const headerStyle: React.CSSProperties = {...cellStyle, fontWeight: 600, backgroundColor: '#f9fafb'};

  return (
    <div style={{padding: 24, fontFamily: 'system-ui'}}>
      <div style={{display: 'flex', gap: 12, marginBottom: 16, alignItems: 'center'}}>
        <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filter..." style={{padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6, flex: 1}} />
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} style={{padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6}}>
          <option value="all">All</option>
          <option value="Open">Open</option>
          <option value="Closed">Closed</option>
        </select>
        <button onClick={() => setShowCreate(true)} style={{padding: '8px 16px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Create Todo</button>
      </div>

      <table style={{width: '100%', borderCollapse: 'collapse', border: '1px solid #e5e7eb'}}>
        <thead>
          <tr>
            <th style={headerStyle}>Title</th>
            <th style={headerStyle}>Status</th>
            <th style={headerStyle}>Created</th>
            <th style={headerStyle}>Updated</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map(t => (
            <tr key={t.id}>
              <td style={cellStyle}>{t.title}</td>
              <td style={cellStyle}>{t.status}</td>
              <td style={cellStyle}>{t.createdAt}</td>
              <td style={cellStyle}>{t.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{display: 'flex', gap: 8, marginTop: 12, alignItems: 'center'}}>
        <button disabled={page <= 1} onClick={() => setPage(p => p - 1)} style={{padding: '6px 12px', border: '1px solid #d1d5db', borderRadius: 4}}>Prev</button>
        <span>{page} / {totalPages || 1}</span>
        <button disabled={page >= totalPages} onClick={() => setPage(p => p + 1)} style={{padding: '6px 12px', border: '1px solid #d1d5db', borderRadius: 4}}>Next</button>
      </div>

      {showCreate && (
        <div style={{position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50}}>
          <div style={{backgroundColor: '#fff', padding: 24, borderRadius: 8, width: 360}}>
            <h3 style={{fontSize: 18, fontWeight: 600, marginBottom: 12}}>Create Todo</h3>
            <input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="Title" style={{width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6, marginBottom: 12}} />
            <div style={{display: 'flex', gap: 8}}>
              <button onClick={handleCreate} style={{padding: '8px 16px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: 6}}>Create</button>
              <button onClick={() => setShowCreate(false)} style={{padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: 6}}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}