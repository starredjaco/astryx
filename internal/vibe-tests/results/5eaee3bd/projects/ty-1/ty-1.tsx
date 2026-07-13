// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function PageTitle() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 8, padding: 24}}>
      <h1 style={{margin: 0, fontSize: 36, fontWeight: 700}}>Welcome to the Dashboard</h1>
      <p style={{margin: 0, fontSize: 18, color: '#666'}}>
        Monitor your key metrics and manage your account settings in one place.
      </p>
    </div>
  );
}
