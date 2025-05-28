import { Code, LineChart, Layout, Globe, Layers, Database, Search, Zap } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8 text-indigo-600" />,
    title: 'Custom Web Development',
    description: 'Bespoke websites and web applications tailored to your specific business needs and objectives.'
  },
  {
    icon: <LineChart className="h-8 w-8 text-indigo-600" />,
    title: 'Digital Strategy',
    description: 'Comprehensive planning and roadmapping to align your digital presence with business goals.'
  },
  {
    icon: <Layout className="h-8 w-8 text-indigo-600" />,
    title: 'UI/UX Design',
    description: 'User-centered design focused on creating intuitive and engaging digital experiences.'
  },
  // {
  //   icon: <Globe className="h-8 w-8 text-indigo-600" />,
  //   title: 'E-commerce Solutions',
  //   description: 'Scalable online stores that drive sales and provide seamless shopping experiences.'
  // },
  // {
  //   icon: <Layers className="h-8 w-8 text-indigo-600" />,
  //   title: 'Frontend Development',
  //   description: 'Responsive and interactive user interfaces built with modern frameworks and technologies.'
  // },
  // {
  //   icon: <Database className="h-8 w-8 text-indigo-600" />,
  //   title: 'Backend Development',
  //   description: 'Robust server-side applications and APIs that power your digital products.'
  // },
  // {
  //   icon: <Search className="h-8 w-8 text-indigo-600" />,
  //   title: 'SEO Optimization',
  //   description: 'Strategies to improve your search engine rankings and drive organic traffic.'
  // },
  {
    icon: <Zap className="h-8 w-8 text-indigo-600" />,
    title: 'Performance Optimization',
    description: 'Fine-tuning your web applications for speed, efficiency, and better user experience.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of web development services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-indigo-100 group"
            >
              <div className="p-4 bg-indigo-50 rounded-lg inline-block mb-4 group-hover:bg-indigo-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;