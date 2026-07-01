// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function PageTitle({title, description}: {title: string; description?: string}) {
  return (
    <header className="mb-6">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {description && <p className="mt-2 text-muted-foreground">{description}</p>}
    </header>
  );
}
