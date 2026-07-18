// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Command, CommandInput, CommandList, CommandItem, CommandGroup} from '../components/ui/command';
import {Popover, PopoverTrigger, PopoverContent} from '../components/ui/popover';
import {Button} from '../components/ui/button';
import {Badge} from '../components/ui/badge';

interface LabelItem {
  value: string;
  label: string;
  color: string;
}

const LABELS: LabelItem[] = [
  {value: 'bug', label: 'bug', color: '#d73a4a'},
  {value: 'enhancement', label: 'enhancement', color: '#a2eeef'},
  {value: 'good-first-issue', label: 'good first issue', color: '#7057ff'},
  {value: 'help-wanted', label: 'help wanted', color: '#008672'},
  {value: 'documentation', label: 'documentation', color: '#0075ca'},
  {value: 'duplicate', label: 'duplicate', color: '#cfd3d7'},
];

export default function LabelPicker() {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggle = (val: string) => {
    setSelected(prev => prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val]);
  };

  return (
    <div className="space-y-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">Apply labels</Button>
        </PopoverTrigger>
        <PopoverContent className="w-60 p-0">
          <Command>
            <CommandInput placeholder="Filter labels..." />
            <CommandList>
              <CommandGroup>
                {LABELS.map(item => (
                  <CommandItem key={item.value} onSelect={() => toggle(item.value)}>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{backgroundColor: item.color}}
                      />
                      <span>{item.label}</span>
                      {selected.includes(item.value) && <span className="ml-auto">✓</span>}
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {selected.map(val => {
            const item = LABELS.find(l => l.value === val);
            return (
              <Badge key={val} style={{backgroundColor: item?.color, color: '#fff'}}>
                {item?.label}
              </Badge>
            );
          })}
        </div>
      )}
    </div>
  );
}
