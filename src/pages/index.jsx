import Layout from "./Layout.jsx";

import Documentation from "./Documentation";

import ApiReference from "./ApiReference";

import Guides from "./Guides";

import Integrations from "./Integrations";

import CompanyIdentity from "./CompanyIdentity";

import StyleGuide from "./StyleGuide";

import TargetMarket from "./TargetMarket";

import BrandFoundation from "./BrandFoundation";

import BrandStrategy from "./BrandStrategy";

import BrandPositioning from "./BrandPositioning";

import BrandPersonality from "./BrandPersonality";

import BrandVoice from "./BrandVoice";

import BrandMessaging from "./BrandMessaging";

import BrandLanguage from "./BrandLanguage";

import BrandStories from "./BrandStories";

import BrandStorytelling from "./BrandStorytelling";

import BrandScript from "./BrandScript";

import BrandVisualIdentity from "./BrandVisualIdentity";

import BrandDesignSystem from "./BrandDesignSystem";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Documentation: Documentation,
    
    ApiReference: ApiReference,
    
    Guides: Guides,
    
    Integrations: Integrations,
    
    CompanyIdentity: CompanyIdentity,
    
    StyleGuide: StyleGuide,
    
    TargetMarket: TargetMarket,
    
    BrandFoundation: BrandFoundation,
    
    BrandStrategy: BrandStrategy,
    
    BrandPositioning: BrandPositioning,
    
    BrandPersonality: BrandPersonality,
    
    BrandVoice: BrandVoice,
    
    BrandMessaging: BrandMessaging,
    
    BrandLanguage: BrandLanguage,
    
    BrandStories: BrandStories,
    
    BrandStorytelling: BrandStorytelling,
    
    BrandScript: BrandScript,
    
    BrandVisualIdentity: BrandVisualIdentity,
    
    BrandDesignSystem: BrandDesignSystem,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Documentation />} />
                
                
                <Route path="/Documentation" element={<Documentation />} />
                
                <Route path="/ApiReference" element={<ApiReference />} />
                
                <Route path="/Guides" element={<Guides />} />
                
                <Route path="/Integrations" element={<Integrations />} />
                
                <Route path="/CompanyIdentity" element={<CompanyIdentity />} />
                
                <Route path="/StyleGuide" element={<StyleGuide />} />
                
                <Route path="/TargetMarket" element={<TargetMarket />} />
                
                <Route path="/BrandFoundation" element={<BrandFoundation />} />
                
                <Route path="/BrandStrategy" element={<BrandStrategy />} />
                
                <Route path="/BrandPositioning" element={<BrandPositioning />} />
                
                <Route path="/BrandPersonality" element={<BrandPersonality />} />
                
                <Route path="/BrandVoice" element={<BrandVoice />} />
                
                <Route path="/BrandMessaging" element={<BrandMessaging />} />
                
                <Route path="/BrandLanguage" element={<BrandLanguage />} />
                
                <Route path="/BrandStories" element={<BrandStories />} />
                
                <Route path="/BrandStorytelling" element={<BrandStorytelling />} />
                
                <Route path="/BrandScript" element={<BrandScript />} />
                
                <Route path="/BrandVisualIdentity" element={<BrandVisualIdentity />} />
                
                <Route path="/BrandDesignSystem" element={<BrandDesignSystem />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}