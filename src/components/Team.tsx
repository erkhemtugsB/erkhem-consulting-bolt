import { Github, Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Morgan',
    role: 'Founder & Lead Developer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Full-stack developer with 10+ years of experience building scalable web applications.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Sarah Chen',
    role: 'UI/UX Designer',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Creative designer focused on creating beautiful and intuitive user experiences.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Marcus Johnson',
    role: 'Backend Developer',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Database expert specializing in building high-performance API architectures.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Elena Rodriguez',
    role: 'Frontend Developer',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'React specialist with a passion for creating responsive and accessible interfaces.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Our talented professionals bring diverse skills and expertise to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-square object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex gap-3 justify-center">
                      <a href={member.social.twitter} className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                      <a href={member.social.linkedin} className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                        <Linkedin className="h-5 w-5 text-white" />
                      </a>
                      <a href={member.social.github} className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
                        <Github className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;