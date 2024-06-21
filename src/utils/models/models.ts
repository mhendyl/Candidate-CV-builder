export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  degree: string;
  major: string;
  university?: string; // Optional, as it can be 'school' instead
  school?: string; // Optional, as it can be 'university' instead
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Certification {
  name: string;
  date: string;
}

export interface Skill {
  name: string;
  score: number;
}

export interface CandidateData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  description: string;
  references: string[]; // Assuming references is an array of strings, but it can be adjusted as needed
  linkedin: string;
  skills: Skill[];
}

export interface ThemeInterface {
  backgroundTemplate: string;
  backgroundTemplateLeft: string;
  nameColor: string;
  name: string;
  watermark: string;
  nameFontSize: string;
}