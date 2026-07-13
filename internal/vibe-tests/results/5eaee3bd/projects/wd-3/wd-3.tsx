// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

type Step = 'welcome' | 'profile' | 'preferences' | 'done';

export default function OnboardingFlow() {
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const cardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: 12,
    padding: 32,
    width: 480,
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', padding: 24}}>
      <div style={cardStyle}>
        {step === 'welcome' && (
          <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            <h2 style={{margin: 0}}>Welcome!</h2>
            <p style={{margin: 0}}>Let us get you set up in just a few steps.</p>
            <button onClick={() => setStep('profile')} style={{padding: '10px 20px', background: '#0066cc', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Get Started</button>
          </div>
        )}
        {step === 'profile' && (
          <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            <h2 style={{margin: 0}}>Profile Setup</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <label>Full Name</label>
              <input value={name} onChange={e => setName(e.target.value)} style={{padding: 8, border: '1px solid #ccc', borderRadius: 6}} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 4}}>
              <label>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{padding: 8, border: '1px solid #ccc', borderRadius: 6}} />
            </div>
            <div style={{display: 'flex', gap: 8}}>
              <button onClick={() => setStep('welcome')} style={{padding: '10px 20px', background: 'transparent', border: '1px solid #ccc', borderRadius: 6, cursor: 'pointer'}}>Back</button>
              <button onClick={() => setStep('preferences')} style={{padding: '10px 20px', background: '#0066cc', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Next</button>
            </div>
          </div>
        )}
        {step === 'preferences' && (
          <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            <h2 style={{margin: 0}}>Preferences</h2>
            <p style={{margin: 0}}>Choose how you want to be notified.</p>
            <div style={{display: 'flex', gap: 8}}>
              <button onClick={() => setStep('profile')} style={{padding: '10px 20px', background: 'transparent', border: '1px solid #ccc', borderRadius: 6, cursor: 'pointer'}}>Back</button>
              <button onClick={() => setStep('done')} style={{padding: '10px 20px', background: '#0066cc', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Finish</button>
            </div>
          </div>
        )}
        {step === 'done' && (
          <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            <h2 style={{margin: 0}}>All Done!</h2>
            <p style={{margin: 0}}>You are all set, {name || 'friend'}. Welcome aboard.</p>
          </div>
        )}
      </div>
    </div>
  );
}
