'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CVUploadProps {
  onFileSelect: (file: File | null) => void;
  error?: string;
}

export default function CVUpload({ onFileSelect, error }: CVUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg']
    },
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false
  });

  const removeFile = () => {
    setSelectedFile(null);
    onFileSelect(null);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      {!selectedFile ? (
        <Card 
          {...getRootProps()} 
          className={`p-8 border-2 border-dashed transition-colors cursor-pointer hover:bg-gray-50 ${
            isDragActive 
              ? 'border-blue-500 bg-blue-50' 
              : error 
              ? 'border-red-500' 
              : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          <div className="text-center">
            <Upload className={`mx-auto h-12 w-12 ${
              isDragActive ? 'text-blue-500' : 'text-gray-400'
            }`} />
            <div className="mt-4">
              <p className="text-lg font-medium text-gray-900">
                {isDragActive ? 'Drop file here...' : 'Upload your CV'}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Drag and drop file here or click to select file
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Supports PDF, PNG, JPG (max 5MB)
              </p>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <File className="h-8 w-8 text-blue-500" />
              <div>
                <p className="font-medium text-gray-900">{selectedFile.name}</p>
                <p className="text-sm text-gray-500">
                  {formatFileSize(selectedFile.size)}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={removeFile}
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}
      
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
} 