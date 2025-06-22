'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import CVUpload from '@/components/CVUpload';
import { jobPositions } from '@/lib/data';
import { Loader2, User } from 'lucide-react';
import { useAnalysis } from '@/lib/context/AnalysisContext';
import Header from '@/components/Header';

const formSchema = z.object({
  level: z.string().min(1, 'Please select your work level'),
  position: z.string().min(1, 'Please select desired position'),
  cv: z.instanceof(File, { message: 'Please upload your CV file' })
});

type FormData = z.infer<typeof formSchema>;

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const router = useRouter();
  const { setAnalysisResult } = useAnalysis();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      level: '',
      position: '',
    }
  });

  const onSubmit = async (data: FormData) => {
    if (!selectedFile) {
      form.setError('cv', { message: 'Please upload your CV file' });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('cv', selectedFile);
      formData.append('position', data.position);
      formData.append('personalInfo', JSON.stringify(data));

      const response = await fetch('/api/analyze-cv', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        // Store results in context
        setAnalysisResult({
          personalInfo: {
            level: data.level,
            position: data.position
          },
          suggestions: result.suggestions,
          aiFeedback: result.aiFeedback
        });
        
        // Navigate to courses page
        router.push('/courses');
      } else {
        alert(result.error || 'An error occurred');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Skills to Improve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your CV and get personalized course recommendations for your desired position
          </p>
        </div>

        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <User className="mr-3 h-6 w-6" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="level"
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Work Level *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl className='w-full'>
                            <SelectTrigger className='w-full'>
                              <SelectValue placeholder="Select your level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="intern">Intern</SelectItem>
                            <SelectItem value="fresher">Fresher</SelectItem>
                            <SelectItem value="junior">Junior</SelectItem>
                            <SelectItem value="middle">Middle</SelectItem>
                            <SelectItem value="senior">Senior</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem className='w-full'>
                        <FormLabel>Desired Position *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl className='w-full'>
                            <SelectTrigger className='w-full'>
                              <SelectValue placeholder="Select position" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {jobPositions.map((position) => (
                              <SelectItem key={position.value} value={position.value}>
                                {position.label} - {position.level} ({position.salary})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="mt-8">
                  <Label className="text-base font-medium mb-4 block">
                    Upload CV *
                  </Label>
                  <CVUpload 
                    onFileSelect={(file) => {
                      setSelectedFile(file);
                      if (file) {
                        form.setValue('cv', file);
                        form.clearErrors('cv');
                      }
                    }}
                    error={form.formState.errors.cv?.message}
                  />
                </div>

                <div className="pt-6 border-t">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full md:w-auto px-8 py-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Analyzing CV...
                      </>
                    ) : (
                      'Analyze CV'
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
