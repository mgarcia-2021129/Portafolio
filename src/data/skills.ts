export type Skill = {
  name: string;
  level: number;
  category: SkillCategory;
  icon: string;
};

export type SkillCategory =
  | 'Backend'
  | 'Frontend'
  | 'Bases de datos'
  | 'Herramientas';

export const skillCategories: SkillCategory[] = [
  'Backend',
  'Frontend',
  'Bases de datos',
  'Herramientas',
];

export const skills: Skill[] = [
  {
    name: 'Java',
    level: 80,
    category: 'Backend',
    icon: '/images/skills/java.svg',
  },
  {
    name: 'Java EE',
    level: 65,
    category: 'Backend',
    icon: '/images/skills/javaee.svg',
  },
  {
    name: 'C#',
    level: 80,
    category: 'Backend',
    icon: '/images/skills/csharp.svg',
  },
  {
    name: '.NET',
    level: 75,
    category: 'Backend',
    icon: '/images/skills/dotnet.svg',
  },
  {
    name: 'Node.js',
    level: 85,
    category: 'Backend',
    icon: '/images/skills/nodejs.svg',
  },
  {
    name: 'Spring Boot',
    level: 50,
    category: 'Backend',
    icon: '/images/skills/spring.svg',
  },
  {
    name: 'JavaScript',
    level: 85,
    category: 'Frontend',
    icon: '/images/skills/javascript.svg',
  },
  {
    name: 'HTML',
    level: 75,
    category: 'Frontend',
    icon: '/images/skills/html.svg',
  },
  {
    name: 'CSS',
    level: 60,
    category: 'Frontend',
    icon: '/images/skills/css.svg',
  },
  {
    name: 'React',
    level: 80,
    category: 'Frontend',
    icon: '/images/skills/react.svg',
  },
  {
    name: 'Bootstrap',
    level: 65,
    category: 'Frontend',
    icon: '/images/skills/bootstrap.svg',
  },
  {
    name: 'MySQL',
    level: 85,
    category: 'Bases de datos',
    icon: '/images/skills/mysql.svg',
  },
  {
    name: 'MongoDB',
    level: 80,
    category: 'Bases de datos',
    icon: '/images/skills/mongodb.svg',
  },
  {
    name: 'Postgres',
    level: 65,
    category: 'Bases de datos',
    icon: '/images/skills/postgres.svg',
  },
  {
    name: 'Git',
    level: 75,
    category: 'Herramientas',
    icon: '/images/skills/git.svg',
  },
  {
    name: 'GitHub',
    level: 80,
    category: 'Herramientas',
    icon: '/images/skills/github.svg',
  },
  {
    name: 'Docker',
    level: 70,
    category: 'Herramientas',
    icon: '/images/skills/docker.svg',
  },
];

export function skillSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/\.+/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
