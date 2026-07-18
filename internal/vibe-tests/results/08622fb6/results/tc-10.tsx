// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {Button} from '../components/ui/button';

const INSTALL_COMMAND = 'npm install @shadcn/ui';

export default function DocsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">Getting Started</h1>
      <p className="text-muted-foreground">Install the package to begin.</p>

      <div className="relative rounded-lg bg-zinc-900 p-4">
        <pre className="text-green-400 font-mono text-sm overflow-x-auto">
          <code>$ {INSTALL_COMMAND}</code>
        </pre>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 text-zinc-400 hover:text-white"
          onClick={handleCopy}
        >
          {copied ? 'Copied!' : 'Copy'}
        </Button>
      </div>

      <p className="text-muted-foreground">Then import components:</p>
      <pre className="rounded-lg bg-muted p-4">
        <code className="text-sm">{`import { Button } from "@/components/ui/button";`}</code>
      </pre>
    </div>
  );
}
