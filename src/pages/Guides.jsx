import React from 'react';
import { ArrowRight, Clock, User, BookOpen, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import FeatureCard from '../components/documentation/FeatureCard';
import CodeBlock from '../components/documentation/CodeBlock';
import Alert from '../components/documentation/Alert';

export default function Guides() {
  const guides = [
    {
      id: 'authentication',
      title: 'Authentication Guide',
      description: 'Learn how to securely authenticate your API requests and manage API keys.',
      icon: Shield,
      difficulty: 'Beginner',
      time: '5 min read',
      featured: true
    },
    {
      id: 'webhooks',
      title: 'Setting Up Webhooks',
      description: 'Configure webhooks to receive real-time notifications about important events.',
      icon: Zap,
      difficulty: 'Intermediate',
      time: '10 min read',
      featured: true
    },
    {
      id: 'pagination',
      title: 'Handling Pagination',
      description: 'Best practices for working with paginated API responses and large datasets.',
      icon: BookOpen,
      difficulty: 'Beginner',
      time: '8 min read'
    },
    {
      id: 'rate-limiting',
      title: 'Rate Limiting & Optimization',
      description: 'Understand rate limits and learn optimization techniques for high-volume applications.',
      icon: Globe,
      difficulty: 'Advanced',
      time: '15 min read'
    },
    {
      id: 'error-handling',
      title: 'Error Handling Best Practices',
      description: 'Implement robust error handling for a better user experience.',
      icon: User,
      difficulty: 'Intermediate',
      time: '12 min read'
    },
    {
      id: 'testing',
      title: 'Testing Your Integration',
      description: 'Testing strategies and tools for validating your API integration.',
      icon: Zap,
      difficulty: 'Intermediate',
      time: '10 min read'
    }
  ];

  const quickStartCode = `// Initialize the client
const client = new DevDocs({
  apiKey: process.env.DEVDOCS_API_KEY,
  environment: 'sandbox' // Use 'production' for live
});

// Test the connection
try {
  const user = await client.users.me();
  console.log('Connected successfully!', user);
} catch (error) {
  console.error('Connection failed:', error.message);
}`;

  const webhookCode = `// Express.js webhook handler
app.post('/webhooks/devdocs', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['x-devdocs-signature'];
  
  // Verify the webhook signature
  if (!verifyWebhookSignature(req.body, signature)) {
    return res.status(400).send('Invalid signature');
  }
  
  const event = JSON.parse(req.body);
  
  switch (event.type) {
    case 'user.created':
      handleUserCreated(event.data);
      break;
    case 'project.updated':
      handleProjectUpdated(event.data);
      break;
    default:
      console.log(\`Unhandled event type: \${event.type}\`);
  }
  
  res.status(200).send('OK');
});`;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'Intermediate':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'Advanced':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Integration Guides</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Step-by-step guides to help you integrate our API into your application successfully.
        </p>
      </div>

      {/* Featured Guides */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Guides</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {guides.filter(guide => guide.featured).map((guide) => (
            <div key={guide.id} className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <guide.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {guide.title}
                    </h3>
                    <Badge className="bg-blue-100 text-blue-700 text-xs">Featured</Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{guide.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {guide.time}
                    </div>
                    <Badge variant="outline" className={`text-xs ${getDifficultyColor(guide.difficulty)}`}>
                      {guide.difficulty}
                    </Badge>
                  </div>
                </div>
              </div>
              <Button variant="ghost" className="w-full justify-between group-hover:bg-blue-50 group-hover:text-blue-600">
                Read Guide
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start Tutorial</h2>
        <p className="text-gray-600 mb-6">
          Get up and running with our API in just a few minutes. This tutorial covers the essential steps 
          to authenticate and make your first API call.
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 1: Initialize the Client</h3>
          <CodeBlock code={quickStartCode} language="javascript" />
        </div>

        <Alert type="info" title="Sandbox Environment">
          Start with our sandbox environment to test your integration without affecting live data. 
          Switch to production when you're ready to go live.
        </Alert>
      </div>

      {/* All Guides */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Guides</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <div key={guide.id} className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <guide.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{guide.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {guide.time}
                    </div>
                    <Badge variant="outline" className={`text-xs ${getDifficultyColor(guide.difficulty)}`}>
                      {guide.difficulty}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advanced Topics */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Integration Topics</h2>
        <p className="text-gray-600 mb-6">
          Ready to take your integration to the next level? Explore these advanced topics and patterns.
        </p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Webhook Implementation</h3>
          <p className="text-gray-600 mb-4">
            Webhooks allow you to receive real-time notifications when events occur in your account. 
            Here's a basic webhook handler implementation:
          </p>
          <CodeBlock code={webhookCode} language="javascript" />
        </div>

        <Alert type="warning" title="Security Note">
          Always verify webhook signatures to ensure the requests are coming from our servers. 
          Never process unverified webhook payloads in production.
        </Alert>

        <div className="mt-6">
          <Button className="bg-blue-600 hover:bg-blue-700">
            View Advanced Documentation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}