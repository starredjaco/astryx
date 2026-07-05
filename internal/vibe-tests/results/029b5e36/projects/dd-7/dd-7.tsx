// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';

type ServiceStatus = 'healthy' | 'degraded' | 'down';
type Service = { name: string; status: ServiceStatus; lastChecked: string };

const services: Service[] = [
  {name: 'API Gateway', status: 'healthy', lastChecked: '2 min ago'},
  {name: 'Authentication', status: 'healthy', lastChecked: '1 min ago'},
  {name: 'Database Primary', status: 'degraded', lastChecked: '30 sec ago'},
  {name: 'Cache Layer', status: 'healthy', lastChecked: '1 min ago'},
  {name: 'Email Service', status: 'down', lastChecked: '5 min ago'},
  {name: 'File Storage', status: 'healthy', lastChecked: '3 min ago'},
];

function StatusDot({status}: {status: ServiceStatus}) {
  const colors = {healthy: 'bg-green-500', degraded: 'bg-yellow-500', down: 'bg-red-500'};
  return <div className={`w-3 h-3 rounded-full ${colors[status]}`} aria-hidden="true" />;
}

export default function ServiceStatusList() {
  return (
    <Card>
      <CardHeader><CardTitle>Service Status</CardTitle></CardHeader>
      <CardContent>
        <Separator className="mb-4" />
        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.name} className="flex items-center gap-3">
              <StatusDot status={service.status} />
              <div>
                <p className="font-medium">{service.name}</p>
                <p className="text-sm text-muted-foreground">Last checked: {service.lastChecked}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
