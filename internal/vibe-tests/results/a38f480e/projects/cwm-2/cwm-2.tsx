// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Popover} from '@astryxdesign/core/Popover';
import {Button} from '@astryxdesign/core/Button';
import {TextInput} from '@astryxdesign/core/TextInput';

type Label = {
  id: string;
  name: string;
  color: string;
};

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
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = labels.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleLabel = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) {next.delete(id);}
      else {next.add(id);}
      return next;
    });
  };

  return (
    <Popover
      trigger={<Button label="Labels" variant="secondary" />}
      title="Apply labels"
    >
      <div className="flex flex-col gap-2 p-2">
        <TextInput
          label="Filter labels"
          isLabelHidden
          value={search}
          onChange={setSearch}
          placeholder="Filter labels"
        />
        <div className="flex flex-col gap-1">
          {filtered.map(label => (
            <label
              key={label.id}
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.has(label.id)}
                onChange={() => toggleLabel(label.id)}
                className="rounded border-gray-300"
              />
              <span
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{backgroundColor: label.color}}
              />
              <span className="text-sm">{label.name}</span>
            </label>
          ))}
        </div>
      </div>
    </Popover>
  );
}
