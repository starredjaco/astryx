// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useRef} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {Text} from '@astryxdesign/core/Text';
import {Card} from '@astryxdesign/core/Card';
import stylex from '@stylexjs/stylex';

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 400,
  },
  fileInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
});

interface FileUploadProps {
  uploadEndpoint?: string;
}

export default function FileUpload({uploadEndpoint = '/api/upload'}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setError(null);
      setProgress(0);
    }
  };

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
        if (e.lengthComputable) {
          setProgress(Math.round((e.loaded / e.total) * 100));
        }
      };

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          setProgress(100);
          setIsUploading(false);
        } else {
          setError(`Upload failed: ${xhr.statusText}`);
          setIsUploading(false);
        }
      };

      xhr.onerror = () => {
        setError('Upload failed. Check your connection and try again.');
        setIsUploading(false);
      };

      xhr.send(formData);
    } catch (err) {
      setError('Upload failed unexpectedly.');
      setIsUploading(false);
    }
  };

  return (
    <Card padding={4}>
      <div {...stylex.props(styles.container)}>
        <input
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          style={{display: 'none'}}
          aria-label="Select file"
        />
        <Button
          label={file ? 'Change File' : 'Select File'}
          variant="secondary"
          onClick={handleFileSelect}
          isDisabled={isUploading}
        />
        {file && (
          <div {...stylex.props(styles.fileInfo)}>
            <Text>{file.name}</Text>
            <Text color="secondary">({(file.size / 1024).toFixed(1)} KB)</Text>
          </div>
        )}
        {file && !isUploading && progress < 100 && (
          <Button
            label="Upload"
            variant="primary"
            onClick={handleUpload}
          />
        )}
        {isUploading && (
          <ProgressBar value={progress} max={100} label="Uploading" />
        )}
        {progress === 100 && !isUploading && (
          <Text color="secondary">Upload complete.</Text>
        )}
        {error && <Text color="secondary">{error}</Text>}
      </div>
    </Card>
  );
}
