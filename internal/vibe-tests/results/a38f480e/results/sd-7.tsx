// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {Card} from '@astryxdesign/core/Card';
import {VStack} from '@astryxdesign/core/VStack';
import {Text} from '@astryxdesign/core/Text';

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
    <div className="max-w-md">
      <VStack gap={4}>
        <Button label="Upload File" variant="primary" onClick={handleUpload} />
        {file && (
          <Card padding={4}>
            <VStack gap={3}>
              <div className="flex items-center justify-between">
                <Text type="label">{file.name}</Text>
                <Text type="supporting">{formatFileSize(file.size)}</Text>
              </div>
              <ProgressBar
                label="Upload progress"
                value={progress}
                max={100}
                hasValueLabel
                variant={isDone ? 'success' : 'accent'}
              />
              {isDone && (
                <p className="text-sm text-green-600 font-medium">Upload complete</p>
              )}
            </VStack>
          </Card>
        )}
      </VStack>
    </div>
  );
}
