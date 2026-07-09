// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {Command, CommandInput, CommandList, CommandItem} from '@/components/ui/command';
import {Button} from '@/components/ui/button';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';

const TAGS = ['Frontend', 'Backend', 'Design', 'DevOps', 'Mobile'];

const RESULTS = [
  {id: 1, name: 'Auth Service', tags: ['Backend', 'DevOps']},
  {id: 2, name: 'Dashboard UI', tags: ['Frontend', 'Design']},
  {id: 3, name: 'Mobile App', tags: ['Mobile', 'Frontend']},
  {id: 4, name: 'API Gateway', tags: ['Backend']},
];

export default function FilterableTable() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggle = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const filtered = selectedTags.length === 0
    ? RESULTS
    : RESULTS.filter(r => r.tags.some(t => selectedTags.includes(t)));

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" aria-label="Filter by tags">
              {selectedTags.length === 0 ? 'Filter by tags' : `${selectedTags.length} tags`}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-0">
            <Command>
              <CommandInput placeholder="Search tags..." />
              <CommandList>
                {TAGS.map(tag => (
                  <CommandItem key={tag} onSelect={() => toggle(tag)}>
                    <span>{tag}</span>
                    {selectedTags.includes(tag) && <span className="ml-auto">✓</span>}
                  </CommandItem>
                ))}
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Tags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.tags.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
