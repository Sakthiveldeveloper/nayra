import type { HelpOption, LifeArea, LifeStage, Resource } from "../types/nayra";

export const lifeAreas: LifeArea[] = [
  { id: "body", icon: "🌱", title: "My Body & Health", description: "Periods, reproductive health, fitness and wellbeing.", tone: "mint", situations: ["First period", "Period pain", "Body changes", "Sexual health"] },
  { id: "relationships", icon: "♡", title: "Relationships & Consent", description: "Love, boundaries, consent, dating and difficult relationships.", tone: "rose", situations: ["Healthy relationships", "Consent", "Breakups", "Relationship pressure"] },
  { id: "safety", icon: "🛡", title: "Safety & Protection", description: "Harassment, abuse, assault, stalking and personal safety.", tone: "peach", situations: ["Harassment", "Abuse", "Stalking", "Sexual assault"] },
  { id: "education", icon: "🎓", title: "Education & Growth", description: "School, college, skills, confidence and personal growth.", tone: "lavender", situations: ["Bullying", "College safety", "Skills", "Confidence"] },
  { id: "work", icon: "💼", title: "Work & Career", description: "Workplace rights, career growth and independence.", tone: "blue", situations: ["Workplace harassment", "Career", "Discrimination", "Returning to work"] },
  { id: "family", icon: "⌂", title: "Family & Home", description: "Family issues, marriage, boundaries and home life.", tone: "violet", situations: ["Marriage", "Family conflict", "Boundaries", "Separation"] },
  { id: "motherhood", icon: "🤍", title: "Pregnancy & Motherhood", description: "Pregnancy, postpartum, parenting and support.", tone: "peach", situations: ["Pregnancy", "Postpartum", "Parenting", "Childcare"] },
  { id: "travel", icon: "✈", title: "Travel & Mobility", description: "Safe travel, transport, accommodation and emergencies.", tone: "sand", situations: ["Solo travel", "Transport", "Accommodation", "Emergency"] },
  { id: "rights", icon: "⚖", title: "Rights & Legal", description: "Know your rights, complaints and official processes.", tone: "rose", situations: ["Know my rights", "Complaints", "Workplace rights", "Legal support"] },
  { id: "money", icon: "₹", title: "Money & Independence", description: "Banking, savings, scams and financial independence.", tone: "mint", situations: ["Banking", "Savings", "Scams", "Financial safety"] },
  { id: "digital", icon: "⌁", title: "Digital Life & Safety", description: "Privacy, social media, stalking and online abuse.", tone: "blue", situations: ["Privacy", "Cyberbullying", "Online stalking", "Image abuse"] },
  { id: "wellbeing", icon: "☼", title: "Emotional Wellbeing", description: "Stress, loneliness, confidence and finding support.", tone: "lavender", situations: ["Stress", "Loneliness", "Confidence", "Professional support"] },
  { id: "later", icon: "✿", title: "Later Life", description: "Health, relationships, finances and independence.", tone: "mint", situations: ["Independence", "Caregiving", "Financial safety", "Social connection"] },
];

export const lifeStages: LifeStage[] = [
  { id: "childhood", title: "Childhood", age: "0–12", icon: "🌱", description: "Body awareness, boundaries, trusted adults and safety." },
  { id: "adolescence", title: "Adolescence", age: "13–18", icon: "🌸", description: "Puberty, periods, emotions, relationships and online safety." },
  { id: "young-adult", title: "Young Adult", age: "19–25", icon: "🌺", description: "College, relationships, sexual health, safety and career." },
  { id: "working", title: "Working Life", age: "26–40", icon: "💼", description: "Career, workplace rights, money and independence." },
  { id: "motherhood", title: "Motherhood", age: "Life stage", icon: "🤍", description: "Pregnancy, postpartum, parenting and work-life decisions." },
  { id: "later", title: "Later Life", age: "40+", icon: "🌷", description: "Health, family, financial safety and independence." },
];

export const helpOptions: HelpOption[] = [
  { id: "danger", icon: "☎", title: "I am in immediate danger", description: "Prioritise your immediate safety and reach appropriate emergency support.", urgent: true },
  { id: "unsafe", icon: "🛡", title: "I don't feel safe", description: "Create a practical safety plan and identify trusted support." },
  { id: "incident", icon: "✦", title: "Something happened to me", description: "Understand possible next steps without forcing you to make a decision." },
  { id: "complaint", icon: "▤", title: "I want to report or complain", description: "Understand the relevant official route and what information may help." },
  { id: "support", icon: "♧", title: "I need a person to talk to", description: "Find appropriate human, professional or community support." },
];

export const resources: Resource[] = [
  { id: "r1", category: "Rights", title: "Know your rights", description: "Start with plain-language explanations and then move to verified official sources.", type: "official" },
  { id: "r2", category: "Safety", title: "Personal safety planning", description: "A structured way to think through people, places, communication and support.", type: "guide" },
  { id: "r3", category: "Support", title: "Verified support directory", description: "A future directory for verified organisations and services by location.", type: "support" },
  { id: "r4", category: "Health", title: "Women's health guides", description: "Clear educational information with guidance on when professional care may be appropriate.", type: "guide" },
];
