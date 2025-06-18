
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TBDigital = () => {
  const services = [
    {
      title: "Digital Marketing",
      description: "Comprehensive online marketing strategies to boost your brand visibility",
      icon: "📱",
      details: ["Social media management", "SEO optimization", "PPC campaigns", "Analytics & reporting"]
    },
    {
      title: "Content Creation",
      description: "Engaging content that tells your brand story and connects with your audience",
      icon: "✍️",
      details: ["Blog writing", "Video production", "Graphic design", "Content strategy"]
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites that deliver exceptional user experiences",
      icon: "💻",
      details: ["Responsive design", "E-commerce solutions", "CMS development", "Performance optimization"]
    },
    {
      title: "Brand Identity",
      description: "Creating memorable brand identities that make lasting impressions",
      icon: "🎨",
      details: ["Logo design", "Brand guidelines", "Visual identity", "Brand positioning"]
    }
  ];

  const whyChooseUs = [
    {
      title: "Creative Excellence",
      description: "Innovative designs and strategies that set your brand apart from the competition",
      icon: "🌟"
    },
    {
      title: "Cost-Effective",
      description: "Premium quality services at competitive prices that deliver maximum ROI",
      icon: "💰"
    },
    {
      title: "Youth-Led Team",
      description: "Fresh perspectives and cutting-edge approaches from our dynamic young team",
      icon: "🚀"
    },
    {
      title: "Results-Driven",  
      description: "Data-backed strategies focused on achieving measurable business outcomes",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6">
            TB Digital
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your digital presence with our comprehensive marketing, branding, 
            and web development services designed to elevate your business
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#2c3e50] mb-6 text-center">
              Digital Transformation Made Simple
            </h2>
            <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
              <p className="text-lg">
                TB Digital specializes in helping businesses navigate the digital landscape with 
                confidence. We combine creative excellence with strategic thinking to deliver 
                digital solutions that not only look great but also drive real business results.
              </p>
              <p>
                From startups looking to establish their online presence to established companies 
                ready to take their digital marketing to the next level, we provide tailored 
                solutions that fit your unique needs and budget.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">
            Our Digital Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-t-4 border-[#f1c40f]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div>
                      <CardTitle className="text-xl text-[#2c3e50]">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 text-lg">
                    {service.description}
                  </CardDescription>
                  <div className="grid grid-cols-2 gap-2">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#f1c40f] rounded-full"></div>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">
            Why Choose TB Digital?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-t-4 border-[#27ae60]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{reason.icon}</div>
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

        {/* Process */}
        <section className="mb-16">
          <div className="bg-[#2c3e50] text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Digital Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Discovery", desc: "Understanding your goals" },
                { step: "2", title: "Strategy", desc: "Planning the approach" },
                { step: "3", title: "Design", desc: "Creating visual concepts" },
                { step: "4", title: "Develop", desc: "Building the solution" },
                { step: "5", title: "Launch", desc: "Going live and optimizing" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#f1c40f] text-[#2c3e50] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-gray-300 text-sm">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">
            Our Work Speaks for Itself
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Brand Identities", count: "50+", desc: "Unique brands created" },
                { title: "Websites Launched", count: "100+", desc: "Successful projects" },
                { title: "Marketing Campaigns", count: "200+", desc: "Campaigns executed" }
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-[#27ae60] mb-2">{stat.count}</div>
                  <div className="text-lg font-semibold text-[#2c3e50] mb-1">{stat.title}</div>
                  <div className="text-sm text-gray-600">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#f1c40f] to-[#27ae60] text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create something amazing together that drives real results for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-white text-[#2c3e50] hover:bg-gray-100"
              >
                <Link to="/contact">
                  Request Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#2c3e50]"
              >
                <Link to="/contact">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TBDigital;
