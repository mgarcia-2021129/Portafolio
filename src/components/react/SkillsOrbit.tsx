import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from 'framer-motion';
import { useMemo, useRef, useState } from 'react';
import {
  skillCategories,
  skills,
  skillSlug,
  type Skill,
  type SkillCategory,
} from '../../data/skills';

const ease = [0.16, 1, 0.3, 1] as const;

function SkillRing({
  level,
  active,
  gradientId,
}: {
  level: number;
  active: boolean;
  gradientId: string;
}) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(Math.max(level, 0), 100) / 100;
  const offset = circumference * (1 - progress);

  return (
    <svg width="104" height="104" viewBox="0 0 104 104" className="overflow-visible">
      <circle
        cx="52"
        cy="52"
        r={radius}
        fill="none"
        stroke="rgba(232,228,239,0.12)"
        strokeWidth="5"
      />
      <motion.circle
        cx="52"
        cy="52"
        r={radius}
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={false}
        animate={{
          strokeDashoffset: active ? offset : circumference,
          opacity: active ? 1 : 0.35,
        }}
        transition={{ duration: 1.25, ease }}
        style={{
          transformOrigin: '52px 52px',
          transform: 'rotate(-90deg)',
          filter: 'drop-shadow(0 0 10px rgba(212,197,249,0.4))',
        }}
      />
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4C5F9" />
          <stop offset="100%" stopColor="rgba(240,237,245,0.5)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SkillCard({
  skill,
  index,
  sectionActive,
}: {
  skill: Skill;
  index: number;
  sectionActive: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: false });
  const active = sectionActive && inView;
  const gradientId = `ring-${skillSlug(skill.name)}`;

  return (
    <motion.article
      ref={ref}
      layout
      initial={false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: reduce ? 0 : index * 0.045, ease }}
      whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.35 } }}
      className="glass-panel group relative overflow-hidden p-5"
    >
      <div className="relative z-10 flex items-center gap-4">
        <div className="relative shrink-0">
          <SkillRing level={skill.level} active={active} gradientId={gradientId} />
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-0.5">
            <img
              src={skill.icon}
              alt=""
              width={28}
              height={28}
              className={`h-7 w-7 object-contain drop-shadow-[0_0_10px_rgba(212,197,249,0.35)] ${
                skill.name === 'GitHub' ? 'invert' : ''
              }`}
              loading="lazy"
            />
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-display text-lg font-semibold tracking-tight text-ink">
                {skill.name}
              </p>
              <p className="mt-1 text-sm text-ink/55">{skill.category}</p>
            </div>
            <motion.span
              className="font-display text-sm font-bold text-accent"
              animate={{ opacity: active ? 1 : 0.4 }}
            >
              {skill.level}%
            </motion.span>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-accent/90 to-accent/40"
              initial={false}
              animate={{ width: active ? `${skill.level}%` : '0%' }}
              transition={{ duration: 1.15, ease, delay: 0.08 }}
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}

export default function SkillsOrbit() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'Todas'>(
    'Todas',
  );
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionActive = useInView(sectionRef, { amount: 0.12, once: false });
  const reduce = useReducedMotion();

  const filtered = useMemo(() => {
    if (activeCategory === 'Todas') return skills;
    return skills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <div ref={sectionRef} className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {(['Todas', ...skillCategories] as const).map((category) => {
          const selected = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`glass-panel relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                selected
                  ? 'text-accent shadow-glow'
                  : 'text-ink/70 hover:text-ink'
              }`}
            >
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeCategory}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              sectionActive={sectionActive}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
