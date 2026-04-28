export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
};

export type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
};

export type NavLink = {
  label: string;
  path: string;
};

export type SocialLink = {
  label: string;
  url: string;
  icon: string;
};
