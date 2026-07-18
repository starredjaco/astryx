// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {CheckboxList} from '@astryxdesign/core/CheckboxList';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';

type Step = 'welcome' | 'profile' | 'preferences' | 'done';

export default function OnboardingFlow() {
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState<string[]>([]);

  const stepIndex = ['welcome', 'profile', 'preferences', 'done'].indexOf(step);
  const progress = ((stepIndex + 1) / 4) * 100;

  return (
    <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
      <ProgressBar value={progress} label="Onboarding progress" />
      <Card>
        {step === 'welcome' && (
          <div className="flex flex-col gap-4">
            <Heading level={2}>Welcome!</Heading>
            <Text>Let us get you set up in a few quick steps.</Text>
            <Button onPress={() => setStep('profile')}>Get Started</Button>
          </div>
        )}
        {step === 'profile' && (
          <div className="flex flex-col gap-4">
            <Heading level={2}>Profile Setup</Heading>
            <TextInput label="Name" value={name} onChange={setName} />
            <TextInput label="Email" value={email} onChange={setEmail} type="email" />
            <div className="flex gap-2">
              <Button variant="ghost" onPress={() => setStep('welcome')}>Back</Button>
              <Button onPress={() => setStep('preferences')}>Next</Button>
            </div>
          </div>
        )}
        {step === 'preferences' && (
          <div className="flex flex-col gap-4">
            <Heading level={2}>Preferences</Heading>
            <CheckboxList
              label="Select your interests"
              options={['Design', 'Development', 'Marketing', 'Analytics']}
              value={preferences}
              onChange={setPreferences}
            />
            <div className="flex gap-2">
              <Button variant="ghost" onPress={() => setStep('profile')}>Back</Button>
              <Button onPress={() => setStep('done')}>Finish</Button>
            </div>
          </div>
        )}
        {step === 'done' && (
          <div className="flex flex-col gap-4">
            <Heading level={2}>All Done!</Heading>
            <Text>Welcome aboard, {name || 'friend'}! Your account is ready.</Text>
          </div>
        )}
      </Card>
    </div>
  );
}
