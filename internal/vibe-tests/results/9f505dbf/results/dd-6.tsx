// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  avatar: string;
}

const TEAM: TeamMember[] = [
  {id: '1', name: 'Alice Chen', role: 'Engineering Lead', email: 'alice@co.com', avatar: 'https://i.pravatar.cc/60?u=alice'},
  {id: '2', name: 'Bob Martinez', role: 'Designer', email: 'bob@co.com', avatar: 'https://i.pravatar.cc/60?u=bob'},
  {id: '3', name: 'Carol Wu', role: 'PM', email: 'carol@co.com', avatar: 'https://i.pravatar.cc/60?u=carol'},
  {id: '4', name: 'Dan Patel', role: 'Dev', email: 'dan@co.com', avatar: 'https://i.pravatar.cc/60?u=dan'},
];

export default function TeamList() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
      <h2>Team Members</h2>
      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
        {TEAM.map(member => (
          <li key={member.id} style={{padding: '12px 0', borderBottom: '1px solid #eee', position: 'relative'}}>
            <span
              onMouseEnter={() => setHoveredId(member.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{color: '#0066cc', cursor: 'pointer'}}
            >
              {member.name}
            </span>
            {hoveredId === member.id && (
              <div style={{position: 'absolute', top: '100%', left: 0, zIndex: 10, background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: 250}}>
                <div style={{display: 'flex', gap: 12, alignItems: 'center'}}>
                  <img src={member.avatar} alt={member.name} style={{width: 48, height: 48, borderRadius: '50%'}} />
                  <div>
                    <p style={{fontWeight: 'bold', margin: 0}}>{member.name}</p>
                    <p style={{color: '#666', fontSize: 14, margin: 0}}>{member.role}</p>
                  </div>
                </div>
                <p style={{fontSize: 14, margin: '8px 0'}}>{member.email}</p>
                <button onClick={() => window.open(`mailto:${member.email}`)} style={{padding: '6px 12px', background: '#0066cc', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer'}}>Message</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
