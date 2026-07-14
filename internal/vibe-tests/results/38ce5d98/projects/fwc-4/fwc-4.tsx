// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Dialog} from '@astryxdesign/core/Dialog';
import {Button} from '@astryxdesign/core/Button';
import {useState} from 'react';

export default function ConfirmDeleteDialog() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog isOpen={isOpen} onOpenChange={setIsOpen} purpose="required">
      <Dialog.Header>
        <Dialog.Title>Delete Item</Dialog.Title>
      </Dialog.Header>
      <Dialog.Body>
        <p className="text-sm text-gray-600">
          Are you sure you want to delete this item? This action cannot be undone.
        </p>
      </Dialog.Body>
      <Dialog.Footer>
        <div className="flex gap-2">
          <Button label="Cancel" variant="ghost" onPress={() => setIsOpen(false)} />
          <Button label="Delete" variant="destructive" onPress={() => setIsOpen(false)} />
        </div>
      </Dialog.Footer>
    </Dialog>
  );
}
