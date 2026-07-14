// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card} from '@astryxdesign/core/Card';
import {Avatar} from '@astryxdesign/core/Avatar';
import {Badge} from '@astryxdesign/core/Badge';

export default function ProfileCard() {
  return (
    <Card style={{maxWidth: 360}}>
      <div className="flex gap-4 p-6">
        <Avatar src="https://i.pravatar.cc/96" name="Alex Rivera" size="large" />
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">Alex Rivera</h3>
          <Badge label="Senior Engineer" variant="neutral" />
          <p className="text-sm text-gray-500 mt-2">
            Building products that help people connect and collaborate. Passionate
            about accessible interfaces and clean architecture.
          </p>
        </div>
      </div>
    </Card>
  );
}
