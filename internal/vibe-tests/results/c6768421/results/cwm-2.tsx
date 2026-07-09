// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {Command, CommandInput, CommandList, CommandItem, CommandEmpty} from '@/components/ui/command';
import {Badge} from '@/components/ui/badge';
import {Button} from '@/components/ui/button';

const LABELS = [
  {value: 'bug', label: 'Bug', color: '#e11d48'},
  {value: 'feature', label: 'Feature', color: '#16a34a'},
  {value: 'docs', label: 'Documentation', color: '#2563eb'},
  {value: 'enhancement', label: 'Enhancement', color: '#ca8a04'},
  {value: 'help-wanted', label: 'Help Wanted', color: '#9333ea'},
];

export default function IssueLabelPicker() {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggle = (value: string) => {
    setSelected(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  return (
    <div className="space-y-3 p-4 max-w-md">
      <label className="text-sm font-medium">Labels</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            {selected.length === 0 ? 'Apply labels...' : `${selected.length} selected`}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 p-0">
          <Command>
            <CommandInput placeholder="Filter labels..." />
            <CommandList>
              <CommandEmpty>No labels found.</CommandEmpty>
              {LABELS.map(label => (
                <CommandItem key={label.value} onSelect={() => toggle(label.value)}>
                  <div className="flex items-center gap-2 w-full">
                    <span className="w-3 h-3 rounded-full" style={{backgroundColor: label.color}} />
                    <span>{label.label}</span>
                    {selected.includes(label.value) && <span className="ml-auto">✓</span>}
                  </div>
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {selected.map(s => {
            const l = LABELS.find(x => x.value === s);
            return <Badge key={s} style={{backgroundColor: l?.color, color: 'white'}}>{l?.label}</Badge>;
          })}
        </div>
      )}
    </div>
  );
}
