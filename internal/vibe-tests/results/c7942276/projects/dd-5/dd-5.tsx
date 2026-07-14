// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const emails = [
  {id: '1', sender: 'Alice Johnson', subject: 'Project update', preview: 'Hi, just wanted to share...', date: '2024-03-15'},
  {id: '2', sender: 'Bob Smith', subject: 'Meeting tomorrow', preview: 'Can we reschedule?', date: '2024-03-15'},
  {id: '3', sender: 'Carol White', subject: 'Design review', preview: 'I reviewed the mockups...', date: '2024-03-14'},
  {id: '4', sender: 'Dave Brown', subject: 'Invoice #4521', preview: 'Please find attached...', date: '2024-03-14'},
  {id: '5', sender: 'Eve Davis', subject: 'Welcome!', preview: 'Thrilled to have you...', date: '2024-03-13'},
];

export default function EmailInbox() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggleRow = (id: string) => setSelected(s => s.includes(id) ? s.filter(i => i !== id) : [...s, id]);

  return (
    <div style={{padding: 24}}>
      <h2 style={{fontSize: 20, fontWeight: 600, margin: '0 0 8px'}}>Inbox</h2>
      <p style={{fontSize: 14, color: '#666', margin: '0 0 16px'}}>{emails.length} messages</p>
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr style={{borderBottom: '1px solid #eee'}}>
            <th style={{width: 40, padding: 8}} />
            <th style={{textAlign: 'left', padding: 8, fontSize: 14, fontWeight: 500}}>From</th>
            <th style={{textAlign: 'left', padding: 8, fontSize: 14, fontWeight: 500}}>Subject</th>
            <th style={{textAlign: 'left', padding: 8, fontSize: 14, fontWeight: 500}}>Preview</th>
            <th style={{textAlign: 'left', padding: 8, fontSize: 14, fontWeight: 500}}>Date</th>
          </tr>
        </thead>
        <tbody>
          {emails.map(email => (
            <tr key={email.id} style={{borderBottom: '1px solid #f3f4f6', cursor: 'pointer'}} onClick={() => toggleRow(email.id)}>
              <td style={{padding: 8}}>
                <input type="checkbox" checked={selected.includes(email.id)} onChange={() => toggleRow(email.id)} />
              </td>
              <td style={{padding: 8, fontWeight: 500, fontSize: 14}}>{email.sender}</td>
              <td style={{padding: 8, fontSize: 14}}>{email.subject}</td>
              <td style={{padding: 8, fontSize: 14, color: '#666'}}>{email.preview}</td>
              <td style={{padding: 8, fontSize: 14}}>{email.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
