// Copyright (c) Meta Platforms, Inc. and affiliates.

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

const statusColors: Record<ServiceStatus, string> = {healthy: '#22c55e', degraded: '#eab308', down: '#ef4444'};

export default function ServiceStatusList() {
  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 8, padding: 24}}>
      <h2 style={{fontSize: 20, fontWeight: 600, marginBottom: 16}}>Service Status</h2>
      <hr style={{border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: 16}} />
      <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
        {services.map((service) => (
          <div key={service.name} style={{display: 'flex', alignItems: 'center', gap: 12}}>
            <div style={{width: 12, height: 12, borderRadius: '50%', backgroundColor: statusColors[service.status]}} aria-label={`${service.name} is ${service.status}`} />
            <div>
              <p style={{fontWeight: 500, margin: 0}}>{service.name}</p>
              <p style={{fontSize: 14, color: '#6b7280', margin: 0}}>Last checked: {service.lastChecked}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
