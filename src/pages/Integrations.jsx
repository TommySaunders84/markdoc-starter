import React from 'react';
import { ExternalLink, Star, Download, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Integrations() {
  const integrations = [
    {
      id: 'react',
      title: 'React SDK',
      description: 'Official React components and hooks for seamless integration.',
      logo: '⚛️',
      category: 'Frontend',
      popularity: 'Most Popular',
      downloads: '50k+',
      rating: 4.9,
      featured: true
    },
    {
      id: 'nodejs',
      title: 'Node.js SDK',
      description: 'Server-side JavaScript library with full TypeScript support.',
      logo: '🟢',
      category: 'Backend',
      popularity: 'Popular',
      downloads: '30k+',
      rating: 4.8,
      featured: true
    },
    {
      id: 'python',
      title: 'Python SDK',
      description: 'Pythonic interface for all API endpoints with async support.',
      logo: '🐍',
      category: 'Backend',
      popularity: 'Popular',
      downloads: '25k+',
      rating: 4.7,
      featured: true
    },
    {
      id: 'php',
      title: 'PHP SDK',
      description: 'Modern PHP library compatible with Laravel and Symfony.',
      logo: '🐘',
      category: 'Backend',
      downloads: '15k+',
      rating: 4.6
    },
    {
      id: 'ruby',
      title: 'Ruby Gem',
      description: 'Ruby gem with Rails integration and comprehensive documentation.',
      logo: '💎',
      category: 'Backend',
      downloads: '12k+',
      rating: 4.5
    },
    {
      id: 'go',
      title: 'Go SDK',
      description: 'High-performance Go client with context support and automatic retries.',
      logo: '🔵',
      category: 'Backend',
      downloads: '8k+',
      rating: 4.7
    },
    {
      id: 'vue',
      title: 'Vue.js Plugin',
      description: 'Vue.js plugin with composition API support and SSR compatibility.',
      logo: '💚',
      category: 'Frontend',
      downloads: '20k+',
      rating: 4.6
    },
    {
      id: 'angular',
      title: 'Angular Package',
      description: 'Angular service and components with RxJS observables.',
      logo: '🔴',
      category: 'Frontend',
      downloads: '18k+',
      rating: 4.4
    },
    {
      id: 'flutter',
      title: 'Flutter Package',
      description: 'Cross-platform Dart package for mobile and web applications.',
      logo: '🔵',
      category: 'Mobile',
      downloads: '10k+',
      rating: 4.5
    }
  ];

  const tools = [
    {
      title: 'Postman Collection',
      description: 'Ready-to-use Postman collection with all API endpoints.',
      icon: '📮',
      link: '#'
    },
    {
      title: 'OpenAPI Spec',
      description: 'Complete OpenAPI 3.0 specification for code generation.',
      icon: '📋',
      link: '#'
    },
    {
      title: 'CLI Tool',
      description: 'Command-line interface for managing your account and deployments.',
      icon: '⚡',
      link: '#'
    },
    {
      title: 'VS Code Extension',
      description: 'IntelliSense and debugging support for VS Code.',
      icon: '🔧',
      link: '#'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Frontend':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Backend':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'Mobile':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getPopularityColor = (popularity) => {
    if (popularity === 'Most Popular') {
      return 'bg-orange-50 text-orange-700 border-orange-200';
    }
    return 'bg-yellow-50 text-yellow-700 border-yellow-200';
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">SDK Libraries & Tools</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Official SDKs, community libraries, and developer tools to accelerate your integration.
        </p>
      </div>

      {/* Featured SDKs */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured SDKs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {integrations.filter(integration => integration.featured).map((integration) => (
            <div key={integration.id} className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">{integration.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {integration.title}
                    </h3>
                    {integration.popularity && (
                      <Badge className={getPopularityColor(integration.popularity)} variant="outline">
                        {integration.popularity}
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{integration.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {integration.downloads}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {integration.rating}
                    </div>
                    <Badge variant="outline" className={`text-xs ${getCategoryColor(integration.category)}`}>
                      {integration.category}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Docs
                </Button>
                <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  Install
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All SDKs */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All SDKs & Libraries</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration) => (
            <div key={integration.id} className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-2xl">{integration.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {integration.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{integration.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      {integration.downloads}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {integration.rating}
                    </div>
                    <Badge variant="outline" className={`text-xs ${getCategoryColor(integration.category)}`}>
                      {integration.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Developer Tools */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Developer Tools</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="text-2xl">{tool.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{tool.description}</p>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    Download
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Community & Support</h2>
        <p className="text-gray-600 mb-6">
          Join our developer community to get help, share knowledge, and contribute to our ecosystem.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Join Discord
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            GitHub Discussions
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            Stack Overflow
          </Button>
        </div>
      </div>
    </div>
  );
}