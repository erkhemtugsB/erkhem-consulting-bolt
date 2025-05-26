import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(91,33,182,1),rgba(0,0,0,0))]"></div>
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_70%_80%,rgba(79,70,229,1),rgba(0,0,0,0))]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="flex items-center space-x-2">
              <div className="h-1 w-12 bg-indigo-500"></div>
              <p className="text-indigo-300 font-medium">Web Development Consulting</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transform Your <span className="text-indigo-400">Digital Presence</span> With Expert Solutions
            </h1>
            
            <p className="text-lg text-indigo-100 md:text-xl">
              We craft exceptional web experiences that drive growth and deliver results.
              Our team of experts brings your vision to life with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
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
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg blur opacity-75"></div>
              <div className="relative bg-gray-900 rounded-lg overflow-hidden border border-indigo-500/30">
                <div className="bg-gray-800 h-6 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-5 text-indigo-300 font-mono text-sm overflow-hidden">
                  <p><span className="text-green-400">const</span> <span className="text-blue-400">solution</span> = <span className="text-purple-400">await</span> CodeCraft.transform(</p>
                  <p className="ml-8 text-yellow-300">&#123;</p>
                  <p className="ml-12"><span className="text-pink-400">business</span>: <span className="text-indigo-300">yourBusiness</span>,</p>
                  <p className="ml-12"><span className="text-pink-400">goals</span>: [<span className="text-indigo-300">'growth'</span>, <span className="text-indigo-300">'engagement'</span>, <span className="text-indigo-300">'conversion'</span>],</p>
                  <p className="ml-12"><span className="text-pink-400">technology</span>: <span className="text-indigo-300">'cutting-edge'</span></p>
                  <p className="ml-8">&#125;</p>
                  <p>);</p>
                  <p className="mt-4"><span className="text-green-400">// Result: A powerful web presence that drives results</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-white/70 text-sm mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;