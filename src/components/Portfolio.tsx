import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Web Apps', 'E-commerce', 'Corporate', 'Landing Pages'];

const projects = [
  {
    id: 1,
    title: 'TechStream Platform',
    category: 'Web Apps',
    image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A comprehensive SaaS platform for tech professionals with real-time collaboration features.',
    link: '#'
  },
  {
    id: 2,
    title: 'LuxeWear E-commerce',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'High-performance online store with advanced product filtering and seamless checkout experience.',
    link: '#'
  },
  {
    id: 3,
    title: 'FinGroup Corporate Site',
    category: 'Corporate',
    image: 'https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Modern corporate website for a financial services group with interactive data visualizations.',
    link: '#'
  },
  {
    id: 4,
    title: 'EcoSolution Product Launch',
    category: 'Landing Pages',
    image: 'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'High-converting landing page for an eco-friendly product launch with animated features showcase.',
    link: '#'
  },
  {
    id: 5,
    title: 'HealthTrack App',
    category: 'Web Apps',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Health and fitness tracking web application with personalized dashboard and progress analytics.',
    link: '#'
  },
  {
    id: 6,
    title: 'ArtisanMarket',
    category: 'E-commerce',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Marketplace connecting artisans with customers featuring secure payments and vendor profiles.',
    link: '#'
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-xl bg-white shadow-md hover:shadow-lg transition-all">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-900/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a 
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium"
                  >
                    View Project <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full bg-indigo-100 text-indigo-600">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;