// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Command, CommandInput, CommandList, CommandItem, CommandGroup} from '../components/ui/command';
import {Popover, PopoverTrigger, PopoverContent} from '../components/ui/popover';
import {Button} from '../components/ui/button';
import {Badge} from '../components/ui/badge';
import {Table, TableHeader, TableRow, TableHead, TableBody, TableCell} from '../components/ui/table';

const TAGS = ['Bug', 'Feature', 'Enhancement', 'Documentation', 'Help Wanted'];

const RESULTS = [
  {id: 1, title: 'Fix login flow', tags: ['Bug']},
  {id: 2, title: 'Add dark mode', tags: ['Feature', 'Enhancement']},
  {id: 3, title: 'Update README', tags: ['Documentation']},
  {id: 4, title: 'Refactor auth', tags: ['Enhancement']},
  {id: 5, title: 'Add search', tags: ['Feature', 'Help Wanted']},
];

export default function FilterBar() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const toggle = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filtered = selectedTags.length === 0
    ? RESULTS
    : RESULTS.filter(r => r.tags.some(t => selectedTags.includes(t)));

  return (
    <div className="space-y-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" aria-label="Filter by tags">
            {selectedTags.length > 0
              ? `${selectedTags.length} tag${selectedTags.length > 1 ? 's' : ''} selected`
              : 'Filter by tags'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-60 p-0">
          <Command>
            <CommandInput placeholder="Search tags..." />
            <CommandList>
              <CommandGroup>
                {TAGS.map(tag => (
                  <CommandItem key={tag} onSelect={() => toggle(tag)}>
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag)}
                      readOnly
                      className="mr-2"
                    />
                    {tag}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {selectedTags.length > 0 && (
        <div className="flex gap-1 flex-wrap">
          {selectedTags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      )}

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Tags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.tags.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
