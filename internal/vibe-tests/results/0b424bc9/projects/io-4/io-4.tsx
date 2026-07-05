// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useCallback} from 'react';
import {NumberInput} from '@astryxdesign/core/NumberInput';
import {Text} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState<number>(1);
  const [isUpdating, setIsUpdating] = useState(false);

  const updateQuantity = useCallback(async (newValue: number) => {
    setQuantity(newValue);
    setIsUpdating(true);
    try {
      await fetch('/api/cart/update', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({itemId: 'item-001', quantity: newValue}),
      });
    } catch {
      setQuantity(quantity);
    } finally {
      setIsUpdating(false);
    }
  }, [quantity]);

  return (
    <Card padding={3}>
      <div className="max-w-xs">
        <NumberInput
          label="Quantity"
          value={quantity}
          onChange={updateQuantity}
          min={1}
          max={99}
          step={1}
          isIntegerOnly
        />
        {isUpdating && <Text type="supporting">Updating cart...</Text>}
      </div>
    </Card>
  );
}
