import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          
          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p>By accessing or using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Services</h2>
              <p className="mb-4">Erkhem Consulting provides web development and consulting services, including but not limited to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Custom web development</li>
                <li>UI/UX design</li>
                <li>E-commerce solutions</li>
                <li>Digital strategy consulting</li>
                <li>Technical support and maintenance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Project Terms</h2>
              <p className="mb-4">All projects are subject to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Written agreement on project scope and deliverables</li>
                <li>Agreed-upon timeline and milestones</li>
                <li>Payment terms and schedule</li>
                <li>Change request procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p>Upon full payment, clients receive ownership rights to the final deliverables, excluding third-party materials and our proprietary tools and frameworks.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment schedules are defined in project proposals</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are subject to change with notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
              <p>Erkhem Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Termination</h2>
              <p>Either party may terminate services with written notice according to the terms specified in the project agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
              <p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction where Erkhem Consulting is registered.</p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
            Last updated: March 15, 2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;