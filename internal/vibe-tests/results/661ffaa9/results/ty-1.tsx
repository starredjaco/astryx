// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function PageTitle({title, description}: {title: string; description?: string}) {
  return (
    <header style={{marginBottom: 24}}>
      <h1 style={{fontSize: 32, fontWeight: 700, margin: 0}}>{title}</h1>
      {description && <p style={{marginTop: 8, color: '#666', fontSize: 16}}>{description}</p>}
    </header>
  );
}
