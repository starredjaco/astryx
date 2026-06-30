// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {DateRangeInput} from '@astryxdesign/core/DateRangeInput';
import {Stack} from '@astryxdesign/core/Stack';
import {Text} from '@astryxdesign/core/Text';

type DateRange = {start: string; end: string};

export default function HotelDatePicker() {
  const [range, setRange] = useState<DateRange | null>(null);
  const today = new Date().toISOString().split('T')[0];

  return (
    <Stack gap={4}>
      <Text type="display" size="sm">Book Your Stay</Text>
      <DateRangeInput
        label="Travel dates"
        description="Select your check-in and check-out dates"
        value={range}
        onChange={setRange}
        min={today}
        numberOfMonths={2}
        placeholder="Select check-in and check-out"
      />
      {range && (
        <Text type="body" size="sm">
          Check-in: {range.start} | Check-out: {range.end}
        </Text>
      )}
    </Stack>
  );
}