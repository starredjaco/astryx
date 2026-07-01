// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function NestedThemeDemo() {
  return (
    <div style={{display: 'flex', height: '100vh'}}>
      <nav style={{width: 260, backgroundColor: '#1a1a2e', color: '#fff', padding: 16, display: 'flex', flexDirection: 'column', gap: 8}}>
        <h3 style={{margin: '0 0 16px', fontSize: 18, fontWeight: 600}}>Navigation</h3>
        {['Dashboard', 'Projects', 'Settings'].map(item => (
          <button key={item} style={{padding: '8px 12px', backgroundColor: 'transparent', color: '#e0e0e0', border: 'none', borderRadius: 4, textAlign: 'left', cursor: 'pointer', fontSize: 14}}>
            {item}
          </button>
        ))}
      </nav>
      <main style={{flex: 1, padding: 24, backgroundColor: '#fff'}}>
        <h1 style={{fontSize: 24, fontWeight: 700, marginBottom: 16}}>Content Area</h1>
        <p style={{color: '#666'}}>
          This content area uses light styling while the sidebar uses dark styling.
          In a real app you would wrap each section in a different theme provider.
        </p>
      </main>
    </div>
  );
}
