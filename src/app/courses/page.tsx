"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses } from "@/lib/data";
import { Course } from "@/lib/types";
import {
  BookOpen,
  ExternalLink,
  ArrowLeft,
  TrendingUp,
  Brain,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";
import { useAnalysis } from "@/lib/context/AnalysisContext";
import Header from "@/components/Header";

export default function CoursesPage() {
  const [recommendedCourses, setRecommendedCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState("all");
  const router = useRouter();
  const { analysisResult, hasAnalysis } = useAnalysis();

  useEffect(() => {
    if (hasAnalysis && analysisResult) {
      // Map suggestions to courses
      const skillsToImprove = analysisResult.suggestions.map((s) =>
        s.skill.toLowerCase()
      );
      const recommended = courses.filter((course) =>
        skillsToImprove.some(
          (skill) =>
            course.skill.toLowerCase().includes(skill) ||
            skill.includes(course.skill.toLowerCase())
        )
      );

      setRecommendedCourses(recommended);
    }
  }, [analysisResult, hasAnalysis]);

  // Filter all courses based on search and filters
  const filteredAllCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        searchTerm === "" ||
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.skill.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesLevel =
        levelFilter === "all" || course.level === levelFilter;
      const matchesPlatform =
        platformFilter === "all" || course.platform === platformFilter;

      return matchesSearch && matchesLevel && matchesPlatform;
    });
  }, [searchTerm, levelFilter, platformFilter]);

  // Get unique values for filters
  const levels = [...new Set(courses.map((course) => course.level))];
  const platforms = [...new Set(courses.map((course) => course.platform))];

  const getLevelColor = (level: "low" | "medium" | "high") => {
    switch (level) {
      case "low":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "high":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: "soft-skill" | "technical") => {
    return type === "technical"
      ? "bg-blue-100 text-blue-800"
      : "bg-purple-100 text-purple-800";
  };

  const getCourseLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8">
          {hasAnalysis && (
            <Button variant="ghost" onClick={() => router.back()} className="mb-4 !bg-transparent cursor-pointer">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          )}

          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {hasAnalysis ? "Course Recommendations for You" : "Available Courses"}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              {hasAnalysis 
                ? "Based on CV analysis, here are recommended courses to improve your skills"
                : "Explore our course catalog to enhance your skills"
              }
            </p>
          </div>
        </div>

        {/* Analysis Results Summary - Only show if analysis exists */}
        {hasAnalysis && analysisResult && (
          <Card className="mb-6 sm:mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-lg sm:text-xl">
                <TrendingUp className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                CV Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Candidate Information</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Level:</span>{" "}
                        {analysisResult.personalInfo.level}
                      </p>
                      <p>
                        <span className="font-medium">Desired Position:</span>{" "}
                        {analysisResult.personalInfo.position}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Brain className="mr-2 h-4 w-4" />
                      Skills to Improve
                    </h4>
                    <div className="space-y-2">
                      {analysisResult.suggestions.map((suggestion, index) => (
                        <div
                          key={index}
                          className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg gap-2"
                        >
                          <span className="font-medium">{suggestion.skill}</span>
                          <div className="flex flex-wrap gap-2">
                            <Badge className={getTypeColor(suggestion.type)}>
                              {suggestion.type === "technical"
                                ? "Technical"
                                : "Soft"}
                            </Badge>
                            <Badge className={getLevelColor(suggestion.level)}>
                              {suggestion.level === "low"
                                ? "Low"
                                : suggestion.level === "medium"
                                ? "Medium"
                                : "High"}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* AI Feedback - Only show if available */}
                {analysisResult.aiFeedback && (
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Brain className="mr-2 h-4 w-4" />
                      AI Feedback
                    </h4>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="text-sm text-gray-700 whitespace-pre-line">
                        {analysisResult.aiFeedback}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recommended Courses - Only show if analysis exists */}
        {hasAnalysis && (
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
              <BookOpen className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Recommended Courses ({recommendedCourses.length})
            </h3>

            {recommendedCourses.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {recommendedCourses.map((course) => (
                  <Card
                    key={course.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base sm:text-lg">{course.name}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">{course.skill}</Badge>
                        <Badge className={`text-xs ${getCourseLevelColor(course.level)}`}>
                          {course.level}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 text-sm mb-4">
                        {course.description}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <span className="text-sm font-medium text-gray-500">
                          {course.platform}
                        </span>
                        <Button size="sm" asChild className="w-full sm:w-auto">
                          <a
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            View Course
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="text-center py-8 sm:py-12">
                <CardContent>
                  <BookOpen className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mb-4" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    No Matching Courses Found
                  </h3>
                  <p className="text-gray-600 mb-4 sm:mb-6">
                    We currently don&apos;t have courses that match the suggested skills.
                  </p>
                  <Button asChild>
                    <Link href="/jobs">View Jobs</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* All Available Courses */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            All Available Courses
          </h3>

          {/* Search and Filter */}
          <Card className="mb-4 sm:mb-6">
            <CardHeader>
              <CardTitle className="flex items-center text-base sm:text-lg">
                <Filter className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Search and Filter Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by course name, skill..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                  <Select value={levelFilter} onValueChange={setLevelFilter}>
                    <SelectTrigger className="w-full sm:w-40">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Levels</SelectItem>
                      {levels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select
                    value={platformFilter}
                    onValueChange={setPlatformFilter}
                  >
                    <SelectTrigger className="w-full sm:w-40">
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Platforms</SelectItem>
                      {platforms.map((platform) => (
                        <SelectItem key={platform} value={platform}>
                          {platform}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setLevelFilter("all");
                      setPlatformFilter("all");
                    }}
                    className="w-full sm:w-auto"
                  >
                    Clear Filters
                  </Button>
                </div>

                {/* Filter Summary */}
                <div className="text-sm text-gray-600">
                  Showing {filteredAllCourses.length} / {courses.length} courses
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredAllCourses.map((course) => (
              <Card
                key={course.id}
                className={`hover:shadow-lg transition-shadow ${!hasAnalysis ? 'opacity-100' : 'opacity-75'}`}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg">{course.name}</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">{course.skill}</Badge>
                    <Badge className={`text-xs ${getCourseLevelColor(course.level)}`}>
                      {course.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4">
                    {course.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <span className="text-sm font-medium text-gray-500">
                      {course.platform}
                    </span>
                    <Button size="sm" variant="outline" asChild className="w-full sm:w-auto">
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        View Course
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action when no analysis */}
        {!hasAnalysis && (
          <div className="mt-8 sm:mt-12 text-center">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="py-8 sm:py-12">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Want Personalized Recommendations?
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
                  Analyze your CV to get personalized course recommendations based on your skills and desired position.
                </p>
                <Button asChild size="lg">
                  <Link href="/">
                    Analyze CV Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
