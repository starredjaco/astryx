// Copyright (c) Meta Platforms, Inc. and affiliates.

import {defineTheme} from '@astryxdesign/core';
import {Theme} from '@astryxdesign/core';
import {Card} from '@astryxdesign/core/Card';
import {VStack} from '@astryxdesign/core/VStack';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

const customTheme = defineTheme({
  components: {
    card: {
      base: {
        borderRadius: 16,
        borderWidth: 2,
        borderStyle: 'solid',
        borderImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%) 1',
      },
    },
  },
});

export default function CustomCardTheme() {
  return (
    <Theme theme={customTheme}>
      <VStack gap={4} padding={4}>
        <Card padding={4}>
          <VStack gap={2}>
            <Heading level={3}>Gradient Border Card</Heading>
            <Text>
              This card uses component-level style overrides in the theme to apply
              a gradient border and increased border radius.
            </Text>
          </VStack>
        </Card>
      </VStack>
    </Theme>
  );
}
