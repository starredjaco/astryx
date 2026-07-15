// Copyright (c) Meta Platforms, Inc. and affiliates.

import {Table, proportional, pixel} from '@astryxdesign/core/Table';
import {Badge} from '@astryxdesign/core/Badge';

type ContentItem = {
  id: string;
  title: string;
  type: 'Article' | 'Video' | 'Podcast' | 'Newsletter' | 'Course';
  author: string;
  date: string;
};

const typeVariants: Record<ContentItem['type'], 'blue' | 'purple' | 'orange' | 'teal' | 'green'> = {
  Article: 'blue',
  Video: 'purple',
  Podcast: 'orange',
  Newsletter: 'teal',
  Course: 'green',
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
    <Table
      data={data}
      idKey="id"
      hasHover
      columns={[
        {
          key: 'type',
          header: 'Type',
          width: pixel(120),
          renderCell: (item) => (
            <Badge variant={typeVariants[item.type]} label={item.type} />
          ),
        },
        {
          key: 'title',
          header: 'Title',
          width: proportional(2),
        },
        {
          key: 'author',
          header: 'Author',
          width: proportional(1),
        },
        {
          key: 'date',
          header: 'Date',
          width: pixel(120),
        },
      ]}
    />
  );
}
