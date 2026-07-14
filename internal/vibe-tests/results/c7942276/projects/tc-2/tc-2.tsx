// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function BrandThemeDemo() {
  return (
    <div style={{padding: 48, fontFamily: 'Inter, system-ui, sans-serif'}}>
      <div style={{marginBottom: 32}}>
        <h1 style={{fontSize: 30, fontWeight: 700, margin: '0 0 8px'}}>Brand Theme</h1>
        <p style={{color: '#666', margin: 0}}>Custom purple accent theme for our app.</p>
      </div>
      <div style={{display: 'flex', gap: 12, marginBottom: 32}}>
        <button style={{padding: '10px 20px', border: 'none', borderRadius: 6, backgroundColor: '#7B61FF', color: 'white', fontWeight: 500, cursor: 'pointer'}}>Primary action</button>
        <button style={{padding: '10px 20px', border: '1px solid #ddd', borderRadius: 6, backgroundColor: 'white', cursor: 'pointer'}}>Secondary</button>
        <button style={{padding: '10px 20px', border: 'none', borderRadius: 6, backgroundColor: 'transparent', cursor: 'pointer'}}>Ghost</button>
      </div>
      <div style={{display: 'flex', gap: 16}}>
        <div style={{minWidth: 200, border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
          <h4 style={{margin: '0 0 4px', fontSize: 14, color: '#666', fontWeight: 500}}>Revenue</h4>
          <p style={{margin: '0 0 4px', fontSize: 24, fontWeight: 700}}>$24,500</p>
          <span style={{padding: '2px 8px', fontSize: 12, backgroundColor: '#dcfce7', color: '#16a34a', borderRadius: 12}}>+12%</span>
        </div>
        <div style={{minWidth: 200, border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
          <h4 style={{margin: '0 0 4px', fontSize: 14, color: '#666', fontWeight: 500}}>Users</h4>
          <p style={{margin: '0 0 4px', fontSize: 24, fontWeight: 700}}>1,234</p>
          <span style={{padding: '2px 8px', fontSize: 12, backgroundColor: '#f3f4f6', borderRadius: 12}}>+5%</span>
        </div>
      </div>
    </div>
  );
}
