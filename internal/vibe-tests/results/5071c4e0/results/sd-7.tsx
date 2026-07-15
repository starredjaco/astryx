// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useEffect} from 'react';
import {VStack} from '@astryxdesign/core/VStack';
import {HStack} from '@astryxdesign/core/HStack';
import {Button} from '@astryxdesign/core/Button';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {Text} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';
import {Icon} from '@astryxdesign/core/Icon';

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
    <VStack gap={4} maxWidth={400}>
      <Button label="Upload File" variant="primary" onClick={handleUpload} />
      {file && (
        <Card padding={4}>
          <VStack gap={3}>
            <HStack gap={2} vAlign="center">
              <Text type="label">{file.name}</Text>
              <Text type="supporting">{formatFileSize(file.size)}</Text>
            </HStack>
            <ProgressBar
              label="Upload progress"
              value={progress}
              max={100}
              hasValueLabel
              variant={isDone ? 'success' : 'accent'}
            />
            {isDone && (
              <Text color="accent" type="supporting">Upload complete</Text>
            )}
          </VStack>
        </Card>
      )}
    </VStack>
  );
}
