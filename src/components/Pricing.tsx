import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-navy-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Simple, Transparent Pricing</h2>
          <div className="h-1 w-24 bg-navy-600 mx-auto mb-6"></div>
          <p className="text-lg text-navy-600">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Basic Plan */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-navy-100 text-navy-600 px-4 py-1 rounded-full text-sm font-medium">
              Basic
            </div>
            <div className="pt-4">
              <div className="flex items-baseline justify-center mb-8">
                <span className="text-5xl font-bold text-navy-600">$199</span>
                <span className="text-navy-400 ml-2">+ domain</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-navy-700">
                  <Check className="h-5 w-5 text-navy-600 mr-2" />
                  <span>Custom Website Design</span>
                </li>
                <li className="flex items-center text-navy-700">
                  <Check className="h-5 w-5 text-navy-600 mr-2" />
                  <span>Free Deployment</span>
                </li>
                <li className="flex items-center text-navy-700">
                  <Check className="h-5 w-5 text-navy-600 mr-2" />
                  <span>Mobile Responsive</span>
                </li>
                <li className="flex items-center text-navy-700">
                  <Check className="h-5 w-5 text-navy-600 mr-2" />
                  <span>Map feature</span>
                </li>
              </ul>
              <button className="w-full py-4 px-6 rounded-lg bg-navy-600 text-white font-medium hover:bg-navy-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="relative bg-gradient-to-b from-white to-navy-50 rounded-2xl shadow-xl p-8 transform scale-105 border-2 border-navy-200">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-navy-600 text-white px-6 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <div className="pt-4">
              <div className="flex items-baseline justify-center mb-8">
                <span className="text-5xl font-bold text-navy-600">$349</span>
                <span className="text-navy-400 ml-2">+ domain</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-navy-700">
                  <Check className="h-5 w-5 text-navy-600 mr-2" />
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-center text-navy-700">
                  <Check className="h-5 w-5 text-navy-600 mr-2" />
                  <span>Booking System Integration</span>
                </li>
                <li className="flex items-center text-navy-700">
                  <Check className="h-5 w-5 text-navy-600 mr-2" />
                  <span>Up to 6 pages</span>
                </li>
                <li className="flex items-center text-navy-700">
                  <Check className="h-5 w-5 text-navy-600 mr-2" />
                  <span>Quote Form Integration</span>
                </li>
              </ul>
              <button className="w-full py-4 px-6 rounded-lg bg-navy-600 text-white font-medium hover:bg-navy-700 transition-all duration-300 transform hover:scale-105 ring-4 ring-navy-200">
                Get Started
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-navy-100 text-navy-600 px-4 py-1 rounded-full text-sm font-medium">
              Pro
            </div>
            <div className="pt-4">
              <div className="flex items-baseline justify-center mb-8">
                <span className="text-5xl font-bold text-navy-600">$499+</span>
                <span className="text-navy-400 ml-2">+ domain</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-navy-700">
                  <Check className="h-5 w-5 text-navy-600 mr-2" />
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-center text-navy-700">
                  <Check className="h-5 w-5 text-navy-600 mr-2" />
                  <span>Google Analytics Integration</span>
                </li>
                <li className="flex items-center text-navy-700">
                  <Check className="h-5 w-5 text-navy-600 mr-2" />
                  <span>Google Maps setup + Professional Email</span>
                </li>
                <li className="flex items-center text-navy-700">
                  <Check className="h-5 w-5 text-navy-600 mr-2" />
                  <span>Multiple Pages</span>
                </li>
              </ul>
              <button className="w-full py-4 px-6 rounded-lg bg-navy-600 text-white font-medium hover:bg-navy-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;