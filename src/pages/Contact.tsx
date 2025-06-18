
import { useState } from 'react';
import { Youtube, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      title: "Email",
      value: "torchbearer.startup@gmail.com",
      icon: "📧",
      action: "mailto:torchbearer.startup@gmail.com"
    },
    {
      title: "WhatsApp",
      value: "+91 6303987443",
      icon: "📱",
      action: "https://wa.me/916303987443"
    }
  ];

  const socialLinks = [
    { 
      name: "YouTube", 
      icon: Youtube, 
      url: "#", 
      color: "hover:text-red-600" 
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "#", 
      color: "hover:text-blue-600" 
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "#", 
      color: "hover:text-pink-600" 
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to light the future together? Get in touch with us and let's discuss 
            how we can help transform your ideas into reality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-lg border-t-4 border-[#27ae60]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2c3e50]">
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#27ae60]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#27ae60]"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-gray-300 focus:border-[#27ae60]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#27ae60] hover:bg-green-600 text-white"
                    size="lg"
                  >
                    Send Message
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
                Get in Touch
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold text-[#2c3e50]">{info.title}</h3>
                          <a 
                            href={info.action}
                            className="text-[#27ae60] hover:text-green-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
            <Card className="bg-gradient-to-r from-[#27ae60] to-[#3498db] text-white">
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
                <a href="https://wa.me/916303987443" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
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
