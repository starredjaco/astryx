// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card, CardContent} from '@/components/ui/card';
import {Button} from '@/components/ui/button';

interface TrialBannerProps {
  daysRemaining: number;
  onUpgrade: () => void;
}

export default function TrialBanner({daysRemaining, onUpgrade}: TrialBannerProps) {
  return (
    <Card className="border-yellow-200 bg-yellow-50">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <svg className="h-5 w-5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <div>
            <p className="font-medium text-yellow-800">
              Your trial expires in {daysRemaining} day{daysRemaining === 1 ? '' : 's'}
            </p>
            <p className="text-sm text-yellow-700">Upgrade now to keep access to all features.</p>
          </div>
        </div>
        <Button onClick={onUpgrade}>Upgrade</Button>
      </CardContent>
    </Card>
  );
}
