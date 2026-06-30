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
    <div className="max-w-lg mx-auto p-6">
      <Stack gap={4}>
        <Text type="display" size="sm">Book Your Stay</Text>
        <DateRangeInput
          label="Travel dates"
          description="Select your check-in and check-out dates"
          value={range}
          onChange={setRange}
          min={today}
          numberOfMonths={2}
        />
        {range && (
          <div className="mt-2 p-3 bg-green-50 rounded-md">
            <Text type="body" size="sm">
              Check-in: {range.start} | Check-out: {range.end}
            </Text>
          </div>
        )}
      </Stack>
    </div>
  );
}