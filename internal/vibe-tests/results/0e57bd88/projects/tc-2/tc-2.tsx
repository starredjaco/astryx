// Copyright (c) Meta Platforms, Inc. and affiliates.

import {defineTheme} from '@astryxdesign/core/theme';
import {Theme} from '@astryxdesign/core';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Badge} from '@astryxdesign/core/Badge';

const brandTheme = defineTheme({
  color: {
    accent: '#7B61FF',
    neutralStyle: 'cool',
  },
  shape: {
    radius: 'md',
  },
  typography: {
    headingFamily: 'Inter, system-ui, sans-serif',
    bodyFamily: 'Inter, system-ui, sans-serif',
  },
});

export default function BrandThemeDemo() {
  return (
    <Theme theme={brandTheme}>
      <VStack gap="lg" style={{padding: 48}}>
        <VStack gap="sm">
          <Heading level={1}>Brand Theme</Heading>
          <Text color="secondary">Custom purple accent theme for our app.</Text>
        </VStack>

        <HStack gap="md">
          <Button label="Primary action" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Ghost" variant="ghost" />
        </HStack>

        <HStack gap="md">
          <Card style={{padding: 16, minWidth: 200}}>
            <VStack gap="xs">
              <Heading level={4}>Revenue</Heading>
              <Heading level={2}>$24,500</Heading>
              <Badge label="+12%" variant="success" />
            </VStack>
          </Card>
          <Card style={{padding: 16, minWidth: 200}}>
            <VStack gap="xs">
              <Heading level={4}>Users</Heading>
              <Heading level={2}>1,234</Heading>
              <Badge label="+5%" variant="accent" />
            </VStack>
          </Card>
        </HStack>
      </VStack>
    </Theme>
  );
}
