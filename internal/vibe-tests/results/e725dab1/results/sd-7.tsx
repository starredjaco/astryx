// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {Progress} from '@/components/ui/progress';
import {Card, CardContent} from '@/components/ui/card';

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
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setIsDone(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
    return () => clearInterval(interval);
  }, [isUploading]);

  const handleUpload = () => {
    setFile({name: 'presentation.pdf', size: 2457600});
    setProgress(0);
    setIsUploading(true);
    setIsDone(false);
  };

  return (
    <div className="max-w-md space-y-4">
      <Button onClick={handleUpload}>Upload File</Button>
      {file && (
        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="flex justify-between items-center">
              <p className="font-medium text-sm">{file.name}</p>
              <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
            </div>
            <div className="space-y-1">
              <Progress value={progress} />
              <p className="text-xs text-muted-foreground text-right">{progress}%</p>
            </div>
            {isDone && (
              <p className="text-sm text-green-600 font-medium">Upload complete</p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
