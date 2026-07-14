// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card} from '@astryxdesign/core/Card';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Badge} from '@astryxdesign/core/Badge';

export default function ProfileCard() {
  return (
    <Card style={{maxWidth: 360, padding: 24}}>
      <HStack gap="md" align="start">
        <Avatar
          src="https://i.pravatar.cc/96"
          name="Alex Rivera"
          size="large"
        />
        <VStack gap="xs">
          <Heading level={3}>Alex Rivera</Heading>
          <Badge label="Senior Engineer" variant="neutral" />
          <Text color="secondary" size="sm">
            Building products that help people connect and collaborate. Passionate
            about accessible interfaces and clean architecture.
          </Text>
        </VStack>
      </HStack>
    </Card>
  );
}
