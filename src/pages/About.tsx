
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
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
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2c3e50] mb-6 text-center">
              Meet Our Founder
            </h2>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#27ae60] to-[#3498db] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                S
              </div>
              <h3 className="text-2xl font-bold text-[#2c3e50] mb-4">Satish</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Visionary entrepreneur and technology enthusiast, Satish founded Torch Bearer with a mission to 
                bridge the gap between innovation and practical application. With a passion for education and 
                digital transformation, he leads our team in creating solutions that truly make a difference 
                in people's lives and businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-[#27ae60]">
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

            <Card className="border-l-4 border-[#3498db]">
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
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#2c3e50] mb-6 text-center">
              Our Story
            </h2>
            <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-4">
              <p>
                Torch Bearer was born from a simple yet powerful idea: that technology and education 
                should work hand in hand to create meaningful change. Founded with the belief that 
                innovation without practical application is just an idea, and education without 
                real-world relevance is just theory.
              </p>
              <p>
                Our journey began with a vision to create solutions that don't just exist in isolation 
                but connect, empower, and transform. From developing cutting-edge technical solutions 
                to creating educational content that reaches thousands of learners, every step of our 
                journey has been guided by our core mission.
              </p>
              <p>
                Today, through our three specialized companies - TB Academy, TB Solutions, and TB Digital - 
                we continue to light the torch of innovation, education, and transformation for 
                individuals and organizations worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-3xl font-bold text-[#2c3e50] mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle className="text-xl text-[#2c3e50]">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
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
