// Copyright (c) Meta Platforms, Inc. and affiliates.

interface ProjectListProps {
  projects: Array<{id: string; name: string}>;
  onCreateProject: () => void;
}

export default function ProjectList({projects, onCreateProject}: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400, textAlign: 'center', gap: 16}}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5">
          <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        <h3 style={{margin: 0, fontSize: 18, fontWeight: 600}}>No projects yet</h3>
        <p style={{margin: 0, color: '#666', fontSize: 14}}>Create your first project to get started.</p>
        <button
          onClick={onCreateProject}
          style={{padding: '10px 20px', backgroundColor: '#0d6efd', color: '#fff', border: 'none', borderRadius: 6, fontWeight: 500, cursor: 'pointer'}}
        >
          Create Project
        </button>
      </div>
    );
  }

  return (
    <ul style={{listStyle: 'none', padding: 16, margin: 0}}>
      {projects.map(project => (
        <li key={project.id} style={{padding: 12, border: '1px solid #e0e0e0', borderRadius: 6, marginBottom: 8}}>
          {project.name}
        </li>
      ))}
    </ul>
  );
}
