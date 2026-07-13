// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Calendar} from '@/components/ui/calendar';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';
import {type DateRange} from 'react-day-picker';
import {format} from 'date-fns';

export default function HotelDatePicker() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  return (
    <div className="flex flex-col gap-4 p-6 max-w-md">
      <h2 className="text-2xl font-bold">Book Your Stay</h2>
      <p className="text-muted-foreground">Select your check-in and check-out dates</p>
      <div className="flex flex-col gap-2">
        <Label>Stay dates</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="justify-start text-left font-normal">
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, 'LLL dd, y')} - {format(dateRange.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(dateRange.from, 'LLL dd, y')
                )
              ) : (
                <span className="text-muted-foreground">Select date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="range"
              selected={dateRange}
              onSelect={setDateRange}
              numberOfMonths={2}
              disabled={{before: new Date()}}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
