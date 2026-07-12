// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabStyle = (tab: string) => ({
    padding: '8px 16px',
    border: 'none',
    borderBottom: activeTab === tab ? '2px solid #0066cc' : '2px solid transparent',
    background: 'none',
    cursor: 'pointer',
    fontWeight: activeTab === tab ? 600 : 400,
    color: activeTab === tab ? '#0066cc' : '#666',
  });

  return (
    <div style={{maxWidth: 800, margin: '0 auto', padding: 24}}>
      <div style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24}}>
        <div style={{width: 64, height: 64, borderRadius: '50%', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, fontWeight: 600}}>JS</div>
        <div>
          <h2 style={{margin: 0}}>Jane Smith</h2>
          <p style={{margin: 0, color: '#666', fontSize: 14}}>Product Designer</p>
        </div>
      </div>
      <div style={{borderBottom: '1px solid #e0e0e0', marginBottom: 16}}>
        <button style={tabStyle('overview')} onClick={() => setActiveTab('overview')}>Overview</button>
        <button style={tabStyle('activity')} onClick={() => setActiveTab('activity')}>Activity</button>
        <button style={tabStyle('settings')} onClick={() => setActiveTab('settings')}>Settings</button>
      </div>
      {activeTab === 'overview' && (
        <div style={{padding: 16, border: '1px solid #e0e0e0', borderRadius: 8}}>
          <h3>About</h3>
          <p>Senior Product Designer with 8 years of experience in design systems.</p>
        </div>
      )}
      {activeTab === 'activity' && (
        <div>
          <div style={{padding: '12px 0', borderBottom: '1px solid #eee'}}><p style={{fontWeight: 600, margin: 0}}>Updated profile photo</p><p style={{color: '#666', fontSize: 14, margin: 0}}>2 hours ago</p></div>
          <div style={{padding: '12px 0', borderBottom: '1px solid #eee'}}><p style={{fontWeight: 600, margin: 0}}>Completed project milestone</p><p style={{color: '#666', fontSize: 14, margin: 0}}>Yesterday</p></div>
        </div>
      )}
      {activeTab === 'settings' && (
        <div style={{padding: 16, border: '1px solid #e0e0e0', borderRadius: 8}}>
          <h3>Account Settings</h3>
          <p>Manage your account preferences.</p>
        </div>
      )}
    </div>
  );
}
