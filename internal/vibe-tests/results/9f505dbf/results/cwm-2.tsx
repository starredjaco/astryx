// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

interface LabelItem {
  value: string;
  label: string;
  color: string;
}

const LABELS: LabelItem[] = [
  {value: 'bug', label: 'bug', color: '#d73a4a'},
  {value: 'enhancement', label: 'enhancement', color: '#a2eeef'},
  {value: 'good-first-issue', label: 'good first issue', color: '#7057ff'},
  {value: 'help-wanted', label: 'help wanted', color: '#008672'},
  {value: 'documentation', label: 'documentation', color: '#0075ca'},
  {value: 'duplicate', label: 'duplicate', color: '#cfd3d7'},
];

export default function LabelPicker() {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (val: string) => {
    setSelected(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);
  };

  const filtered = LABELS.filter(l => l.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
      <button onClick={() => setIsOpen(!isOpen)} style={{padding: '6px 12px', border: '1px solid #ccc', borderRadius: 4, background: '#fff', cursor: 'pointer', width: 'fit-content'}}>
        Apply labels
      </button>
      {isOpen && (
        <div style={{border: '1px solid #ddd', borderRadius: 6, padding: 8, maxWidth: 250}}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Filter labels"
            style={{width: '100%', padding: 6, border: '1px solid #ddd', borderRadius: 4, marginBottom: 8}}
          />
          {filtered.map(item => (
            <label key={item.value} style={{display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0', cursor: 'pointer'}}>
              <input type="checkbox" checked={selected.includes(item.value)} onChange={() => toggle(item.value)} />
              <span style={{width: 12, height: 12, borderRadius: '50%', backgroundColor: item.color, display: 'inline-block'}} />
              {item.label}
            </label>
          ))}
        </div>
      )}
      {selected.length > 0 && (
        <div style={{display: 'flex', gap: 4, flexWrap: 'wrap'}}>
          {selected.map(val => {
            const item = LABELS.find(l => l.value === val);
            return (
              <span key={val} style={{padding: '2px 8px', borderRadius: 12, fontSize: 12, color: '#fff', backgroundColor: item?.color}}>
                {item?.label}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
