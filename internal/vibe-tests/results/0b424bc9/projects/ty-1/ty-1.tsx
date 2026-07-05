// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/Stack';

export default function PageTitle() {
  return (
    <VStack gap={2}>
      <Heading level={1}>Welcome to the Dashboard</Heading>
      <Text type="large" color="secondary">
        Monitor your key metrics and manage your workspace from one place.
      </Text>
    </VStack>
  );
}
