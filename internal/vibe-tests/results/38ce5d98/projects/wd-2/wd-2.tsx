// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Button} from '@astryxdesign/core/Button';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {TextInput} from '@astryxdesign/core/TextInput';
import {useState} from 'react';

const steps = ['Personal Info', 'Contact Details', 'Review'];

export default function FormWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
  });

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6">
      <ProgressBar label="Form progress" value={progress} max={100} />
      <div className="flex gap-4">
        {steps.map((step, i) => (
          <span key={step} className={i === currentStep ? 'font-semibold text-sm' : 'text-sm text-gray-500'}>
            {i + 1}. {step}
          </span>
        ))}
      </div>

      {currentStep === 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <TextInput label="First Name" value={formData.firstName} onChange={(v) => setFormData({...formData, firstName: v})} />
          <TextInput label="Last Name" value={formData.lastName} onChange={(v) => setFormData({...formData, lastName: v})} />
        </div>
      )}

      {currentStep === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Contact Details</h2>
          <TextInput label="Email" value={formData.email} onChange={(v) => setFormData({...formData, email: v})} />
          <TextInput label="Phone" value={formData.phone} onChange={(v) => setFormData({...formData, phone: v})} />
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Review</h2>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
        </div>
      )}

      <div className="flex justify-end gap-2">
        {currentStep > 0 && (
          <Button label="Back" variant="ghost" onPress={() => setCurrentStep(currentStep - 1)} />
        )}
        {currentStep < steps.length - 1 ? (
          <Button label="Next" variant="primary" onPress={() => setCurrentStep(currentStep + 1)} />
        ) : (
          <Button label="Submit" variant="primary" onPress={() => {}} />
        )}
      </div>
    </div>
  );
}
