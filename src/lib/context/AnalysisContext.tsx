'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SkillSuggestion } from '@/lib/types';

interface PersonalInfo {
  level: string;
  position: string;
}

interface AnalysisResult {
  personalInfo: PersonalInfo;
  suggestions: SkillSuggestion[];
  aiFeedback?: string;
}

interface AnalysisContextType {
  analysisResult: AnalysisResult | null;
  setAnalysisResult: (result: AnalysisResult | null) => void;
  clearAnalysis: () => void;
  hasAnalysis: boolean;
}

const AnalysisContext = createContext<AnalysisContextType | undefined>(undefined);

export function AnalysisProvider({ children }: { children: ReactNode }) {
  const [analysisResult, setAnalysisResultState] = useState<AnalysisResult | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('cvAnalysisResult');
    if (stored) {
      try {
        const result = JSON.parse(stored);
        setAnalysisResultState(result);
      } catch (error) {
        console.error('Error parsing stored analysis result:', error);
        localStorage.removeItem('cvAnalysisResult');
      }
    }
  }, []);

  const setAnalysisResult = (result: AnalysisResult | null) => {
    setAnalysisResultState(result);
    if (result) {
      localStorage.setItem('cvAnalysisResult', JSON.stringify(result));
    } else {
      localStorage.removeItem('cvAnalysisResult');
    }
  };

  const clearAnalysis = () => {
    setAnalysisResultState(null);
    localStorage.removeItem('cvAnalysisResult');
  };

  const hasAnalysis = analysisResult !== null;

  return (
    <AnalysisContext.Provider
      value={{
        analysisResult,
        setAnalysisResult,
        clearAnalysis,
        hasAnalysis,
      }}
    >
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  const context = useContext(AnalysisContext);
  if (context === undefined) {
    throw new Error('useAnalysis must be used within an AnalysisProvider');
  }
  return context;
} 