// Copyright (c) Meta Platforms, Inc. and affiliates.

import {defineTheme} from '@astryxdesign/core/theme';
import {Theme} from '@astryxdesign/core';
import {Button} from '@astryxdesign/core/Button';
import {Card} from '@astryxdesign/core/Card';
import {Badge} from '@astryxdesign/core/Badge';

const brandTheme = defineTheme({
  color: { accent: '#7B61FF', neutralStyle: 'cool' },
  shape: { radius: 'md' },
  typography: {
    headingFamily: 'Inter, system-ui, sans-serif',
    bodyFamily: 'Inter, system-ui, sans-serif',
  },
});

export default function BrandThemeDemo() {
  return (
    <Theme theme={brandTheme}>
      <div className="space-y-8 p-12">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Brand Theme</h1>
          <p className="text-gray-500">Custom purple accent theme for our app.</p>
        </div>
        <div className="flex gap-3">
          <Button label="Primary action" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Ghost" variant="ghost" />
        </div>
        <div className="flex gap-4">
          <Card style={{padding: 16, minWidth: 200}}>
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-gray-500">Revenue</h4>
              <p className="text-2xl font-bold">$24,500</p>
              <Badge label="+12%" variant="success" />
            </div>
          </Card>
          <Card style={{padding: 16, minWidth: 200}}>
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-gray-500">Users</h4>
              <p className="text-2xl font-bold">1,234</p>
              <Badge label="+5%" variant="accent" />
            </div>
          </Card>
        </div>
      </div>
    </Theme>
  );
}
