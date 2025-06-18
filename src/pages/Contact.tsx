
import { useState } from 'react';
import { Youtube, Linkedin, Instagram, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Store in Supabase
      const { error: dbError } = await supabase
        .from('tb_general_contacts')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone || null,
          subject: formData.subject,
          message: formData.message
        });

      if (dbError) throw dbError;

      // Send email notification
      await supabase.functions.invoke('send-general-contact-notification', {
        body: formData
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "http://linkedin.com/in/satyanarayanaganisetti", 
      color: "hover:text-blue-600" 
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      url: "https://youtube.com/@torchbearer-tb02?si=jIIyz-TkssBknkt7", 
      color: "hover:text-red-600" 
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://www.instagram.com/torchbearer.inc?igsh=dWhpZHVza3MyYWkw&utm_source=qr", 
      color: "hover:text-pink-600" 
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6">
            Get In Touch with Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you're a student, client, or collaborator — reach out anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-lg border-t-4 border-[#27ae60]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2c3e50] flex items-center">
                  <Send className="mr-2 h-6 w-6 text-[#27ae60]" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#27ae60]"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#27ae60]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number (optional)"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#27ae60]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#27ae60]"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#27ae60]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#27ae60] hover:bg-green-600 text-white"
                    size="lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-[#2c3e50] mb-6">
                Contact Information
              </h2>
              <Card className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📧</div>
                    <div>
                      <h3 className="font-semibold text-[#2c3e50]">Email</h3>
                      <a 
                        href="mailto:torchbearer.startup@gmail.com"
                        className="text-[#27ae60] hover:text-green-600 transition-colors"
                      >
                        torchbearer.startup@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold text-[#2c3e50] mb-6">
                Follow Us
              </h2>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border-2 border-gray-200 text-gray-600 transition-all duration-300 hover:shadow-xl hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <Card className="bg-gradient-to-r from-[#27ae60] to-[#f1c40f] text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="mb-4 opacity-90">
                  Whether you need academic project help, industrial solutions, 
                  digital marketing services, or want to learn new skills, we're here to help.
                </p>
                <div className="text-sm opacity-75">
                  <p>🕒 Response Time: Within 24 hours</p>
                  <p>💬 Languages: English, Hindi</p>
                  <p>🌍 Services: Available Globally</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#2c3e50] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Let's Light the Future Together
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Join hundreds of satisfied clients who have transformed their ideas into reality with Torch Bearer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-[#27ae60] hover:bg-green-600"
              >
                <a href="mailto:torchbearer.startup@gmail.com">
                  Send Email
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#2c3e50]"
              >
                <a href="http://linkedin.com/in/satyanarayanaganisetti" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
