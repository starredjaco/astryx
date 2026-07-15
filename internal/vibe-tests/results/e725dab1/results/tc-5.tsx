// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

export default function CustomCardTheme() {
  return (
    <div className="p-6 space-y-4">
      <Card className="rounded-2xl border-2 border-transparent bg-clip-padding [border-image:linear-gradient(135deg,#667eea,#764ba2)_1]">
        <CardHeader>
          <CardTitle>Gradient Border Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            This card uses a gradient border via CSS border-image and
            an increased border-radius for a rounded appearance.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
