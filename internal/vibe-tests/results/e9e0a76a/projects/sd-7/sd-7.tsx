// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState, useCallback} from 'react';

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

  const simulateUpload = useCallback(() => {
    setIsUploading(true);
    setIsDone(false);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(interval); setIsUploading(false); setIsDone(true); return 100; }
        return prev + 10;
      });
    }, 300);
  }, []);

  return (
    <div style={{maxWidth: 500, margin: '0 auto', padding: 24}}>
      <h2 style={{marginBottom: 16}}>Upload File</h2>
      {!file && (
        <button onClick={() => { setFile({name: 'design-specs.pdf', size: 2_450_000}); simulateUpload(); }} style={{padding: '10px 20px', backgroundColor: '#0066cc', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer'}}>
          Choose File
        </button>
      )}
      {file && (
        <div style={{border: '1px solid #e0e0e0', borderRadius: 8, padding: 16}}>
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 8}}>
            <span style={{fontWeight: 600}}>{file.name}</span>
            <span style={{color: '#666', fontSize: 14}}>{formatFileSize(file.size)}</span>
          </div>
          {isUploading && (
            <div>
              <div style={{width: '100%', height: 8, backgroundColor: '#e0e0e0', borderRadius: 4, overflow: 'hidden'}}>
                <div style={{width: `${progress}%`, height: '100%', backgroundColor: '#0066cc', transition: 'width 0.3s'}} />
              </div>
              <p style={{textAlign: 'right', fontSize: 12, color: '#666', margin: '4px 0 0'}}>{progress}%</p>
            </div>
          )}
          {isDone && (
            <div style={{display: 'flex', alignItems: 'center', gap: 8, color: '#16a34a'}}>
              <span>\u{2705}</span>
              <span>Upload complete</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
