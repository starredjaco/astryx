// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Theme} from '@astryxdesign/core/theme';
import {Layout} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/Stack';
import {neutralTheme} from '@astryxdesign/theme-neutral';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  header: {
    padding: 16,
    borderBottom: '1px solid var(--color-border)',
  },
  content: {
    padding: 24,
  },
});

export default function RootLayout({children}: {children?: React.ReactNode}) {
  return (
    <Theme theme={neutralTheme} mode="system">
      <Layout
        height="fill"
        header={
          <div {...stylex.props(styles.header)}>
            <Heading level={4}>Internal Tool</Heading>
          </div>
        }
      >
        <div {...stylex.props(styles.content)}>
          <VStack gap={4}>
            {children ?? (
              <>
                <Heading level={1}>Welcome</Heading>
                <Text>This is the main content area. Add your tool pages here.</Text>
              </>
            )}
          </VStack>
        </div>
      </Layout>
    </Theme>
  );
}
