import React from 'react';
import { Building, Users, MapPin, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import PageNavigation from '../components/documentation/PageNavigation';
import Alert from '../components/documentation/Alert';

export default function CompanyIdentity() {
  const headings = [
    { id: 'mission-vision', title: 'Mission & Vision', level: 2 },
    { id: 'core-values', title: 'Core Values', level: 2 },
    { id: 'company-overview', title: 'Company Overview', level: 2 },
    { id: 'leadership', title: 'Leadership Team', level: 2 },
  ];

  return (
    <div className="flex max-w-6xl mx-auto">
      <div className="flex-1 px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
              Company
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Company Identity
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Learn about our company's mission, values, and the team behind our products.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 id="mission-vision" className="text-2xl font-bold text-gray-900 mb-6 pt-8 border-t border-gray-200">
            Mission & Vision
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Our Mission</h3>
              <p className="text-blue-800 leading-relaxed">
                To empower developers and businesses with intuitive, powerful tools that simplify 
                complex integrations and accelerate innovation in the digital landscape.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">Our Vision</h3>
              <p className="text-purple-800 leading-relaxed">
                To become the leading platform for seamless API integrations, enabling every 
                developer to build extraordinary applications without technical barriers.
              </p>
            </div>
          </div>

          <h2 id="core-values" className="text-2xl font-bold text-gray-900 mb-6 pt-8 border-t border-gray-200">
            Core Values
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Developer First</h3>
              <p className="text-gray-600 text-sm">
                Every decision we make prioritizes the developer experience, from API design to documentation quality.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Reliability</h3>
              <p className="text-gray-600 text-sm">
                We build robust, scalable infrastructure that developers can depend on for mission-critical applications.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We continuously push boundaries to create new solutions that anticipate developer needs.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600 text-sm">
                We believe in open communication, clear documentation, and honest business practices.
              </p>
            </div>
          </div>

          <h2 id="company-overview" className="text-2xl font-bold text-gray-900 mb-6 pt-8 border-t border-gray-200">
            Company Overview
          </h2>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Founded</h4>
                <p className="text-gray-600 text-sm">2020</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Team Size</h4>
                <p className="text-gray-600 text-sm">50+ employees</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Headquarters</h4>
                <p className="text-gray-600 text-sm">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <Alert type="info" title="Company Culture">
            We're a remote-first company with team members across the globe, united by our passion 
            for building developer tools that make a difference.
          </Alert>

          <h2 id="leadership" className="text-2xl font-bold text-gray-900 mb-6 pt-8 border-t border-gray-200">
            Leadership Team
          </h2>

          <p className="text-gray-600 mb-6">
            Our leadership team combines decades of experience in developer tools, enterprise software, 
            and building scalable platforms.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">JD</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">John Doe</h3>
              <p className="text-blue-600 text-sm mb-2">CEO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Former VP of Engineering at TechCorp. Passionate about developer experience and API design.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">JS</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Jane Smith</h3>
              <p className="text-purple-600 text-sm mb-2">CTO & Co-Founder</p>
              <p className="text-gray-600 text-sm">
                Previously Lead Architect at DevTools Inc. Expert in distributed systems and platform engineering.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Navigation */}
      <PageNavigation headings={headings} />
    </div>
  );
}