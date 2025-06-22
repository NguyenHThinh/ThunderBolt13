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
  // AI-related positions
  { value: "ai-engineer-junior", label: "AI Engineer", level: "Junior", company: "AI Startup", salary: "$4,000-6,000" },
  { value: "ai-engineer-middle", label: "AI Engineer", level: "Middle", company: "AI Solutions", salary: "$6,000-9,000" },
  { value: "ai-engineer-senior", label: "AI Engineer", level: "Senior", company: "AI Corp", salary: "$9,000-15,000" },
  { value: "machine-learning-engineer", label: "Machine Learning Engineer", level: "Middle", company: "ML Tech", salary: "$7,000-12,000" },
  { value: "data-scientist", label: "Data Scientist", level: "Middle", company: "Data Labs", salary: "$5,000-9,000" },
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
  },
  // AI-related job listings
  {
    id: "6",
    title: "AI Engineer",
    company: "AI Startup",
    position: "AI Engineer",
    level: "Junior",
    salary: "$4,000-6,000",
    description: "Develop AI applications using Python, TensorFlow, PyTorch. Work on machine learning models and AI systems. Requires 1-2 years of experience in AI/ML.",
    location: "Ho Chi Minh City"
  },
  {
    id: "7",
    title: "Machine Learning Engineer",
    company: "ML Tech",
    position: "Machine Learning Engineer",
    level: "Middle",
    salary: "$7,000-12,000",
    description: "Design and implement ML pipelines, deploy models to production. Experience with MLOps, cloud platforms required. 3-5 years experience.",
    location: "Hanoi"
  },
  {
    id: "8",
    title: "Data Scientist",
    company: "Data Labs",
    position: "Data Scientist",
    level: "Middle",
    salary: "$5,000-9,000",
    description: "Analyze complex datasets, build predictive models, create insights for business decisions. Strong statistics and Python skills required.",
    location: "Da Nang"
  },
  {
    id: "9",
    title: "Senior AI Engineer",
    company: "AI Corp",
    position: "AI Engineer",
    level: "Senior",
    salary: "$9,000-15,000",
    description: "Lead AI research and development, architect AI solutions, mentor junior engineers. 5+ years of AI/ML experience required.",
    location: "Ho Chi Minh City"
  }
];

export const courses: Course[] = [
  {
    id: "4",
    name: "Business English Communication",
    skill: "English", 
    platform: "Coursera",
    link: "https://coursera.org/business-english",
    level: "intermediate",
    description: "Improve English communication skills for workplace"
  },
  // AI Courses from about.html
  {
    id: "9",
    name: "AI for everyone",
    skill: "AI skills",
    platform: "Coursera",
    link: "http://coursera.org/learn/ai-for-everyone",
    level: "beginner",
    description: "Helps understand AI terminology, how it is applied in business and ethical boundaries"
  },
  {
    id: "10",
    name: "Introduction to Artificial Intelligence (AI)",
    skill: "AI skills",
    platform: "Coursera",
    link: "https://www.coursera.org/learn/introduction-to-ai",
    level: "beginner",
    description: "ML, DL, LLM, ChatGPT, prompt engineering concepts"
  },
  {
    id: "11",
    name: "AI Python for Beginners",
    skill: "AI skills",
    platform: "Coursera",
    link: "https://www.coursera.org/learn/ai-python-for-beginners",
    level: "beginner",
    description: "Help learn Python for AI, suitable for people who don't know programming"
  },
  {
    id: "12",
    name: "Google AI Essentials Specialization",
    skill: "AI skills",
    platform: "Coursera",
    link: "https://www.coursera.org/specializations/ai-essentials-google",
    level: "beginner",
    description: "Using AI to Improve Work Performance"
  },
  {
    id: "13",
    name: "Machine Learning Specialization",
    skill: "AI skills",
    platform: "Coursera",
    link: "https://www.coursera.org/learn/advanced-learning-algorithms",
    level: "intermediate",
    description: "Create AI applications using GPT, understand how it works"
  },
  {
    id: "14",
    name: "Generative AI with LLMs",
    skill: "AI skills",
    platform: "Coursera",
    link: "https://www.coursera.org/learn/generative-ai-with-llms",
    level: "intermediate",
    description: "Create AI applications using GPT, understand how it works"
  },
  {
    id: "15",
    name: "IBM AI Developer Professional Certificate",
    skill: "AI skills",
    platform: "Coursera",
    link: "https://www.coursera.org/professional-certificates/applied-artifical-intelligence-ibm-watson-ai",
    level: "intermediate",
    description: "Make chatbot, web AI, natural language processing"
  },
  {
    id: "16",
    name: "AI Foundations for Everyone Specialization",
    skill: "AI skills",
    platform: "Coursera",
    link: "https://www.coursera.org/specializations/ai-foundations-for-everyone",
    level: "intermediate",
    description: "Deeper into AI application framework"
  },
  {
    id: "17",
    name: "Advanced Topics in AI",
    skill: "AI skills",
    platform: "Coursera",
    link: "https://www.coursera.org/learn/advanced-topics-in-artificial-intelligence",
    level: "advanced",
    description: "Advanced infrastructure update course, autonomous systems, robotics, business strategy"
  },
  {
    id: "18",
    name: "IBM AI Engineering Certificate",
    skill: "AI skills",
    platform: "Coursera",
    link: "https://www.coursera.org/professional-certificates/ai-engineer",
    level: "advanced",
    description: "Building AI models: CNN, RNN, TensorFlow, PyTorch"
  }
]; 