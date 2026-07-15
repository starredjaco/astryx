// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';

function formatFileSize(bytes: number): string {
  if (bytes < 1024) {return bytes + ' B';}
  if (bytes < 1024 * 1024) {return (bytes / 1024).toFixed(1) + ' KB';}
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

export default function FileUpload() {
  const [file, setFile] = useState<{name: string; size: number} | null>(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!isUploading) {return;}
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {clearInterval(interval); setIsUploading(false); setIsDone(true); return 100;}
        return prev + 10;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [isUploading]);

  const handleUpload = () => {setFile({name: 'presentation.pdf', size: 2457600}); setProgress(0); setIsUploading(true); setIsDone(false);};

  return (
    <div style={{maxWidth: 400}}>
      <button onClick={handleUpload} style={{padding: '8px 16px', background: '#0066cc', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer'}}>Upload File</button>
      {file && (
        <div style={{marginTop: 16, padding: 16, border: '1px solid #e5e7eb', borderRadius: 8}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
            <span style={{fontWeight: 500, fontSize: 14}}>{file.name}</span>
            <span style={{color: '#6b7280', fontSize: 12}}>{formatFileSize(file.size)}</span>
          </div>
          <div style={{height: 8, background: '#e5e7eb', borderRadius: 4, overflow: 'hidden'}}>
            <div style={{height: '100%', width: `${progress}%`, background: isDone ? '#16a34a' : '#0066cc', transition: 'width 0.3s', borderRadius: 4}} />
          </div>
          <p style={{textAlign: 'right', fontSize: 12, color: '#6b7280', marginTop: 4}}>{progress}%</p>
          {isDone && <p style={{color: '#16a34a', fontWeight: 500, fontSize: 14}}>Upload complete</p>}
        </div>
      )}
    </div>
  );
}
