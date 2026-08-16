# NAYRA

> **Your life, understood.**

NAYRA is a life-centered support platform designed to help people understand what is happening in their lives, explore possible options, discover trusted resources, and identify a meaningful next step.

NAYRA is **not intended to be another generic AI chatbot**.

The core idea is:

```text
Situation
    ↓
Understand
    ↓
Explore
    ↓
Options
    ↓
Resources / Support
    ↓
Next Step
```

---

# 1. Vision

People often know that something is wrong but don't know:

* What exactly is happening?
* Is this normal?
* What options do I have?
* Who can I talk to?
* Where can I find reliable information?
* What should I do next?
* Is this something I can handle myself?
* When should I seek additional support?

NAYRA should help answer those questions **without forcing the user into a chatbot conversation immediately**.

The product should feel like a combination of:

```text
Life Map
+
Guidance
+
Situation Understanding
+
Trusted Resources
+
Support Discovery
+
Conversation
+
Next-Step Planning
```

---

# 2. The Core Product Philosophy

NAYRA should never feel like:

```text
User → ChatGPT → Answer → End
```

Instead:

```text
User
 ↓
"What is happening?"
 ↓
NAYRA understands the context
 ↓
"What area of my life is this connected to?"
 ↓
Life Map
 ↓
"What kind of situation am I experiencing?"
 ↓
Situation exploration
 ↓
"What are my possible options?"
 ↓
Options
 ↓
"What support or resources exist?"
 ↓
Resources / Get Help
 ↓
"What can I do next?"
 ↓
Next Step
```

The goal is not simply to produce an answer.

The goal is to help the user **move forward with more understanding and clarity**.

---

# 3. What Makes NAYRA Different

NAYRA should be:

### Life-first

The user is more than one question or one problem.

### Context-aware

The same situation can mean different things depending on the user's circumstances.

### Non-judgmental

Users should be able to explore difficult situations without feeling judged.

### Action-oriented

NAYRA should help users identify practical next steps.

### Resource-oriented

When information isn't enough, NAYRA should connect users to useful and trusted resources.

### Human-support friendly

NAYRA should not try to replace every form of human support.

### Privacy-conscious

Users should not need to reveal unnecessary personal information just to explore a situation.

---

# 4. NAYRA's Main Experience

The main application should eventually contain:

```text
HOME
│
├── Search / Explore
│
├── Life Areas
│
├── Quick Help
│
├── Continue / Recent
│
└── Ask NAYRA
│
├── LIFE MAP
│
├── MIND & WELLBEING
├── WORK & CAREER
├── MONEY & STABILITY
├── RELATIONSHIPS
├── FAMILY
├── EDUCATION
├── SAFETY & SUPPORT
└── FUTURE & GOALS
│
├── SITUATION
│
├── UNDERSTAND
├── OPTIONS
├── RESOURCES
├── SUPPORT
└── NEXT STEP
│
├── ASK NAYRA
│
├── CONVERSATION
├── CONTEXT
├── SUGGESTIONS
└── ACTIONS
│
├── RESOURCES
│
└── GET HELP
```

---

# 5. First Visit Experience

NAYRA should not immediately throw a new user into a dashboard.

The first visit should introduce the product.

## Step 1 — Welcome

```text
✦

WELCOME TO NAYRA

A place to understand
what's happening.

NAYRA isn't here to tell you what to do.
It's here to help you understand your situation,
explore your options and find the next step
that feels right for you.

Your situation
      →
Your options
      →
Your next step

[ Let's begin ]

Skip introduction
```

---

# 6. Guided NAYRA Tour

After clicking:

```text
Let's begin
```

the user gets a guided tour.

Current flow:

```text
Welcome
   ↓
Your NAYRA Space
   ↓
Home
   ↓
Life Map
   ↓
Get Help
   ↓
Resources
   ↓
Ask NAYRA
   ↓
You're Ready
```

The sidebar must remain visible while navigating through the tour.

The currently explained navigation item receives the strongest highlight.

Example:

```text
┌──────────────────┐
│ ✿ NAYRA          │
│                  │
│ ★ Home           │
│ ♡ Life Map       │
│ 🛡 Get Help      │
│ ▤ Resources      │
│ ✦ Ask NAYRA      │
└──────────────────┘
```

This tour is implemented as a reusable onboarding component rather than a third-party tour library.

---

# 7. HOME

Home is the user's starting point.

The Home page should eventually contain:

```text
┌─────────────────────────────────────┐
│                                     │
│        Understand what's happening  │
│                                     │
│ Search or describe what you need    │
│                                     │
│ [ Search / Ask NAYRA ............ ] │
│                                     │
└─────────────────────────────────────┘

Explore your life

┌──────────┐ ┌──────────┐ ┌──────────┐
│ Mind     │ │ Career   │ │ Money    │
└──────────┘ └──────────┘ └──────────┘

┌──────────┐ ┌──────────┐ ┌──────────┐
│ Family   │ │Relations │ │ Education│
└──────────┘ └──────────┘ └──────────┘

Quick Help

┌────────────────┐
│ I don't know   │
│ what's wrong   │
└────────────────┘

┌────────────────┐
│ I need support │
│ now            │
└────────────────┘

┌────────────────┐
│ Help me explore│
│ my options     │
└────────────────┘
```

Home should feel calm, simple and welcoming.

---

# 8. LIFE MAP

Life Map is one of the most important parts of NAYRA.

The concept:

> A person should be able to understand their situation in the context of their whole life.

Current categories:

```text
Mind & Wellbeing
Work & Career
Money & Stability
Relationships
Family
Education
Safety & Support
Future & Goals
```

Each category should eventually contain deeper subcategories.

Example:

```text
WORK & CAREER
│
├── Job Search
├── Career Direction
├── Work Pressure
├── Workplace Conflict
├── Career Growth
├── Skills
├── Promotion
└── Career Change
```

Another:

```text
MONEY & STABILITY
│
├── Financial Pressure
├── Debt
├── Budgeting
├── Income
├── Savings
├── Major Purchase
└── Future Planning
```

Another:

```text
RELATIONSHIPS
│
├── Communication
├── Conflict
├── Trust
├── Separation
├── Connection
└── Relationship Decisions
```

The exact taxonomy should grow carefully rather than becoming an overwhelming directory.

---

# 9. Life Map → Situation

The user selects an area.

Example:

```text
Life Map
   ↓
Work & Career
   ↓
Work Pressure
```

Then NAYRA should explain:

```text
WHAT THIS COULD MEAN

COMMON EXPERIENCES

QUESTIONS TO CONSIDER

POSSIBLE DIRECTIONS

USEFUL RESOURCES

WHEN TO SEEK SUPPORT

NEXT STEP
```

The user should be able to move through the experience without being forced into a conversation.

---

# 10. Situation Engine

The Situation system is a major future component.

A situation should eventually have structured information:

```text
Situation
│
├── id
├── category
├── title
├── description
├── risk level
├── common experiences
├── questions
├── possible options
├── resources
├── support options
└── next steps
```

The backend already has a `Situation` model foundation.

---

# 11. Risk Levels

The backend currently defines:

```text
LOW
SENSITIVE
HIGH
CRITICAL
EMERGENCY
```

These should eventually influence how NAYRA responds.

For example:

```text
LOW
↓
General guidance

SENSITIVE
↓
Careful contextual guidance

HIGH
↓
Stronger support recommendations

CRITICAL
↓
Prioritize safety and appropriate support

EMERGENCY
↓
Prioritize immediate safety/support pathways
```

The system should be carefully designed so that risk classification does not become unnecessarily intrusive.

---

# 12. ASK NAYRA

Ask NAYRA is the conversational layer.

But conversation is **not the entire product**.

It should be one part of the larger NAYRA experience.

The flow:

```text
User asks something
       ↓
Conversation created
       ↓
Message sent
       ↓
NAYRA understands context
       ↓
Response
       ↓
Possible options
       ↓
Resources
       ↓
Next actions
```

Eventually conversations should understand the user's selected Life Map area and Situation context.

---

# 13. Conversation System

Current backend direction:

```text
Session
   ↓
Conversation
   ↓
Messages
```

A session can contain multiple conversations.

A conversation contains multiple messages.

Messages contain:

```text
role
content
riskLevel
createdAt
```

Current message roles:

```text
USER
ASSISTANT
SYSTEM
```

---

# 14. Current API Direction

Conversation APIs were built first.

The backend should eventually expose endpoints around:

```text
Health
Session
Conversation
Message
Situation
Resources
Support
```

Current foundation:

```text
GET /health
```

Conversation-related APIs have already been worked through.

Message APIs are also being built incrementally.

The principle is:

```text
FE
 ↓
Service layer
 ↓
API
 ↓
Business logic
 ↓
Database
```

The React UI should never directly contain backend request logic.

---

# 15. Frontend Architecture

Current frontend structure:

```text
apps/web/src/

├── components/
│
│   ├── common/
│   │
│   ├── conversation/
│   │
│   ├── help/
│   │
│   ├── home/
│   │
│   ├── layout/
│   │
│   ├── life-map/
│   │
│   ├── onboarding/
│   │
│   └── situation/
│
├── constants/
│
├── data/
│
├── hooks/
│
├── pages/
│
├── services/
│
├── types/
│
├── utils/
│
├── App.tsx
├── App.css
├── index.css
├── styles.css
└── main.tsx
```

The architecture must remain **component-based and reusable**.

Avoid building major pages as single giant files.

---

# 16. Reusable Component Philosophy

Components should be generic whenever possible.

Examples:

```text
SearchBar
SectionHeader
Tag
NayraMark

LifeAreaCard
QuickHelpCard

LifeMap
LifeMapCategoryCard
LifeMapPreview
LifeStageCard

ChatMessage
ChatComposer
AskNayraPanel

Sidebar
TopBar
AppShell

FirstVisitOverlay
```

The goal is:

```text
Reusable component
        ↓
Multiple pages
        ↓
Consistent experience
```

---

# 17. Frontend Pages

Current page direction:

```text
HomePage
LifeMapPage
AskNayraPage
GetHelpPage
ResourcesPage
```

Future pages can be added based on product requirements.

---

# 18. Navigation

Current sidebar:

```text
⌂ Home
♡ Life Map
🛡 Get Help
▤ Resources
✦ Ask NAYRA
```

The sidebar is intended to be persistent navigation.

It should remain visually stable while the main content changes.

---

# 19. Backend Architecture

Current backend:

```text
apps/api/
```

Technology direction:

```text
Node.js
TypeScript
Fastify
Prisma
PostgreSQL
```

The backend should be separated into logical layers as the application grows.

Target architecture:

```text
Routes
  ↓
Controllers / Handlers
  ↓
Services
  ↓
Repositories / Prisma
  ↓
PostgreSQL
```

---

# 20. Database

Current Prisma domain model:

```text
User
  │
  └── Sessions
        │
        └── Conversations
              │
              └── Messages
```

Additional:

```text
Situation
```

Current models:

```text
User
Session
Conversation
Message
Situation
```

---

# 21. Session Concept

NAYRA should support anonymous usage initially.

A session contains:

```text
anonymousToken
status
expiresAt
lastActiveAt
```

Session states:

```text
ACTIVE
EXPIRED
CLOSED
```

This allows NAYRA to provide useful experiences without requiring immediate account creation.

---

# 22. Conversation Status

```text
ACTIVE
CLOSED
```

This allows conversations to eventually be resumed, archived or closed.

---

# 23. Deployment Architecture

Current deployment direction:

```text
GitHub
   │
   ├── Frontend
   │      ↓
   │   Netlify
   │      ↓
   │   NAYRA Web
   │
   └── Backend
          ↓
        Render
          ↓
       NAYRA API
```

Current frontend:

```text
https://nayralife.netlify.app/
```

Current backend:

```text
https://nayra-api.onrender.com/
```

---

# 24. Environment Configuration

Frontend uses:

```text
VITE_API_BASE_URL
```

Production should point the frontend API client to the deployed Render API.

Secrets should not be committed to Git.

Use:

```text
.env
.env.local
```

and keep secrets out of Git.

---

# 25. Git Structure

Repository:

```text
https://github.com/Sakthiveldeveloper/nayra.git
```

Monorepo:

```text
nayra/
│
├── apps/
│   ├── web/
│   └── api/
│
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── README.md
```

Package manager:

```text
pnpm
```

---

# 26. Deployment Principle

Development:

```text
Local
 ↓
Build
 ↓
Test
 ↓
Git commit
 ↓
GitHub
```

Production:

```text
GitHub
 ↓
Netlify / Render
 ↓
Live application
```

Before every deployment:

```bash
pnpm install
```

Then frontend:

```bash
pnpm --filter @nayra/web build
```

Backend:

```bash
pnpm --filter @nayra/api build
```

Only push after successful builds.

---

# 27. Current Product Status

## Completed / Working

### Infrastructure

* Monorepo created
* pnpm workspace
* GitHub repository
* Frontend deployment
* Backend deployment
* Production frontend
* Production backend

### Frontend

* App shell
* Sidebar
* Top bar
* Home foundation
* Life Map foundation
* Conversation components
* Help foundation
* Resources foundation
* Reusable components
* First-visit onboarding
* Guided navigation tour

### Backend

* Fastify API
* Prisma
* PostgreSQL direction
* Session model
* Conversation model
* Message model
* Situation model
* Health endpoint
* Conversation APIs
* Message APIs

---

# 28. Current FE Tour

The current onboarding experience:

```text
WELCOME
    ↓
YOUR NAYRA SPACE
    ↓
HOME
    ↓
LIFE MAP
    ↓
GET HELP
    ↓
RESOURCES
    ↓
ASK NAYRA
    ↓
YOU'RE READY
```

The sidebar remains visible throughout the navigation tour.

This is now working locally.

---

# 29. Next Development Phase

The next phase is **not deployment first**.

We should now deepen the product.

## Phase A — Home

Build the complete Home experience:

```text
Hero
 ↓
Search
 ↓
Life Areas
 ↓
Quick Help
 ↓
Continue
 ↓
Suggested Exploration
```

---

# 30. Phase B — Life Map

Expand Life Map from visual cards into a real navigation experience.

```text
Life Map
 ↓
Category
 ↓
Subcategory
 ↓
Situation
 ↓
Understanding
 ↓
Options
 ↓
Resources
 ↓
Next Step
```

---

# 31. Phase C — Situation Pages

Build reusable Situation UI.

Example:

```text
┌─────────────────────────────┐
│ Work & Career               │
│                             │
│ Feeling overwhelmed at work │
│                             │
│ What this can feel like     │
│                             │
│ What might help             │
│                             │
│ Explore your options        │
│                             │
│ Useful resources            │
│                             │
│ Your next step              │
└─────────────────────────────┘
```

---

# 32. Phase D — Ask NAYRA

Connect the FE conversation UI to the real API.

```text
User
 ↓
Create / retrieve session
 ↓
Create conversation
 ↓
Send message
 ↓
Store message
 ↓
Return response
 ↓
Display conversation
```

Then eventually introduce actual AI response generation.

---

# 33. Phase E — Resources

Resources should not simply be a list of links.

They should be contextual.

Example:

```text
Situation
   ↓
Relevant resource
   ↓
Why it may help
   ↓
Who it's for
   ↓
How to access
   ↓
Next action
```

---

# 34. Phase F — Get Help

Get Help should become a structured support discovery experience.

Possible structure:

```text
I need help
     ↓
What kind of support?
     ↓
Information
Professional support
Community support
Urgent support
     ↓
Relevant options
```

For higher-risk situations, the experience should prioritize appropriate support and safety.

---

# 35. Phase G — Contextual NAYRA

Eventually:

```text
Life Map
    ↓
Situation
    ↓
Conversation
```

should share context.

Example:

```text
User explores:

Work & Career
→ Work Pressure

Then clicks:

Talk to NAYRA
```

NAYRA should understand:

```text
Area = Work & Career
Situation = Work Pressure
```

instead of starting with zero context.

---

# 36. Phase H — Personalization

Later, users may optionally create a profile.

Possible future concept:

```text
My NAYRA
│
├── My Life Map
├── Saved situations
├── Conversations
├── Saved resources
├── Goals
└── Preferences
```

This should remain optional.

---

# 37. Phase I — AI Layer

The AI should eventually work as a reasoning/guidance layer across the platform.

Potential flow:

```text
User Input
    ↓
Intent Detection
    ↓
Situation Detection
    ↓
Risk Assessment
    ↓
Context Retrieval
    ↓
Response Generation
    ↓
Resource Retrieval
    ↓
Next-Step Suggestions
```

The AI should not simply answer questions.

It should understand:

```text
What is happening?
Why might this matter?
What options exist?
What support is relevant?
What could the user do next?
```

---

# 38. Long-Term NAYRA Architecture

Eventually:

```text
                     NAYRA
                       │
          ┌────────────┴────────────┐
          │                         │
       FRONTEND                  BACKEND
          │                         │
       React                    Fastify
          │                         │
      Components               Services
          │                         │
       Pages                   Situation Engine
          │                         │
      Life Map                Conversation Engine
          │                         │
    Conversations             Resource Engine
          │                         │
       Resources               Risk Engine
          │                         │
       Support                   AI Layer
                                    │
                          ┌─────────┴─────────┐
                          │                   │
                      PostgreSQL          AI Provider
```

---

# 39. Product Evolution

NAYRA should evolve through these stages:

```text
V0.1
Foundation
    ↓
V0.2
Unique FE experience
    ↓
V0.3
Life Map + Situation system
    ↓
V0.4
Real conversation backend
    ↓
V0.5
Resources + Support
    ↓
V0.6
Context-aware NAYRA
    ↓
V1.0
Complete life-support platform
```

---

# 40. Development Rule

Every new feature should answer:

> **Does this help the user understand their situation, explore options, find support, or take the next meaningful step?**

If not, it probably doesn't belong in the core NAYRA experience.

---

# 41. UI/UX Rules

NAYRA should feel:

```text
Calm
Human
Simple
Trustworthy
Modern
Warm
Private
Non-judgmental
```

Avoid:

```text
Generic AI chatbot appearance
Overloaded dashboards
Too many cards
Too much text
Aggressive CTAs
Unnecessary questions
Confusing navigation
```

The UI should progressively reveal complexity.

```text
Simple first
   ↓
More detail when needed
   ↓
Deep exploration when wanted
```

---

# 42. Component Rule

Never solve a reusable UI problem by creating another page-specific implementation.

Prefer:

```text
Generic component
      ↓
Props
      ↓
Reusable across pages
```

Example:

```tsx
<LifeMapCategoryCard
  area={area}
/>
```

instead of creating:

```text
CareerCard.tsx
MoneyCard.tsx
FamilyCard.tsx
...
```

---

# 43. API Rule

Frontend components should not directly call APIs.

Bad:

```text
Component
  ↓
fetch()
```

Preferred:

```text
Component
  ↓
Hook
  ↓
Service
  ↓
API
```

Example:

```text
ChatComposer
 ↓
useConversation
 ↓
conversation.service
 ↓
API
```

---

# 44. Database Rule

Database design should represent the product domain rather than simply storing UI data.

Core relationships:

```text
User
 ↓
Session
 ↓
Conversation
 ↓
Message
```

And independently:

```text
Life Area
 ↓
Situation
 ↓
Resources
 ↓
Support
```

Eventually these domains can be connected.

---

# 45. Deployment Rule

Never deploy code just because it works locally.

Before production:

```text
1. Build
2. Check TypeScript
3. Test core flow
4. Check API connectivity
5. Check environment variables
6. Commit
7. Push
8. Verify production
```

---

# 46. Today's Working Principle

The goal is not:

> "Let's finish as many endpoints as possible."

The goal is:

> **Move NAYRA from a working technical prototype toward a coherent product.**

Therefore development should alternate between:

```text
FE Experience
      ↕
API
      ↕
Database
      ↕
Product Logic
```

rather than finishing an entire layer in isolation.

---

# 47. NAYRA North Star

The product should eventually allow someone to arrive with:

```text
"I don't know what's happening."
```

and leave with:

```text
"I understand my situation better."

"I know what options I have."

"I know where I can get support."

"I know what I can do next."
```

That is the heart of NAYRA.

---

# 48. Current Immediate Roadmap

Our immediate order should be:

```text
[✓] GitHub
[✓] FE deployment
[✓] BE deployment
[✓] Health endpoint
[✓] Session foundation
[✓] Conversation APIs
[✓] Message API foundation
[✓] Component architecture
[✓] Home foundation
[✓] Life Map foundation
[✓] First Visit popup
[✓] Guided sidebar tour

        ↓ NEXT

[ ] Polish onboarding tour
[ ] Complete Home experience
[ ] Complete Life Map
[ ] Build Life Map subcategories
[ ] Build Situation detail
[ ] Connect Situation → Ask NAYRA
[ ] Complete Resources
[ ] Complete Get Help
[ ] Connect FE conversation → API
[ ] Complete remaining APIs
[ ] Add contextual conversation
[ ] Add resource engine
[ ] Add support engine
[ ] Add AI layer
[ ] Production hardening
[ ] V1 launch
```

---

# 49. Golden Rule

### NAYRA is not:

```text
"Ask an AI anything."
```

### NAYRA is:

```text
"Understand your life.
Understand your situation.
Explore your options.
Find the right support.
Take your next step."
```

---

## Current Repository

```text
GitHub:
https://github.com/Sakthiveldeveloper/nayra.git

Frontend:
https://nayralife.netlify.app/

Backend:
https://nayra-api.onrender.com/
```

---

## Final Product Vision

```text
                         NAYRA
                   YOUR LIFE, UNDERSTOOD
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
     LIFE MAP          ASK NAYRA          GET HELP
        │                  │                  │
        │                  │                  │
    Understand         Explore            Support
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                       RESOURCES
                           │
                           ↓
                      NEXT STEP
```

**NAYRA should become a place people can enter when life feels confusing and leave with greater clarity—not just another AI answer.**

That is our north star.
