// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {Badge} from '@/components/ui/badge';

type ContentItem = {
  id: string;
  title: string;
  type: 'Article' | 'Video' | 'Podcast' | 'Newsletter' | 'Course';
  author: string;
  date: string;
};

const typeColors: Record<ContentItem['type'], string> = {
  Article: 'bg-blue-100 text-blue-700 hover:bg-blue-100',
  Video: 'bg-purple-100 text-purple-700 hover:bg-purple-100',
  Podcast: 'bg-orange-100 text-orange-700 hover:bg-orange-100',
  Newsletter: 'bg-teal-100 text-teal-700 hover:bg-teal-100',
  Course: 'bg-green-100 text-green-700 hover:bg-green-100',
};

const data: ContentItem[] = [
  {id: '1', title: 'Getting Started with React 19', type: 'Article', author: 'Sarah Chen', date: '2026-07-01'},
  {id: '2', title: 'Advanced TypeScript Patterns', type: 'Video', author: 'Mike Johnson', date: '2026-06-28'},
  {id: '3', title: 'Design Systems Weekly', type: 'Podcast', author: 'Lisa Park', date: '2026-07-10'},
  {id: '4', title: 'Monthly Product Update', type: 'Newsletter', author: 'Team', date: '2026-07-15'},
  {id: '5', title: 'Accessibility Fundamentals', type: 'Course', author: 'Alex Rivera', date: '2026-06-15'},
  {id: '6', title: 'CSS Grid Deep Dive', type: 'Article', author: 'Emily Wong', date: '2026-07-05'},
  {id: '7', title: 'Component Architecture', type: 'Video', author: 'David Kim', date: '2026-07-12'},
];

export default function ContentLibrary() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[120px]">Type</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead className="w-[120px]">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map(item => (
          <TableRow key={item.id}>
            <TableCell>
              <Badge className={typeColors[item.type]} variant="secondary">
                {item.type}
              </Badge>
            </TableCell>
            <TableCell className="font-medium">{item.title}</TableCell>
            <TableCell>{item.author}</TableCell>
            <TableCell>{item.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
