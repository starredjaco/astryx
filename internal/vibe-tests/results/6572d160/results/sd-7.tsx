// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState, useCallback} from 'react';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {Button} from '@astryxdesign/core/Button';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import {Card} from '@astryxdesign/core/Card';

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
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setIsDone(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  }, []);

  return (
    <div className="max-w-md mx-auto p-6">
      <Heading level={2}>Upload File</Heading>
      {!file && (
        <Button label="Choose File" variant="primary" onClick={() => { setFile({name: 'design-specs.pdf', size: 2_450_000}); simulateUpload(); }} />
      )}
      {file && (
        <Card padding={3}>
          <div className="flex justify-between items-center mb-2">
            <Text weight="semibold">{file.name}</Text>
            <Text type="supporting" color="secondary">{formatFileSize(file.size)}</Text>
          </div>
          {isUploading && <ProgressBar label="Upload progress" value={progress} hasValueLabel variant="accent" />}
          {isDone && (
            <div className="flex items-center gap-2">
              <Icon icon="success" color="success" />
              <Text color="secondary">Upload complete</Text>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
