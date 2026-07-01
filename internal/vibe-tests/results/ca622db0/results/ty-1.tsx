// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  header: {
    marginBottom: 24,
  },
  description: {
    marginTop: 8,
  },
});

interface PageTitleProps {
  title: string;
  description?: string;
}

export default function PageTitle({title, description}: PageTitleProps) {
  return (
    <header {...stylex.props(styles.header)}>
      <Heading level={1}>{title}</Heading>
      {description && (
        <div {...stylex.props(styles.description)}>
          <Text color="secondary">{description}</Text>
        </div>
      )}
    </header>
  );
}
