import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "CodeCraft transformed our outdated website into a modern platform that perfectly represents our brand. The team's attention to detail and technical expertise exceeded our expectations.",
    author: "Jennifer Lee",
    position: "CEO, TechInnovate"
  },
  {
    id: 2,
    quote: "Working with this team was a game-changer for our e-commerce business. Our online sales increased by 45% within three months of launching the new website.",
    author: "Michael Rodriguez",
    position: "Founder, EcoStore"
  },
  {
    id: 3,
    quote: "The custom web application developed by CodeCraft streamlined our internal processes and saved us countless hours of manual work. Their solution was elegant and intuitive.",
    author: "Sarah Johnson",
    position: "Operations Director, HealthPlus"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-navy-900 to-navy-950 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="h-1 w-24 bg-navy-400 mx-auto mb-6"></div>
          <p className="text-lg text-navy-100">
            Don't just take our word for it - hear what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-gradient-to-br from-navy-800/50 to-navy-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="absolute -top-6 -left-6">
                <Quote className="h-12 w-12 text-navy-400 opacity-50" />
              </div>
              
              <div className="mb-8">
                <p className="text-xl md:text-2xl italic text-navy-100 mb-8">
                  "{currentTestimonial.quote}"
                </p>
                
                <div className="bg-navy-800/50 p-4 rounded-lg inline-block">
                  <h4 className="font-bold text-lg text-navy-100">{currentTestimonial.author}</h4>
                  <p className="text-navy-300">{currentTestimonial.position}</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentIndex ? 'bg-navy-400 w-8' : 'bg-navy-600 hover:bg-navy-500'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="p-2 rounded-full bg-navy-700 hover:bg-navy-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    className="p-2 rounded-full bg-navy-700 hover:bg-navy-600 transition-all duration-300 transform hover:scale-110"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;