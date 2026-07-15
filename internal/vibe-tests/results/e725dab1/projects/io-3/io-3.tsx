// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useRef} from 'react';
import {Button} from '@/components/ui/button';
import {Progress} from '@/components/ui/progress';

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
        if (event.lengthComputable) {
          setProgress(Math.round((event.loaded / event.total) * 100));
        }
      });
      xhr.addEventListener('load', () => {
        setProgress(100);
        setIsUploading(false);
      });
      xhr.addEventListener('error', () => {
        setIsUploading(false);
      });
      xhr.open('POST', '/api/upload');
      xhr.send(formData);
    } catch {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 max-w-xs">
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileSelect}
        className="hidden"
        aria-label="Select file to upload"
      />
      <Button onClick={() => inputRef.current?.click()} disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Choose File'}
      </Button>
      {fileName && (
        <>
          <p className="text-sm text-muted-foreground">{fileName}</p>
          <Progress value={progress} />
          <p className="text-xs text-muted-foreground">{progress}%</p>
        </>
      )}
    </div>
  );
}
