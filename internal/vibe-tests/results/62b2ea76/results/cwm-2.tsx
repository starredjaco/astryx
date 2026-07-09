// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {MultiSelector} from '@astryxdesign/core/MultiSelector';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    padding: 16,
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
});

const LABELS = [
  {value: 'bug', label: 'Bug', icon: '🔴'},
  {value: 'feature', label: 'Feature', icon: '🟢'},
  {value: 'docs', label: 'Documentation', icon: '🔵'},
  {value: 'enhancement', label: 'Enhancement', icon: '🟡'},
  {value: 'help-wanted', label: 'Help Wanted', icon: '🟣'},
  {value: 'good-first-issue', label: 'Good First Issue', icon: '🟠'},
];

export default function IssueLabelPicker() {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div {...stylex.props(styles.container)}>
      <Stack gap={3}>
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
        />
      </Stack>
    </div>
  );
}
