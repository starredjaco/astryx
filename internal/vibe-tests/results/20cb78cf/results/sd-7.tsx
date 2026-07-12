// Copyright (c) Meta Platforms, Inc. and affiliates.

import React, {useState, useCallback} from 'react';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {Button} from '@astryxdesign/core/Button';
import {Text} from '@astryxdesign/core/Text';
import {Heading} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import {Card} from '@astryxdesign/core/Card';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    maxWidth: 500,
    margin: '0 auto',
    padding: 24,
  },
  fileInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  successState: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
});

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

  const handleFileSelect = () => {
    setFile({name: 'design-specs.pdf', size: 2_450_000});
    simulateUpload();
  };

  return (
    <div {...stylex.props(styles.container)}>
      <Heading level={2}>Upload File</Heading>
      {!file && (
        <Button label="Choose File" variant="primary" onClick={handleFileSelect} />
      )}
      {file && (
        <Card padding={3}>
          <div {...stylex.props(styles.fileInfo)}>
            <Text weight="semibold">{file.name}</Text>
            <Text type="supporting" color="secondary">{formatFileSize(file.size)}</Text>
          </div>
          {isUploading && (
            <ProgressBar
              label="Upload progress"
              value={progress}
              hasValueLabel
              variant="accent"
            />
          )}
          {isDone && (
            <div {...stylex.props(styles.successState)}>
              <Icon icon="success" color="success" />
              <Text color="secondary">Upload complete</Text>
            </div>
          )}
        </Card>
      )}
    </div>
  );
}
