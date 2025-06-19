
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const founderSection = useScrollAnimation(0.3);
  const valuesSection = useScrollAnimation(0.2);
  const missionSection = useScrollAnimation(0.2);
  const storySection = useScrollAnimation(0.2);

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to create groundbreaking solutions.",
      icon: "💡"
    },
    {
      title: "Practicality",
      description: "Our solutions are designed to be practical, efficient, and immediately applicable in real-world scenarios.",
      icon: "🔧"
    },
    {
      title: "Education",
      description: "We believe in the power of knowledge sharing and continuous learning for personal and professional growth.",
      icon: "📚"
    },
    {
      title: "Empowerment",
      description: "We empower individuals and organizations to achieve their full potential through technology and education.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-6">
            About Torch Bearer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lighting the path to innovation, education, and digital transformation
          </p>
        </div>

        {/* Founder Section */}
        <section className="mb-20">
          <div 
            ref={founderSection.elementRef}
            className={`transition-all duration-1000 ${
              founderSection.isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">
              About the Founder
            </h2>
            
            <div className="bg-gradient-to-br from-white to-green-50/30 rounded-2xl shadow-xl p-8 md:p-12 max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Photo Section */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block">
                    <img 
                      src="/lovable-uploads/32b733e8-c488-4e1e-a0d3-9aa6660f05e1.png"
                      alt="Ganisetti Veera Venkata Satyanarayana (Satish)"
                      className="w-80 h-80 object-cover rounded-2xl shadow-2xl mx-auto lg:mx-0 hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-[#27ae60] text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                      Founder & CEO
                    </div>
                  </div>
                  
                  {/* Company Description - moved here to fill the space */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#27ae60]/10 to-[#3498db]/10 rounded-lg border-l-4 border-[#27ae60]">
                    <p className="text-lg text-gray-700 font-medium italic">
                      "Torch Bearer is a visionary company dedicated to empowering innovation across education, automation, and digital transformation."
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#2c3e50] mb-2">
                      Ganisetti Veera Venkata Satyanarayana
                    </h3>
                    <p className="text-xl text-[#27ae60] font-semibold mb-4">(Satish)</p>
                    <p className="text-lg text-gray-600 italic mb-6">
                      "Lighting the future, Transforming the world"
                    </p>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Satish is an aspiring engineer, innovator, and future tech entrepreneur from 
                      Yanam, India. With a strong foundation in Electronics and Communication Engineering 
                      and currently pursuing a B.Tech in Robotics and Automation, Satish leads Torch 
                      Bearer with a vision to make futuristic technology accessible and impactful.
                    </p>
                    
                    <p>
                      He founded Torch Bearer to build an ecosystem of innovative sub-companies that 
                      mirror the spirit of Tata — delivering trusted quality across every direction:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#3498db]">
                        <h4 className="font-semibold text-[#2c3e50] mb-2">TB Academy</h4>
                        <p className="text-sm text-gray-600">YouTube-based learning platform for students</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#27ae60]">
                        <h4 className="font-semibold text-[#2c3e50] mb-2">TB Solutions</h4>
                        <p className="text-sm text-gray-600">Project-building services for students & industries</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#f1c40f]">
                        <h4 className="font-semibold text-[#2c3e50] mb-2">TB Digital</h4>
                        <p className="text-sm text-gray-600">Creative digital marketing agency</p>
                      </div>
                    </div>

                    <p>
                      Satish believes that transforming the world doesn't require big money — just 
                      clear vision, bold thinking, and consistent action. His mission is to empower 
                      young innovators and build tech that improves human life.
                    </p>
                  </div>

                  {/* Quote */}
                  <div className="bg-[#27ae60]/10 border-l-4 border-[#27ae60] p-6 rounded-r-lg">
                    <p className="text-lg italic text-[#2c3e50] font-medium">
                      "I believe in building not just products, but possibilities that transform human life."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section 
          ref={missionSection.elementRef}
          className={`mb-16 transition-all duration-1000 ${
            missionSection.isVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-[#27ae60] hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2c3e50] flex items-center">
                  🎯 Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To empower individuals and organizations through innovative technology solutions, 
                  comprehensive education platforms, and strategic digital transformation services. 
                  We strive to be the catalyst that ignites progress and lights the way to a better future.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-[#3498db] hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2c3e50] flex items-center">
                  🔮 Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading torch bearer in the global technology and education landscape, 
                  illuminating paths to innovation and transformation. We envision a world where 
                  technology serves humanity and education empowers every individual to reach their potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Company Story */}
        <section 
          ref={storySection.elementRef}
          className={`mb-16 transition-all duration-1000 ${
            storySection.isVisible ? 'animate-slide-in-right' : 'opacity-0'
          }`}
        >
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#2c3e50] mb-8 text-center">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-6">
              <p className="text-lg">
                Torch Bearer was born from a simple yet powerful idea: that technology and education 
                should work hand in hand to create meaningful change. Founded with the belief that 
                innovation without practical application is just an idea, and education without 
                real-world relevance is just theory.
              </p>
              <p className="text-lg">
                Our journey began with a vision to create solutions that don't just exist in isolation 
                but connect, empower, and transform. From developing cutting-edge technical solutions 
                to creating educational content that reaches thousands of learners, every step of our 
                journey has been guided by our core mission.
              </p>
              <p className="text-lg">
                Today, through our three specialized companies - TB Academy, TB Solutions, and TB Digital - 
                we continue to light the torch of innovation, education, and transformation for 
                individuals and organizations worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section 
          ref={valuesSection.elementRef}
          className={`transition-all duration-1000 ${
            valuesSection.isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-t-4 border-[#27ae60]"
                style={{ 
                  animationDelay: valuesSection.isVisible ? `${index * 0.1}s` : '0s'
                }}
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-xl text-[#2c3e50]">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
