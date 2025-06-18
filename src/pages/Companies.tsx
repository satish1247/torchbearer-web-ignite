
import { Link } from 'react-router-dom';
import { ArrowRight, Youtube, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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

  const learningTopics = [
    "Innovative Tech & Engineering Projects",
    "School & College Curriculum Support",
    "Startup & Entrepreneurship Tips",
    "Robotics, AI, and Automation Tutorials",
    "Personal Growth & Career Guidance"
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

        {/* TB Academy Featured Section */}
        <div className="mb-20">
          <Card className="overflow-hidden border-l-4 border-[#f1c40f] shadow-2xl bg-gradient-to-br from-yellow-50 via-white to-orange-50">
            <div className="p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="mb-6">
                  {/* TB Academy Logo */}
                  <div className="w-32 h-32 mx-auto mb-4">
                    <img 
                      src="/lovable-uploads/516598c1-bf9e-469a-a066-71e757c9b359.png" 
                      alt="TB Academy Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4">
                  TB Academy – Learn. Innovate. Lead.
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#f1c40f] mb-6">
                  A Future-Driven Learning Platform from Torch Bearer
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  "TB Academy is the educational wing of Torch Bearer — a YouTube-based platform built to ignite curiosity, empower knowledge, and inspire innovation among students. From school-level concepts to college projects, from technical tutorials to entrepreneurial insights, TB Academy is your gateway to futuristic learning."
                </p>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Learning Topics */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-2xl font-bold text-[#2c3e50] mb-6 flex items-center">
                      <span className="mr-2">💡</span> What You'll Learn:
                    </h4>
                    <div className="space-y-4">
                      {learningTopics.map((topic, index) => (
                        <div 
                          key={index}
                          className="flex items-start space-x-4 bg-white/70 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="w-3 h-3 bg-[#f1c40f] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-white/80 p-6 rounded-lg border-l-4 border-[#27ae60] shadow-sm">
                    <p className="text-lg italic text-gray-700 mb-2">
                      "Education is not preparation for life; education is life itself."
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">– John Dewey</p>
                  </div>
                </div>

                {/* Right Column - Actions & Media */}
                <div className="space-y-8">
                  {/* YouTube Button */}
                  <div className="text-center">
                    <Button 
                      asChild 
                      size="lg"
                      className="bg-[#f1c40f] hover:bg-yellow-500 text-white text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <a 
                        href="https://youtube.com/@torchbearer-tb02?si=An8dONrqITTkTT-K" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3"
                      >
                        <Youtube className="h-6 w-6" />
                        <span>🎥 Visit Our Channel</span>
                      </a>
                    </Button>
                  </div>

                  {/* QR Code Section */}
                  <div className="text-center bg-white p-6 rounded-lg shadow-md">
                    <div className="w-48 h-48 mx-auto rounded-lg mb-4">
                      <img 
                        src="/lovable-uploads/5255d211-03c3-44e4-9301-5f08b037629d.png" 
                        alt="QR Code for TB Academy YouTube Channel" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                      📲 Scan to Visit Our YouTube Channel
                    </p>
                  </div>

                  {/* Featured Video Section */}
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h5 className="text-lg font-semibold text-[#2c3e50] mb-4 flex items-center">
                      <Play className="mr-2 h-5 w-5" />
                      🎬 Featured Learning Video
                    </h5>
                    <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Play className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Video will be embedded here</p>
                      </div>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <div className="text-center">
                    <Button 
                      asChild 
                      variant="outline"
                      size="lg"
                      className="border-[#27ae60] text-[#27ae60] hover:bg-[#27ae60] hover:text-white"
                    >
                      <Link to="/tb-academy">
                        Learn More About TB Academy <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Companies Grid */}
        <div className="space-y-12">
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

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-[#27ae60] to-[#3498db] text-white p-12 rounded-lg">
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
