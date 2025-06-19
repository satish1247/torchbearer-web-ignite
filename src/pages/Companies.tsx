
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Companies = () => {
  const companies = [
    {
      title: "TB Academy",
      subtitle: "YouTube Learning Platform",
      description: "Comprehensive educational content and skill development through engaging video tutorials, courses, and interactive learning experiences. Join thousands of learners on their journey to mastery.",
      features: [
        "High-quality video tutorials",
        "Structured learning paths", 
        "Community support",
        "Regular updates and new content"
      ],
      link: "/tb-academy",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-[#3498db]"
    },
    {
      title: "TB Solutions",
      subtitle: "Project Development Services",
      description: "End-to-end project development for students and industries, specializing in electronics, automation, IoT, and cutting-edge technology solutions that solve real-world problems.",
      features: [
        "Academic project assistance",
        "Industrial automation solutions",
        "IoT and embedded systems",
        "Electronics design and development"
      ],
      link: "/tb-solutions",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-[#27ae60]"
    },
    {
      title: "TB Digital",
      subtitle: "Digital Marketing & Branding",
      description: "Transform your digital presence with our comprehensive marketing, content creation, web development, and branding services designed to elevate your business in the digital landscape.",
      features: [
        "Digital marketing strategies",
        "Content creation and management",
        "Web development and design",
        "Brand identity and positioning"
      ],
      link: "/tb-digital",
      bgColor: "from-yellow-50 to-yellow-100",
      borderColor: "border-[#f1c40f]"
    }
  ];

  const futureCompanies = [
    {
      title: "TB Robotics",
      icon: "🚀",
      description: "A robotics-focused division aiming to build intelligent machines, automation bots, and smart surveillance systems.",
      color: "text-purple-600"
    },
    {
      title: "TB AI Lab",
      icon: "🧠",
      description: "An AI-first innovation lab focused on creating personal avatars, assistant tools, and next-gen AI applications for ethical use.",
      color: "text-indigo-600"
    },
    {
      title: "TB Tech Ventures",
      icon: "🛰️",
      description: "A tech incubator to support student-led startups, future technology prototypes, and research-driven innovation.",
      color: "text-cyan-600"
    },
    {
      title: "TB Insurance",
      icon: "🛡️",
      description: "A future insurance company offering protection for companies and individuals affected by AI and robotics — ensuring ethical and safe use of advanced tech.",
      color: "text-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6">
            Our Companies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three specialized divisions united by a common mission to light the future 
            through innovation, education, and digital transformation
          </p>
        </div>

        {/* Current Companies Grid */}
        <div className="space-y-12 mb-20">
          {companies.map((company, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 ${company.borderColor} animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`bg-gradient-to-r ${company.bgColor} p-8`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <CardHeader className="p-0">
                      <CardTitle className="text-3xl font-bold text-[#2c3e50] mb-2">
                        {company.title}
                      </CardTitle>
                      <div className="text-lg font-semibold text-[#27ae60] mb-4">
                        {company.subtitle}
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <CardDescription className="text-gray-700 text-lg mb-6 leading-relaxed">
                        {company.description}
                      </CardDescription>
                      <Button 
                        asChild 
                        size="lg"
                        className="bg-[#27ae60] hover:bg-green-600 text-white"
                      >
                        <Link to={company.link}>
                          Learn More <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-[#2c3e50] text-lg mb-4">Key Features:</h4>
                    {company.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center space-x-3 bg-white/70 p-3 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-[#27ae60] rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Future Companies Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
              Future Companies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Upcoming divisions that will expand our vision to transform the world through 
              cutting-edge technology and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {futureCompanies.map((company, index) => (
              <Card 
                key={index} 
                className="relative bg-white/60 border-2 border-dashed border-gray-300 hover:border-gray-400 hover:bg-white/80 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-gray-200 text-gray-600 font-semibold">
                    Coming Soon
                  </Badge>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-3xl">{company.icon}</span>
                    <CardTitle className={`text-xl font-bold ${company.color}`}>
                      {company.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {company.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-[#27ae60] to-[#3498db] text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our companies can help you achieve your goals
          </p>
          <Button 
            asChild 
            size="lg"
            variant="secondary"
            className="bg-white text-[#2c3e50] hover:bg-gray-100"
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Companies;
