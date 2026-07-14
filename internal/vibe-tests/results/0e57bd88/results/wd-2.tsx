// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Button} from '@astryxdesign/core/Button';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {TextInput} from '@astryxdesign/core/TextInput';
import {useState} from 'react';

const steps = ['Personal Info', 'Contact Details', 'Review'];

export default function FormWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <VStack gap="lg" style={{maxWidth: 600, margin: '0 auto', padding: 24}}>
      <ProgressBar label="Form progress" value={progress} max={100} />
      <HStack gap="sm">
        {steps.map((step, i) => (
          <Text key={step} variant={i === currentStep ? 'label' : 'body'}>
            {i + 1}. {step}
          </Text>
        ))}
      </HStack>

      {currentStep === 0 && (
        <VStack gap="md">
          <Heading level={2}>Personal Information</Heading>
          <TextInput
            label="First Name"
            value={formData.firstName}
            onChange={(v) => setFormData({...formData, firstName: v})}
          />
          <TextInput
            label="Last Name"
            value={formData.lastName}
            onChange={(v) => setFormData({...formData, lastName: v})}
          />
        </VStack>
      )}

      {currentStep === 1 && (
        <VStack gap="md">
          <Heading level={2}>Contact Details</Heading>
          <TextInput
            label="Email"
            value={formData.email}
            onChange={(v) => setFormData({...formData, email: v})}
          />
          <TextInput
            label="Phone"
            value={formData.phone}
            onChange={(v) => setFormData({...formData, phone: v})}
          />
        </VStack>
      )}

      {currentStep === 2 && (
        <VStack gap="md">
          <Heading level={2}>Review</Heading>
          <Text>First Name: {formData.firstName}</Text>
          <Text>Last Name: {formData.lastName}</Text>
          <Text>Email: {formData.email}</Text>
          <Text>Phone: {formData.phone}</Text>
        </VStack>
      )}

      <HStack gap="sm" justify="end">
        {currentStep > 0 && (
          <Button label="Back" variant="ghost" onPress={() => setCurrentStep(currentStep - 1)} />
        )}
        {currentStep < steps.length - 1 ? (
          <Button label="Next" variant="primary" onPress={() => setCurrentStep(currentStep + 1)} />
        ) : (
          <Button label="Submit" variant="primary" onPress={() => {}} />
        )}
      </HStack>
    </VStack>
  );
}
