// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {CodeBlock} from '@astryxdesign/core/CodeBlock';
import {Heading, Text} from '@astryxdesign/core/Text';
import {ThemeProvider, defineTheme} from '@astryxdesign/core/theme';

const darkTerminalTheme = defineTheme({
  colors: {
    background: '#1a1b26',
    foreground: '#c0caf5',
    primary: '#7aa2f7',
    secondary: '#565f89',
  },
});

export default function DocsPage() {
  return (
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      <Heading level={1}>Getting Started</Heading>
      <Text>Install the package to begin using Astryx components in your project.</Text>

      <ThemeProvider theme={darkTerminalTheme}>
        <CodeBlock language="bash" hasCopyButton>
          npm install @astryxdesign/core @stylexjs/stylex
        </CodeBlock>
      </ThemeProvider>

      <Text>After installing, import components from their subpaths:</Text>
      <CodeBlock language="tsx">{`import {Button} from '@astryxdesign/core/Button';`}</CodeBlock>
    </div>
  );
}
