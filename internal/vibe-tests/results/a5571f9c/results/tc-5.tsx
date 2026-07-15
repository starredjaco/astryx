// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function CustomCardTheme() {
  return (
    <div style={{padding: 24}}>
      <div style={{borderRadius: 16, padding: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div style={{background: 'white', borderRadius: 13, padding: 20}}>
          <h3 style={{margin: '0 0 8px', fontSize: 16, fontWeight: 600}}>Gradient Border Card</h3>
          <p style={{margin: 0, color: '#6b7280', fontSize: 14, lineHeight: 1.5}}>
            This card uses a wrapper div with a gradient background and inner padding
            to create the appearance of a gradient border with increased border radius.
          </p>
        </div>
      </div>
    </div>
  );
}
