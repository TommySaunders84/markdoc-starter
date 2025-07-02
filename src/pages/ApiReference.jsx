import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import CodeBlock from '../components/documentation/CodeBlock';
import Alert from '../components/documentation/Alert';

export default function ApiReference() {
  const [expandedSections, setExpandedSections] = useState({
    users: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const apiEndpoints = [
    {
      id: 'users',
      title: 'Users',
      description: 'Manage user accounts and profiles',
      endpoints: [
        {
          method: 'GET',
          path: '/users',
          title: 'List users',
          description: 'Retrieve a list of users with optional filtering and pagination.',
          parameters: [
            { name: 'limit', type: 'integer', description: 'Number of users to return (1-100)', default: '10' },
            { name: 'offset', type: 'integer', description: 'Number of users to skip', default: '0' },
            { name: 'status', type: 'string', description: 'Filter by user status', enum: ['active', 'inactive'] }
          ]
        },
        {
          method: 'POST',
          path: '/users',
          title: 'Create user',
          description: 'Create a new user account.',
          parameters: [
            { name: 'email', type: 'string', required: true, description: 'User email address' },
            { name: 'full_name', type: 'string', required: true, description: 'User full name' },
            { name: 'role', type: 'string', description: 'User role', enum: ['admin', 'user'], default: 'user' }
          ]
        },
        {
          method: 'GET',
          path: '/users/{id}',
          title: 'Get user',
          description: 'Retrieve a specific user by ID.',
          parameters: [
            { name: 'id', type: 'string', required: true, description: 'User ID' }
          ]
        }
      ]
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'Manage projects and their settings',
      endpoints: [
        {
          method: 'GET',
          path: '/projects',
          title: 'List projects',
          description: 'Retrieve a list of projects.',
          parameters: [
            { name: 'limit', type: 'integer', description: 'Number of projects to return', default: '10' },
            { name: 'status', type: 'string', description: 'Filter by project status' }
          ]
        },
        {
          method: 'POST',
          path: '/projects',
          title: 'Create project',
          description: 'Create a new project.',
          parameters: [
            { name: 'name', type: 'string', required: true, description: 'Project name' },
            { name: 'description', type: 'string', description: 'Project description' }
          ]
        }
      ]
    }
  ];

  const exampleResponse = `{
  "data": [
    {
      "id": "usr_1234567890",
      "email": "john.doe@example.com",
      "full_name": "John Doe",
      "role": "user",
      "status": "active",
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "total": 150,
    "limit": 10,
    "offset": 0,
    "has_more": true
  }
}`;

  const curlExample = `curl -X GET "https://api.devdocs.com/v1/users" \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json"`;

  const jsExample = `const response = await client.users.list({
  limit: 10,
  status: 'active'
});

console.log(response.data);`;

  const pythonExample = `import devdocs

client = devdocs.Client(api_key="your_api_key")
response = client.users.list(limit=10, status="active")

print(response.data)`;

  return (
    <div className="flex max-w-7xl mx-auto">
      <div className="flex-1 px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">API Reference</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Complete reference for all API endpoints, parameters, and responses.
          </p>
        </div>

        {/* Base URL and Authentication */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Base URL & Authentication</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Base URL:</p>
              <code className="bg-white px-3 py-2 rounded border text-sm font-mono">
                https://api.devdocs.com/v1
              </code>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Authentication:</p>
              <code className="bg-white px-3 py-2 rounded border text-sm font-mono">
                Authorization: Bearer your_api_key
              </code>
            </div>
          </div>
        </div>

        <Alert type="info" title="Rate Limiting">
          API requests are limited to 1000 requests per hour per API key. Contact support if you need higher limits.
        </Alert>

        {/* API Sections */}
        <div className="space-y-8 mt-8">
          {apiEndpoints.map((section) => (
            <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full bg-gray-50 hover:bg-gray-100 p-6 text-left transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                    <p className="text-gray-600 mt-1">{section.description}</p>
                  </div>
                  {expandedSections[section.id] ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  )}
                </div>
              </button>

              {expandedSections[section.id] && (
                <div className="border-t border-gray-200">
                  {section.endpoints.map((endpoint, index) => (
                    <div key={index} className="p-6 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-start gap-4 mb-4">
                        <Badge 
                          variant="outline" 
                          className={`font-mono text-xs ${
                            endpoint.method === 'GET' 
                              ? 'bg-green-50 text-green-700 border-green-200'
                              : endpoint.method === 'POST'
                              ? 'bg-blue-50 text-blue-700 border-blue-200'
                              : 'bg-gray-50 text-gray-700 border-gray-200'
                          }`}
                        >
                          {endpoint.method}
                        </Badge>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">{endpoint.title}</h4>
                            <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                              {endpoint.path}
                            </code>
                          </div>
                          <p className="text-gray-600">{endpoint.description}</p>
                        </div>
                      </div>

                      {/* Parameters */}
                      {endpoint.parameters && endpoint.parameters.length > 0 && (
                        <div className="mb-6">
                          <h5 className="font-semibold text-gray-900 mb-3">Parameters</h5>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="bg-gray-50">
                                  <th className="text-left p-3 font-medium text-gray-700">Name</th>
                                  <th className="text-left p-3 font-medium text-gray-700">Type</th>
                                  <th className="text-left p-3 font-medium text-gray-700">Required</th>
                                  <th className="text-left p-3 font-medium text-gray-700">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {endpoint.parameters.map((param, paramIndex) => (
                                  <tr key={paramIndex} className="border-t border-gray-100">
                                    <td className="p-3 font-mono text-blue-600">{param.name}</td>
                                    <td className="p-3 text-gray-600">{param.type}</td>
                                    <td className="p-3">
                                      {param.required ? (
                                        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 text-xs">
                                          Required
                                        </Badge>
                                      ) : (
                                        <span className="text-gray-400">Optional</span>
                                      )}
                                    </td>
                                    <td className="p-3 text-gray-600">
                                      {param.description}
                                      {param.default && (
                                        <span className="block text-xs text-gray-500 mt-1">
                                          Default: {param.default}
                                        </span>
                                      )}
                                      {param.enum && (
                                        <span className="block text-xs text-gray-500 mt-1">
                                          Options: {param.enum.join(', ')}
                                        </span>
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Code Examples */}
                      {endpoint.method === 'GET' && endpoint.path === '/users' && (
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Examples</h5>
                          <Tabs defaultValue="curl" className="w-full">
                            <TabsList className="bg-gray-100">
                              <TabsTrigger value="curl">cURL</TabsTrigger>
                              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                              <TabsTrigger value="python">Python</TabsTrigger>
                            </TabsList>
                            <TabsContent value="curl" className="mt-4">
                              <CodeBlock code={curlExample} language="bash" />
                            </TabsContent>
                            <TabsContent value="javascript" className="mt-4">
                              <CodeBlock code={jsExample} language="javascript" />
                            </TabsContent>
                            <TabsContent value="python" className="mt-4">
                              <CodeBlock code={pythonExample} language="python" />
                            </TabsContent>
                          </Tabs>

                          <div className="mt-6">
                            <h6 className="font-medium text-gray-900 mb-3">Response</h6>
                            <CodeBlock code={exampleResponse} language="json" />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Error Codes */}
        <div className="mt-12 bg-gray-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Error Codes</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <code className="text-red-600 font-mono">400 Bad Request</code>
              <p className="text-sm text-gray-600 mt-1">Invalid request parameters</p>
            </div>
            <div>
              <code className="text-red-600 font-mono">401 Unauthorized</code>
              <p className="text-sm text-gray-600 mt-1">Invalid or missing API key</p>
            </div>
            <div>
              <code className="text-red-600 font-mono">404 Not Found</code>
              <p className="text-sm text-gray-600 mt-1">Resource not found</p>
            </div>
            <div>
              <code className="text-red-600 font-mono">429 Too Many Requests</code>
              <p className="text-sm text-gray-600 mt-1">Rate limit exceeded</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}