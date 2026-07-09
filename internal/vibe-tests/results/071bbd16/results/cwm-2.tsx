// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {MultiSelector} from '@astryxdesign/core/MultiSelector';
import {Text} from '@astryxdesign/core/Text';

const LABELS = [
  {value: 'bug', label: 'Bug'},
  {value: 'feature', label: 'Feature'},
  {value: 'docs', label: 'Documentation'},
  {value: 'enhancement', label: 'Enhancement'},
  {value: 'help-wanted', label: 'Help Wanted'},
  {value: 'good-first-issue', label: 'Good First Issue'},
];

const COLORS: Record<string, string> = {
  bug: 'bg-red-500',
  feature: 'bg-green-500',
  docs: 'bg-blue-500',
  enhancement: 'bg-yellow-500',
  'help-wanted': 'bg-purple-500',
  'good-first-issue': 'bg-orange-500',
};

export default function IssueLabelPicker() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className="p-4 max-w-md">
      <div className="flex flex-col gap-3">
        <Text type="label">Labels</Text>
        <MultiSelector
          label="Issue labels"
          options={LABELS}
          value={selected}
          onChange={setSelected}
          hasSearch
          searchPlaceholder="Filter labels..."
          triggerDisplay="badges"
          placeholder="Apply labels..."
          renderOption={(opt) => (
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${COLORS[opt.value] || 'bg-gray-400'}`} />
              <span>{opt.label}</span>
            </div>
          )}
        />
        {selected.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {selected.map(s => (
              <span key={s} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs text-white ${COLORS[s]}`}>
                <span className="w-2 h-2 rounded-full bg-white/50" />
                {LABELS.find(l => l.value === s)?.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
