// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Card} from '@astryxdesign/core/Card';
import {Button} from '@astryxdesign/core/Button';
import {TextInput} from '@astryxdesign/core/TextInput';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

type Step = 'welcome' | 'profile' | 'preferences' | 'done';

export default function OnboardingFlow() {
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <Card width={480} padding={5}>
        {step === 'welcome' && (
          <div className="flex flex-col gap-3">
            <Heading level={2}>Welcome!</Heading>
            <Text>Let us get you set up in just a few steps.</Text>
            <Button label="Get Started" variant="primary" onClick={() => setStep('profile')} />
          </div>
        )}
        {step === 'profile' && (
          <div className="flex flex-col gap-3">
            <Heading level={2}>Profile Setup</Heading>
            <TextInput label="Full Name" value={name} onChange={setName} />
            <TextInput label="Email" type="email" value={email} onChange={setEmail} />
            <div className="flex gap-2">
              <Button label="Back" variant="ghost" onClick={() => setStep('welcome')} />
              <Button label="Next" variant="primary" onClick={() => setStep('preferences')} />
            </div>
          </div>
        )}
        {step === 'preferences' && (
          <div className="flex flex-col gap-3">
            <Heading level={2}>Preferences</Heading>
            <Text>Choose how you want to be notified.</Text>
            <div className="flex gap-2">
              <Button label="Back" variant="ghost" onClick={() => setStep('profile')} />
              <Button label="Finish" variant="primary" onClick={() => setStep('done')} />
            </div>
          </div>
        )}
        {step === 'done' && (
          <div className="flex flex-col gap-3">
            <Heading level={2}>All Done!</Heading>
            <Text>You are all set, {name || 'friend'}. Welcome aboard.</Text>
          </div>
        )}
      </Card>
    </div>
  );
}
