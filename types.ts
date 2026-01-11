
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  architecture: string;
  stack: string[];
  challenges: string;
  links?: {
    github?: string;
    live?: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}
