// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState} from 'react';
import {CodeBlock} from '@astryxdesign/core/CodeBlock';
import {Card} from '@astryxdesign/core/Card';
import {Heading, Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {ThemeProvider, defineTheme} from '@astryxdesign/core/theme';

const darkSnippetTheme = defineTheme({
  colors: {
    background: '#1e1e2e',
    foreground: '#cdd6f4',
    primary: '#89b4fa',
    secondary: '#a6adc8',
  },
});

const INSTALL_COMMAND = 'npm install @astryxdesign/core @stylexjs/stylex';

export default function DocsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <VStack gap="lg">
      <Heading level={1}>Getting Started</Heading>
      <Text>Install the package to begin using Astryx components in your project.</Text>

      <ThemeProvider theme={darkSnippetTheme}>
        <CodeBlock
          language="bash"
          hasCopyButton
          onCopy={handleCopy}
        >
          {INSTALL_COMMAND}
        </CodeBlock>
      </ThemeProvider>

      <Text>After installing, import components from their subpaths:</Text>
      <CodeBlock language="tsx">{`import {Button} from '@astryxdesign/core/Button';`}</CodeBlock>
    </VStack>
  );
}
