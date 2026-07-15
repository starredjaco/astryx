// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

export default function FeedbackDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [comments, setComments] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => setIsSubmitted(true);
  const handleReset = () => {setTitle(''); setComments(''); setIsSubmitted(false); setIsOpen(false);};

  return (
    <>
      <button onClick={() => setIsOpen(true)} style={{padding: '8px 16px', background: '#0066cc', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 14}}>Give Feedback</button>
      {isOpen && (
        <div style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}} role="dialog" aria-label="Feedback form">
          <div style={{background: 'white', borderRadius: 12, padding: 24, width: 400, maxWidth: '90vw'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
              <h2 style={{margin: 0, fontSize: 18}}>Feedback</h2>
              <button onClick={() => setIsOpen(false)} style={{background: 'none', border: 'none', fontSize: 20, cursor: 'pointer'}} aria-label="Close">&times;</button>
            </div>
            {isSubmitted ? (
              <div style={{textAlign: 'center', padding: 24}}>
                <p style={{color: '#16a34a', fontWeight: 600, fontSize: 16}}>Thank you for your feedback!</p>
                <p style={{color: '#6b7280', fontSize: 14, marginTop: 8}}>Your response has been recorded.</p>
                <button onClick={handleReset} style={{marginTop: 16, padding: '8px 16px', background: '#0066cc', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Close</button>
              </div>
            ) : (
              <>
                <div style={{marginBottom: 12}}>
                  <label style={{display: 'block', fontSize: 14, fontWeight: 500, marginBottom: 4}}>Title</label>
                  <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Brief summary" style={{width: '100%', padding: 8, border: '1px solid #d1d5db', borderRadius: 6, fontSize: 14}} />
                </div>
                <div style={{marginBottom: 16}}>
                  <label style={{display: 'block', fontSize: 14, fontWeight: 500, marginBottom: 4}}>Comments</label>
                  <textarea value={comments} onChange={e => setComments(e.target.value)} placeholder="Tell us more..." rows={5} style={{width: '100%', padding: 8, border: '1px solid #d1d5db', borderRadius: 6, fontSize: 14, resize: 'vertical'}} />
                </div>
                <div style={{display: 'flex', justifyContent: 'flex-end', gap: 8}}>
                  <button onClick={() => setIsOpen(false)} style={{padding: '8px 16px', background: 'transparent', border: '1px solid #d1d5db', borderRadius: 6, cursor: 'pointer'}}>Cancel</button>
                  <button onClick={handleSubmit} disabled={!title || !comments} style={{padding: '8px 16px', background: !title || !comments ? '#93c5fd' : '#0066cc', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Submit</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
