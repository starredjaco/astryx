// Copyright (c) Meta Platforms, Inc. and affiliates.

import React from 'react';
import {CodeBlock} from '@astryxdesign/core/CodeBlock';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Text';

export default function InstallationExample() {
  return (
    <div className="max-w-md mx-auto p-6 flex flex-col gap-2">
      <Heading level={3}>Installation</Heading>
      <CodeBlock code="yarn add @astryxdesign/core" language="bash" />
      <Text type="supporting" color="secondary">
        Requires React 19 and StyleX as peer dependencies.
      </Text>
    </div>
  );
}
