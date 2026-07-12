// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

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

  const inputStyle = {width: '100%', padding: '8px 12px', border: '1px solid #ccc', borderRadius: 6, fontSize: 14};

  return (
    <div style={{maxWidth: 600, margin: '0 auto', padding: 24, display: 'flex', flexDirection: 'column', gap: 16}}>
      <h2 style={{margin: 0}}>Submit a Support Ticket</h2>
      <div>
        <label style={{display: 'block', fontWeight: 500, marginBottom: 4}}>Subject *</label>
        <input style={inputStyle} value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div>
        <label style={{display: 'block', fontWeight: 500, marginBottom: 4}}>Description *</label>
        <textarea style={{...inputStyle, minHeight: 120, resize: 'vertical'}} value={description} onChange={(e) => setDescription(e.target.value.slice(0, MAX_CHARS))} />
        <p style={{textAlign: 'right', color: '#666', fontSize: 12, margin: '4px 0 0'}}>{description.length}/{MAX_CHARS}</p>
      </div>
      <div>
        <label style={{display: 'block', fontWeight: 500, marginBottom: 4}}>Priority</label>
        <select style={inputStyle} value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
      <button onClick={handleSubmit} disabled={isSubmitting} style={{padding: '10px 20px', backgroundColor: '#0066cc', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 14}}>
        {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
      </button>
    </div>
  );
}
