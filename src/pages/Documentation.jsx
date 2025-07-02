import React from 'react';
import { ArrowRight, Zap, Code, Book, Layers, Users, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

import PageNavigation from '../components/documentation/PageNavigation';
import FeatureCard from '../components/documentation/FeatureCard';
import CodeBlock from '../components/documentation/CodeBlock';
import Alert from '../components/documentation/Alert';

export default function Documentation() {
  const headings = [
    { id: 'getting-started', title: 'Getting Started', level: 2 },
    { id: 'installation', title: 'Installation', level: 3 },
    { id: 'quick-start', title: 'Quick Start', level: 3 },
    { id: 'core-concepts', title: 'Core Concepts', level: 2 },
    { id: 'authentication', title: 'Authentication', level: 3 },
    { id: 'api-basics', title: 'API Basics', level: 3 },
  ];

  const installCode = `npm install @devdocs/sdk
# or
yarn add @devdocs/sdk`;

  const quickStartCode = `import { DevDocs } from '@devdocs/sdk';

const client = new DevDocs({
  apiKey: 'your_api_key_here'
});

// Make your first API call
const response = await client.users.list();
console.log(response);`;

  const authCode = `const client = new DevDocs({
  apiKey: process.env.DEVDOCS_API_KEY,
  environment: 'production' // or 'sandbox'
});`;

  return (
    <div className="flex max-w-6xl mx-auto">
      <div className="flex-1 px-6 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
              v2.0.0
            </Badge>
            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
              Latest
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to DevDocs
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Everything you need to integrate our platform into your application. 
            Get up and running in minutes with our comprehensive guides and API reference.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to={createPageUrl("ApiReference")}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                API Reference
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to={createPageUrl("Guides")}>
              <Button variant="outline" className="border-gray-300">
                View Guides
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Links Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FeatureCard
            icon={Zap}
            title="Quick Start"
            description="Get up and running in under 5 minutes with our step-by-step guide."
            href="#quick-start"
            badge="Popular"
          />
          <FeatureCard
            icon={Code}
            title="API Reference"
            description="Complete documentation for all endpoints, parameters, and responses."
            href={createPageUrl("ApiReference")}
          />
          <FeatureCard
            icon={Book}
            title="Guides & Tutorials"
            description="In-depth guides for common integration patterns and use cases."
            href={createPageUrl("Guides")}
          />
          <FeatureCard
            icon={Layers}
            title="SDK Libraries"
            description="Official libraries for Python, Node.js, PHP, Ruby, and more."
            href="#"
          />
          <FeatureCard
            icon={Users}
            title="Community"
            description="Join our developer community for support and discussions."
            href="#"
          />
          <FeatureCard
            icon={Shield}
            title="Security"
            description="Learn about our security practices and compliance certifications."
            href="#"
          />
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 id="getting-started" className="text-2xl font-bold text-gray-900 mb-6 pt-8 border-t border-gray-200">
            Getting Started
          </h2>
          
          <p className="text-gray-600 mb-6">
            This guide will help you get started with our API. We'll walk through the basics of authentication, 
            making your first API call, and understanding our response format.
          </p>

          <Alert type="info" title="Prerequisites">
            Before you begin, make sure you have an API key. You can get one by signing up for an account 
            and visiting your dashboard.
          </Alert>

          <h3 id="installation" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
            Installation
          </h3>
          
          <p className="text-gray-600 mb-4">
            Install our SDK using your preferred package manager:
          </p>

          <CodeBlock code={installCode} language="bash" />

          <h3 id="quick-start" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
            Quick Start
          </h3>
          
          <p className="text-gray-600 mb-4">
            Here's a simple example to get you started:
          </p>

          <CodeBlock code={quickStartCode} language="javascript" />

          <Alert type="success" title="Success!">
            If everything is working correctly, you should see a list of users in your console.
          </Alert>

          <h2 id="core-concepts" className="text-2xl font-bold text-gray-900 mb-6 pt-8 border-t border-gray-200">
            Core Concepts
          </h2>

          <p className="text-gray-600 mb-6">
            Understanding these core concepts will help you make the most of our API.
          </p>

          <h3 id="authentication" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
            Authentication
          </h3>

          <p className="text-gray-600 mb-4">
            All API requests must be authenticated using your API key. You can authenticate 
            requests by including your API key in the request headers or by using our SDK:
          </p>

          <CodeBlock code={authCode} language="javascript" />

          <Alert type="warning" title="Keep your API key secure">
            Never expose your API key in client-side code. Always use environment variables 
            or secure configuration management.
          </Alert>

          <h3 id="api-basics" className="text-xl font-semibold text-gray-900 mb-4 mt-8">
            API Basics
          </h3>

          <p className="text-gray-600 mb-4">
            Our API follows REST principles and uses standard HTTP methods. All responses 
            are returned in JSON format.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Base URL</h4>
            <code className="bg-white px-3 py-2 rounded border text-sm">
              https://api.devdocs.com/v1
            </code>
          </div>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Next?</h3>
            <p className="text-gray-600 mb-6">
              Now that you've got the basics down, explore our comprehensive guides and API reference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to={createPageUrl("ApiReference")}>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Explore API Reference
                </Button>
              </Link>
              <Link to={createPageUrl("Guides")}>
                <Button variant="outline">
                  View Integration Guides
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Page Navigation */}
      <PageNavigation headings={headings} />
    </div>
  );
}