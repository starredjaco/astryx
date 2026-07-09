// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {TextInput} from '@astryxdesign/core/TextInput';
import {TextArea} from '@astryxdesign/core/TextArea';
import {Selector} from '@astryxdesign/core/Selector';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Text';

export default function SupportTicketForm() {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
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
    <div className="max-w-lg p-6">
      <div className="space-y-5">
        <Heading level={1}>Submit a Support Ticket</Heading>
        <TextInput
          label="Subject"
          value={subject}
          onChange={setSubject}
          placeholder="Brief description of your issue"
          isRequired
        />
        <TextArea
          label="Description"
          value={description}
          onChange={setDescription}
          placeholder="Describe your issue in detail..."
          rows={5}
          maxLength={500}
        />
        <Selector
          label="Priority"
          options={[
            {value: 'low', label: 'Low'},
            {value: 'medium', label: 'Medium'},
            {value: 'high', label: 'High'},
            {value: 'urgent', label: 'Urgent'},
          ]}
          value={priority}
          onChange={setPriority}
          placeholder="Select priority..."
          isRequired
        />
        <Button
          label="Submit Ticket"
          variant="primary"
          isLoading={isSubmitting}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
