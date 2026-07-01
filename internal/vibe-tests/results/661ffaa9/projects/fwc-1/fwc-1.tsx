// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';

interface TrialBannerProps {
  daysRemaining: number;
  onUpgrade: () => void;
}

export default function TrialBanner({daysRemaining, onUpgrade}: TrialBannerProps) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      backgroundColor: '#fef3cd',
      border: '1px solid #ffc107',
      borderRadius: 8,
      maxWidth: 600,
    }}>
      <div>
        <p style={{margin: 0, fontWeight: 600, color: '#856404'}}>
          Your trial expires in {daysRemaining} day{daysRemaining === 1 ? '' : 's'}
        </p>
        <p style={{margin: '4px 0 0', fontSize: 14, color: '#856404'}}>
          Upgrade now to keep access to all features.
        </p>
      </div>
      <button
        onClick={onUpgrade}
        style={{
          padding: '8px 16px',
          backgroundColor: '#0d6efd',
          color: '#fff',
          border: 'none',
          borderRadius: 6,
          fontWeight: 500,
          cursor: 'pointer',
        }}
      >
        Upgrade
      </button>
    </div>
  );
}
