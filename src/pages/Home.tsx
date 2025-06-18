
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const companies = [
    {
      title: "TB Academy",
      description: "YouTube-based learning platform providing quality education and skill development for students and professionals.",
      link: "/tb-academy",
      color: "border-[#3498db]"
    },
    {
      title: "TB Solutions",
      description: "Academic and industrial project development services focusing on electronics, automation, and IoT solutions.",
      link: "/tb-solutions",
      color: "border-[#27ae60]"
    },
    {
      title: "TB Digital",
      description: "Comprehensive digital marketing and branding services to transform your online presence and reach.",
      link: "/tb-digital",
      color: "border-[#f1c40f]"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#fdfdfd] via-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 animate-fade-in">
              <img 
                src="/lovable-uploads/020b5ff9-8f5e-4ede-b301-82eac17e955c.png" 
                alt="Torch Bearer Logo" 
                className="h-32 w-auto mx-auto mb-6"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#2c3e50] mb-6 animate-fade-in">
              TORCH BEARER
            </h1>
            <p className="text-2xl md:text-3xl text-[#27ae60] font-semibold mb-8 animate-fade-in">
              Lightning the future, Transforming the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#27ae60] hover:bg-green-600 text-white px-8 py-3 text-lg"
              >
                <Link to="/companies">
                  Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-[#27ae60] text-[#27ae60] hover:bg-[#27ae60] hover:text-white px-8 py-3 text-lg"
              >
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Torch Bearer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-8">
            About Torch Bearer
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Torch Bearer is a visionary startup dedicated to illuminating the path to the future through 
            innovation, technology, and education. We believe in transforming the world by empowering 
            individuals and organizations with cutting-edge solutions, comprehensive learning platforms, 
            and strategic digital transformation services. Our mission is to be the guiding light that 
            helps businesses and learners navigate the rapidly evolving technological landscape.
          </p>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4">
              Our Companies
            </h2>
            <p className="text-lg text-gray-600">
              Three specialized divisions working together to light the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-all duration-300 hover:scale-105 border-t-4 ${company.color} animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#2c3e50]">
                    {company.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6">
                    {company.description}
                  </CardDescription>
                  <Button 
                    asChild 
                    className="w-full bg-[#27ae60] hover:bg-green-600"
                  >
                    <Link to={company.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
