// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';

export default function HotelDatePicker() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const today = new Date().toISOString().split('T')[0];

  return (
    <div style={{maxWidth: 400, padding: 24, fontFamily: 'system-ui'}}>
      <h2 style={{fontSize: 24, fontWeight: 700, marginBottom: 16}}>Book Your Stay</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
        <div>
          <label style={{display: 'block', fontSize: 14, fontWeight: 500, marginBottom: 4}}>Check-in</label>
          <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} min={today} style={{width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6}} />
        </div>
        <div>
          <label style={{display: 'block', fontSize: 14, fontWeight: 500, marginBottom: 4}}>Check-out</label>
          <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} min={checkIn || today} style={{width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6}} />
        </div>
      </div>
    </div>
  );
}