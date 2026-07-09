// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

export default function SupportTicketForm() {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await fetch('/api/tickets', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({subject, description, priority})});
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{maxWidth: 500, padding: 24, fontFamily: 'system-ui'}}>
      <h1 style={{marginBottom: 24}}>Submit a Support Ticket</h1>
      <div style={{marginBottom: 16}}>
        <label style={{display: 'block', marginBottom: 4, fontWeight: 500, fontSize: 14}}>Subject *</label>
        <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Brief description" required style={{width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6}} />
      </div>
      <div style={{marginBottom: 16}}>
        <label style={{display: 'block', marginBottom: 4, fontWeight: 500, fontSize: 14}}>Description</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe your issue..." rows={5} maxLength={500} style={{width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6, resize: 'vertical'}} />
        <div style={{textAlign: 'right', fontSize: 12, color: '#6b7280'}}>{description.length}/500</div>
      </div>
      <div style={{marginBottom: 16}}>
        <label style={{display: 'block', marginBottom: 4, fontWeight: 500, fontSize: 14}}>Priority *</label>
        <select value={priority} onChange={e => setPriority(e.target.value)} required style={{width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6}}>
          <option value="">Select priority...</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
      <button type="submit" disabled={isSubmitting} style={{padding: '10px 20px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', opacity: isSubmitting ? 0.7 : 1}}>
        {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
      </button>
    </form>
  );
}
