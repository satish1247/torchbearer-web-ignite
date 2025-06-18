
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Zap, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TBDigitalContactForm from '@/components/TBDigitalContactForm';

const TBDigital = () => {
  const services = [
    {
      title: "Social Media Management",
      description: "Complete social media strategy and content management",
      icon: "📱"
    },
    {
      title: "Logo & Design Services",
      description: "Professional logos, posters, and banner designing",
      icon: "🎨"
    },
    {
      title: "Website Design",
      description: "Custom websites and high-converting landing pages",
      icon: "💻"
    },
    {
      title: "SEO Optimization",
      description: "Search engine optimization to boost your visibility",
      icon: "🔍"
    },
    {
      title: "Video Content",
      description: "YouTube thumbnails and shorts editing services",
      icon: "🎬"
    },
    {
      title: "Content Writing",
      description: "Engaging content that converts and ranks well",
      icon: "✍️"
    },
    {
      title: "Google My Business",
      description: "Complete Google My Business setup and optimization",
      icon: "🏢"
    },
    {
      title: "Email Campaigns",
      description: "Targeted email marketing campaigns that deliver results",
      icon: "📧"
    }
  ];

  const whyChooseUs = [
    {
      title: "Affordable for Everyone",
      description: "Zero-investment digital services that don't break the bank",
      icon: CheckCircle
    },
    {
      title: "Branding Expertise",
      description: "Professional branding that makes you stand out",
      icon: Award
    },
    {
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality",
      icon: Clock
    },
    {
      title: "Torch Bearer Ecosystem",
      description: "Part of a comprehensive business growth platform",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4">
            TB Digital
          </h1>
          <p className="text-2xl text-[#27ae60] font-semibold mb-6">
            Powering Your Brand, Digitally.
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We help businesses, students, and creators grow online through smart and affordable digital marketing solutions.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg p-8">
            <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
              <p className="text-lg">
                TB Digital is the digital marketing wing of Torch Bearer. We specialize in building your online presence, 
                driving engagement, and helping you stand out in the digital world. Whether you're a startup, student entrepreneur, 
                or small business owner — our zero-investment digital services are designed to deliver high-quality results 
                without breaking the bank.
              </p>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">
            Services Offered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-t-4 border-[#f1c40f]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-lg text-[#2c3e50]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-t-4 border-[#27ae60]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <reason.icon className="w-12 h-12 text-[#27ae60] mx-auto mb-4" />
                  <CardTitle className="text-xl text-[#2c3e50]">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {reason.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#2c3e50] mb-6">
                Ready to Grow Your Digital Presence?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Let's discuss how we can help you achieve your digital marketing goals. 
                Fill out the form and we'll get back to you within 24 hours.
              </p>
              <div className="bg-[#2c3e50] text-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Started Today!</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-[#f1c40f]" />
                    <span>Free consultation call</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#27ae60]" />
                    <span>Custom strategy development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-[#f1c40f]" />
                    <span>Quick turnaround time</span>
                  </div>
                </div>
              </div>
            </div>
            <TBDigitalContactForm />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#27ae60] to-[#f1c40f] text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Transform Your Digital Presence Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join hundreds of satisfied clients who have grown their business with TB Digital
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-white text-[#2c3e50] hover:bg-gray-100"
            >
              <Link to="#contact">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TBDigital;
