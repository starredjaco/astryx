// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useRef} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {Text} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';

interface FileUploadProps {
  uploadEndpoint?: string;
}

export default function FileUpload({uploadEndpoint = '/api/upload'}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async () => {
    if (!file) {return;}
    setIsUploading(true);
    setError(null);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', uploadEndpoint);
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {setProgress(Math.round((e.loaded / e.total) * 100));}
      };
      xhr.onload = () => { setProgress(100); setIsUploading(false); };
      xhr.onerror = () => { setError('Upload failed.'); setIsUploading(false); };
      xhr.send(formData);
    } catch {
      setError('Upload failed unexpectedly.');
      setIsUploading(false);
    }
  };

  return (
    <Card padding={4}>
      <div className="flex flex-col gap-3 max-w-sm">
        <input ref={inputRef} type="file" onChange={(e) => { setFile(e.target.files?.[0] || null); setProgress(0); setError(null); }} className="hidden" aria-label="Select file" />
        <Button label={file ? 'Change File' : 'Select File'} variant="secondary" onClick={() => inputRef.current?.click()} isDisabled={isUploading} />
        {file && (
          <div className="flex items-center gap-2">
            <Text>{file.name}</Text>
            <Text color="secondary">({(file.size / 1024).toFixed(1)} KB)</Text>
          </div>
        )}
        {file && !isUploading && progress < 100 && <Button label="Upload" variant="primary" onClick={handleUpload} />}
        {isUploading && <ProgressBar value={progress} max={100} label="Uploading" />}
        {progress === 100 && !isUploading && <Text color="secondary">Upload complete.</Text>}
        {error && <Text color="secondary">{error}</Text>}
      </div>
    </Card>
  );
}
