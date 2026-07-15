// Copyright (c) Meta Platforms, Inc. and affiliates.

const typeColors: Record<string, {bg: string; text: string}> = {
  Article: {bg: '#dbeafe', text: '#1d4ed8'},
  Video: {bg: '#ede9fe', text: '#6d28d9'},
  Podcast: {bg: '#ffedd5', text: '#c2410c'},
  Newsletter: {bg: '#ccfbf1', text: '#0f766e'},
  Course: {bg: '#dcfce7', text: '#15803d'},
};

type ContentItem = {
  id: string;
  title: string;
  type: string;
  author: string;
  date: string;
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
    <table style={{width: '100%', borderCollapse: 'collapse', fontSize: 14}}>
      <thead>
        <tr style={{borderBottom: '2px solid #e5e7eb'}}>
          <th style={{padding: '8px 12px', textAlign: 'left', width: 120}}>Type</th>
          <th style={{padding: '8px 12px', textAlign: 'left'}}>Title</th>
          <th style={{padding: '8px 12px', textAlign: 'left'}}>Author</th>
          <th style={{padding: '8px 12px', textAlign: 'left', width: 120}}>Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => {
          const color = typeColors[item.type] || {bg: '#f3f4f6', text: '#374151'};
          return (
            <tr key={item.id} style={{borderBottom: '1px solid #e5e7eb'}}>
              <td style={{padding: '8px 12px'}}>
                <span style={{display: 'inline-block', padding: '2px 8px', borderRadius: 12, background: color.bg, color: color.text, fontSize: 12, fontWeight: 500}}>{item.type}</span>
              </td>
              <td style={{padding: '8px 12px', fontWeight: 500}}>{item.title}</td>
              <td style={{padding: '8px 12px'}}>{item.author}</td>
              <td style={{padding: '8px 12px'}}>{item.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
