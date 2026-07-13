// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {Checkbox} from '@/components/ui/checkbox';
import {Button} from '@/components/ui/button';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator} from '@/components/ui/dropdown-menu';

const emails = [
  {id: '1', sender: 'Alice', subject: 'Project update', date: '2024-01-15', preview: 'Here is the latest...'},
  {id: '2', sender: 'Bob', subject: 'Meeting tomorrow', date: '2024-01-14', preview: 'Can we meet at...'},
  {id: '3', sender: 'Carol', subject: 'Invoice #1234', date: '2024-01-13', preview: 'Please find attached...'},
  {id: '4', sender: 'Dave', subject: 'Quick question', date: '2024-01-12', preview: 'Do you have time...'},
  {id: '5', sender: 'Eve', subject: 'Welcome aboard', date: '2024-01-11', preview: 'Congratulations on...'},
];

export default function EmailInbox() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleAll = () => {
    if (selected.size === emails.length) {setSelected(new Set());}
    else {setSelected(new Set(emails.map(e => e.id)));}
  };

  const toggleOne = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) {next.delete(id);}
    else {next.add(id);}
    setSelected(next);
  };

  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex gap-2 items-center">
        <Checkbox
          checked={selected.size === emails.length ? true : selected.size > 0 ? 'indeterminate' : false}
          onCheckedChange={toggleAll}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">Actions</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Archive</DropdownMenuItem>
            <DropdownMenuItem>Mark as read</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10"></TableHead>
            <TableHead>From</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead className="w-28">Date</TableHead>
            <TableHead>Preview</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {emails.map(email => (
            <TableRow key={email.id}>
              <TableCell>
                <Checkbox
                  checked={selected.has(email.id)}
                  onCheckedChange={() => toggleOne(email.id)}
                />
              </TableCell>
              <TableCell>{email.sender}</TableCell>
              <TableCell>{email.subject}</TableCell>
              <TableCell>{email.date}</TableCell>
              <TableCell className="text-muted-foreground">{email.preview}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
