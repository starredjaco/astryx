// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Dialog} from '@astryxdesign/core/Dialog';
import {DialogHeader} from '@astryxdesign/core/Dialog';
import {Button} from '@astryxdesign/core/Button';
import {TextInput} from '@astryxdesign/core/TextInput';
import {TextArea} from '@astryxdesign/core/TextArea';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Text} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';

export default function FeedbackDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [comments, setComments] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setTitle('');
    setComments('');
    setIsSubmitted(false);
    setIsOpen(false);
  };

  return (
    <>
      <Button label="Give Feedback" variant="primary" onClick={() => setIsOpen(true)} />
      <Dialog isOpen={isOpen} onOpenChange={setIsOpen} purpose="form">
        <DialogHeader title="Feedback" onOpenChange={setIsOpen} />
        {isSubmitted ? (
          <VStack gap={4} padding={4} hAlign="center">
            <Text type="large" color="accent">Thank you for your feedback!</Text>
            <Text type="supporting">Your response has been recorded.</Text>
            <Button label="Close" onClick={handleReset} />
          </VStack>
        ) : (
          <VStack gap={4} padding={4}>
            <TextInput
              label="Title"
              value={title}
              onChange={setTitle}
              placeholder="Brief summary of your feedback"
            />
            <TextArea
              label="Comments"
              value={comments}
              onChange={setComments}
              placeholder="Tell us more about your experience..."
            />
            <HStack gap={2} hAlign="end">
              <Button label="Cancel" variant="ghost" onClick={() => setIsOpen(false)} />
              <Button
                label="Submit"
                variant="primary"
                onClick={handleSubmit}
                isDisabled={!title || !comments}
              />
            </HStack>
          </VStack>
        )}
      </Dialog>
    </>
  );
}
