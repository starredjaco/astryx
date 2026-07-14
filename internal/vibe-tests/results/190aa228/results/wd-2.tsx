// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Button} from '@/components/ui/button';
import {Progress} from '@/components/ui/progress';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
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
      <Progress value={progress} />
      <div className="flex gap-4">
        {steps.map((step, i) => (
          <span key={step} className={`text-sm ${i === currentStep ? 'font-semibold' : 'text-muted-foreground'}`}>
            {i + 1}. {step}
          </span>
        ))}
      </div>

      {currentStep === 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Contact Details</h2>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
          </div>
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
          <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>Back</Button>
        )}
        {currentStep < steps.length - 1 ? (
          <Button onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
        ) : (
          <Button onClick={() => {}}>Submit</Button>
        )}
      </div>
    </div>
  );
}
