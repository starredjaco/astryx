// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

const LABELS = [
  {value: 'bug', label: 'Bug', color: '#e11d48'},
  {value: 'feature', label: 'Feature', color: '#16a34a'},
  {value: 'docs', label: 'Documentation', color: '#2563eb'},
  {value: 'enhancement', label: 'Enhancement', color: '#ca8a04'},
  {value: 'help-wanted', label: 'Help Wanted', color: '#9333ea'},
  {value: 'good-first-issue', label: 'Good First Issue', color: '#ea580c'},
];

export default function IssueLabelPicker() {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filtered = LABELS.filter(l => l.label.toLowerCase().includes(search.toLowerCase()));

  const toggle = (value: string) => {
    setSelected(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };

  return (
    <div style={{padding: 16, maxWidth: 400, fontFamily: 'system-ui'}}>
      <label style={{display: 'block', marginBottom: 8, fontWeight: 600, fontSize: 14}}>Labels</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6, textAlign: 'left', background: '#fff', cursor: 'pointer'}}
      >
        {selected.length === 0 ? 'Apply labels...' : `${selected.length} selected`}
      </button>
      {isOpen && (
        <div style={{border: '1px solid #d1d5db', borderRadius: 6, marginTop: 4, boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
          <input
            type="text"
            placeholder="Filter labels..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{width: '100%', padding: '8px 12px', border: 'none', borderBottom: '1px solid #e5e7eb', outline: 'none'}}
          />
          <div style={{maxHeight: 200, overflow: 'auto'}}>
            {filtered.map(label => (
              <div
                key={label.value}
                onClick={() => toggle(label.value)}
                style={{display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', cursor: 'pointer', background: selected.includes(label.value) ? '#f3f4f6' : 'transparent'}}
              >
                <span style={{width: 12, height: 12, borderRadius: '50%', backgroundColor: label.color}} />
                <span style={{flex: 1}}>{label.label}</span>
                {selected.includes(label.value) && <span>✓</span>}
              </div>
            ))}
          </div>
        </div>
      )}
      {selected.length > 0 && (
        <div style={{display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 8}}>
          {selected.map(s => {
            const l = LABELS.find(x => x.value === s);
            return (
              <span key={s} style={{display: 'inline-flex', alignItems: 'center', gap: 4, padding: '2px 8px', borderRadius: 12, fontSize: 12, color: '#fff', backgroundColor: l?.color}}>
                <span style={{width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.5)'}} />
                {l?.label}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
