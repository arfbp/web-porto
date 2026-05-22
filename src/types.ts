export type PersonalInfo = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  about: string;
};

export type WorkExperience = {
  id: string;
  company: string;
  location: string;
  role: string;
  date: string;
  description: string;
  type: string;
};

export type Education = {
  institution: string;
  location: string;
  degree: string;
  date: string;
};

export type Project = {
  id: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
};

export type Certification = {
  issuer: string;
  badges: string[];
  year?: string;
  iconType: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};
