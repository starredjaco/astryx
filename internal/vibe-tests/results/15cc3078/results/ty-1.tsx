// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';

interface PageTitleProps {
  title: string;
  description?: string;
}

export default function PageTitle({title, description}: PageTitleProps) {
  return (
    <header className="mb-6">
      <Heading level={1}>{title}</Heading>
      {description && (
        <div className="mt-2">
          <Text color="secondary">{description}</Text>
        </div>
      )}
    </header>
  );
}
