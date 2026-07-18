// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '../components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '../components/ui/card';
import {Input} from '../components/ui/input';
import {Label} from '../components/ui/label';
import {Progress} from '../components/ui/progress';
import {Checkbox} from '../components/ui/checkbox';

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
    <div className="max-w-md mx-auto space-y-6">
      <Progress value={progress} />
      <Card>
        <CardContent className="pt-6">
          {step === 'welcome' && (
            <div className="space-y-4">
              <CardHeader className="p-0"><CardTitle>Welcome!</CardTitle></CardHeader>
              <p className="text-muted-foreground">Let us get you set up quickly.</p>
              <Button onClick={() => setStep('profile')}>Get Started</Button>
            </div>
          )}
          {step === 'profile' && (
            <div className="space-y-4">
              <CardHeader className="p-0"><CardTitle>Profile Setup</CardTitle></CardHeader>
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" onClick={() => setStep('welcome')}>Back</Button>
                <Button onClick={() => setStep('preferences')}>Next</Button>
              </div>
            </div>
          )}
          {step === 'preferences' && (
            <div className="space-y-4">
              <CardHeader className="p-0"><CardTitle>Preferences</CardTitle></CardHeader>
              {['Design', 'Development', 'Marketing', 'Analytics'].map(pref => (
                <div key={pref} className="flex items-center space-x-2">
                  <Checkbox
                    id={pref}
                    checked={preferences.includes(pref)}
                    onCheckedChange={() => togglePref(pref)}
                  />
                  <Label htmlFor={pref}>{pref}</Label>
                </div>
              ))}
              <div className="flex gap-2">
                <Button variant="ghost" onClick={() => setStep('profile')}>Back</Button>
                <Button onClick={() => setStep('done')}>Finish</Button>
              </div>
            </div>
          )}
          {step === 'done' && (
            <div className="space-y-4">
              <CardHeader className="p-0"><CardTitle>All Done!</CardTitle></CardHeader>
              <p>Welcome aboard, {name || 'friend'}!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
