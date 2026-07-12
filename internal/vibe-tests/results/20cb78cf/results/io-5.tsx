// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {TextInput} from '@astryxdesign/core/TextInput';
import {TextArea} from '@astryxdesign/core/TextArea';
import {Selector} from '@astryxdesign/core/Selector';
import {Button} from '@astryxdesign/core/Button';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Text';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  form: {
    maxWidth: 600,
    margin: '0 auto',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  charCount: {
    textAlign: 'end',
  },
});

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
    <div {...stylex.props(styles.form)}>
      <Heading level={2}>Submit a Support Ticket</Heading>
      <TextInput
        label="Subject"
        value={subject}
        onChange={setSubject}
        isRequired
      />
      <TextArea
        label="Description"
        value={description}
        onChange={(val) => setDescription(val.slice(0, MAX_CHARS))}
        isRequired
      />
      <Text type="supporting" color="secondary" {...stylex.props(styles.charCount)}>
        {description.length}/{MAX_CHARS}
      </Text>
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
      />
      <Button
        label="Submit Ticket"
        variant="primary"
        isLoading={isSubmitting}
        onClick={handleSubmit}
      />
    </div>
  );
}
