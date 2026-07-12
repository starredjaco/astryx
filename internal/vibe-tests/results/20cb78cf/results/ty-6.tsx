// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {CodeBlock} from '@astryxdesign/core/CodeBlock';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Text';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    maxWidth: 500,
    margin: '0 auto',
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
});

export default function InstallationExample() {
  return (
    <div {...stylex.props(styles.container)}>
      <Heading level={3}>Installation</Heading>
      <CodeBlock code="yarn add @astryxdesign/core" language="bash" />
      <Text type="supporting" color="secondary">
        Requires React 19 and StyleX as peer dependencies.
      </Text>
    </div>
  );
}
