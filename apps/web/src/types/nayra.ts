export type PageKey = "home" | "life-map" | "help" | "resources" | "ask";

export type LifeArea = {
  id: string;
  icon: string;
  title: string;
  description: string;
  tone: string;
  situations: string[];
};

export type LifeStage = {
  id: string;
  title: string;
  age: string;
  description: string;
  icon: string;
};

export type HelpOption = {
  id: string;
  icon: string;
  title: string;
  description: string;
  urgent?: boolean;
};

export type Resource = {
  id: string;
  category: string;
  title: string;
  description: string;
  type: "official" | "guide" | "support";
};
