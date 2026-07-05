// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card} from '@/components/ui/card';

export default function RootLayout({children}: {children?: React.ReactNode}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b px-4 py-3">
        <h1 className="text-lg font-semibold">Internal Tool</h1>
      </header>
      <main className="p-6">
        {children ?? (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Welcome</h1>
            <p className="text-muted-foreground">This is the main content area.</p>
          </div>
        )}
      </main>
    </div>
  );
}
