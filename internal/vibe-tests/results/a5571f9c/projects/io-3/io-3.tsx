// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useRef} from 'react';

export default function FileUploadButton() {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {return;}
    setFileName(file.name);
    setIsUploading(true);
    setProgress(0);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const xhr = new XMLHttpRequest();
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {setProgress(Math.round((event.loaded / event.total) * 100));}
      });
      xhr.addEventListener('load', () => {setProgress(100); setIsUploading(false);});
      xhr.addEventListener('error', () => setIsUploading(false));
      xhr.open('POST', '/api/upload');
      xhr.send(formData);
    } catch {setIsUploading(false);}
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 300}}>
      <input ref={inputRef} type="file" onChange={handleFileSelect} style={{display: 'none'}} aria-label="Select file" />
      <button onClick={() => inputRef.current?.click()} disabled={isUploading} style={{padding: '8px 16px', background: '#0066cc', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', opacity: isUploading ? 0.7 : 1}}>
        {isUploading ? 'Uploading...' : 'Choose File'}
      </button>
      {fileName && (
        <>
          <span style={{fontSize: 13, color: '#6b7280'}}>{fileName}</span>
          <div style={{height: 6, background: '#e5e7eb', borderRadius: 3, overflow: 'hidden'}}>
            <div style={{height: '100%', width: `${progress}%`, background: progress === 100 ? '#16a34a' : '#0066cc', transition: 'width 0.3s'}} />
          </div>
          <span style={{fontSize: 12, color: '#6b7280'}}>{progress}%</span>
        </>
      )}
    </div>
  );
}
