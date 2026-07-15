// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter} from '@/components/ui/dialog';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Label} from '@/components/ui/label';

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
      <Button onClick={() => setIsOpen(true)}>Give Feedback</Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Feedback</DialogTitle>
          </DialogHeader>
          {isSubmitted ? (
            <div className="flex flex-col items-center gap-4 py-6">
              <p className="text-lg font-medium text-green-600">Thank you for your feedback!</p>
              <p className="text-sm text-muted-foreground">Your response has been recorded.</p>
              <Button onClick={handleReset}>Close</Button>
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Brief summary of your feedback"
                  />
                </div>
                <div>
                  <Label htmlFor="comments">Comments</Label>
                  <Textarea
                    id="comments"
                    value={comments}
                    onChange={e => setComments(e.target.value)}
                    placeholder="Tell us more about your experience..."
                    rows={5}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button onClick={handleSubmit} disabled={!title || !comments}>Submit</Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
