// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabStyle = (tab: string) => ({
    padding: '8px 16px',
    border: 'none',
    borderBottom: activeTab === tab ? '2px solid #3b82f6' : '2px solid transparent',
    background: 'none',
    cursor: 'pointer',
    fontWeight: activeTab === tab ? 600 : 400,
    color: activeTab === tab ? '#3b82f6' : '#6b7280',
  });

  return (
    <div style={{maxWidth: 800, margin: '0 auto', padding: 24, fontFamily: 'system-ui'}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24}}>
        <div style={{width: 64, height: 64, borderRadius: '50%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 700}}>JD</div>
        <div>
          <h1 style={{margin: 0, fontSize: 24}}>Jane Doe</h1>
          <p style={{margin: 0, color: '#6b7280'}}>Software Engineer</p>
        </div>
      </div>
      <div style={{borderBottom: '1px solid #e5e7eb', marginBottom: 24}}>
        <button style={tabStyle('overview')} onClick={() => setActiveTab('overview')}>Overview</button>
        <button style={tabStyle('activity')} onClick={() => setActiveTab('activity')}>Activity</button>
        <button style={tabStyle('settings')} onClick={() => setActiveTab('settings')}>Settings</button>
      </div>
      {activeTab === 'overview' && (
        <div style={{padding: 16, border: '1px solid #e5e7eb', borderRadius: 8}}>
          <h2 style={{marginTop: 0}}>About</h2>
          <p>Full-stack developer building web apps for 5 years.</p>
        </div>
      )}
      {activeTab === 'activity' && (
        <div style={{padding: 16, border: '1px solid #e5e7eb', borderRadius: 8}}>
          <h2 style={{marginTop: 0}}>Recent Activity</h2>
          <ul><li>Pushed 3 commits to main</li><li>Opened PR #42</li></ul>
        </div>
      )}
      {activeTab === 'settings' && (
        <div style={{padding: 16, border: '1px solid #e5e7eb', borderRadius: 8}}>
          <h2 style={{marginTop: 0}}>Account Settings</h2>
          <p>Manage your profile and preferences.</p>
        </div>
      )}
    </div>
  );
}
