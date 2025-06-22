'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Briefcase, RotateCcw } from 'lucide-react';
import { useAnalysis } from '@/lib/context/AnalysisContext';

export default function Header() {
  const pathname = usePathname();
  const { hasAnalysis, clearAnalysis } = useAnalysis();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">THUNDERBOLT 13</h1>
          </div>
          
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className={`font-medium ${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Home
              </Link>
              <Link 
                href="/courses" 
                className={`font-medium ${isActive('/courses') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Courses
              </Link>
              <Link 
                href="/jobs" 
                className={`font-medium ${isActive('/jobs') ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                Jobs
              </Link>
            </nav>
            
            {hasAnalysis && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearAnalysis}
                className="text-gray-600 hover:text-gray-900"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                New Analysis
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 