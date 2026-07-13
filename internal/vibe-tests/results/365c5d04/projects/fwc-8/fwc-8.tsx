// Copyright (c) Meta Platforms, Inc. and affiliates.

import {DateRangeInput} from '@astryxdesign/core/DateRangeInput';
import {useState} from 'react';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

type DateRange = {start: string; end: string};

export default function HotelDatePicker() {
  const [range, setRange] = useState<DateRange | null>(null);
  const today = new Date().toISOString().split('T')[0];

  return (
    <VStack gap={4} padding={4}>
      <Heading level={2}>Book Your Stay</Heading>
      <Text type="supporting">Select your check-in and check-out dates</Text>
      <DateRangeInput
        label="Stay dates"
        value={range}
        onChange={setRange}
        min={today}
        description="Past dates are not available for booking"
      />
    </VStack>
  );
}
