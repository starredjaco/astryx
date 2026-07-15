// Copyright (c) Meta Platforms, Inc. and affiliates.

import {ThemeProvider} from '@/components/theme-provider';

export default function RootLayout({children}: {children?: React.ReactNode}) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      <div className="min-h-screen bg-background text-foreground">
        <header className="border-b">
          <div className="container mx-auto px-4 h-14 flex items-center">
            <span className="font-semibold text-lg">Internal Tool</span>
          </div>
        </header>
        <main className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold tracking-tight mb-4">Welcome</h1>
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
