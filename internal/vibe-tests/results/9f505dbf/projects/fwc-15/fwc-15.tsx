// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

const TAGS = ['Bug', 'Feature', 'Enhancement', 'Documentation', 'Help Wanted'];
const RESULTS = [
  {id: 1, title: 'Fix login flow', tags: ['Bug']},
  {id: 2, title: 'Add dark mode', tags: ['Feature', 'Enhancement']},
  {id: 3, title: 'Update README', tags: ['Documentation']},
  {id: 4, title: 'Refactor auth', tags: ['Enhancement']},
  {id: 5, title: 'Add search', tags: ['Feature', 'Help Wanted']},
];

export default function FilterBar() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const filtered = selectedTags.length === 0 ? RESULTS : RESULTS.filter(r => r.tags.some(t => selectedTags.includes(t)));

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
      <div style={{position: 'relative'}}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Filter by tags"
          style={{padding: '6px 12px', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer', background: '#fff'}}
        >
          {selectedTags.length > 0 ? `${selectedTags.length} tags selected` : 'Filter by tags'}
        </button>
        {isOpen && (
          <div style={{position: 'absolute', top: '100%', left: 0, marginTop: 4, border: '1px solid #ddd', borderRadius: 4, background: '#fff', padding: 8, zIndex: 10, minWidth: 180}}>
            {TAGS.map(tag => (
              <label key={tag} style={{display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0', cursor: 'pointer'}}>
                <input type="checkbox" checked={selectedTags.includes(tag)} onChange={() => toggle(tag)} />
                {tag}
              </label>
            ))}
          </div>
        )}
      </div>
      <table style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
          <tr>
            <th style={{textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #eee'}}>Title</th>
            <th style={{textAlign: 'left', padding: '8px 12px', borderBottom: '2px solid #eee'}}>Tags</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(row => (
            <tr key={row.id}>
              <td style={{padding: '8px 12px', borderBottom: '1px solid #eee'}}>{row.title}</td>
              <td style={{padding: '8px 12px', borderBottom: '1px solid #eee'}}>{row.tags.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
