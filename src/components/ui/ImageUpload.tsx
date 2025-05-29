import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Image, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface ImageUploadProps {
  onImageSelected: (file: File | null) => void;
  label?: string;
  maxSize?: number; // in MB
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageSelected,
  label = 'Upload an image',
  maxSize = 5, // 5MB default
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: any[]) => {
    if (rejectedFiles.length > 0) {
      const rejectionErrors = rejectedFiles[0].errors.map((e: any) => e.message).join(', ');
      setError(rejectionErrors);
      return;
    }
    
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setError(null);
      setPreview(URL.createObjectURL(file));
      onImageSelected(file);
    }
  }, [onImageSelected]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
    },
    maxSize: maxSize * 1024 * 1024,
    multiple: false,
  });
  
  const removeImage = () => {
    setPreview(null);
    onImageSelected(null);
  };
  
  return (
    <div className="space-y-2">
      {label && (
        <p className="block text-sm font-medium text-gray-700">{label}</p>
      )}
      
      {!preview ? (
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-lg p-6 
            flex flex-col items-center justify-center 
            cursor-pointer transition-colors
            ${isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400'}
          `}
        >
          <input {...getInputProps()} />
          <Image className="h-12 w-12 text-gray-400 mb-2" />
          <p className="text-sm text-gray-500">
            {isDragActive ? 'Drop the image here' : 'Drag & drop an image, or click to select'}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            JPG, PNG or GIF (max. {maxSize}MB)
          </p>
        </motion.div>
      ) : (
        <div className="relative rounded-lg overflow-hidden">
          <img 
            src={preview} 
            alt="Preview" 
            className="w-full h-auto object-cover rounded-lg"
          />
          <button
            type="button"
            onClick={removeImage}
            className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1 text-white hover:bg-opacity-70 transition-opacity"
          >
            <X size={16} />
          </button>
        </div>
      )}
      
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};