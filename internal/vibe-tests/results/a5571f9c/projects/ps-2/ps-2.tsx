// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function RootLayout({children}: {children?: React.ReactNode}) {
  return (
    <div style={{minHeight: '100vh', background: '#fafafa', color: '#1a1a1a', fontFamily: 'system-ui, -apple-system, sans-serif'}}>
      <header style={{borderBottom: '1px solid #e5e7eb', background: 'white'}}>
        <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 16px', height: 56, display: 'flex', alignItems: 'center'}}>
          <span style={{fontWeight: 600, fontSize: 18}}>Internal Tool</span>
        </div>
      </header>
      <main style={{maxWidth: 1200, margin: '0 auto', padding: '24px 16px'}}>
        <h1 style={{fontSize: 28, fontWeight: 700, marginBottom: 16}}>Welcome</h1>
        {children}
      </main>
    </div>
  );
}
