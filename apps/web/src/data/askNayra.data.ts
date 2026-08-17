export type QuickStart = {
    id: string;
    icon: string;
    title: string;
    description: string;
  };
  
  export type SupportOption = {
    id: string;
    icon: string;
    title: string;
    description: string;
    action: string;
  };
  
  export type ResourceRecommendation = {
    id: string;
    icon: string;
    category: string;
    title: string;
    description: string;
  };
  
  export const quickStarts: QuickStart[] = [
    {
      id: "something-happened",
      icon: "✨",
      title: "Something happened to me",
      description:
        "Help me understand what happened and what options I may have.",
    },
    {
      id: "not-safe",
      icon: "🛡️",
      title: "I don't feel safe",
      description:
        "Explore practical safety steps, trusted people and support options.",
    },
    {
      id: "options",
      icon: "🧭",
      title: "I don't know my options",
      description:
        "Understand possible next steps without being pushed into a decision.",
    },
    {
      id: "rights",
      icon: "⚖️",
      title: "I want to understand my rights",
      description:
        "Find information that may help you understand your choices.",
    },
    {
      id: "health",
      icon: "🌱",
      title: "I need health information",
      description:
        "Explore understandable information about your body and wellbeing.",
    },
    {
      id: "talk",
      icon: "💬",
      title: "I just need to talk",
      description:
        "Start putting what you're experiencing into words.",
    },
  ];
  
  export const supportOptions: SupportOption[] = [
    {
      id: "trusted-person",
      icon: "👤",
      title: "Someone I trust",
      description:
        "A friend, family member, teacher, colleague or another person you feel comfortable reaching out to.",
      action: "Explore",
    },
    {
      id: "organisation",
      icon: "🏢",
      title: "A trusted organisation",
      description:
        "Explore organisations and services that may be able to provide specialist support.",
      action: "Find organisations",
    },
    {
      id: "near-me",
      icon: "📍",
      title: "Support near me",
      description:
        "Find relevant services and support options based on your location.",
      action: "Find support",
    },
  ];
  
  export const recommendedResources: ResourceRecommendation[] = [
    {
      id: "rights",
      icon: "⚖️",
      category: "Rights & options",
      title: "Know your options",
      description:
        "Understand your choices and possible next steps before making a decision.",
    },
    {
      id: "workplace",
      icon: "💼",
      category: "Work & career",
      title: "Workplace support",
      description:
        "Explore workplace concerns, boundaries, safety and available support.",
    },
    {
      id: "relationships",
      icon: "❤️",
      category: "Relationships",
      title: "Healthy relationships",
      description:
        "Explore communication, boundaries, respect and relationship support.",
    },
  ];
  
  export const conversationSuggestions = [
    "Explain this differently",
    "What are my options?",
    "What should I consider?",
    "Find support",
    "Show trusted sources",
  ];