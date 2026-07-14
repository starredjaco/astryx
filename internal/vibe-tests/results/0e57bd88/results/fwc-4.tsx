// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Dialog} from '@astryxdesign/core/Dialog';
import {Button} from '@astryxdesign/core/Button';
import {HStack} from '@astryxdesign/core/HStack';
import {useState} from 'react';

export default function ConfirmDeleteDialog() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog isOpen={isOpen} onOpenChange={setIsOpen} purpose="required">
      <Dialog.Header>
        <Dialog.Title>Delete Item</Dialog.Title>
      </Dialog.Header>
      <Dialog.Body>
        Are you sure you want to delete this item? This action cannot be undone.
      </Dialog.Body>
      <Dialog.Footer>
        <HStack gap="sm">
          <Button label="Cancel" variant="ghost" onPress={() => setIsOpen(false)} />
          <Button label="Delete" variant="destructive" onPress={() => setIsOpen(false)} />
        </HStack>
      </Dialog.Footer>
    </Dialog>
  );
}
