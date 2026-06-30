// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

const members = [
  {name: 'Alice Chen', role: 'Eng Manager', email: 'alice@co.com', dept: 'Engineering'},
  {name: 'Bob Smith', role: 'Senior Designer', email: 'bob@co.com', dept: 'Design'},
  {name: 'Carol Davis', role: 'PM', email: 'carol@co.com', dept: 'Product'},
];

export default function TeamMembersList() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{maxWidth: 400, padding: 24, fontFamily: 'system-ui'}}>
      <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Team Members</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
        {members.map(m => (
          <div key={m.name} style={{position: 'relative'}} onMouseEnter={() => setHovered(m.name)} onMouseLeave={() => setHovered(null)}>
            <div style={{display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 6, cursor: 'pointer', backgroundColor: hovered === m.name ? '#f3f4f6' : 'transparent'}}>
              <div style={{width: 32, height: 32, borderRadius: '50%', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600}}>{m.name.split(' ').map(n => n[0]).join('')}</div>
              <span style={{fontSize: 14}}>{m.name}</span>
            </div>
            {hovered === m.name && (
              <div style={{position: 'absolute', top: '100%', left: 0, zIndex: 10, backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: 8, padding: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: 240}}>
                <div style={{display: 'flex', gap: 12, alignItems: 'center'}}>
                  <div style={{width: 48, height: 48, borderRadius: '50%', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600}}>{m.name.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <div style={{fontWeight: 600}}>{m.name}</div>
                    <div style={{fontSize: 13, color: '#6b7280'}}>{m.role}</div>
                    <span style={{fontSize: 11, backgroundColor: '#f3f4f6', padding: '2px 6px', borderRadius: 4}}>{m.dept}</span>
                    <div style={{fontSize: 13, marginTop: 4}}>{m.email}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}