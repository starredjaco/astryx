// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {CheckboxList} from '@astryxdesign/core/CheckboxList';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
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
    <VStack gap="lg" align="center">
      <ProgressBar value={progress} label="Onboarding progress" />
      <Card>
        {step === 'welcome' && (
          <VStack gap="md">
            <Heading level={2}>Welcome!</Heading>
            <Text>Let us get you set up in a few quick steps.</Text>
            <Button onPress={() => setStep('profile')}>Get Started</Button>
          </VStack>
        )}
        {step === 'profile' && (
          <VStack gap="md">
            <Heading level={2}>Profile Setup</Heading>
            <TextInput label="Name" value={name} onChange={setName} />
            <TextInput label="Email" value={email} onChange={setEmail} type="email" />
            <HStack gap="sm">
              <Button variant="ghost" onPress={() => setStep('welcome')}>Back</Button>
              <Button onPress={() => setStep('preferences')}>Next</Button>
            </HStack>
          </VStack>
        )}
        {step === 'preferences' && (
          <VStack gap="md">
            <Heading level={2}>Preferences</Heading>
            <CheckboxList
              label="Select your interests"
              options={['Design', 'Development', 'Marketing', 'Analytics']}
              value={preferences}
              onChange={setPreferences}
            />
            <HStack gap="sm">
              <Button variant="ghost" onPress={() => setStep('profile')}>Back</Button>
              <Button onPress={() => setStep('done')}>Finish</Button>
            </HStack>
          </VStack>
        )}
        {step === 'done' && (
          <VStack gap="md">
            <Heading level={2}>All Done!</Heading>
            <Text>Welcome aboard, {name || 'friend'}! Your account is ready.</Text>
          </VStack>
        )}
      </Card>
    </VStack>
  );
}
