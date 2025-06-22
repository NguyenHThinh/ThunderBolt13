import { NextRequest, NextResponse } from "next/server";
import { SkillSuggestion } from "@/lib/types";

// Mock data for skills that need improvement by position
const skillSuggestionsByPosition: Record<string, SkillSuggestion[]> = {
  "frontend-junior": [
    { skill: "JavaScript", type: "technical", level: "medium" },
    { skill: "React", type: "technical", level: "low" },
    { skill: "CSS", type: "technical", level: "medium" },
    { skill: "English", type: "soft-skill", level: "low" },
    { skill: "Communication", type: "soft-skill", level: "medium" },
  ],
  "frontend-middle": [
    { skill: "TypeScript", type: "technical", level: "medium" },
    { skill: "React", type: "technical", level: "high" },
    { skill: "State Management", type: "technical", level: "low" },
    { skill: "Leadership", type: "soft-skill", level: "low" },
    { skill: "Problem Solving", type: "soft-skill", level: "medium" },
  ],
  "frontend-senior": [
    { skill: "System Design", type: "technical", level: "low" },
    { skill: "Performance Optimization", type: "technical", level: "medium" },
    { skill: "Mentoring", type: "soft-skill", level: "low" },
    { skill: "Architecture", type: "technical", level: "medium" },
  ],
  "backend-junior": [
    { skill: "Node.js", type: "technical", level: "medium" },
    { skill: "Database", type: "technical", level: "low" },
    { skill: "API Design", type: "technical", level: "low" },
    { skill: "English", type: "soft-skill", level: "low" },
  ],
  "backend-middle": [
    { skill: "Microservices", type: "technical", level: "low" },
    { skill: "Docker", type: "technical", level: "medium" },
    { skill: "Testing", type: "technical", level: "medium" },
    { skill: "Communication", type: "soft-skill", level: "medium" },
  ],
  "backend-senior": [
    { skill: "System Architecture", type: "technical", level: "medium" },
    { skill: "Performance Tuning", type: "technical", level: "low" },
    { skill: "Team Leadership", type: "soft-skill", level: "low" },
    { skill: "Strategic Thinking", type: "soft-skill", level: "medium" },
  ],
  "fullstack-junior": [
    { skill: "JavaScript", type: "technical", level: "medium" },
    { skill: "React", type: "technical", level: "low" },
    { skill: "Node.js", type: "technical", level: "low" },
    { skill: "Database", type: "technical", level: "low" },
    { skill: "English", type: "soft-skill", level: "low" },
  ],
  "fullstack-middle": [
    { skill: "TypeScript", type: "technical", level: "medium" },
    { skill: "DevOps", type: "technical", level: "low" },
    { skill: "Testing", type: "technical", level: "medium" },
    { skill: "Project Management", type: "soft-skill", level: "low" },
  ],
  "data-analyst": [
    { skill: "Python", type: "technical", level: "medium" },
    { skill: "SQL", type: "technical", level: "low" },
    { skill: "Statistics", type: "technical", level: "low" },
    { skill: "Data Visualization", type: "technical", level: "medium" },
    { skill: "Business Analysis", type: "soft-skill", level: "medium" },
  ],
  "product-manager": [
    { skill: "Market Research", type: "technical", level: "low" },
    { skill: "User Research", type: "technical", level: "medium" },
    { skill: "Strategic Planning", type: "soft-skill", level: "low" },
    { skill: "Stakeholder Management", type: "soft-skill", level: "medium" },
    { skill: "Leadership", type: "soft-skill", level: "medium" },
  ],
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const position = formData.get("position") as string;
    const file = formData.get("cv") as File;

    if (!position) {
      return NextResponse.json(
        { error: "Position is required" },
        { status: 400 }
      );
    }

    if (!file) {
      return NextResponse.json(
        { error: "CV file is required" },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ["application/pdf", "image/png", "image/jpeg"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Only PDF, PNG, or JPG files are allowed" },
        { status: 400 }
      );
    }

    // Validate file size (5MB max)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "File size must not exceed 5MB" },
        { status: 400 }
      );
    }

    // Simulate CV analysis delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Get skill suggestions based on position
    const suggestions = skillSuggestionsByPosition[position] || [
      { skill: "Communication", type: "soft-skill", level: "medium" },
      { skill: "Problem Solving", type: "soft-skill", level: "low" },
      { skill: "Technical Skills", type: "technical", level: "medium" },
    ];

    // Generate AI feedback based on position
    const generateAIFeedback = (
      position: string,
      suggestions: SkillSuggestion[]
    ) => {
      const positionLabels: Record<string, string> = {
        "frontend-junior": "Frontend Developer (Junior)",
        "frontend-middle": "Frontend Developer (Middle)",
        "frontend-senior": "Frontend Developer (Senior)",
        "backend-junior": "Backend Developer (Junior)",
        "backend-middle": "Backend Developer (Middle)",
        "backend-senior": "Backend Developer (Senior)",
        "fullstack-junior": "Fullstack Developer (Junior)",
        "fullstack-middle": "Fullstack Developer (Middle)",
        "data-analyst": "Data Analyst",
        "product-manager": "Product Manager",
      };

      const positionName = positionLabels[position] || "Developer";
      const skillCount = suggestions.length;
      const technicalSkills = suggestions.filter((s) => s.type === "technical");
      const softSkills = suggestions.filter((s) => s.type === "soft-skill");

      return `Based on your CV analysis for the ${positionName} position, I've identified several areas for improvement to enhance your competitiveness in the job market.

**Overall Assessment:**
Your profile shows good potential for growth, however you need to focus on ${skillCount} key skills to fully match the requirements for the ${positionName} position.

**Technical Skills (${technicalSkills.length} skills):**
${technicalSkills
  .map(
    (skill) =>
      `• ${skill.skill}: Priority level ${
        skill.level === "low"
          ? "very high"
          : skill.level === "medium"
          ? "high"
          : "medium"
      }`
  )
  .join("\n")}

**Soft Skills (${softSkills.length} skills):**
${softSkills
  .map(
    (skill) =>
      `• ${skill.skill}: ${
        skill.level === "low"
          ? "Needs immediate development"
          : skill.level === "medium"
          ? "Needs strengthening"
          : "Needs refinement"
      }`
  )
  .join("\n")}

**Recommended Development Roadmap:**
1. **High Priority:** Focus on "low" level skills to quickly meet basic requirements
2. **Continuous Learning:** Dedicate 2-3 hours daily for learning and practice
3. **Practical Projects:** Apply knowledge to personal projects to gain experience
4. **Professional Network:** Join communities for learning and experience sharing

With proper effort, you can significantly improve your competitiveness within the next 3-6 months.`;
    };

    const aiFeedback = generateAIFeedback(position, suggestions);

    return NextResponse.json({
      success: true,
      suggestions,
      aiFeedback,
      message: "CV analysis completed successfully",
    });
  } catch (error) {
    console.error("Error analyzing CV:", error);
    return NextResponse.json(
      { error: "An error occurred while analyzing CV" },
      { status: 500 }
    );
  }
}
