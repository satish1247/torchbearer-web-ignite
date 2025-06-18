
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Lightbulb } from 'lucide-react';

const projectSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  projectTitle: z.string().min(5, 'Project title must be at least 5 characters'),
  projectDescription: z.string().min(20, 'Project description must be at least 20 characters'),
});

type ProjectFormData = z.infer<typeof projectSchema>;

const ProjectInquiryForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      projectTitle: '',
      projectDescription: '',
    },
  });

  const onSubmit = async (data: ProjectFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('tb_project_inquiries')
        .insert({
          full_name: data.fullName,
          email: data.email,
          phone_number: data.phoneNumber,
          project_title: data.projectTitle,
          project_description: data.projectDescription,
        });

      if (error) throw error;

      // Send email notification
      await fetch('/api/send-project-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      toast({
        title: "Project Inquiry Submitted!",
        description: "Thanks! Your project inquiry has been received. Our team will review it and get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting project inquiry:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your project inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="animate-fade-in hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl text-[#2c3e50] flex items-center">
          <Lightbulb className="mr-2 h-6 w-6 text-[#f1c40f]" />
          Describe Your Project
        </CardTitle>
        <CardDescription>
          Tell us about your project requirements and we'll help bring it to life
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Title *</FormLabel>
                  <FormControl>
                    <Input placeholder="Give your project a title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Detailed Project Description *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe your project requirements, objectives, timeline, and any specific features you need..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#f1c40f] hover:bg-yellow-500 text-[#2c3e50] font-semibold"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Project Inquiry'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProjectInquiryForm;
