export type LifeMapArea = {
    id: string;
    icon: string;
    title: string;
    description: string;
  };
  
  export type LifeMapSituation = {
    id: string;
    title: string;
    category: string;
    icon: string;
    shortDescription: string;
  
    whatMightBeHappening: string[];
    thingsToKnow: string[];
    optionsToExplore: string[];
    trustedSupport: string[];
  
    askNayraPrompt: string;
  
    tags: string[];
  };
  
  export type LifeMapStage = {
    id: string;
    icon: string;
    title: string;
    ageRange: string;
  
    shortDescription: string;
    description: string;
  
    themes: string[];
  
    areas: LifeMapArea[];
  
    situations: LifeMapSituation[];
  
    selfCare: {
      title: string;
      description: string;
      icon: string;
    }[];
  
    reflectionQuestions: string[];
  
    supportMessage: string;
  };
  
  /* -------------------------------------------------------------------------- */
  /* CHILDHOOD                                                                   */
  /* -------------------------------------------------------------------------- */
  
  const childhood: LifeMapStage = {
    id: "childhood",
    icon: "🌱",
    title: "Childhood",
    ageRange: "0–12",
  
    shortDescription:
      "Building safety, awareness, confidence and healthy relationships.",
  
    description:
      "Childhood is a time of learning about yourself, your body, your emotions and the people around you.",
  
    themes: [
      "Safety",
      "Body awareness",
      "Family",
      "School",
      "Friendships",
    ],
  
    areas: [
      {
        id: "childhood-safety",
        icon: "🛡️",
        title: "Safety & Protection",
        description:
          "Understanding safe and unsafe situations and knowing who can help.",
      },
      {
        id: "childhood-body",
        icon: "🌱",
        title: "Body & Health",
        description:
          "Learning about your body, personal boundaries and wellbeing.",
      },
      {
        id: "childhood-family",
        icon: "🏠",
        title: "Family & Home",
        description:
          "Family relationships, communication and feeling safe at home.",
      },
      {
        id: "childhood-school",
        icon: "🎓",
        title: "School & Learning",
        description:
          "School experiences, learning, confidence and friendships.",
      },
      {
        id: "childhood-friends",
        icon: "💛",
        title: "Friendships",
        description:
          "Making friends, handling conflict and building healthy connections.",
      },
    ],
  
    situations: [
      {
        id: "school-bullying",
        title: "Bullying",
        category: "Education & Growth",
        icon: "🎓",
        shortDescription:
          "Understanding bullying and finding safe ways to get support.",
  
        whatMightBeHappening: [
          "Someone may repeatedly say or do things that make you feel unsafe.",
          "You may feel worried about going to school or being around certain people.",
          "You may not know who you can safely tell.",
        ],
  
        thingsToKnow: [
          "Bullying is not your fault.",
          "You deserve to feel safe at school and elsewhere.",
          "Talking to a trusted adult can be an important first step.",
        ],
  
        optionsToExplore: [
          "Talk to a trusted parent, teacher or adult.",
          "Write down what has been happening.",
          "Ask someone you trust to help you report it.",
        ],
  
        trustedSupport: [
          "Trusted parent or caregiver",
          "Teacher or school counsellor",
          "Another trusted adult",
        ],
  
        askNayraPrompt:
          "Something is happening at school and I don't know what to do.",
  
        tags: ["Bullying", "School", "Safety"],
      },
  
      {
        id: "body-boundaries",
        title: "Body boundaries",
        category: "My Body & Health",
        icon: "🌱",
        shortDescription:
          "Learning that your body belongs to you and understanding personal boundaries.",
  
        whatMightBeHappening: [
          "You may feel uncomfortable when someone gets too close.",
          "Someone may ask you to do something you don't want to do.",
        ],
  
        thingsToKnow: [
          "You can have boundaries even with people you know.",
          "You can say no when something makes you uncomfortable.",
          "A trusted adult can help when something does not feel right.",
        ],
  
        optionsToExplore: [
          "Move away from an uncomfortable situation.",
          "Tell a trusted adult.",
          "Ask for help if you feel unsafe.",
        ],
  
        trustedSupport: [
          "Parent or caregiver",
          "Teacher",
          "Trusted family member",
        ],
  
        askNayraPrompt:
          "Something happened that made me uncomfortable and I want to understand it.",
  
        tags: ["Boundaries", "Safety", "Body"],
      },
    ],
  
    selfCare: [
      {
        icon: "🌱",
        title: "Talk to someone",
        description:
          "Sharing worries with a trusted adult can make difficult situations easier to handle.",
      },
      {
        icon: "💛",
        title: "Take a break",
        description:
          "Give yourself time to rest when things feel overwhelming.",
      },
    ],
  
    reflectionQuestions: [
      "Who makes me feel safe?",
      "What situations make me uncomfortable?",
      "Who can I talk to when I need help?",
    ],
  
    supportMessage:
      "You don't have to understand everything on your own. A trusted adult can help you make sense of what is happening.",
  };
  
  /* -------------------------------------------------------------------------- */
  /* ADOLESCENCE                                                                 */
  /* -------------------------------------------------------------------------- */
  
  const adolescence: LifeMapStage = {
    id: "adolescence",
    icon: "🌸",
    title: "Adolescence",
    ageRange: "13–18",
  
    shortDescription:
      "Growing, discovering identity, relationships and independence.",
  
    description:
      "Adolescence can bring changes in your body, emotions, friendships, relationships and the way you see yourself.",
  
    themes: [
      "Identity",
      "Relationships",
      "Body",
      "Education",
      "Online safety",
      "Independence",
    ],
  
    areas: [
      {
        id: "adolescence-body",
        icon: "🌱",
        title: "Body & Health",
        description:
          "Periods, puberty, body changes and understanding your wellbeing.",
      },
      {
        id: "adolescence-relationships",
        icon: "♡",
        title: "Relationships",
        description:
          "Friendships, dating, boundaries, consent and emotional connections.",
      },
      {
        id: "adolescence-education",
        icon: "🎓",
        title: "Education & Growth",
        description:
          "School, exams, confidence, skills and future choices.",
      },
      {
        id: "adolescence-digital",
        icon: "📱",
        title: "Digital Life",
        description:
          "Social media, privacy, online relationships and digital safety.",
      },
      {
        id: "adolescence-self",
        icon: "✦",
        title: "Identity & Wellbeing",
        description:
          "Confidence, emotions, self-image and understanding yourself.",
      },
    ],
  
    situations: [
      {
        id: "first-period",
        title: "First period",
        category: "My Body & Health",
        icon: "🌱",
        shortDescription:
          "Understand period changes and what you may experience.",
  
        whatMightBeHappening: [
          "Your first period may feel unexpected or confusing.",
          "You may have questions about pain, bleeding or hygiene.",
        ],
  
        thingsToKnow: [
          "Periods are a normal part of puberty.",
          "Cycles can be irregular when they first begin.",
          "Severe or unusual symptoms may need medical advice.",
        ],
  
        optionsToExplore: [
          "Learn about period care.",
          "Talk to a trusted adult or healthcare professional.",
          "Keep track of your cycle and symptoms.",
        ],
  
        trustedSupport: [
          "Parent or trusted adult",
          "Doctor or healthcare professional",
          "School health professional",
        ],
  
        askNayraPrompt:
          "I got my first period and I have a few questions.",
  
        tags: ["Period", "Puberty", "Health"],
      },
  
      {
        id: "healthy-relationships",
        title: "Healthy relationships",
        category: "Relationships & Consent",
        icon: "♡",
        shortDescription:
          "Learn about respect, communication, boundaries and consent.",
  
        whatMightBeHappening: [
          "You may be unsure whether a relationship feels healthy.",
          "You may find it difficult to communicate what you want.",
          "Someone's behaviour may leave you feeling uncomfortable or pressured.",
        ],
  
        thingsToKnow: [
          "Healthy relationships involve respect and communication.",
          "You are allowed to have boundaries.",
          "Consent should be freely given and can change.",
        ],
  
        optionsToExplore: [
          "Think about how the relationship makes you feel.",
          "Talk to someone you trust.",
          "Learn more about boundaries and consent.",
        ],
  
        trustedSupport: [
          "Trusted adult",
          "Counsellor",
          "Qualified support professional",
        ],
  
        askNayraPrompt:
          "I'm not sure if my relationship is healthy.",
  
        tags: ["Relationships", "Consent", "Boundaries"],
      },
  
      {
        id: "online-safety",
        title: "Online safety",
        category: "Digital Life & Safety",
        icon: "📱",
        shortDescription:
          "Protect your privacy and understand difficult online situations.",
  
        whatMightBeHappening: [
          "Someone may be contacting you in a way that feels uncomfortable.",
          "You may be worried about private information or images.",
          "You may be experiencing harassment online.",
        ],
  
        thingsToKnow: [
          "You don't have to respond to someone who makes you uncomfortable.",
          "You can block or report accounts.",
          "Keep evidence when you need to report harmful behaviour.",
        ],
  
        optionsToExplore: [
          "Review your privacy settings.",
          "Block or report the account.",
          "Talk to a trusted adult.",
        ],
  
        trustedSupport: [
          "Trusted adult",
          "School counsellor",
          "Appropriate online safety support",
        ],
  
        askNayraPrompt:
          "Something online is making me uncomfortable.",
  
        tags: ["Online Safety", "Privacy", "Social Media"],
      },
    ],
  
    selfCare: [
      {
        icon: "🧘",
        title: "Give yourself space",
        description:
          "You don't have to solve every problem immediately.",
      },
      {
        icon: "💬",
        title: "Talk it through",
        description:
          "Speaking with someone you trust can help you understand your feelings.",
      },
      {
        icon: "🌱",
        title: "Build healthy routines",
        description:
          "Sleep, movement, food and time away from screens can support wellbeing.",
      },
    ],
  
    reflectionQuestions: [
      "What has been changing for me recently?",
      "Which relationships make me feel respected?",
      "What do I want more control over?",
      "Who can I talk to when things become difficult?",
    ],
  
    supportMessage:
      "Growing up can be exciting and confusing at the same time. You deserve information, respect and support.",
  };
  
  /* -------------------------------------------------------------------------- */
  /* YOUNG ADULT                                                                 */
  /* -------------------------------------------------------------------------- */
  
  const youngAdult: LifeMapStage = {
    id: "young-adult",
    icon: "🌺",
    title: "Young Adult",
    ageRange: "19–25",
  
    shortDescription:
      "Relationships, education, career, health and growing independence.",
  
    description:
      "Young adulthood often brings new freedom alongside new responsibilities, decisions and uncertainty.",
  
    themes: [
      "Relationships",
      "Career",
      "Education",
      "Health",
      "Money",
      "Independence",
    ],
  
    areas: [
      {
        id: "young-identity",
        icon: "👤",
        title: "Identity & Self",
        description:
          "Understand who you are, what matters to you and where you're going.",
      },
      {
        id: "young-relationships",
        icon: "💗",
        title: "Relationships",
        description:
          "Healthy relationships, boundaries, dating and communication.",
      },
      {
        id: "young-career",
        icon: "🎯",
        title: "Career & Goals",
        description:
          "Education, first jobs, career direction and workplace decisions.",
      },
      {
        id: "young-wellbeing",
        icon: "🧠",
        title: "Mental Wellbeing",
        description:
          "Stress, loneliness, confidence and emotional wellbeing.",
      },
      {
        id: "young-money",
        icon: "₹",
        title: "Financial Basics",
        description:
          "Money management, independence, savings and financial pressure.",
      },
    ],
  
    situations: [
      {
        id: "career-confusion",
        title: "Career confusion",
        category: "Work & Career",
        icon: "💼",
        shortDescription:
          "You're unsure which direction to take with your career.",
  
        whatMightBeHappening: [
          "You may feel pressure to have everything figured out.",
          "You may be comparing your progress with other people.",
          "You may not know which opportunity fits you.",
        ],
  
        thingsToKnow: [
          "Your first decision does not have to define your whole career.",
          "Exploring options can be more useful than rushing into one.",
          "Skills and interests can change over time.",
        ],
  
        optionsToExplore: [
          "Identify your strengths and interests.",
          "Compare different career paths.",
          "Speak with someone working in a field you're considering.",
        ],
  
        trustedSupport: [
          "Career counsellor",
          "Mentor",
          "Trusted professional",
        ],
  
        askNayraPrompt:
          "I'm confused about my career and don't know which direction to take.",
  
        tags: ["Career", "Education", "Goals"],
      },
  
      {
        id: "money-worries",
        title: "Money worries",
        category: "Money & Independence",
        icon: "₹",
        shortDescription:
          "Understand financial pressure and practical next steps.",
  
        whatMightBeHappening: [
          "You may be struggling to manage expenses.",
          "You may feel pressure to become financially independent.",
          "You may be unsure where to start with saving or budgeting.",
        ],
  
        thingsToKnow: [
          "Financial stress is common during major life transitions.",
          "Small changes can improve visibility over your finances.",
          "Avoid making financial decisions under pressure when possible.",
        ],
  
        optionsToExplore: [
          "List essential and non-essential expenses.",
          "Create a simple budget.",
          "Look for trustworthy financial guidance.",
        ],
  
        trustedSupport: [
          "Qualified financial professional",
          "Trusted family member",
          "Recognised financial education resources",
        ],
  
        askNayraPrompt:
          "I'm worried about money and don't know what to do first.",
  
        tags: ["Money", "Budget", "Independence"],
      },
  
      {
        id: "anxiety-stress",
        title: "Anxiety & stress",
        category: "Emotional Wellbeing",
        icon: "🧠",
        shortDescription:
          "Understand overwhelming feelings and explore supportive next steps.",
  
        whatMightBeHappening: [
          "You may feel overwhelmed by work, studies or relationships.",
          "Your thoughts may feel difficult to switch off.",
          "You may feel stuck or unable to decide what to do next.",
        ],
  
        thingsToKnow: [
          "Stress can affect your thoughts, body and everyday routines.",
          "You don't have to manage everything alone.",
          "Persistent or severe distress may be a reason to seek professional support.",
        ],
  
        optionsToExplore: [
          "Identify what is creating the most pressure.",
          "Break one difficult problem into smaller steps.",
          "Talk with someone you trust.",
        ],
  
        trustedSupport: [
          "Mental health professional",
          "Doctor",
          "Trusted person",
        ],
  
        askNayraPrompt:
          "I've been feeling overwhelmed and don't know where to start.",
  
        tags: ["Stress", "Anxiety", "Wellbeing"],
      },
    ],
  
    selfCare: [
      {
        icon: "🌿",
        title: "Daily reset",
        description:
          "Create small routines that give your mind space to recover.",
      },
      {
        icon: "🧘",
        title: "Slow down",
        description:
          "Take a short pause before making decisions when everything feels urgent.",
      },
      {
        icon: "💬",
        title: "Talk it through",
        description:
          "You don't need the perfect words to ask someone for support.",
      },
    ],
  
    reflectionQuestions: [
      "What matters most to me right now?",
      "What kind of life am I trying to build?",
      "Where am I feeling the most pressure?",
      "What support would make this easier?",
    ],
  
    supportMessage:
      "You don't need to have your whole life figured out. Understanding your options is already a step forward.",
  };
  
  /* -------------------------------------------------------------------------- */
  /* WORKING LIFE                                                                */
  /* -------------------------------------------------------------------------- */
  
  const workingLife: LifeMapStage = {
    id: "working-life",
    icon: "💼",
    title: "Working Life",
    ageRange: "26–40",
  
    shortDescription:
      "Career, workplace rights, money, relationships and independence.",
  
    description:
      "Working life can bring career growth and independence, but also workplace pressure, financial responsibilities and changing relationships.",
  
    themes: [
      "Career",
      "Workplace",
      "Money",
      "Relationships",
      "Family",
      "Wellbeing",
    ],
  
    areas: [
      {
        id: "work-career",
        icon: "💼",
        title: "Career & Workplace",
        description:
          "Career growth, workplace culture, rights and difficult work situations.",
      },
      {
        id: "work-money",
        icon: "₹",
        title: "Money & Independence",
        description:
          "Financial planning, responsibilities and independence.",
      },
      {
        id: "work-family",
        icon: "🏠",
        title: "Family & Home",
        description:
          "Family responsibilities, relationships and home decisions.",
      },
      {
        id: "work-relationships",
        icon: "♡",
        title: "Relationships",
        description:
          "Partnerships, communication, boundaries and major life decisions.",
      },
      {
        id: "work-wellbeing",
        icon: "🧠",
        title: "Wellbeing",
        description:
          "Stress, burnout, balance and taking care of yourself.",
      },
    ],
  
    situations: [
      {
        id: "workplace-harassment",
        title: "Workplace harassment",
        category: "Work & Career",
        icon: "🛡️",
        shortDescription:
          "Understand your options when workplace behaviour feels inappropriate or unsafe.",
  
        whatMightBeHappening: [
          "Someone at work may repeatedly make unwanted comments or behave inappropriately.",
          "You may feel uncomfortable, pressured or afraid of consequences.",
          "You may be unsure whether what happened should be reported.",
        ],
  
        thingsToKnow: [
          "You deserve to feel safe and respected at work.",
          "Keeping records of incidents may help you understand what has happened.",
          "Depending on the situation, formal workplace or legal support may be available.",
        ],
  
        optionsToExplore: [
          "Document relevant incidents.",
          "Review your organisation's policies.",
          "Speak with an appropriate trusted person or support service.",
        ],
  
        trustedSupport: [
          "HR or designated workplace contact",
          "Appropriate professional support",
          "Legal support where appropriate",
        ],
  
        askNayraPrompt:
          "Something is happening at work and I'm not sure what my options are.",
  
        tags: ["Workplace", "Harassment", "Rights"],
      },
  
      {
        id: "burnout",
        title: "Burnout & work pressure",
        category: "Emotional Wellbeing",
        icon: "🧠",
        shortDescription:
          "Understand persistent work pressure and explore ways forward.",
  
        whatMightBeHappening: [
          "You may feel exhausted even after resting.",
          "Work may be affecting your sleep, relationships or motivation.",
          "You may feel unable to switch off.",
        ],
  
        thingsToKnow: [
          "Long-term stress can affect both mental and physical wellbeing.",
          "You don't need to wait until everything becomes overwhelming before seeking support.",
          "Workplace changes may sometimes be part of the solution.",
        ],
  
        optionsToExplore: [
          "Identify the main sources of pressure.",
          "Discuss workload or expectations where appropriate.",
          "Consider professional wellbeing support.",
        ],
  
        trustedSupport: [
          "Mental health professional",
          "Doctor",
          "Trusted workplace support",
        ],
  
        askNayraPrompt:
          "Work has been exhausting me and I think I may be burning out.",
  
        tags: ["Burnout", "Work", "Stress"],
      },
  
      {
        id: "career-change",
        title: "Career change",
        category: "Work & Career",
        icon: "🎯",
        shortDescription:
          "Think through a career move without rushing the decision.",
  
        whatMightBeHappening: [
          "Your current role may no longer feel meaningful.",
          "You may want better growth, balance or income.",
          "You may be uncertain about the risks of changing direction.",
        ],
  
        thingsToKnow: [
          "A career change can involve both opportunities and practical risks.",
          "You can explore a new direction before making a major commitment.",
        ],
  
        optionsToExplore: [
          "Identify what you want to change.",
          "Research realistic alternatives.",
          "Build skills before making a transition.",
        ],
  
        trustedSupport: [
          "Career mentor",
          "Industry professional",
          "Career counsellor",
        ],
  
        askNayraPrompt:
          "I'm thinking about changing careers but I'm not sure if it's the right move.",
  
        tags: ["Career", "Change", "Growth"],
      },
    ],
  
    selfCare: [
      {
        icon: "🌿",
        title: "Create boundaries",
        description:
          "Protect time for rest, relationships and things outside work.",
      },
      {
        icon: "🧘",
        title: "Pause before reacting",
        description:
          "When work becomes stressful, give yourself space before making major decisions.",
      },
      {
        icon: "💬",
        title: "Find your support system",
        description:
          "Trusted people can help you see a difficult situation from another perspective.",
      },
    ],
  
    reflectionQuestions: [
      "What part of my work life is causing the most pressure?",
      "What do I want my career to look like next?",
      "Am I getting enough time for myself and my relationships?",
      "What support or information am I missing?",
    ],
  
    supportMessage:
      "Work is one part of your life — it doesn't have to define your entire life. You deserve space to understand your options.",
  };
  
  /* -------------------------------------------------------------------------- */
  /* MOTHERHOOD                                                                  */
  /* -------------------------------------------------------------------------- */
  
  const motherhood: LifeMapStage = {
    id: "motherhood",
    icon: "🤍",
    title: "Motherhood",
    ageRange: "Life stage",
  
    shortDescription:
      "Pregnancy, postpartum, parenting, relationships and work-life decisions.",
  
    description:
      "Motherhood can bring physical, emotional, relationship and practical changes. Support can matter at every stage.",
  
    themes: [
      "Pregnancy",
      "Postpartum",
      "Parenting",
      "Relationships",
      "Work",
      "Wellbeing",
    ],
  
    areas: [
      {
        id: "motherhood-health",
        icon: "🌱",
        title: "Health & Recovery",
        description:
          "Physical health, recovery and understanding when to seek support.",
      },
      {
        id: "motherhood-emotional",
        icon: "🧠",
        title: "Emotional Wellbeing",
        description:
          "Emotions, stress, overwhelm and mental wellbeing.",
      },
      {
        id: "motherhood-parenting",
        icon: "🤍",
        title: "Parenting",
        description:
          "Everyday parenting questions, confidence and support.",
      },
      {
        id: "motherhood-relationships",
        icon: "♡",
        title: "Relationships",
        description:
          "Partnerships, communication, boundaries and changing responsibilities.",
      },
      {
        id: "motherhood-work",
        icon: "💼",
        title: "Work & Family",
        description:
          "Returning to work, balance, finances and responsibilities.",
      },
    ],
  
    situations: [
      {
        id: "postpartum-support",
        title: "Postpartum support",
        category: "Pregnancy & Motherhood",
        icon: "🤍",
        shortDescription:
          "Understand changes after childbirth and where support may help.",
  
        whatMightBeHappening: [
          "You may feel physically exhausted or emotionally overwhelmed.",
          "You may find the transition to caring for a baby difficult.",
          "You may feel pressure to manage everything perfectly.",
        ],
  
        thingsToKnow: [
          "Recovery and adjustment can take time.",
          "You deserve support, rest and appropriate healthcare.",
          "Persistent or severe emotional difficulties deserve professional attention.",
        ],
  
        optionsToExplore: [
          "Talk with your healthcare professional.",
          "Ask trusted people for practical support.",
          "Create small periods of rest when possible.",
        ],
  
        trustedSupport: [
          "Doctor or healthcare professional",
          "Mental health professional",
          "Trusted family member",
        ],
  
        askNayraPrompt:
          "I'm struggling after having a baby and I don't know what support I need.",
  
        tags: ["Postpartum", "Motherhood", "Wellbeing"],
      },
  
      {
        id: "work-life-balance",
        title: "Work-life balance",
        category: "Work & Career",
        icon: "💼",
        shortDescription:
          "Think through work, family responsibilities and your own needs.",
  
        whatMightBeHappening: [
          "You may feel like you're constantly switching between responsibilities.",
          "You may feel guilty when focusing on yourself or your career.",
          "You may be struggling to find enough time to rest.",
        ],
  
        thingsToKnow: [
          "Balance looks different for different families.",
          "Asking for practical support is not a failure.",
        ],
  
        optionsToExplore: [
          "Identify which responsibilities can be shared.",
          "Discuss realistic expectations at work.",
          "Protect small periods of personal time.",
        ],
  
        trustedSupport: [
          "Trusted family member",
          "Workplace support",
          "Healthcare professional",
        ],
  
        askNayraPrompt:
          "I'm struggling to balance work, family and my own needs.",
  
        tags: ["Work", "Family", "Balance"],
      },
    ],
  
    selfCare: [
      {
        icon: "🌿",
        title: "Small moments count",
        description:
          "Even short periods of rest or personal time can matter.",
      },
      {
        icon: "💬",
        title: "Ask for practical help",
        description:
          "Support with everyday responsibilities can create space to recover.",
      },
      {
        icon: "🧘",
        title: "Check in with yourself",
        description:
          "Your wellbeing matters alongside the wellbeing of your family.",
      },
    ],
  
    reflectionQuestions: [
      "What support would make today easier?",
      "What am I expecting from myself?",
      "Where am I feeling most overwhelmed?",
      "Who can I ask for practical or emotional support?",
    ],
  
    supportMessage:
      "You don't have to carry every responsibility alone. Support for you matters too.",
  };
  
  /* -------------------------------------------------------------------------- */
  /* LATER LIFE                                                                  */
  /* -------------------------------------------------------------------------- */
  
  const laterLife: LifeMapStage = {
    id: "later-life",
    icon: "🌷",
    title: "Later Life",
    ageRange: "40+",
  
    shortDescription:
      "Health, relationships, financial security, safety and independence.",
  
    description:
      "Later life can bring new priorities, changing relationships, health questions and decisions about independence and the future.",
  
    themes: [
      "Health",
      "Family",
      "Money",
      "Independence",
      "Caregiving",
      "Future planning",
    ],
  
    areas: [
      {
        id: "later-health",
        icon: "🌱",
        title: "Health & Wellbeing",
        description:
          "Health changes, prevention, wellbeing and finding appropriate care.",
      },
      {
        id: "later-family",
        icon: "🏠",
        title: "Family & Relationships",
        description:
          "Changing family relationships, caregiving and connection.",
      },
      {
        id: "later-money",
        icon: "₹",
        title: "Money & Security",
        description:
          "Financial planning, independence and protecting yourself from scams.",
      },
      {
        id: "later-independence",
        icon: "🌷",
        title: "Independence",
        description:
          "Maintaining choice, confidence and independence as circumstances change.",
      },
      {
        id: "later-caregiving",
        icon: "🤝",
        title: "Caregiving",
        description:
          "Supporting others while protecting your own wellbeing.",
      },
    ],
  
    situations: [
      {
        id: "caregiving-stress",
        title: "Caregiving stress",
        category: "Family & Home",
        icon: "🤝",
        shortDescription:
          "Supporting someone else can be meaningful and exhausting at the same time.",
  
        whatMightBeHappening: [
          "You may feel responsible for another person's wellbeing.",
          "You may have little time for yourself.",
          "You may feel guilty about needing support.",
        ],
  
        thingsToKnow: [
          "Caregivers also need support.",
          "Sharing responsibilities can reduce pressure.",
          "Professional support may be available.",
        ],
  
        optionsToExplore: [
          "Identify which responsibilities can be shared.",
          "Look for local caregiver support.",
          "Protect time for your own health.",
        ],
  
        trustedSupport: [
          "Healthcare professional",
          "Family or trusted person",
          "Caregiver support organisation",
        ],
  
        askNayraPrompt:
          "I'm caring for someone and I'm starting to feel overwhelmed.",
  
        tags: ["Caregiving", "Family", "Wellbeing"],
      },
  
      {
        id: "financial-security",
        title: "Financial security",
        category: "Money & Independence",
        icon: "₹",
        shortDescription:
          "Think about financial independence, planning and protecting yourself.",
  
        whatMightBeHappening: [
          "You may be thinking more seriously about long-term financial security.",
          "You may be supporting other family members.",
          "You may be concerned about scams or financial decisions.",
        ],
  
        thingsToKnow: [
          "Financial planning can help reduce uncertainty.",
          "Be cautious with requests for money or personal financial information.",
          "Professional financial guidance can help with complex decisions.",
        ],
  
        optionsToExplore: [
          "Review your financial priorities.",
          "Learn about common financial scams.",
          "Seek qualified advice for major financial decisions.",
        ],
  
        trustedSupport: [
          "Qualified financial professional",
          "Trusted family member",
          "Recognised financial education resources",
        ],
  
        askNayraPrompt:
          "I'm worried about my financial future and want to understand my options.",
  
        tags: ["Money", "Security", "Independence"],
      },
    ],
  
    selfCare: [
      {
        icon: "🌿",
        title: "Stay connected",
        description:
          "Meaningful relationships can support wellbeing and reduce isolation.",
      },
      {
        icon: "🚶",
        title: "Keep moving",
        description:
          "Choose activities that support your physical and emotional wellbeing.",
      },
      {
        icon: "💬",
        title: "Ask for support",
        description:
          "You can ask for help even when you have been independent for a long time.",
      },
    ],
  
    reflectionQuestions: [
      "What matters most to me at this stage?",
      "What do I want to protect or change?",
      "Where do I need more support?",
      "How can I maintain my independence and choices?",
    ],
  
    supportMessage:
      "Every stage of life can bring change. You deserve information, dignity, choice and support.",
  };
  
  /* -------------------------------------------------------------------------- */
  /* ALL LIFE STAGES                                                             */
  /* -------------------------------------------------------------------------- */
  
  export const LIFE_MAP_STAGES: LifeMapStage[] = [
    childhood,
    adolescence,
    youngAdult,
    workingLife,
    motherhood,
    laterLife,
  ];
  
  /* -------------------------------------------------------------------------- */
  /* HELPERS                                                                     */
  /* -------------------------------------------------------------------------- */
  
  export function getLifeMapStage(
    stageId: string,
  ): LifeMapStage | undefined {
    return LIFE_MAP_STAGES.find(
      (stage) => stage.id === stageId,
    );
  }
  
  export function getLifeMapSituation(
    stageId: string,
    situationId: string,
  ): LifeMapSituation | undefined {
    const stage = getLifeMapStage(stageId);
  
    return stage?.situations.find(
      (situation) => situation.id === situationId,
    );
  }