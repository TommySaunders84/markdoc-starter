import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function FeatureCard({ title, description, icon: Icon, href, badge }) {
  const content = (
    <div className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {badge && (
        <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
          {badge}
        </span>
      )}
      <div className="flex items-start gap-4">
        {Icon && (
          <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
            <Icon className="w-6 h-6 text-blue-600" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
            {href && <ExternalLink className="inline w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}