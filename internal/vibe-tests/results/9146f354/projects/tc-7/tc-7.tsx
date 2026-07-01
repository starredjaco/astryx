// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Button} from '@/components/ui/button';

export default function NestedThemeDemo() {
  return (
    <div className="flex h-screen">
      <nav className="w-64 bg-slate-900 text-white p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold mb-4">Navigation</h3>
        <Button variant="ghost" className="text-white hover:bg-slate-800 justify-start">Dashboard</Button>
        <Button variant="ghost" className="text-white hover:bg-slate-800 justify-start">Projects</Button>
        <Button variant="ghost" className="text-white hover:bg-slate-800 justify-start">Settings</Button>
      </nav>
      <main className="flex-1 p-6 bg-background">
        <h1 className="text-2xl font-bold mb-4">Content Area</h1>
        <p className="text-muted-foreground">
          This content area uses the light theme while the sidebar uses dark styling.
          The sidebar applies dark background and light text utilities directly.
        </p>
      </main>
    </div>
  );
}
