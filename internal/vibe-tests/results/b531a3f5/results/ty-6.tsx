// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {Card, CardContent} from '@/components/ui/card';

export default function InstallationExample() {
  return (
    <div className="max-w-md mx-auto p-6 flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Installation</h3>
      <Card>
        <CardContent className="pt-4">
          <pre className="bg-muted p-3 rounded-md font-mono text-sm">yarn add @astryxdesign/core</pre>
        </CardContent>
      </Card>
      <p className="text-sm text-muted-foreground">
        Requires React 19 and StyleX as peer dependencies.
      </p>
    </div>
  );
}
