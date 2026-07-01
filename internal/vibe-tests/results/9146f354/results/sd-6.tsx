// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';

interface ProjectListProps {
  projects: Array<{id: string; name: string}>;
  onCreateProject: () => void;
}

export default function ProjectList({projects, onCreateProject}: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <Card className="max-w-md mx-auto mt-20">
        <CardContent className="flex flex-col items-center text-center p-10 gap-4">
          <svg className="h-12 w-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          <h3 className="text-lg font-semibold">No projects yet</h3>
          <p className="text-muted-foreground text-sm">Create your first project to get started.</p>
          <Button onClick={onCreateProject}>Create Project</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <ul className="space-y-2 p-4">
      {projects.map((project) => (
        <li key={project.id} className="p-3 border rounded-md">{project.name}</li>
      ))}
    </ul>
  );
}
