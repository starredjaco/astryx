// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

const steps = ['Personal Info', 'Contact Details', 'Review'];

export default function FormWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', phone: ''});
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div style={{maxWidth: 600, margin: '0 auto', padding: 24}}>
      <div style={{height: 8, backgroundColor: '#eee', borderRadius: 4, marginBottom: 16}}>
        <div style={{height: '100%', width: `${progress}%`, backgroundColor: '#3b82f6', borderRadius: 4, transition: 'width 0.3s'}} />
      </div>
      <div style={{display: 'flex', gap: 16, marginBottom: 24}}>
        {steps.map((step, i) => (
          <span key={step} style={{fontSize: 14, fontWeight: i === currentStep ? 600 : 400, color: i === currentStep ? '#111' : '#888'}}>
            {i + 1}. {step}
          </span>
        ))}
      </div>

      {currentStep === 0 && (
        <div>
          <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Personal Information</h2>
          <div style={{marginBottom: 12}}>
            <label style={{display: 'block', fontSize: 14, marginBottom: 4}}>First Name</label>
            <input style={{width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: 6}} value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
          </div>
          <div style={{marginBottom: 12}}>
            <label style={{display: 'block', fontSize: 14, marginBottom: 4}}>Last Name</label>
            <input style={{width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: 6}} value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div>
          <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Contact Details</h2>
          <div style={{marginBottom: 12}}>
            <label style={{display: 'block', fontSize: 14, marginBottom: 4}}>Email</label>
            <input type="email" style={{width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: 6}} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>
          <div style={{marginBottom: 12}}>
            <label style={{display: 'block', fontSize: 14, marginBottom: 4}}>Phone</label>
            <input style={{width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: 6}} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Review</h2>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
        </div>
      )}

      <div style={{display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 24}}>
        {currentStep > 0 && (
          <button onClick={() => setCurrentStep(currentStep - 1)} style={{padding: '8px 16px', border: '1px solid #ddd', borderRadius: 6, backgroundColor: 'white', cursor: 'pointer'}}>Back</button>
        )}
        <button onClick={() => currentStep < steps.length - 1 ? setCurrentStep(currentStep + 1) : undefined} style={{padding: '8px 16px', border: 'none', borderRadius: 6, backgroundColor: '#3b82f6', color: 'white', cursor: 'pointer'}}>
          {currentStep < steps.length - 1 ? 'Next' : 'Submit'}
        </button>
      </div>
    </div>
  );
}
