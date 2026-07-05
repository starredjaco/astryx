// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function RootLayout({children}: {children?: React.ReactNode}) {
  return (
    <div style={{minHeight: '100vh', backgroundColor: '#fafafa', color: '#111'}}>
      <header style={{borderBottom: '1px solid #e5e7eb', padding: '12px 16px'}}>
        <h1 style={{fontSize: 18, fontWeight: 600, margin: 0}}>Internal Tool</h1>
      </header>
      <main style={{padding: 24}}>
        {children ?? (
          <div>
            <h1 style={{fontSize: 28, fontWeight: 700, marginBottom: 8}}>Welcome</h1>
            <p style={{color: '#6b7280'}}>This is the main content area.</p>
          </div>
        )}
      </main>
    </div>
  );
}
