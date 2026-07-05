// Copyright (c) Meta Platforms, Inc. and affiliates.

import {StatusDot} from '@astryxdesign/core/StatusDot';
import {Text} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';
import {VStack} from '@astryxdesign/core/Stack';
import {HStack} from '@astryxdesign/core/Stack';
import {Heading} from '@astryxdesign/core/Heading';
import {Divider} from '@astryxdesign/core/Divider';

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

function getStatusVariant(status: ServiceStatus) {
  switch (status) {
    case 'healthy': return 'success' as const;
    case 'degraded': return 'warning' as const;
    case 'down': return 'error' as const;
  }
}

export default function ServiceStatusList() {
  return (
    <Card padding={4}>
      <VStack gap={3}>
        <Heading level={2}>Service Status</Heading>
        <Divider />
        {services.map((service) => (
          <HStack key={service.name} gap={3} vAlign="center">
            <StatusDot variant={getStatusVariant(service.status)} label={`${service.name} status`} />
            <VStack gap={0.5}>
              <Text weight="medium">{service.name}</Text>
              <Text type="supporting">Last checked: {service.lastChecked}</Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </Card>
  );
}
