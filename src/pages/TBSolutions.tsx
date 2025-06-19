
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ContactForm from '@/components/ContactForm';
import ProjectInquiryForm from '@/components/ProjectInquiryForm';

const TBSolutions = () => {
  const softwareSolutions = [
    "Full Stack Web Development",
    "Frontend Development (React, Tailwind, etc.)",
    "Website Management and Hosting",
    "CMS Development (WordPress, Headless CMS, etc.)",
    "SaaS Platforms",
    "ERP, Admin Dashboards",
    "Portfolio, Business, and E-commerce Websites",
    "Mobile App UI Design (basic)"
  ];

  const hardwareSolutions = [
    "Embedded System Projects (8051, Arduino, ESP32, etc.)",
    "IoT Based Automation Projects",
    "Robotics (Surveillance, Automation, Control)",
    "Sensor-Based Industrial Models",
    "Smart Home/Office Automation Projects",
    "Academic Project Kits",
    "Microcontroller & PCB Projects",
    "Custom Automation Solutions"
  ];

  const targetAudience = [
    {
      title: "Students",
      description: "Engineering students seeking project assistance and learning opportunities",
      benefits: ["Academic excellence", "Practical skills", "Career preparation", "Expert guidance"]
    },
    {
      title: "Industries",
      description: "Companies looking for automation and technology solutions",
      benefits: ["Efficiency improvement", "Cost reduction", "Technology upgrade", "Custom solutions"]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6">
            TB Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging the gap between academic learning and industry requirements through 
            innovative project development and technology solutions
          </p>
        </div>

        {/* What We Offer Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">
            What We Offer
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            We provide both <strong>Software-Based</strong> and <strong>Hardware-Based</strong> solutions for students and industries.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Software Solutions */}
            <Card className="border-l-4 border-[#3498db] hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2c3e50] flex items-center">
                  💻 Software-Based Solutions
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Comprehensive web development and digital solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {softwareSolutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#3498db] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Hardware Solutions */}
            <Card className="border-l-4 border-[#27ae60] hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2c3e50] flex items-center">
                  ⚡ Hardware-Based Solutions
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Advanced embedded systems and automation projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {hardwareSolutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#27ae60] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              asChild 
              size="lg"
              className="bg-[#27ae60] hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg"
            >
              <Link to="#contact-forms">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Target Audience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetAudience.map((audience, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 border-l-4 border-[#3498db] animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-[#2c3e50] flex items-center">
                    {audience.title === 'Students' ? '🎓' : '🏢'} {audience.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 text-lg">
                    {audience.description}
                  </CardDescription>
                  <h4 className="font-semibold text-[#2c3e50] mb-3">Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {audience.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#27ae60] rounded-full"></div>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#2c3e50] mb-8 text-center">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Consultation", desc: "Understanding your requirements" },
                { step: "2", title: "Planning", desc: "Designing the perfect solution" },
                { step: "3", title: "Development", desc: "Building with precision" },
                { step: "4", title: "Delivery", desc: "Testing and final handover" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#27ae60] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#2c3e50] mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Forms Section */}
        <section className="mb-16" id="contact-forms">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">
            Connect With Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <ProjectInquiryForm />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-[#2c3e50] text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Bring Your Project to Life?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our experts help you create innovative solutions that make a difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-[#27ae60] hover:bg-green-600"
              >
                <Link to="#contact-forms">
                  Order Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#2c3e50]"
              >
                <Link to="#contact-forms">
                  Request a Demo
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TBSolutions;
