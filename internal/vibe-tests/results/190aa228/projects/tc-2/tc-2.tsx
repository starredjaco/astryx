// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

export default function BrandThemeDemo() {
  return (
    <div className="space-y-8 p-12" style={{'--primary': '263 70% 50%', '--primary-foreground': '0 0% 100%'} as React.CSSProperties}>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Brand Theme</h1>
        <p className="text-muted-foreground">Custom purple accent theme for our app.</p>
      </div>
      <div className="flex gap-3">
        <Button>Primary action</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="flex gap-4">
        <Card className="min-w-[200px]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$24,500</p>
            <Badge variant="secondary" className="text-green-600 mt-1">+12%</Badge>
          </CardContent>
        </Card>
        <Card className="min-w-[200px]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1,234</p>
            <Badge variant="secondary" className="mt-1">+5%</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
