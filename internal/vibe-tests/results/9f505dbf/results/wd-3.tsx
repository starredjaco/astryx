// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

type Step = 'welcome' | 'profile' | 'preferences' | 'done';

export default function OnboardingFlow() {
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState<string[]>([]);

  const stepIndex = ['welcome', 'profile', 'preferences', 'done'].indexOf(step);
  const progress = ((stepIndex + 1) / 4) * 100;

  const togglePref = (pref: string) => {
    setPreferences(prev => prev.includes(pref) ? prev.filter(p => p !== pref) : [...prev, pref]);
  };

  return (
    <div style={{maxWidth: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16}}>
      <div style={{background: '#eee', borderRadius: 4, height: 8}}>
        <div style={{background: '#0066cc', height: '100%', borderRadius: 4, width: `${progress}%`, transition: 'width 0.3s'}} />
      </div>
      <div style={{border: '1px solid #ddd', borderRadius: 8, padding: 24}}>
        {step === 'welcome' && (
          <>
            <h2>Welcome!</h2>
            <p style={{color: '#666'}}>Let us get you set up quickly.</p>
            <button onClick={() => setStep('profile')} style={{marginTop: 12, padding: '8px 16px', background: '#0066cc', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer'}}>Get Started</button>
          </>
        )}
        {step === 'profile' && (
          <>
            <h2>Profile Setup</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
              <label>Name<input value={name} onChange={e => setName(e.target.value)} style={{display: 'block', width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4, marginTop: 4}} /></label>
              <label>Email<input type="email" value={email} onChange={e => setEmail(e.target.value)} style={{display: 'block', width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4, marginTop: 4}} /></label>
            </div>
            <div style={{display: 'flex', gap: 8, marginTop: 16}}>
              <button onClick={() => setStep('welcome')} style={{padding: '8px 16px', background: 'transparent', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer'}}>Back</button>
              <button onClick={() => setStep('preferences')} style={{padding: '8px 16px', background: '#0066cc', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer'}}>Next</button>
            </div>
          </>
        )}
        {step === 'preferences' && (
          <>
            <h2>Preferences</h2>
            {['Design', 'Development', 'Marketing', 'Analytics'].map(pref => (
              <label key={pref} style={{display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0'}}>
                <input type="checkbox" checked={preferences.includes(pref)} onChange={() => togglePref(pref)} />
                {pref}
              </label>
            ))}
            <div style={{display: 'flex', gap: 8, marginTop: 16}}>
              <button onClick={() => setStep('profile')} style={{padding: '8px 16px', background: 'transparent', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer'}}>Back</button>
              <button onClick={() => setStep('done')} style={{padding: '8px 16px', background: '#0066cc', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer'}}>Finish</button>
            </div>
          </>
        )}
        {step === 'done' && (
          <>
            <h2>All Done!</h2>
            <p>Welcome aboard, {name || 'friend'}!</p>
          </>
        )}
      </div>
    </div>
  );
}
