// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Badge} from '@astryxdesign/core/Badge';
import {CheckboxInput} from '@astryxdesign/core/CheckboxInput';
import {Popover} from '@astryxdesign/core/Popover';
import {Button} from '@astryxdesign/core/Button';
import {Text} from '@astryxdesign/core/Text';
import stylex from '@stylexjs/stylex';

type Label = {
  id: string;
  name: string;
  color: string;
  variant: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'teal' | 'yellow' | 'pink';
};

const labels: Label[] = [
  {id: '1', name: 'bug', color: '#d73a4a', variant: 'red'},
  {id: '2', name: 'enhancement', color: '#a2eeef', variant: 'teal'},
  {id: '3', name: 'documentation', color: '#0075ca', variant: 'blue'},
  {id: '4', name: 'good first issue', color: '#7057ff', variant: 'purple'},
  {id: '5', name: 'help wanted', color: '#008672', variant: 'green'},
  {id: '6', name: 'question', color: '#d876e3', variant: 'pink'},
  {id: '7', name: 'wontfix', color: '#ffffff', variant: 'orange'},
  {id: '8', name: 'priority: high', color: '#b60205', variant: 'red'},
];

const styles = stylex.create({
  colorDot: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    flexShrink: 0,
  },
  labelRow: {
    cursor: 'pointer',
    padding: '4px 0',
  },
});

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
      <VStack gap={2} padding={2}>
        <TextInput
          label="Filter labels"
          isLabelHidden
          value={search}
          onChange={setSearch}
          placeholder="Filter labels"
        />
        <VStack gap={1}>
          {filtered.map(label => (
            <HStack key={label.id} gap={2} vAlign="center" {...stylex.props(styles.labelRow)}>
              <CheckboxInput
                label={label.name}
                isLabelHidden
                isChecked={selected.has(label.id)}
                onChange={() => toggleLabel(label.id)}
              />
              <div {...stylex.props(styles.colorDot)} style={{backgroundColor: label.color}} />
              <Text>{label.name}</Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Popover>
  );
}
