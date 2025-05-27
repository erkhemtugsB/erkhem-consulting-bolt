import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <div className="h-1 w-24 bg-navy-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold text-navy-600">$200</span>
              <span className="text-gray-500 ml-2">+ domain charge</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-navy-600 mr-2" />
                <span>Custom Website Design</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-navy-600 mr-2" />
                <span>Free Deployment</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-navy-600 mr-2" />
                <span>Mobile Responsive</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-navy-600 mr-2" />
                <span>Basic SEO Setup</span>
              </li>
            </ul>
            <button className="w-full py-3 px-6 rounded-lg bg-navy-600 text-white font-medium hover:bg-navy-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-navy-600 transform scale-105">
            <div className="absolute top-0 right-0 bg-navy-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-medium">
              Popular
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold text-navy-600">$350</span>
              <span className="text-gray-500 ml-2">+ domain charge</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-navy-600 mr-2" />
                <span>Everything in Basic</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-navy-600 mr-2" />
                <span>Booking System</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-navy-600 mr-2" />
                <span>Appointment Scheduling</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-navy-600 mr-2" />
                <span>Quote Form Integration</span>
              </li>
            </ul>
            <button className="w-full py-3 px-6 rounded-lg bg-navy-600 text-white font-medium hover:bg-navy-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-4xl font-bold text-navy-600">$500</span>
              <span className="text-gray-500 ml-2">+ domain charge</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-navy-600 mr-2" />
                <span>Everything in Professional</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-navy-600 mr-2" />
                <span>Google Analytics Integration</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-navy-600 mr-2" />
                <span>Personal Appointment System</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-navy-600 mr-2" />
                <span>Multiple Pages</span>
              </li>
            </ul>
            <button className="w-full py-3 px-6 rounded-lg bg-navy-600 text-white font-medium hover:bg-navy-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;