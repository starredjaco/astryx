// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

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

  const thStyle = {padding: '8px 12px', textAlign: 'left' as const, borderBottom: '2px solid #e0e0e0', fontWeight: 600};
  const tdStyle = {padding: '8px 12px', borderBottom: '1px solid #f0f0f0'};

  return (
    <div style={{padding: 16, display: 'flex', flexDirection: 'column', gap: 12}}>
      <div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
        <input type="checkbox" checked={selected.size === emails.length} onChange={toggleAll} />
        <select style={{padding: '4px 8px', border: '1px solid #ccc', borderRadius: 4}}>
          <option>Actions</option>
          <option>Archive</option>
          <option>Mark as read</option>
          <option>Delete</option>
        </select>
      </div>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th style={{...thStyle, width: 40}}></th>
            <th style={thStyle}>From</th>
            <th style={thStyle}>Subject</th>
            <th style={{...thStyle, width: 100}}>Date</th>
            <th style={thStyle}>Preview</th>
          </tr>
        </thead>
        <tbody>
          {emails.map(email => (
            <tr key={email.id} style={{cursor: 'pointer'}}>
              <td style={tdStyle}><input type="checkbox" checked={selected.has(email.id)} onChange={() => toggleOne(email.id)} /></td>
              <td style={tdStyle}>{email.sender}</td>
              <td style={tdStyle}>{email.subject}</td>
              <td style={tdStyle}>{email.date}</td>
              <td style={{...tdStyle, color: '#666'}}>{email.preview}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
