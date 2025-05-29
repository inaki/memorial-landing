import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center gap-1 text-gray-500">
            <span>Created with</span>
            <Heart size={16} className="text-primary-500 fill-primary-500" />
            <span>in loving memory</span>
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Memorial Event App
          </p>
        </div>
      </div>
    </footer>
  );
};