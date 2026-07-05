// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Theme} from '@astryxdesign/core/theme';
import {Layout} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/Stack';
import {neutralTheme} from '@astryxdesign/theme-neutral';

export default function RootLayout({children}: {children?: React.ReactNode}) {
  return (
    <Theme theme={neutralTheme} mode="system">
      <Layout
        height="fill"
        header={
          <div className="px-4 py-3 border-b border-gray-200">
            <Heading level={4}>Internal Tool</Heading>
          </div>
        }
      >
        <div className="p-6">
          <VStack gap={4}>
            {children ?? (
              <>
                <Heading level={1}>Welcome</Heading>
                <Text>This is the main content area.</Text>
              </>
            )}
          </VStack>
        </div>
      </Layout>
    </Theme>
  );
}
