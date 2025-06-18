import { Link } from 'react-router-dom';
import { ArrowRight, Youtube, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TBAcademy = () => {
  const features = [
    {
      title: "Comprehensive Courses",
      description: "Structured learning paths covering technology, programming, and practical skills",
      icon: "📚"
    },
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with real-world experience",
      icon: "👨‍🏫"
    },
    {
      title: "Interactive Learning",
      description: "Engage with content through practical examples and hands-on projects",
      icon: "🎯"
    },
    {
      title: "Community Support",
      description: "Join our Telegram group for discussions, doubt clearing, and networking",
      icon: "👥"
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
        {/* Header with Logo */}
        <div className="text-center mb-16">
          <div className="mb-8">
            {/* TB Academy Logo - Updated */}
            <div className="w-32 h-32 mx-auto mb-6">
              <img 
                src="/lovable-uploads/3fa5e839-c7b8-46e9-ad44-98a7e425f1cc.png" 
                alt="TB Academy Logo" 
                className="w-full h-full object-contain animate-logo-zoom"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6">
            TB Academy – Learn. Innovate. Lead.
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            TB Academy is the educational wing of Torch Bearer — a YouTube-based platform built to ignite curiosity, empower knowledge, and inspire innovation among students. From school-level concepts to college projects, from technical tutorials to entrepreneurial insights, TB Academy is your gateway to futuristic learning.
          </p>
          <div className="flex items-center justify-center space-x-2 text-[#27ae60]">
            <Youtube className="h-6 w-6" />
            <span className="text-lg font-semibold">YouTube Learning Platform</span>
          </div>
        </div>

        {/* What You'll Learn Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#2c3e50] mb-8 text-center flex items-center justify-center">
              <span className="mr-3">💡</span> What You'll Learn
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningTopics.map((topic, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 bg-white/70 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-3 h-3 bg-[#27ae60] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Integration & QR Code Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#f1c40f] to-[#27ae60] text-white rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - YouTube Info */}
              <div className="text-center lg:text-left">
                <Youtube className="h-16 w-16 mx-auto lg:mx-0 mb-6 text-white" />
                <h2 className="text-3xl font-bold mb-6">
                  Access Our Complete Video Library
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Dive into our extensive collection of educational videos, tutorials, and courses. 
                  All content is carefully curated and regularly updated to ensure you get the most 
                  current and relevant information.
                </p>
                <Button 
                  asChild 
                  size="lg"
                  className="bg-white text-[#2c3e50] hover:bg-gray-100 mb-4"
                >
                  <a 
                    href="https://youtube.com/@torchbearer-tb02?si=An8dONrqITTkTT-K" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3"
                  >
                    <Youtube className="h-5 w-5" />
                    <span>🎥 Visit Our Channel</span>
                  </a>
                </Button>
              </div>

              {/* Right Column - QR Code */}
              <div className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                  <div className="w-48 h-48 mx-auto rounded-lg mb-4">
                    <img 
                      src="/lovable-uploads/85db579a-9e89-490f-a6ef-43b7e7b2e0d2.png" 
                      alt="QR Code for TB Academy YouTube Channel" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    📲 Scan to Visit Our YouTube Channel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">
            Why Choose TB Academy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-t-4 border-[#3498db]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl text-[#2c3e50]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[#2c3e50] mb-6 flex items-center justify-center">
              <Play className="mr-3 h-6 w-6" />
              🎬 Featured Learning Video
            </h2>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center max-w-4xl mx-auto">
              <div className="text-center">
                <Play className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Featured video will be embedded here</p>
                <p className="text-sm text-gray-400 mt-2">Coming soon - Subscribe to our channel for updates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-l-4 border-[#27ae60]">
            <div className="text-center">
              <div className="text-6xl mb-4">🧠</div>
              <blockquote className="text-2xl italic text-gray-700 mb-4 font-light">
                "Education is not preparation for life; education is life itself."
              </blockquote>
              <p className="text-lg text-gray-600 font-semibold">– John Dewey</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#27ae60] to-[#3498db] text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Start Your Learning Journey Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of learners who are transforming their careers with TB Academy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-white text-[#2c3e50] hover:bg-gray-100"
              >
                <a 
                  href="https://youtube.com/@torchbearer-tb02?si=An8dONrqITTkTT-K" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Youtube className="mr-2 h-5 w-5" />
                  Watch on YouTube
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#2c3e50]"
              >
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TBAcademy;
