import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-indigo-900 overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src='https://my.spline.design/claritystream-hyuvumQA1HlxLUt8VtkgRodP/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          style={{ pointerEvents: 'none' }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2">
            <div className="h-1 w-12 bg-indigo-500"></div>
            <p className="text-indigo-300 font-medium">Web Development Consulting</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-6">
            Transform Your <span className="text-indigo-400">Digital Presence</span> With Expert Solutions
          </h1>
          
          <p className="text-lg text-indigo-100 md:text-xl mt-6">
            We craft exceptional web experiences that drive growth and deliver results.
            Our team of experts brings your vision to life with cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-transparent border border-indigo-300 text-white font-medium rounded-lg hover:bg-indigo-800/30 transition-all flex items-center justify-center"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <div className="text-white/70 text-sm mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;