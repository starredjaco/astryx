// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState} from 'react';

export default function HotelDatePicker() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const today = new Date().toISOString().split('T')[0];

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 16, padding: 24, maxWidth: 400}}>
      <h2 style={{margin: 0, fontSize: 24, fontWeight: 700}}>Book Your Stay</h2>
      <p style={{margin: 0, color: '#666'}}>Select your check-in and check-out dates</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
        <label htmlFor="checkin" style={{fontWeight: 500}}>Check-in</label>
        <input
          id="checkin"
          type="date"
          value={checkIn}
          min={today}
          onChange={e => setCheckIn(e.target.value)}
          style={{padding: '8px 12px', border: '1px solid #ccc', borderRadius: 6}}
        />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
        <label htmlFor="checkout" style={{fontWeight: 500}}>Check-out</label>
        <input
          id="checkout"
          type="date"
          value={checkOut}
          min={checkIn || today}
          onChange={e => setCheckOut(e.target.value)}
          style={{padding: '8px 12px', border: '1px solid #ccc', borderRadius: 6}}
        />
      </div>
    </div>
  );
}
