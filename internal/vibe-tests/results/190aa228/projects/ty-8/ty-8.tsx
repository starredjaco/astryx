// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Card, CardContent} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';

export default function ProfileCard() {
  return (
    <Card className="max-w-[360px]">
      <CardContent className="flex gap-4 p-6">
        <Avatar className="h-16 w-16">
          <AvatarImage src="https://i.pravatar.cc/96" alt="Alex Rivera" />
          <AvatarFallback>AR</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h3 className="text-lg font-semibold">Alex Rivera</h3>
          <Badge variant="secondary">Senior Engineer</Badge>
          <p className="text-sm text-muted-foreground mt-2">
            Building products that help people connect and collaborate. Passionate
            about accessible interfaces and clean architecture.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
