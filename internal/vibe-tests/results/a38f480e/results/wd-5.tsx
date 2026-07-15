// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Dialog} from '@astryxdesign/core/Dialog';
import {DialogHeader} from '@astryxdesign/core/Dialog';
import {Button} from '@astryxdesign/core/Button';
import {TextInput} from '@astryxdesign/core/TextInput';
import {TextArea} from '@astryxdesign/core/TextArea';

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
          <div className="flex flex-col items-center gap-4 p-6">
            <p className="text-lg font-medium text-green-600">Thank you for your feedback!</p>
            <p className="text-sm text-gray-500">Your response has been recorded.</p>
            <Button label="Close" onClick={handleReset} />
          </div>
        ) : (
          <div className="flex flex-col gap-4 p-6">
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
            <div className="flex justify-end gap-2">
              <Button label="Cancel" variant="ghost" onClick={() => setIsOpen(false)} />
              <Button
                label="Submit"
                variant="primary"
                onClick={handleSubmit}
                isDisabled={!title || !comments}
              />
            </div>
          </div>
        )}
      </Dialog>
    </>
  );
}
