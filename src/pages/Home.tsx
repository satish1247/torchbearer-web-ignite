
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Home = () => {
  const aboutSection = useScrollAnimation();
  const companiesSection = useScrollAnimation();
  const visionSection = useScrollAnimation();

  const companies = [
    {
      title: "TB Academy",
      description: "YouTube-based learning platform providing quality education and skill development for students and professionals.",
      link: "/tb-academy",
      color: "border-[#3498db]",
      delay: "0s"
    },
    {
      title: "TB Solutions",
      description: "Academic and industrial project development services focusing on electronics, automation, and IoT solutions.",
      link: "/tb-solutions",
      color: "border-[#27ae60]",
      delay: "0.2s"
    },
    {
      title: "TB Digital",
      description: "Comprehensive digital marketing and branding services to transform your online presence and reach.",
      link: "/tb-digital",
      color: "border-[#f1c40f]",
      delay: "0.4s"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#fdfdfd] via-green-50 to-blue-50 py-20 overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/30 to-transparent animate-glow-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/020b5ff9-8f5e-4ede-b301-82eac17e955c.png" 
                alt="Torch Bearer Logo" 
                className="h-48 md:h-56 w-auto mx-auto mb-6 animate-logo-zoom"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#2c3e50] mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              TORCH BEARER
            </h1>
            <p className="text-2xl md:text-4xl text-[#27ae60] font-semibold mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Lightning the future, Transforming the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Button 
                asChild 
                size="lg" 
                className="bg-[#27ae60] hover:bg-green-600 text-white px-8 py-3 text-lg transition-all duration-300 hover:animate-bounce-gentle hover:shadow-lg hover:shadow-green-500/25"
              >
                <Link to="/companies">
                  Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-[#27ae60] text-[#27ae60] hover:bg-[#27ae60] hover:text-white px-8 py-3 text-lg transition-all duration-300 hover:animate-bounce-gentle hover:shadow-lg hover:shadow-green-500/25"
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
        <div 
          ref={aboutSection.elementRef}
          className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            aboutSection.isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}
        >
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

      {/* Vision Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div 
          ref={visionSection.elementRef}
          className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
            visionSection.isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3e50] mb-8">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            To be the leading catalyst in the digital transformation era, empowering the next generation 
            of innovators and entrepreneurs through technology, education, and sustainable solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">Innovation</h3>
              <p className="text-gray-600">Pioneering solutions for tomorrow's challenges</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">Education</h3>
              <p className="text-gray-600">Empowering minds through quality learning</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-[#2c3e50] mb-2">Sustainability</h3>
              <p className="text-gray-600">Building a greener, more sustainable future</p>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={companiesSection.elementRef}
            className={`text-center mb-12 transition-all duration-1000 ${
              companiesSection.isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
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
                className={`group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-t-4 ${company.color} bg-white
                  ${companiesSection.isVisible ? 'animate-slide-up' : 'opacity-0'}
                  hover:border-t-8 hover:bg-gradient-to-br hover:from-white hover:to-green-50/30`}
                style={{ 
                  animationDelay: companiesSection.isVisible ? company.delay : '0s'
                }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/5 to-green-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl font-bold text-[#2c3e50] group-hover:text-[#27ae60] transition-colors duration-300">
                    {company.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {company.description}
                  </CardDescription>
                  <Button 
                    asChild 
                    className="w-full bg-[#27ae60] hover:bg-green-600 transition-all duration-300 hover:animate-bounce-gentle hover:shadow-lg hover:shadow-green-500/25"
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
