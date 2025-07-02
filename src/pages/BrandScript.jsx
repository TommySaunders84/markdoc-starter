import React from 'react';
import { Badge } from '@/components/ui/badge';
import { brandIdentityNavigation, createAnchorId } from '../components/data/brandIdentityNavData';
import PageNavigation from '../components/documentation/PageNavigation';
import Alert from '../components/documentation/Alert';

export default function BrandScript() {
  const sectionData = brandIdentityNavigation.find(s => s.page === "BrandScript");

  if (!sectionData) return <div>Section not found</div>;

  const headings = sectionData.items.map(item => ({
    id: createAnchorId(item),
    title: item,
    level: 2
  }));

  return (
    <div className="flex max-w-6xl mx-auto">
      <div className="flex-1 px-6 py-8">
        <div className="mb-12">
          <Badge variant="secondary" className="bg-pink-50 text-pink-700 border-pink-200">
            Brand Identity
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 my-4 uppercase">
            {sectionData.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Utilizing the StoryBrand framework to clarify our message.
          </p>
        </div>
        <div className="prose prose-lg max-w-none space-y-12">
          {sectionData.items.map((item) => (
            <div key={item}>
              <h2 id={createAnchorId(item)} className="text-2xl font-semibold text-gray-900 mb-4 pt-6 border-t border-gray-100">
                {item}
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <Alert type="info" title="Content Coming Soon">
                  This section is currently being developed. Check back soon for detailed content 
                  and guidelines related to {item.toLowerCase()}.
                </Alert>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PageNavigation headings={headings} />
    </div>
  );
}