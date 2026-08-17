import type { PageKey } from "../types/nayra";

export type ResourceLifeStage =
  | "childhood"
  | "adolescence"
  | "young-adult"
  | "working-life"
  | "motherhood"
  | "later-life";

export type ResourceCategory =
  | "health"
  | "relationships"
  | "safety"
  | "education"
  | "work"
  | "family"
  | "money"
  | "rights"
  | "digital"
  | "wellbeing";

export type ResourceItem = {
  id: string;
  icon: string;
  category: ResourceCategory;
  categoryLabel: string;
  title: string;
  description: string;
  type?: string;
  duration?: string;
  lifeStages?: ResourceLifeStage[];
};

export const resourceLifeStages = [
  {
    id: "childhood",
    icon: "🌱",
    title: "Childhood",
    age: "0–12",
    description:
      "Safety, wellbeing, body awareness, boundaries and trusted adults.",
  },
  {
    id: "adolescence",
    icon: "🌸",
    title: "Adolescence",
    age: "13–18",
    description:
      "Growing independence, relationships, emotions, identity and online safety.",
  },
  {
    id: "young-adult",
    icon: "🌺",
    title: "Young Adult",
    age: "19–25",
    description:
      "Relationships, education, career, health, independence and new responsibilities.",
  },
  {
    id: "working-life",
    icon: "💼",
    title: "Working Life",
    age: "26–40",
    description:
      "Career, workplace, money, relationships, family and wellbeing.",
  },
  {
    id: "motherhood",
    icon: "🤍",
    title: "Motherhood",
    age: "Life stage",
    description:
      "Pregnancy, postpartum, parenting, relationships and work-life decisions.",
  },
  {
    id: "later-life",
    icon: "🌷",
    title: "Later Life",
    age: "40+",
    description:
      "Health, relationships, financial security, caregiving and independence.",
  },
];

export const resourceSituations: ResourceItem[] = [
  {
    id: "workplace-harassment",
    icon: "🛡️",
    category: "work",
    categoryLabel: "Work & Career",
    title: "Workplace harassment",
    description:
      "Understand what may be happening, explore your options and find appropriate support.",
    lifeStages: ["working-life"],
  },
  {
    id: "burnout",
    icon: "🧠",
    category: "wellbeing",
    categoryLabel: "Emotional Wellbeing",
    title: "Burnout & work stress",
    description:
      "Explore work-related stress, boundaries, wellbeing and possible support.",
    lifeStages: ["young-adult", "working-life"],
  },
  {
    id: "career-change",
    icon: "🎯",
    category: "work",
    categoryLabel: "Work & Career",
    title: "Career change",
    description:
      "Explore information for navigating uncertainty and professional transitions.",
    lifeStages: ["young-adult", "working-life"],
  },
  {
    id: "financial-pressure",
    icon: "💰",
    category: "money",
    categoryLabel: "Money & Independence",
    title: "Financial pressure",
    description:
      "Understand financial stress, independence, planning and possible support options.",
    lifeStages: ["young-adult", "working-life", "later-life"],
  },
  {
    id: "relationship-changes",
    icon: "❤️",
    category: "relationships",
    categoryLabel: "Relationships & Consent",
    title: "Relationship changes",
    description:
      "Explore boundaries, communication and support when relationships change.",
    lifeStages: ["adolescence", "young-adult", "working-life", "motherhood"],
  },
  {
    id: "family-responsibilities",
    icon: "🏠",
    category: "family",
    categoryLabel: "Family & Home",
    title: "Family responsibilities",
    description:
      "Explore caregiving, family expectations and balancing responsibilities.",
    lifeStages: ["working-life", "motherhood", "later-life"],
  },
  {
    id: "bullying",
    icon: "🎓",
    category: "education",
    categoryLabel: "Education & Growth",
    title: "Bullying",
    description:
      "Understand bullying, safety, trusted adults and possible support.",
    lifeStages: ["childhood", "adolescence"],
  },
  {
    id: "body-health",
    icon: "🌱",
    category: "health",
    categoryLabel: "My Body & Health",
    title: "Body & health questions",
    description:
      "Find understandable information about your body, health and wellbeing.",
    lifeStages: [
      "childhood",
      "adolescence",
      "young-adult",
      "working-life",
      "motherhood",
      "later-life",
    ],
  },
];

export const resourceGuides = [
  {
    id: "where-to-start",
    icon: "🧭",
    title: "I don't know where to start",
    description:
      "A simple way to turn a confusing situation into a few possible next steps.",
    type: "Quick guide",
    duration: "5 min",
  },
  {
    id: "safety-plan",
    icon: "🛡️",
    title: "Making a simple safety plan",
    description:
      "Think through trusted people, safer places and practical steps that may help.",
    type: "Practical guide",
    duration: "6 min",
  },
  {
    id: "asking-for-help",
    icon: "💬",
    title: "How to ask someone for help",
    description:
      "You don't need perfect words. Learn how you can begin the conversation.",
    type: "Support guide",
    duration: "4 min",
  },
  {
    id: "understanding-options",
    icon: "⚖️",
    title: "Understanding your options",
    description:
      "Explore choices without feeling pressured to make a decision immediately.",
    type: "Explainer",
    duration: "5 min",
  },
];

export const trustedResources = [
  {
    id: "work-rights",
    icon: "🏛️",
    title: "Workplace rights",
    description:
      "Information that can help you understand workplace rights and available support pathways.",
    type: "Specialist information",
    location: "India",
  },
  {
    id: "health-information",
    icon: "🏥",
    title: "Health information",
    description:
      "Trusted health information to help you understand a topic before deciding what to do next.",
    type: "Health information",
    location: "India",
  },
  {
    id: "rights-information",
    icon: "⚖️",
    title: "Know your options",
    description:
      "General information about rights, processes and where specialist advice may be available.",
    type: "Legal information",
    location: "India",
  },
];

export const exploreResources = [
  {
    icon: "🌱",
    category: "My Body & Health",
    title: "Understanding your body",
    description:
      "Explore practical information about body awareness and wellbeing.",
  },
  {
    icon: "💼",
    category: "Work & Career",
    title: "Healthier workplace boundaries",
    description:
      "Explore boundaries, work pressure and healthy working relationships.",
  },
  {
    icon: "❤️",
    category: "Relationships",
    title: "Understanding healthy relationships",
    description:
      "Learn about communication, boundaries, respect and consent.",
  },
];