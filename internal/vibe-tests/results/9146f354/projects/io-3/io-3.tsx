// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useRef} from 'react';
import {Button} from '@/components/ui/button';
import {Progress} from '@/components/ui/progress';
import {Card, CardContent} from '@/components/ui/card';

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
    <Card className="max-w-sm">
      <CardContent className="p-4 space-y-3">
        <input ref={inputRef} type="file" className="hidden" onChange={(e) => { setFile(e.target.files?.[0] || null); setProgress(0); setError(null); }} />
        <Button variant="outline" onClick={() => inputRef.current?.click()} disabled={isUploading}>
          {file ? 'Change File' : 'Select File'}
        </Button>
        {file && (
          <p className="text-sm text-muted-foreground">{file.name} ({(file.size / 1024).toFixed(1)} KB)</p>
        )}
        {file && !isUploading && progress < 100 && <Button onClick={handleUpload}>Upload</Button>}
        {isUploading && <Progress value={progress} className="w-full" />}
        {progress === 100 && !isUploading && <p className="text-sm text-green-600">Upload complete.</p>}
        {error && <p className="text-sm text-destructive">{error}</p>}
      </CardContent>
    </Card>
  );
}
