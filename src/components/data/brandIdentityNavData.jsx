export const brandIdentityNavigation = [
  {
    title: "THE BRAND FOUNDATION",
    page: "BrandFoundation",
    items: [
      "Brand Identity Overview",
      "Brand Identity Summary", 
      "Brand Overview",
      "Brand Vision",
      "Brand Mission",
      "Brand Purpose",
      "Brand Core Values",
      "Brand Guiding Principles",
      "Brand Promise Statement",
      "Brand Promises"
    ]
  },
  {
    title: "BRAND STRATEGY",
    page: "BrandStrategy",
    items: [
      "Brand Strategy Overview",
      "Brand Strategy",
      "Strategic Brand Foundations",
      "Brand Architecture",
      "Category Disruption Strategy",
      "Key Differentiators"
    ]
  },
  {
    title: "BRAND POSITIONING",
    page: "BrandPositioning",
    items: [
      "Brand Positioning Overview",
      "Brand Positioning",
      "Market Category Definition",
      "Target Audience Positioning",
      "Competitive Positioning Matrix",
      "Positioning Statement",
      "Value Proposition Statement",
      "Points of Difference",
      "Points of Parity",
      "Brand Benefits Hierarchy",
      "Brand Positioning Messaging"
    ]
  },
  {
    title: "BRAND PERSONALITY",
    page: "BrandPersonality",
    items: [
      "Brand Personality Overview",
      "Brand Personality",
      "Brand Archetype",
      "Brand Enneagram Type",
      "Brand Character Traits",
      "Brand Personality Attributes",
      "Brand Emotions",
      "Humor Guidelines",
      "Brand Dos and Don'ts"
    ]
  },
  {
    title: "BRAND VOICE",
    page: "BrandVoice",
    items: [
      "Brand Voice",
      "Brand Tone",
      "Brand Voice Characteristics",
      "Brand Tonality Spectrum",
      "Brand Tone Adjectives",
      "Brand Tone of Voice Guidelines"
    ]
  },
  {
    title: "BRAND MESSAGING",
    page: "BrandMessaging",
    items: [
      "Brand Messaging Overview",
      "Brand Messaging",
      "Brand Main Message",
      "Brand Essence Wheel Overview",
      "Brand Empathy Overview",
      "Brand Empathy",
      "Brand Call to Actions",
      "Brand Emotional Triggers"
    ]
  },
  {
    title: "BRAND LANGUAGE",
    page: "BrandLanguage",
    items: [
      "Brand Language Overview",
      "Brand Language",
      "Brand Writing Style Overview",
      "Brand Writing Style",
      "Brand Writing",
      "Brand Vocabulary List",
      "Brand Terms Overview",
      "Brand Terms",
      "Brand Adjectives, Verbs, and Adverbs",
      "Brand Benefits Keywords",
      "Brand Audience Identifiers Keywords",
      "Brand Differentiators Keywords",
      "Brand Linguistics",
      "Brand Phonology",
      "Brand Morphology",
      "Brand Syntax",
      "Brand Semantics",
      "Brand AI Guidelines"
    ]
  },
  {
    title: "BRAND STORIES",
    page: "BrandStories",
    items: [
      "Brand Narrative Overview",
      "Brand Narrative",
      "Origin Story Framework",
      "Founder's Journey Narrative",
      "Brand Purpose Narrative",
      "Brand Values Storytelling",
      "Customer Transformation Stories",
      "Product Journey Narratives",
      "Vision and Future Narratives",
      "Challenge and Resolution Stories",
      "Innovation Narratives",
      "Impact Storytelling Framework",
      "Employee Stories Framework"
    ]
  },
  {
    title: "BRAND STORYTELLING",
    page: "BrandStorytelling",
    items: [
      "Brand Storytelling Approach Overview",
      "Brand Storytelling Approach",
      "Contextual Storytelling Adjustments"
    ]
  },
  {
    title: "BRANDSCRIPT",
    page: "BrandScript",
    items: [
      "BrandScript",
      "BrandScript Paragraph",
      "Customer StoryBrand BrandScript",
      "Customer's Transformation Story",
      "The External Hero's Journey",
      "The Inner Hero's Journey"
    ]
  },
  {
    title: "BRAND VISUAL IDENTITY",
    page: "BrandVisualIdentity",
    items: [
      "Logo",
      "Logo Usage Guidelines",
      "Color Palette",
      "Typography",
      "Iconography",
      "Photography",
      "Illustrations",
      "Graphics",
      "Data Visualization",
      "Animations",
      "Gifs",
      "Emojis"
    ]
  },
  {
    title: "BRAND DESIGN SYSTEM",
    page: "BrandDesignSystem",
    items: [
      "Design System Overview",
      "Grid System & Layout Guidelines",
      "Spacing System",
      "Component Library",
      "UI Elements (Buttons, Forms, Cards, etc.)",
      "Navigation Patterns",
      "Responsive Design Guidelines",
      "Interactive States (Hover, Active, Focus, Disabled)",
      "Accessibility Standards",
      "Motion & Animation Principles",
      "Web & Mobile Application Standards",
      "Design Tokens",
      "Component Variants & States",
      "UI Patterns & Best Practices",
      "Design-to-Development Handoff Guidelines",
      "Page Templates & Layouts",
      "Microinteractions",
      "Loading States & Feedback Patterns",
      "Error States & Messages",
      "Dark Mode Guidelines",
      "Device-Specific Adaptations",
      "Design System Versioning",
      "Documentation Standards",
      "Design System Governance"
    ]
  }
];

// Helper function to convert titles to URL-friendly anchors
export const createAnchorId = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens and spaces
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};