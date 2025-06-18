
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
import { Send } from 'lucide-react';

const digitalInquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  serviceRequired: z.string().min(1, 'Please specify the service you need'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type DigitalInquiryFormData = z.infer<typeof digitalInquirySchema>;

const TBDigitalContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<DigitalInquiryFormData>({
    resolver: zodResolver(digitalInquirySchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      serviceRequired: '',
      message: '',
    },
  });

  const onSubmit = async (data: DigitalInquiryFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('tb_digital_inquiries')
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service_required: data.serviceRequired,
          message: data.message,
        });

      if (error) throw error;

      // Send email notification
      await fetch('/api/send-digital-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      toast({
        title: "Inquiry Submitted Successfully!",
        description: "Thank you for your interest in TB Digital! We'll get back to you within 24 hours.",
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting digital inquiry:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="animate-fade-in hover:shadow-lg transition-all duration-300" id="contact">
      <CardHeader>
        <CardTitle className="text-2xl text-[#2c3e50] flex items-center">
          <Send className="mr-2 h-6 w-6 text-[#27ae60]" />
          Contact Us
        </CardTitle>
        <CardDescription>
          Tell us about your digital marketing needs and we'll create a custom solution for you
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
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
              name="phone"
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
              name="serviceRequired"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Required *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Social Media Management, Website Design, SEO..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us more about your requirements, timeline, and goals..."
                      className="min-h-[120px]"
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
              className="w-full bg-[#27ae60] hover:bg-green-600 text-white font-semibold"
            >
              {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TBDigitalContactForm;
