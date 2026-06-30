// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Calendar} from '../components/ui/calendar';
import {Popover, PopoverContent, PopoverTrigger} from '../components/ui/popover';
import {Button} from '../components/ui/button';
import {Label} from '../components/ui/label';
import {type DateRange} from 'react-day-picker';

export default function HotelDatePicker() {
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const today = new Date();

  return (
    <div className="space-y-4 max-w-lg">
      <h2 className="text-2xl font-bold">Book Your Stay</h2>
      <div className="space-y-2">
        <Label>Travel Dates</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left">
              {range?.from ? (
                range.to ? (
                  `${range.from.toLocaleDateString()} - ${range.to.toLocaleDateString()}`
                ) : range.from.toLocaleDateString()
              ) : 'Select dates'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              selected={range}
              onSelect={setRange}
              disabled={{before: today}}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}