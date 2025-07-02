import React from 'react';
import { Target, Users, TrendingUp, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import PageNavigation from '../components/documentation/PageNavigation';
import Alert from '../components/documentation/Alert';

export default function TargetMarket() {
  const headings = [
    { id: 'primary-audiences', title: 'Primary Audiences', level: 2 },
    { id: 'developer-personas', title: 'Developer Personas', level: 2 },
    { id: 'market-segments', title: 'Market Segments', level: 2 },
    { id: 'user-journey', title: 'User Journey', level: 2 },
  ];

  const personas = [
    {
      title: "Frontend Developer",
      description: "React/Vue developers building user interfaces",
      goals: ["Fast integration", "Great documentation", "React/Vue components"],
      painPoints: ["Complex API setup", "Poor documentation", "Limited UI components"],
      tools: ["VS Code", "npm/yarn", "Git", "Chrome DevTools"]
    },
    {
      title: "Backend Developer",
      description: "Server-side developers integrating APIs",
      goals: ["Reliable APIs", "Good error handling", "Comprehensive SDKs"],
      painPoints: ["API downtime", "Unclear error messages", "Missing SDKs"],
      tools: ["Node.js", "Python", "Postman", "Docker"]
    },
    {
      title: "Full-Stack Developer",
      description: "Developers working across the entire stack",
      goals: ["End-to-end solutions", "Consistent experience", "Time efficiency"],
      painPoints: ["Context switching", "Inconsistent APIs", "Time constraints"],
      tools: ["Multiple languages", "Various frameworks", "Cloud platforms"]
    }
  ];

  return (
    <div className="flex max-w-6xl mx-auto">
      <div className="flex-1 px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
              Market Research
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Target Market
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Understanding our audience helps us build better products and create more effective 
            communications. Learn about our primary users and market segments.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 id="primary-audiences" className="text-2xl font-bold text-gray-900 mb-6 pt-8 border-t border-gray-200">
            Primary Audiences
          </h2>
          
          <p className="text-gray-600 mb-6">
            Our platform serves developers and technical teams who need reliable, well-documented 
            APIs and tools to build modern applications.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Individual Developers</h3>
              <p className="text-blue-800 text-sm">
                Solo developers and freelancers building applications for clients or personal projects.
              </p>
            </div>
            <div className="bg-green-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-900 mb-2">Startups & Scale-ups</h3>
              <p className="text-green-800 text-sm">
                Growing companies that need scalable solutions without the overhead of enterprise tools.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-purple-900 mb-2">Enterprise Teams</h3>
              <p className="text-purple-800 text-sm">
                Large organizations looking for reliable, secure APIs with enterprise-grade support.
              </p>
            </div>
          </div>

          <h2 id="developer-personas" className="text-2xl font-bold text-gray-900 mb-6 pt-8 border-t border-gray-200">
            Developer Personas
          </h2>

          <p className="text-gray-600 mb-6">
            We've identified key developer personas based on research and user feedback. 
            Understanding these personas helps us design better experiences.
          </p>

          <div className="space-y-6 mb-8">
            {personas.map((persona, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{persona.title}</h3>
                <p className="text-gray-600 mb-4">{persona.description}</p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Goals</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {persona.goals.map((goal, goalIndex) => (
                        <li key={goalIndex}>• {goal}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Pain Points</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {persona.painPoints.map((pain, painIndex) => (
                        <li key={painIndex}>• {pain}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Tools</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {persona.tools.map((tool, toolIndex) => (
                        <li key={toolIndex}>• {tool}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 id="market-segments" className="text-2xl font-bold text-gray-900 mb-6 pt-8 border-t border-gray-200">
            Market Segments
          </h2>

          <p className="text-gray-600 mb-6">
            We serve different market segments with varying needs, from simple integrations 
            to complex enterprise requirements.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">SMB (Small & Medium Business)</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Characteristics</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 1-50 employees</li>
                    <li>• Limited technical resources</li>
                    <li>• Budget conscious</li>
                    <li>• Need quick results</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Needs</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Easy-to-use tools</li>
                    <li>• Clear pricing</li>
                    <li>• Self-service support</li>
                    <li>• Quick implementation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Enterprise</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Characteristics</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 500+ employees</li>
                    <li>• Complex requirements</li>
                    <li>• Security focused</li>
                    <li>• Compliance needs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Needs</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Enterprise security</li>
                    <li>• Custom solutions</li>
                    <li>• Dedicated support</li>
                    <li>• SLA guarantees</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Alert type="info" title="Market Insights">
            Our research shows that 67% of developers prioritize documentation quality over feature richness 
            when choosing an API platform, which drives our documentation-first approach.
          </Alert>

          <h2 id="user-journey" className="text-2xl font-bold text-gray-900 mb-6 pt-8 border-t border-gray-200">
            User Journey
          </h2>

          <p className="text-gray-600 mb-6">
            Understanding how users discover, evaluate, and adopt our platform helps us optimize 
            each touchpoint for better conversion and satisfaction.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Typical User Journey</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-semibold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Discovery</h4>
                  <p className="text-sm text-gray-600">
                    User searches for API solutions, reads blog posts, or gets recommendations from peers.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-semibold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Evaluation</h4>
                  <p className="text-sm text-gray-600">
                    Reviews documentation, tries sandbox environment, compares with competitors.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-semibold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Trial</h4>
                  <p className="text-sm text-gray-600">
                    Signs up for free account, implements basic integration, tests functionality.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 font-semibold text-sm">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Adoption</h4>
                  <p className="text-sm text-gray-600">
                    Upgrades to paid plan, implements in production, expands usage across team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Success Metrics</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">85%</div>
                <p className="text-sm text-gray-600">Documentation satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">&lt; 5min</div>
                <p className="text-sm text-gray-600">Average integration time</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">92%</div>
                <p className="text-sm text-gray-600">Developer NPS score</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Navigation */}
      <PageNavigation headings={headings} />
    </div>
  );
}