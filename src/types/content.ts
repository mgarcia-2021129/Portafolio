export type SkillGroup =
  | 'Lenguajes'
  | 'Frameworks y plataformas'
  | 'Bases de datos'
  | 'Herramientas';

export type Skill = {
  name: string;
  group: SkillGroup;
  level: number;
  icon: string;
};
