// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useRef} from 'react';

export default function FileUpload({uploadEndpoint = '/api/upload'}: {uploadEndpoint?: string}) {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    if (!file) {return;}
    setIsUploading(true);
    setError(null);
    const formData = new FormData();
    formData.append('file', file);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', uploadEndpoint);
    xhr.upload.onprogress = (e) => { if (e.lengthComputable) {setProgress(Math.round((e.loaded / e.total) * 100));} };
    xhr.onload = () => { setProgress(100); setIsUploading(false); };
    xhr.onerror = () => { setError('Upload failed.'); setIsUploading(false); };
    xhr.send(formData);
  };

  return (
    <div style={{maxWidth: 360, padding: 20, border: '1px solid #e0e0e0', borderRadius: 8}}>
      <input ref={inputRef} type="file" style={{display: 'none'}} onChange={e => { setFile(e.target.files?.[0] || null); setProgress(0); setError(null); }} />
      <button onClick={() => inputRef.current?.click()} disabled={isUploading} style={{padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4, cursor: 'pointer'}}>
        {file ? 'Change File' : 'Select File'}
      </button>
      {file && <p style={{fontSize: 14, color: '#666', margin: '8px 0'}}>{file.name} ({(file.size / 1024).toFixed(1)} KB)</p>}
      {file && !isUploading && progress < 100 && (
        <button onClick={handleUpload} style={{padding: '8px 16px', backgroundColor: '#0d6efd', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', marginTop: 8}}>Upload</button>
      )}
      {isUploading && (
        <div style={{marginTop: 12}}>
          <div style={{height: 8, backgroundColor: '#e0e0e0', borderRadius: 4, overflow: 'hidden'}}>
            <div style={{height: '100%', width: `${progress}%`, backgroundColor: '#0d6efd', transition: 'width 0.3s'}} />
          </div>
          <span style={{fontSize: 12, color: '#666'}}>{progress}%</span>
        </div>
      )}
      {progress === 100 && !isUploading && <p style={{color: '#198754', fontSize: 14, marginTop: 8}}>Upload complete.</p>}
      {error && <p style={{color: '#dc3545', fontSize: 14, marginTop: 8}}>{error}</p>}
    </div>
  );
}
