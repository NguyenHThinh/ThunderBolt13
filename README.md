# ThangMap Career 

A CV analysis and course recommendation website built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

### 1. Home Page - CV Analysis
- **Personal Information Form**: Name, age, level, email, phone number
- **Position Selection**: Choose from available positions with level, company, and salary info
- **CV Upload**: Drag-n-drop support, allows PDF, PNG, JPG files (max 5MB)
- **Validation**: Complete validation using React Hook Form + Zod
- **CV Analysis**: Mock API returns skill improvement suggestions based on desired position

### 2. Courses Page - Learning Recommendations
- **Analysis Results Display**: Summary of information and skills to improve
- **Recommended Courses**: Mapped from skill suggestions to course catalog
- **Course Information**: Name, related skills, platform, link, level
- **All Courses**: Complete list of available courses

### 3. Jobs Page - Opportunity Search
- **Job Listings**: Display all jobs with complete information
- **Search**: By job title, company, description
- **Filters**: By position, level, salary range
- **Detailed Information**: Title, company, position, salary, description, location

## 🛠️ Technologies Used

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form
- **Validation**: Zod
- **File Upload**: react-dropzone
- **Icons**: Lucide React

## 🚀 Installation and Setup

1. **Clone repository and install dependencies**:
```bash
git clone <repository-url>
cd thangmap
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open browser and visit**: http://localhost:3000

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── page.tsx           # Home page - CV analysis form
│   ├── courses/page.tsx   # Courses page
│   ├── jobs/page.tsx      # Jobs page
│   └── api/
│       └── analyze-cv/    # CV analysis API
├── components/
│   ├── ui/               # shadcn/ui components
│   └── CVUpload.tsx      # CV upload component
└── lib/
    ├── types.ts          # TypeScript interfaces
    ├── data.ts           # Mock data
    └── utils.ts          # Utility functions
```

## 📝 User Guide

### CV Analysis
1. Visit the home page
2. Fill in all personal information
3. Select your desired position
4. Upload CV file (PDF, PNG, JPG)
5. Click "Analyze CV" and wait for results

### View Course Recommendations
1. After CV analysis, automatically redirected to courses page
2. View analysis results and list of skills to improve
3. Explore recommended courses
4. Click on courses to access learning links

### Job Search
1. Visit the "Jobs" page
2. Use search bar or filters
3. View matching job listings
4. Click "Apply Now" to apply

## 🔧 Technical Features

- **Responsive design**: Compatible on mobile, tablet, desktop
- **Form validation**: Real-time validation with detailed error messages
- **File upload**: Drag-n-drop with file type and size validation
- **State management**: Uses localStorage to store analysis results
- **Type safety**: TypeScript throughout the application
- **Performance**: App Router and component optimization

## 🎨 UI/UX

- **Design system**: Consistent with shadcn/ui
- **Color scheme**: Blue and neutral tones
- **Typography**: Clear hierarchy and readable fonts
- **Interactive elements**: Hover effects and smooth transitions
- **Loading states**: Spinner and skeleton screens
- **Error handling**: User-friendly error messages

## 📊 Mock Data

The website uses mock data for:
- **10 job positions** with different levels
- **5 sample jobs** with detailed information
- **8 courses** from various platforms
- **Skill suggestions** corresponding to each position

## 🔮 Potential Extensions

- Integration with real CV analysis API (OCR, AI)
- User registration/login system
- Save analysis history and track progress
- Job recommendations based on skills
- Career counseling chatbot
- Integration with real job boards

## 📞 Support

If you encounter issues or have questions, please create an issue in the repository.

---

**ThangMap Career** - CV Analysis and Career Development Platform 🚀
