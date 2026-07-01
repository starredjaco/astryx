// Copyright (c) Meta Platforms, Inc. and affiliates.

import {EmptyState} from '@astryxdesign/core/EmptyState';
import {Button} from '@astryxdesign/core/Button';
import {Icon} from '@astryxdesign/core/Icon';

interface ProjectListProps {
  projects: Array<{id: string; name: string}>;
  onCreateProject: () => void;
}

export default function ProjectList({projects, onCreateProject}: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <EmptyState
        title="No projects yet"
        description="Create your first project to get started."
        icon={<Icon name="folder" size="lg" />}
        actions={
          <Button label="Create Project" variant="primary" onClick={onCreateProject} />
        }
      />
    );
  }

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  );
}
