import React from 'react';
import { Type, Layout, Palette, Grid } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import PageNavigation from '../components/documentation/PageNavigation';
import CodeBlock from '../components/documentation/CodeBlock';
import Alert from '../components/documentation/Alert';

export default function StyleGuide() {
  const headings = [
    { id: 'typography', title: 'Typography', level: 2 },
    { id: 'color-system', title: 'Color System', level: 2 },
    { id: 'spacing', title: 'Spacing & Layout', level: 2 },
    { id: 'components', title: 'UI Components', level: 2 },
  ];

  const cssVariables = `:root {
  --stripe-navy: #0A2540;
  --stripe-blue: #635BFF;
  --stripe-light-blue: #00D4FF;
  --stripe-gray: #425466;
  --stripe-light-gray: #8898AA;
  --stripe-bg: #FAFBFC;
}`;

  return (
    <div className="flex max-w-6xl mx-auto">
      <div className="flex-1 px-6 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 border-indigo-200">
              Design System
            </Badge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Style Guide
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our comprehensive design system ensures consistency across all products and touchpoints. 
            Use these guidelines to maintain brand coherence.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2 id="typography" className="text-2xl font-bold text-gray-900 mb-6 pt-8 border-t border-gray-200">
            Typography
          </h2>
          
          <p className="text-gray-600 mb-6">
            We use Inter as our primary typeface for its excellent readability and modern appearance 
            across all digital platforms.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Font Family</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Heading 1 - Inter Bold</h1>
                <p className="text-sm text-gray-500">font-size: 2.25rem (36px) • font-weight: 700</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Heading 2 - Inter Semibold</h2>
                <p className="text-sm text-gray-500">font-size: 1.5rem (24px) • font-weight: 600</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Heading 3 - Inter Medium</h3>
                <p className="text-sm text-gray-500">font-size: 1.125rem (18px) • font-weight: 500</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <p className="text-base text-gray-600 mb-2">Body Text - Inter Regular</p>
                <p className="text-sm text-gray-500">font-size: 1rem (16px) • font-weight: 400</p>
              </div>
              <div className="bg-white rounded-lg p-4 border">
                <p className="text-sm text-gray-500 mb-2">Small Text - Inter Regular</p>
                <p className="text-xs text-gray-400">font-size: 0.875rem (14px) • font-weight: 400</p>
              </div>
            </div>
          </div>

          <h2 id="color-system" className="text-2xl font-bold text-gray-900 mb-6 pt-8 border-t border-gray-200">
            Color System
          </h2>

          <p className="text-gray-600 mb-6">
            Our color palette is inspired by Stripe's sophisticated design language, emphasizing 
            professionalism and clarity.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Primary Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 border rounded-lg">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg"></div>
                  <div>
                    <p className="font-medium text-gray-900">Primary Blue</p>
                    <p className="text-sm text-gray-500">#635BFF</p>
                    <p className="text-xs text-gray-400">Main brand color, CTAs</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 border rounded-lg">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg"></div>
                  <div>
                    <p className="font-medium text-gray-900">Secondary Purple</p>
                    <p className="text-sm text-gray-500">#7C3AED</p>
                    <p className="text-xs text-gray-400">Gradients, accents</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 border rounded-lg">
                  <div className="w-12 h-12" style={{backgroundColor: '#0A2540'}}></div>
                  <div>
                    <p className="font-medium text-gray-900">Navy</p>
                    <p className="text-sm text-gray-500">#0A2540</p>
                    <p className="text-xs text-gray-400">Headers, important text</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Neutral Colors</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 border rounded-lg">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg"></div>
                  <div>
                    <p className="font-medium text-gray-900">Gray 900</p>
                    <p className="text-sm text-gray-500">#111827</p>
                    <p className="text-xs text-gray-400">Primary text</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 border rounded-lg">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg"></div>
                  <div>
                    <p className="font-medium text-gray-900">Gray 600</p>
                    <p className="text-sm text-gray-500">#4B5563</p>
                    <p className="text-xs text-gray-400">Secondary text</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 border rounded-lg">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                  <div>
                    <p className="font-medium text-gray-900">Gray 200</p>
                    <p className="text-sm text-gray-500">#E5E7EB</p>
                    <p className="text-xs text-gray-400">Borders, dividers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">CSS Variables</h3>
            <CodeBlock code={cssVariables} language="css" />
          </div>

          <h2 id="spacing" className="text-2xl font-bold text-gray-900 mb-6 pt-8 border-t border-gray-200">
            Spacing & Layout
          </h2>

          <p className="text-gray-600 mb-6">
            Consistent spacing creates visual harmony and improves readability. We use an 8px base unit 
            for all spacing decisions.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Spacing Scale</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { size: '4px', name: '0.5', class: 'p-0.5' },
                { size: '8px', name: '1', class: 'p-1' },
                { size: '16px', name: '2', class: 'p-2' },
                { size: '24px', name: '3', class: 'p-3' },
                { size: '32px', name: '4', class: 'p-4' },
                { size: '48px', name: '6', class: 'p-6' },
                { size: '64px', name: '8', class: 'p-8' },
                { size: '96px', name: '12', class: 'p-12' },
              ].map(({ size, name, class: className }) => (
                <div key={name} className="text-center">
                  <div className="bg-blue-100 rounded-lg mb-2 flex items-center justify-center" style={{ height: '60px' }}>
                    <div className="bg-blue-600 rounded" style={{ width: size, height: size }}></div>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{size}</p>
                  <p className="text-xs text-gray-500">{className}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 id="components" className="text-2xl font-bold text-gray-900 mb-6 pt-8 border-t border-gray-200">
            UI Components
          </h2>

          <p className="text-gray-600 mb-6">
            Standard components ensure consistency across all interfaces. Use these components 
            as building blocks for all UI elements.
          </p>

          <div className="space-y-8">
            {/* Buttons */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <Button className="bg-blue-600 hover:bg-blue-700">Primary Button</Button>
                <Button variant="outline">Secondary Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button size="sm">Small Button</Button>
              </div>
              <p className="text-sm text-gray-600">
                Use primary buttons for main actions, secondary for alternative actions, and ghost for subtle interactions.
              </p>
            </div>

            {/* Badges */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Badges</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <Badge className="bg-blue-100 text-blue-700">Default</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge className="bg-green-100 text-green-700">Success</Badge>
                <Badge className="bg-red-100 text-red-700">Error</Badge>
                <Badge className="bg-yellow-100 text-yellow-700">Warning</Badge>
              </div>
              <p className="text-sm text-gray-600">
                Use badges to highlight status, categories, or important information.
              </p>
            </div>

            {/* Alerts */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Alerts</h3>
              <div className="space-y-4">
                <Alert type="info" title="Information Alert">
                  This is an informational message for users.
                </Alert>
                <Alert type="success" title="Success Alert">
                  This indicates a successful action or state.
                </Alert>
                <Alert type="warning" title="Warning Alert">
                  This warns users about potential issues.
                </Alert>
                <Alert type="error" title="Error Alert">
                  This indicates an error that needs attention.
                </Alert>
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