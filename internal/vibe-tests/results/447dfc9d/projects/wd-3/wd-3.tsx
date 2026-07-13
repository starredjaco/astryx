// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';

type Step = 'welcome' | 'profile' | 'preferences' | 'done';

export default function OnboardingFlow() {
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <Card className="w-[480px]">
        <CardHeader>
          <CardTitle>
            {step === 'welcome' && 'Welcome!'}
            {step === 'profile' && 'Profile Setup'}
            {step === 'preferences' && 'Preferences'}
            {step === 'done' && 'All Done!'}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {step === 'welcome' && (
            <>
              <p>Let us get you set up in just a few steps.</p>
              <Button onClick={() => setStep('profile')}>Get Started</Button>
            </>
          )}
          {step === 'profile' && (
            <>
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" onClick={() => setStep('welcome')}>Back</Button>
                <Button onClick={() => setStep('preferences')}>Next</Button>
              </div>
            </>
          )}
          {step === 'preferences' && (
            <>
              <p>Choose how you want to be notified.</p>
              <div className="flex gap-2">
                <Button variant="ghost" onClick={() => setStep('profile')}>Back</Button>
                <Button onClick={() => setStep('done')}>Finish</Button>
              </div>
            </>
          )}
          {step === 'done' && (
            <p>You are all set, {name || 'friend'}. Welcome aboard.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
