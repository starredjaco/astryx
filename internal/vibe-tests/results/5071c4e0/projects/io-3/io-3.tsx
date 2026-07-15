// Copyright (c) Meta Platforms, Inc. and affiliates.

import {useState, useRef} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {ProgressBar} from '@astryxdesign/core/ProgressBar';
import {VStack} from '@astryxdesign/core/VStack';
import {Text} from '@astryxdesign/core/Text';

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
    <VStack gap={3} maxWidth={300}>
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileSelect}
        style={{display: 'none'}}
        aria-label="Select file to upload"
      />
      <Button
        label="Choose File"
        variant="primary"
        onClick={() => inputRef.current?.click()}
        isLoading={isUploading}
      />
      {fileName && (
        <>
          <Text type="supporting">{fileName}</Text>
          <ProgressBar
            label={`Uploading ${fileName}`}
            value={progress}
            max={100}
            hasValueLabel
            variant={progress === 100 ? 'success' : 'accent'}
          />
        </>
      )}
    </VStack>
  );
}
