'use client';

import React from 'react';
import { Card } from './card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  icon, 
  delay = 0, 
  className = '' 
}: ServiceCardProps) {
  return (
    <div style={{ animationDelay: `${delay}ms` }} className="h-full">
      <Card 
        className={`p-4 sm:p-6 lg:p-8 hover-lift group cursor-pointer h-full flex flex-col ${className}`}
      >
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 flex-grow">
          {/* Icon Container */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
            <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
              {icon}
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-2 sm:space-y-3 flex-grow flex flex-col justify-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
} 