// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {MultiSelector} from '@astryxdesign/core/MultiSelector';
import {Badge} from '@astryxdesign/core/Badge';
import {Text} from '@astryxdesign/core/Text';

interface Label {
  value: string;
  label: string;
  color: string;
}

const LABELS: Label[] = [
  {value: 'bug', label: 'bug', color: '#d73a4a'},
  {value: 'enhancement', label: 'enhancement', color: '#a2eeef'},
  {value: 'good-first-issue', label: 'good first issue', color: '#7057ff'},
  {value: 'help-wanted', label: 'help wanted', color: '#008672'},
  {value: 'documentation', label: 'documentation', color: '#0075ca'},
  {value: 'duplicate', label: 'duplicate', color: '#cfd3d7'},
];

export default function LabelPicker() {
  const [selected, setSelected] = useState<string[]>([]);

  const options = LABELS.map(l => ({value: l.value, label: l.label}));

  return (
    <div className="flex flex-col gap-3">
      <MultiSelector
        label="Labels"
        options={options}
        value={selected}
        onChange={setSelected}
        hasSearch
        searchPlaceholder="Filter labels"
        triggerDisplay="badges"
        placeholder="Apply labels"
        renderOption={(option) => {
          const label = LABELS.find(l => l.value === option.value);
          return (
            <div className="flex items-center gap-2">
              <span
                className="w-3.5 h-3.5 rounded-full shrink-0"
                style={{backgroundColor: label?.color}}
              />
              <Text>{option.label}</Text>
            </div>
          );
        }}
      />
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {selected.map(val => {
            const label = LABELS.find(l => l.value === val);
            return <Badge key={val} color={label?.color}>{label?.label}</Badge>;
          })}
        </div>
      )}
    </div>
  );
}
