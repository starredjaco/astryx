// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';
import {Button} from '@/components/ui/button';
import {Label} from '@/components/ui/label';

const MAX_CHARS = 1000;

export default function SupportTicketForm() {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await fetch('/api/tickets', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({subject, description, priority}),
    });
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Submit a Support Ticket</h2>
      <div>
        <Label htmlFor="subject">Subject *</Label>
        <Input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="description">Description *</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value.slice(0, MAX_CHARS))}
        />
        <p className="text-sm text-muted-foreground text-right mt-1">{description.length}/{MAX_CHARS}</p>
      </div>
      <div>
        <Label>Priority</Label>
        <Select value={priority} onValueChange={setPriority}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="urgent">Urgent</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
      </Button>
    </div>
  );
}
