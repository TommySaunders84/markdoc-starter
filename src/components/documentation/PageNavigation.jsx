import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function PageNavigation({ headings }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <div className="hidden xl:block sticky top-24 w-64 h-fit">
      <div className="border-l border-gray-200 pl-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-4">On this page</h4>
        <nav className="space-y-2">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`block text-sm transition-colors duration-200 hover:text-blue-600 ${
                activeId === heading.id 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-600'
              }`}
              style={{ paddingLeft: `${(heading.level - 2) * 16}px` }}
            >
              {heading.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}