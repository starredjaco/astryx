// Copyright (c) Meta Platforms, Inc. and affiliates.

export default function PageTitle() {
  return (
    <div className="flex flex-col gap-2 p-6">
      <h1 className="text-4xl font-bold tracking-tight">Welcome to the Dashboard</h1>
      <p className="text-lg text-muted-foreground">
        Monitor your key metrics and manage your account settings in one place.
      </p>
    </div>
  );
}
