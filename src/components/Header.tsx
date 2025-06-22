'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Briefcase, RotateCcw, Menu } from 'lucide-react';
import { useAnalysis } from '@/lib/context/AnalysisContext';

export default function Header() {
  const pathname = usePathname();
  const { hasAnalysis, clearAnalysis } = useAnalysis();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/jobs', label: 'Jobs' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="flex items-center">
            <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">THUNDERBOLT 13</h1>
          </Link>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`font-medium ${isActive(item.href) ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            {/* New Analysis Button - Desktop */}
            {hasAnalysis && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearAnalysis}
                className="hidden md:flex text-gray-600 hover:text-gray-900"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                New Analysis
              </Button>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="md:hidden"
                >
                  <Menu className="h-10 w-10" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="flex items-center text-left">
                    <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
                    THUNDERBOLT 13
                  </SheetTitle>
                </SheetHeader>
                
                <div className="mt-6 space-y-6">
                  {/* Mobile Navigation */}
                  <nav className="space-y-4">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleLinkClick}
                        className={`block py-2 px-3 rounded-lg text-lg font-medium transition-colors ${
                          isActive(item.href) 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>

                  {/* New Analysis Button - Mobile */}
                  {hasAnalysis && (
                    <div className="pt-4 border-t border-gray-200">
                      <Button
                        variant="outline"
                        onClick={() => {
                          clearAnalysis();
                          setIsOpen(false);
                        }}
                        className="w-full justify-start text-gray-600 hover:text-gray-900"
                      >
                        <RotateCcw className="h-4 w-4 mr-2" />
                        New Analysis
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
} 