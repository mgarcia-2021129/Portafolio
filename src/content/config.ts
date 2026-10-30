import { defineCollection, z } from 'astro:content';

export const projectSchema = z.object({
  name: z.string(),
  subtitle: z.string().optional(),
  shortDescription: z.string(),
  category: z.enum(['academic', 'personal', 'professional']).optional(),
  description: z.string(),
  cover: z.string(),
  gallery: z.array(z.string()).optional(),
  tech: z.array(z.string()).optional(),
  year: z.string().optional(),
  team: z.string().optional(),
  status: z.string().optional(),
  myRole: z.string().optional(),
  objective: z.string().optional(),
  problem: z.string().optional(),
  solution: z.string().optional(),
  features: z.array(z.string()).optional(),
  architecture: z.string().optional(),
  learned: z.string().optional(),
  links: z
    .object({
      live: z.string().url().optional(),
      repo: z.string().url().optional(),
    })
    .optional(),
  featured: z.boolean().default(false),
  order: z.number().int().nonnegative(),
});

export const skillSchema = z.object({
  name: z.string(),
  group: z.enum([
    'Lenguajes',
    'Frameworks y plataformas',
    'Bases de datos',
    'Herramientas',
  ]),
  level: z.number().int().min(0).max(100),
  icon: z.string(),
});

export type Skill = z.infer<typeof skillSchema>;
export type SkillGroup = Skill['group'];

export const collections = {
  projects: defineCollection({ type: 'content', schema: projectSchema }),
  skills: defineCollection({
    type: 'data',
    schema: z.object({ items: z.array(skillSchema) }),
  }),
  profile: defineCollection({
    type: 'data',
    schema: z.object({
      fullName: z.string(),
      role: z.string(),
      location: z.string(),
      tagline: z.string(),
      welcomeLabel: z.string(),
      intro: z.string(),
      yearsProgramming: z.string().optional(),
      studying: z.object({
        program: z.string(),
        year: z.string(),
        institution: z.string(),
      }),
    }),
  }),
  about: defineCollection({
    type: 'data',
    schema: z.object({
      key: z.string(),
      title: z.string(),
      body: z.string().optional(),
      order: z.number().int().nonnegative(),
    }),
  }),
  contact: defineCollection({
    type: 'data',
    schema: z.object({
      email: z.string().email(),
      github: z.object({ label: z.string(), url: z.string().url() }),
      linkedin: z.object({ label: z.string(), url: z.string().url() }),
      phone: z.object({ label: z.string(), href: z.string() }),
    }),
  }),
  education: defineCollection({
    type: 'content',
    schema: z.object({
      institution: z.string(),
      program: z.string().optional(),
      dates: z.string().optional(),
      description: z.string().optional(),
      stage: z.string(),
      order: z.number().int().nonnegative(),
    }),
  }),
  experience: defineCollection({
    type: 'content',
    schema: z.object({
      org: z.string(),
      role: z.string().optional(),
      dates: z.string().optional(),
      description: z.string().optional(),
      responsibilities: z.array(z.string()).optional(),
      tech: z.array(z.string()).optional(),
      kind: z.enum(['internship', 'academic', 'job']),
      order: z.number().int().nonnegative(),
    }),
  }),
  activities: defineCollection({
    type: 'content',
    schema: z.object({
      name: z.string(),
      date: z.string().optional(),
      type: z.enum([
        'hackathon',
        'contest',
        'event',
        'extracurricular',
        'collab',
      ]),
      description: z.string().optional(),
      role: z.string().optional(),
      photos: z.array(z.string()).optional(),
      order: z.number().int().nonnegative(),
    }),
  }),
  recognitions: defineCollection({
    type: 'content',
    schema: z.object({
      name: z.string(),
      institution: z.string().optional(),
      year: z.number().int().optional(),
      date: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
      order: z.number().int().nonnegative(),
    }),
  }),
};
