'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { jobs } from '@/lib/data';
import { Search, MapPin, Building, DollarSign, Briefcase, Filter } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [positionFilter, setPositionFilter] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const [salaryFilter, setSalaryFilter] = useState('all');

  // Get unique values for filters
  const positions = [...new Set(jobs.map(job => job.position))];
  const levels = [...new Set(jobs.map(job => job.level))];
  const salaryRanges = [...new Set(jobs.map(job => job.salary))];

  // Filter jobs based on search term and filters
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = searchTerm === '' || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesPosition = positionFilter === 'all' || job.position === positionFilter;
      const matchesLevel = levelFilter === 'all' || job.level === levelFilter;
      const matchesSalary = salaryFilter === 'all' || job.salary === salaryFilter;

      return matchesSearch && matchesPosition && matchesLevel && matchesSalary;
    });
  }, [searchTerm, positionFilter, levelFilter, salaryFilter]);

  const clearFilters = () => {
    setSearchTerm('');
    setPositionFilter('all');
    setLevelFilter('all');
    setSalaryFilter('all');
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'junior': return 'bg-green-100 text-green-800';
      case 'middle': return 'bg-yellow-100 text-yellow-800';
      case 'senior': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Job Opportunities
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Search and apply for positions that match your skills
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6 sm:mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-lg sm:text-xl">
              <Filter className="mr-3 h-5 w-5 sm:h-6 sm:w-6" />
              Search and Filter Jobs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search by job title, company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                <Select value={positionFilter} onValueChange={setPositionFilter}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Positions</SelectItem>
                    {positions.map(position => (
                      <SelectItem key={position} value={position}>
                        {position}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger className="w-full sm:w-32">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    {levels.map(level => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={salaryFilter} onValueChange={setSalaryFilter}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Select salary" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Salaries</SelectItem>
                    {salaryRanges.map(salary => (
                      <SelectItem key={salary} value={salary}>
                        {salary}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button 
                  variant="outline" 
                  onClick={clearFilters}
                  className="w-full sm:w-auto"
                >
                  Clear Filters
                </Button>
              </div>

              {/* Filter Summary */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 gap-2">
                <span>
                  Showing {filteredJobs.length} / {jobs.length} jobs
                </span>
                {(positionFilter !== 'all' || levelFilter !== 'all' || salaryFilter !== 'all' || searchTerm) && (
                  <span>Filters applied</span>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Jobs List */}
        <div className="space-y-4 sm:space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1 space-y-3 sm:space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                          {job.title}
                        </h3>
                        
                        {/* Job Details - Stack on mobile, inline on larger screens */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-3">
                          <div className="flex items-center">
                            <Building className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span className="text-sm">{job.company}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span className="text-sm">{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1 flex-shrink-0" />
                            <span className="text-sm">{job.salary}</span>
                          </div>
                        </div>
                        
                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">{job.position}</Badge>
                          <Badge className={`text-xs ${getLevelColor(job.level)}`}>
                            {job.level}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm sm:text-base line-clamp-3">
                        {job.description}
                      </p>
                    </div>

                    {/* Apply Button */}
                    <div className="lg:ml-6 lg:flex-shrink-0">
                      <Button className="w-full lg:w-auto">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="text-center py-8 sm:py-12">
              <CardContent>
                <Briefcase className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  No Matching Jobs Found
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6">
                  Try adjusting your filters or search terms to see more results.
                </p>
                <Button onClick={clearFilters}>
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-8 sm:mt-12 text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="py-8 sm:py-12">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Haven&apos;t found the right job yet?
              </h3>
              <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
                Analyze your CV to discover skills to improve and get personalized course recommendations.
              </p>
              <Button asChild size="lg">
                <Link href="/">
                  Analyze CV Now
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
} 