// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState, useEffect} from 'react';
import {Button} from '../components/ui/button';
import {Card, CardContent} from '../components/ui/card';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-80">
        <CardContent className="pt-6 text-center space-y-4">
          <h2 className="text-xl font-semibold">Theme Demo</h2>
          <p className="text-sm text-muted-foreground">Toggle between light and dark.</p>
          <Button onClick={() => setDark(d => !d)}>
            Switch to {dark ? 'Light' : 'Dark'}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}