

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Search, 
  Menu, 
  X, 
  ChevronRight,
  Book,
  Code,
  Layers,
  Zap,
  FileText,
  ExternalLink,
  Building,
  Palette,
  Ruler,
  Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { brandIdentityNavigation, createAnchorId } from "./components/data/brandIdentityNavData";

const navigationItems = [
  {
    title: "Documentation",
    items: [
      { title: "Overview", url: createPageUrl("Documentation"), icon: Book },
      { title: "API Reference", url: createPageUrl("ApiReference"), icon: Code },
      { title: "Guides", url: createPageUrl("Guides"), icon: FileText },
      { title: "Integrations", url: createPageUrl("Integrations"), icon: Layers },
    ]
  },
  {
    title: "Knowledge Base",
    items: [
      { title: "Company Identity", url: createPageUrl("CompanyIdentity"), icon: Building },
      { title: "Brand Identity", url: createPageUrl("BrandFoundation"), icon: Palette },
      { title: "Style Guide", url: createPageUrl("StyleGuide"), icon: Ruler },
      { title: "Target Market", url: createPageUrl("TargetMarket"), icon: Target },
    ]
  }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Check if we're on a brand page
  const brandPages = brandIdentityNavigation.map(section => section.page);
  const isBrandPage = brandPages.includes(currentPageName);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --stripe-navy: #0A2540;
          --stripe-blue: #635BFF;
          --stripe-light-blue: #00D4FF;
          --stripe-gray: #425466;
          --stripe-light-gray: #8898AA;
          --stripe-bg: #FAFBFC;
        }
        
        .font-stripe {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-feature-settings: "cv02", "cv03", "cv04", "cv11";
        }
        
        .gradient-border {
          background: linear-gradient(135deg, var(--stripe-blue), var(--stripe-light-blue));
          padding: 1px;
          border-radius: 8px;
        }
        
        .gradient-border-inner {
          background: white;
          border-radius: 7px;
        }
        
        .nav-link {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link:hover {
          color: var(--stripe-blue);
          transform: translateY(-1px);
        }
        
        .sidebar-link {
          transition: all 0.15s ease;
          border-left: 2px solid transparent;
        }
        
        .sidebar-link:hover {
          background-color: #F8FAFC;
          border-left-color: var(--stripe-light-blue);
        }
        
        .sidebar-link.active {
          background-color: #F1F5F9;
          border-left-color: var(--stripe-blue);
          color: var(--stripe-blue);
          font-weight: 500;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 font-stripe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <Link to={createPageUrl("Documentation")} className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">DevDocs</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-8">
                <Link to={createPageUrl("Documentation")} className="nav-link text-gray-700 hover:text-blue-600 font-medium">
                  Documentation
                </Link>
                <Link to={createPageUrl("ApiReference")} className="nav-link text-gray-700 hover:text-blue-600 font-medium">
                  API Reference
                </Link>
                <Link to={createPageUrl("Guides")} className="nav-link text-gray-700 hover:text-blue-600 font-medium">
                  Guides
                </Link>
                <a href="#" className="nav-link text-gray-700 hover:text-blue-600 font-medium flex items-center gap-1">
                  Support <ExternalLink className="w-3 h-3" />
                </a>
              </nav>
            </div>

            {/* Search and Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden sm:block relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-300 focus:ring-blue-200"
                />
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className={`${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:sticky top-16 left-0 z-40 w-72 h-screen bg-white lg:bg-transparent border-r border-gray-100 transition-transform duration-300 ease-in-out font-stripe`}>
          <div className="p-6 h-full overflow-y-auto">
            {/* Mobile Search */}
            <div className="sm:hidden mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 bg-gray-50 border-gray-200"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-8">
              {isBrandPage ? (
                // Brand Identity detailed navigation
                <>
                  {brandIdentityNavigation.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        {section.title}
                      </h3>
                      <ul className="space-y-1">
                        {section.items.map((item) => (
                          <li key={item}>
                            <a
                              href={`${createPageUrl(section.page)}#${createAnchorId(item)}`}
                              className="sidebar-link flex items-center px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900"
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </>
              ) : (
                // Default navigation
                <>
                  {navigationItems.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        {section.title}
                      </h3>
                      <ul className="space-y-1">
                        {section.items.map((item) => (
                          <li key={item.title}>
                            <Link
                              to={item.url}
                              className={`sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                                location.pathname === item.url
                                  ? 'active'
                                  : 'text-gray-700 hover:text-gray-900'
                              }`}
                            >
                              <item.icon className="w-4 h-4" />
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Quick Links */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Quick Links
                    </h3>
                    <ul className="space-y-1">
                      <li>
                        <a href="#" className="sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900">
                          <ExternalLink className="w-4 h-4" />
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a href="#" className="sidebar-link flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-700 hover:text-gray-900">
                          <ExternalLink className="w-4 h-4" />
                          Community
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 top-16"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:pl-0 font-stripe">
          {children}
        </main>
      </div>
    </div>
  );
}

