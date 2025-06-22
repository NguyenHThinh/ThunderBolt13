export interface Job {
  id: string;
  title: string;
  company: string;
  position: string;
  level: string;
  salary: string;
  description: string;
  location: string;
}

export interface Course {
  id: string;
  name: string;
  skill: string;
  platform: string;
  link: string;
  level: string;
  description?: string;
}

export interface SkillSuggestion {
  skill: string;
  type: 'soft-skill' | 'technical';
  level: 'low' | 'medium' | 'high';
}

export interface PersonalInfo {
  fullName: string;
  age: number;
  level: string;
  email: string;
  phone: string;
  position: string;
  cv?: File;
}

export interface JobPosition {
  value: string;
  label: string;
  level: string;
  company: string;
  salary: string;
} 