// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Card, CardContent} from '@/components/ui/card';

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);
  const [isUpdating, setIsUpdating] = useState(false);

  const updateQuantity = async (newValue: number) => {
    const clamped = Math.max(1, Math.min(99, newValue));
    setQuantity(clamped);
    setIsUpdating(true);
    try {
      await fetch('/api/cart/update', {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({itemId: 'item-001', quantity: clamped}),
      });
    } catch {
      setQuantity(quantity);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Card className="max-w-xs">
      <CardContent className="pt-4 space-y-2">
        <Label htmlFor="qty">Quantity</Label>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => updateQuantity(quantity - 1)} disabled={quantity <= 1} aria-label="Decrease quantity">-</Button>
          <Input id="qty" type="number" value={quantity} min={1} max={99} className="w-16 text-center" onChange={(e) => updateQuantity(Number(e.target.value))} />
          <Button variant="outline" size="sm" onClick={() => updateQuantity(quantity + 1)} disabled={quantity >= 99} aria-label="Increase quantity">+</Button>
        </div>
        {isUpdating && <p className="text-sm text-muted-foreground">Updating cart...</p>}
      </CardContent>
    </Card>
  );
}
