// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);
  const [isUpdating, setIsUpdating] = useState(false);

  const updateQuantity = async (newValue: number) => {
    const clamped = Math.max(1, Math.min(99, newValue));
    setQuantity(clamped);
    setIsUpdating(true);
    try {
      await fetch('/api/cart/update', {method: 'PATCH', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({itemId: 'item-001', quantity: clamped})});
    } catch { setQuantity(quantity); }
    finally { setIsUpdating(false); }
  };

  const btnStyle = {width: 32, height: 32, border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer', backgroundColor: 'white', fontSize: 16};

  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 8, padding: 16, maxWidth: 200}}>
      <label style={{display: 'block', fontSize: 14, fontWeight: 500, marginBottom: 8}}>Quantity</label>
      <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
        <button style={btnStyle} onClick={() => updateQuantity(quantity - 1)} disabled={quantity <= 1} aria-label="Decrease quantity">-</button>
        <input type="number" value={quantity} min={1} max={99} style={{width: 48, textAlign: 'center', padding: '4px', border: '1px solid #ccc', borderRadius: 4}} onChange={(e) => updateQuantity(Number(e.target.value))} />
        <button style={btnStyle} onClick={() => updateQuantity(quantity + 1)} disabled={quantity >= 99} aria-label="Increase quantity">+</button>
      </div>
      {isUpdating && <p style={{fontSize: 12, color: '#6b7280', marginTop: 4}}>Updating cart...</p>}
    </div>
  );
}
