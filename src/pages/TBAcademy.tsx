
import { Link } from 'react-router-dom';
import { ArrowRight, Youtube } from 'lucide-react';
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

  const courseCategories = [
    {
      title: "Programming & Development",
      topics: ["Python Programming", "Web Development", "Mobile App Development", "Software Engineering"]
    },
    {
      title: "Electronics & IoT",
      topics: ["Arduino Projects", "Raspberry Pi", "IoT Solutions", "Circuit Design"]
    },
    {
      title: "Digital Skills",
      topics: ["Digital Marketing", "Content Creation", "Online Business", "Tech Entrepreneurship"]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6">
            TB Academy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your gateway to knowledge and skill development through engaging YouTube-based 
            learning experiences designed for the modern learner
          </p>
          <div className="flex items-center justify-center space-x-2 text-[#27ae60]">
            <Youtube className="h-6 w-6" />
            <span className="text-lg font-semibold">YouTube Learning Platform</span>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#2c3e50] mb-6 text-center">
              Learn. Grow. Transform.
            </h2>
            <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
              <p className="text-lg">
                TB Academy revolutionizes online education by providing high-quality, accessible learning 
                content through YouTube. Our platform combines the power of visual learning with 
                structured curriculum design to deliver an exceptional educational experience.
              </p>
              <p>
                Whether you're a student looking to enhance your skills, a professional seeking to 
                stay updated with the latest technologies, or an entrepreneur wanting to learn new 
                business strategies, TB Academy has something valuable for everyone.
              </p>
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

        {/* Course Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">
            Course Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courseCategories.map((category, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 border-l-4 border-[#27ae60] animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-[#2c3e50]">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#27ae60] rounded-full"></div>
                        <span className="text-gray-600">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* YouTube Integration */}
        <section className="mb-16">
          <div className="bg-[#2c3e50] text-white rounded-lg p-8">
            <div className="text-center">
              <Youtube className="h-16 w-16 mx-auto mb-6 text-[#f1c40f]" />
              <h2 className="text-3xl font-bold mb-6">
                Access Our Complete Video Library
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Dive into our extensive collection of educational videos, tutorials, and courses. 
                All content is carefully curated and regularly updated to ensure you get the most 
                current and relevant information.
              </p>
              <div className="bg-gray-800 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
                <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Youtube className="h-12 w-12 mx-auto mb-4 text-[#f1c40f]" />
                    <p className="text-gray-300">YouTube Channel Preview</p>
                    <p className="text-sm text-gray-400 mt-2">Subscribe to get access to all our content</p>
                  </div>
                </div>
              </div>
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
                <a href="#" target="_blank" rel="noopener noreferrer">
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
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Join Telegram Group <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TBAcademy;
