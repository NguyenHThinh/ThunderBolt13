import { Job, Course, JobPosition } from './types';

export const jobPositions: JobPosition[] = [
  { value: "frontend-junior", label: "Frontend Developer", level: "Junior", company: "TechCorp", salary: "$3,000-4,000" },
  { value: "frontend-middle", label: "Frontend Developer", level: "Middle", company: "DevCompany", salary: "$4,000-6,000" },
  { value: "frontend-senior", label: "Frontend Developer", level: "Senior", company: "BigTech", salary: "$6,000-10,000" },
  { value: "backend-junior", label: "Backend Developer", level: "Junior", company: "StartupX", salary: "$3,000-5,000" },
  { value: "backend-middle", label: "Backend Developer", level: "Middle", company: "TechSolutions", salary: "$5,000-7,000" },
  { value: "backend-senior", label: "Backend Developer", level: "Senior", company: "Enterprise", salary: "$7,000-12,000" },
  { value: "fullstack-junior", label: "Fullstack Developer", level: "Junior", company: "WebStudio", salary: "$3,600-5,000" },
  { value: "fullstack-middle", label: "Fullstack Developer", level: "Middle", company: "DigitalAgency", salary: "$5,000-8,000" },
  { value: "data-analyst", label: "Data Analyst", level: "Middle", company: "DataCorp", salary: "$4,000-7,000" },
  { value: "product-manager", label: "Product Manager", level: "Senior", company: "ProductCo", salary: "$8,000-14,000" },
];

export const jobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    position: "Frontend Developer", 
    level: "Junior",
    salary: "$3,000-4,000",
    description: "Develop user interfaces with React, TypeScript, and Tailwind CSS. Requires 1-2 years of experience.",
    location: "Ho Chi Minh City"
  },
  {
    id: "2", 
    title: "Backend Developer",
    company: "StartupX",
    position: "Backend Developer",
    level: "Middle",
    salary: "$5,000-7,000", 
    description: "Build APIs and backend systems with Node.js, Express, MongoDB. Requires 2-4 years of experience.",
    location: "Hanoi"
  },
  {
    id: "3",
    title: "Fullstack Developer", 
    company: "DigitalAgency",
    position: "Fullstack Developer",
    level: "Senior",
    salary: "$7,000-10,000",
    description: "Develop full-stack web applications with React, Node.js, PostgreSQL. Requires 4+ years of experience.",
    location: "Da Nang"
  },
  {
    id: "4",
    title: "Data Analyst",
    company: "DataCorp", 
    position: "Data Analyst",
    level: "Middle",
    salary: "$4,000-7,000",
    description: "Analyze data, create reports with Python, SQL, Tableau. Requires 2-3 years of experience.",
    location: "Ho Chi Minh City"
  },
  {
    id: "5",
    title: "Product Manager",
    company: "ProductCo",
    position: "Product Manager", 
    level: "Senior", 
    salary: "$8,000-14,000",
    description: "Manage products, coordinate development teams. Requires 5+ years of experience in tech industry.",
    location: "Hanoi"
  }
];

export const courses: Course[] = [
  {
    id: "1",
    name: "JavaScript Fundamentals",
    skill: "JavaScript",
    platform: "Udemy",
    link: "https://udemy.com/javascript-course",
    level: "beginner",
    description: "Basic JavaScript course for beginners"
  },
  {
    id: "2", 
    name: "Advanced React Patterns",
    skill: "React",
    platform: "Frontend Masters",
    link: "https://frontendmasters.com/react-advanced",
    level: "advanced",
    description: "Advanced React patterns for senior developers"
  },
  {
    id: "3",
    name: "Node.js API Development", 
    skill: "Node.js",
    platform: "Pluralsight",
    link: "https://pluralsight.com/nodejs-api", 
    level: "intermediate",
    description: "Build RESTful APIs with Node.js and Express"
  },
  {
    id: "4",
    name: "Business English Communication",
    skill: "English", 
    platform: "Coursera",
    link: "https://coursera.org/business-english",
    level: "intermediate",
    description: "Improve English communication skills for workplace"
  },
  {
    id: "5",
    name: "Python for Data Analysis",
    skill: "Python",
    platform: "edX", 
    link: "https://edx.org/python-data-analysis",
    level: "intermediate",
    description: "Use Python for data analysis and visualization"
  },
  {
    id: "6",
    name: "TypeScript Deep Dive",
    skill: "TypeScript",
    platform: "Udemy",
    link: "https://udemy.com/typescript-course",
    level: "intermediate", 
    description: "Master TypeScript for large-scale projects"
  },
  {
    id: "7",
    name: "Leadership Skills for Tech",
    skill: "Leadership", 
    platform: "LinkedIn Learning",
    link: "https://linkedin.com/learning/leadership-tech",
    level: "advanced",
    description: "Leadership skills in technology environment"
  },
  {
    id: "8",
    name: "Database Design with SQL",
    skill: "SQL",
    platform: "Codecademy", 
    link: "https://codecademy.com/sql-database",
    level: "beginner",
    description: "Database design and basic SQL fundamentals"
  }
]; 