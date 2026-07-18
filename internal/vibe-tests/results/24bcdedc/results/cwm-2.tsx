// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {MultiSelector} from '@astryxdesign/core/MultiSelector';
import {Badge} from '@astryxdesign/core/Badge';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
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
  {value: 'invalid', label: 'invalid', color: '#e4e669'},
  {value: 'wontfix', label: 'wontfix', color: '#ffffff'},
];

export default function LabelPicker() {
  const [selected, setSelected] = useState<string[]>([]);

  const options = LABELS.map(l => ({
    value: l.value,
    label: l.label,
  }));

  return (
    <VStack gap="md">
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
            <HStack gap="sm" align="center">
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  backgroundColor: label?.color,
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              <Text>{option.label}</Text>
            </HStack>
          );
        }}
      />
      {selected.length > 0 && (
        <HStack gap="xs" wrap>
          {selected.map(val => {
            const label = LABELS.find(l => l.value === val);
            return (
              <Badge key={val} color={label?.color}>
                {label?.label}
              </Badge>
            );
          })}
        </HStack>
      )}
    </VStack>
  );
}
