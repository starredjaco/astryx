// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

interface Email {
  id: string;
  sender: string;
  subject: string;
  date: string;
  preview: string;
}

const MOCK_EMAILS: Email[] = [
  {id: '1', sender: 'Alice Johnson', subject: 'Q3 Planning Meeting', date: '2026-06-30', preview: 'Hi team, let us schedule our Q3 planning...'},
  {id: '2', sender: 'Bob Smith', subject: 'Code Review Request', date: '2026-06-30', preview: 'Can you take a look at PR #342?...'},
  {id: '3', sender: 'Carol Lee', subject: 'Design System Update', date: '2026-06-29', preview: 'The new components are ready for review...'},
  {id: '4', sender: 'Dave Chen', subject: 'Lunch Tomorrow?', date: '2026-06-29', preview: 'Anyone up for trying that new place...'},
  {id: '5', sender: 'Eve Martinez', subject: 'Bug Report: Login Flow', date: '2026-06-28', preview: 'Found an issue with the OAuth redirect...'},
];

export default function EmailInbox() {
  const [emails, setEmails] = useState<Email[]>(MOCK_EMAILS);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => { const n = new Set(prev); if (n.has(id)) {n.delete(id);} else {n.add(id);} return n; });
  };
  const toggleAll = () => {
    setSelectedIds(prev => prev.size === emails.length ? new Set() : new Set(emails.map(e => e.id)));
  };

  return (
    <div style={{maxWidth: 800, margin: '0 auto', padding: 24}}>
      <h1 style={{fontSize: 24, fontWeight: 700, marginBottom: 16}}>Inbox</h1>
      {selectedIds.size > 0 && (
        <div style={{display: 'flex', gap: 8, alignItems: 'center', padding: '8px 12px', backgroundColor: '#e8f4fd', borderRadius: 6, marginBottom: 12}}>
          <span style={{fontSize: 14}}>{selectedIds.size} selected</span>
          <button onClick={() => { setEmails(p => p.filter(e => !selectedIds.has(e.id))); setSelectedIds(new Set()); }} style={{padding: '4px 12px', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer'}}>Archive</button>
          <button onClick={() => { setEmails(p => p.filter(e => !selectedIds.has(e.id))); setSelectedIds(new Set()); }} style={{padding: '4px 12px', color: '#dc3545', border: '1px solid #dc3545', borderRadius: 4, cursor: 'pointer'}}>Delete</button>
          <button style={{padding: '4px 12px', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer'}}>Mark as Read</button>
        </div>
      )}
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr style={{borderBottom: '2px solid #dee2e6'}}>
            <th style={{padding: 8, width: 32}}><input type="checkbox" checked={selectedIds.size === emails.length && emails.length > 0} onChange={toggleAll} /></th>
            <th style={{textAlign: 'left', padding: 8}}>Sender</th>
            <th style={{textAlign: 'left', padding: 8}}>Subject</th>
            <th style={{textAlign: 'left', padding: 8}}>Date</th>
            <th style={{textAlign: 'left', padding: 8}}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {emails.map(email => (
            <tr key={email.id} style={{borderBottom: '1px solid #dee2e6'}}>
              <td style={{padding: 8}}><input type="checkbox" checked={selectedIds.has(email.id)} onChange={() => toggleSelect(email.id)} /></td>
              <td style={{padding: 8, fontWeight: 500}}>{email.sender}</td>
              <td style={{padding: 8}}>{email.subject}</td>
              <td style={{padding: 8, fontSize: 14, color: '#666'}}>{email.date}</td>
              <td style={{padding: 8, fontSize: 14, color: '#666', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{email.preview}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
