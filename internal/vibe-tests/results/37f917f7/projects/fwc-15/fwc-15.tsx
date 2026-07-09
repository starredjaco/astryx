// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

const TAGS = ['Frontend', 'Backend', 'Design', 'DevOps', 'Mobile'];
const RESULTS = [
  {id: 1, name: 'Auth Service', tags: ['Backend', 'DevOps']},
  {id: 2, name: 'Dashboard UI', tags: ['Frontend', 'Design']},
  {id: 3, name: 'Mobile App', tags: ['Mobile', 'Frontend']},
  {id: 4, name: 'API Gateway', tags: ['Backend']},
];

export default function FilterableTable() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const filtered = selectedTags.length === 0 ? RESULTS : RESULTS.filter(r => r.tags.some(t => selectedTags.includes(t)));

  return (
    <div style={{fontFamily: 'system-ui', padding: 16}}>
      <div style={{marginBottom: 16, position: 'relative'}}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Filter by tags"
          style={{padding: '6px 12px', border: '1px solid #d1d5db', borderRadius: 6, background: '#fff', cursor: 'pointer'}}
        >
          {selectedTags.length === 0 ? 'Filter by tags' : `${selectedTags.length} tags selected`}
        </button>
        {isOpen && (
          <div style={{position: 'absolute', top: '100%', left: 0, marginTop: 4, border: '1px solid #d1d5db', borderRadius: 6, background: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', zIndex: 10}}>
            {TAGS.map(tag => (
              <label key={tag} style={{display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', cursor: 'pointer'}}>
                <input type="checkbox" checked={selectedTags.includes(tag)} onChange={() => toggle(tag)} />
                {tag}
              </label>
            ))}
          </div>
        )}
      </div>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr style={{borderBottom: '2px solid #e5e7eb'}}>
            <th style={{textAlign: 'left', padding: 8}}>Name</th>
            <th style={{textAlign: 'left', padding: 8}}>Tags</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(item => (
            <tr key={item.id} style={{borderBottom: '1px solid #f3f4f6'}}>
              <td style={{padding: 8}}>{item.name}</td>
              <td style={{padding: 8}}>{item.tags.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
