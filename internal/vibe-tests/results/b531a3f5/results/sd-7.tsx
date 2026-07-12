// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState, useCallback} from 'react';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Progress} from '@/components/ui/progress';

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
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Upload File</h2>
      {!file && (
        <Button onClick={() => { setFile({name: 'design-specs.pdf', size: 2_450_000}); simulateUpload(); }}>
          Choose File
        </Button>
      )}
      {file && (
        <Card>
          <CardContent className="pt-4">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold">{file.name}</p>
              <p className="text-sm text-muted-foreground">{formatFileSize(file.size)}</p>
            </div>
            {isUploading && (
              <div>
                <Progress value={progress} className="mb-1" />
                <p className="text-sm text-muted-foreground text-right">{progress}%</p>
              </div>
            )}
            {isDone && (
              <div className="flex items-center gap-2 text-green-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span>Upload complete</span>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
