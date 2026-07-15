// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

type Label = {id: string; name: string; color: string};

const labels: Label[] = [
  {id: '1', name: 'bug', color: '#d73a4a'},
  {id: '2', name: 'enhancement', color: '#a2eeef'},
  {id: '3', name: 'documentation', color: '#0075ca'},
  {id: '4', name: 'good first issue', color: '#7057ff'},
  {id: '5', name: 'help wanted', color: '#008672'},
  {id: '6', name: 'question', color: '#d876e3'},
  {id: '7', name: 'wontfix', color: '#e4e669'},
  {id: '8', name: 'priority: high', color: '#b60205'},
];

export default function LabelPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = labels.filter(l => l.name.toLowerCase().includes(search.toLowerCase()));
  const toggleLabel = (id: string) => {
    setSelected(prev => {const next = new Set(prev); if (next.has(id)) {next.delete(id);} else {next.add(id);} return next;});
  };

  return (
    <div style={{position: 'relative', display: 'inline-block'}}>
      <button onClick={() => setIsOpen(!isOpen)} style={{padding: '6px 12px', border: '1px solid #d1d5db', borderRadius: 6, background: 'white', cursor: 'pointer', fontSize: 14}}>Labels</button>
      {isOpen && (
        <div style={{position: 'absolute', top: '100%', left: 0, marginTop: 4, width: 240, background: 'white', border: '1px solid #e5e7eb', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 10}}>
          <div style={{padding: 8, borderBottom: '1px solid #e5e7eb'}}>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Filter labels" style={{width: '100%', padding: 6, border: '1px solid #d1d5db', borderRadius: 4, fontSize: 13}} />
          </div>
          <div style={{maxHeight: 200, overflowY: 'auto', padding: 4}}>
            {filtered.map(label => (
              <label key={label.id} style={{display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px', borderRadius: 4, cursor: 'pointer'}}>
                <input type="checkbox" checked={selected.has(label.id)} onChange={() => toggleLabel(label.id)} />
                <span style={{width: 12, height: 12, borderRadius: '50%', background: label.color, flexShrink: 0}} />
                <span style={{fontSize: 13}}>{label.name}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
