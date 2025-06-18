
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TBSolutions = () => {
  const services = [
    {
      title: "Academic Projects",
      description: "Comprehensive project assistance for students across all engineering disciplines",
      icon: "🎓",
      details: ["Final year projects", "Mini projects", "Research assistance", "Documentation support"]
    },
    {
      title: "Industrial Projects", 
      description: "Advanced automation and IoT solutions for modern industries",
      icon: "🏭",
      details: ["Process automation", "Quality control systems", "Monitoring solutions", "Custom software"]
    },
    {
      title: "Electronics Design",
      description: "Circuit design, PCB development, and embedded system solutions",
      icon: "⚡",
      details: ["PCB design", "Circuit analysis", "Component selection", "Prototyping"]
    },
    {
      title: "IoT Solutions",
      description: "Connected devices and smart systems for modern applications",
      icon: "🌐",
      details: ["Sensor networks", "Data analytics", "Cloud integration", "Mobile apps"]
    }
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

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-t-4 border-[#27ae60]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl text-[#2c3e50]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-[#27ae60] rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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
                <Link to="/contact">
                  Order Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#2c3e50]"
              >
                <Link to="/contact">
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
