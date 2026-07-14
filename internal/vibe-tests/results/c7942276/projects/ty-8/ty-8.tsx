// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function ProfileCard() {
  return (
    <div style={{maxWidth: 360, border: '1px solid #e5e7eb', borderRadius: 12, padding: 24, display: 'flex', gap: 16}}>
      <img src="https://i.pravatar.cc/96" alt="Alex Rivera" style={{width: 64, height: 64, borderRadius: '50%', objectFit: 'cover'}} />
      <div>
        <h3 style={{margin: '0 0 4px', fontSize: 18, fontWeight: 600}}>Alex Rivera</h3>
        <span style={{display: 'inline-block', padding: '2px 8px', fontSize: 12, backgroundColor: '#f3f4f6', borderRadius: 12, marginBottom: 8}}>Senior Engineer</span>
        <p style={{margin: 0, fontSize: 14, color: '#666'}}>
          Building products that help people connect and collaborate. Passionate about accessible interfaces and clean architecture.
        </p>
      </div>
    </div>
  );
}
