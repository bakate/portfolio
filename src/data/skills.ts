// src/data/skills.ts
import { ui, defaultLanguage, type LanguageCode } from "@/i18n/ui";

export type Technology = {
  id: string; // e.g., 'react', 'angular', 'typescript' (will map to react-icons)
  name: string; // e.g., 'React', 'Angular', 'TypeScript'
};

export type SkillData = {
  id: string; // Unique identifier for the skill, used for i18n keys
  iconName: string; // Name of the Lucide icon
  technologies: Array<Technology>;
};

// Define the type for a skill once its content is translated
export type TranslatedSkill = SkillData & {
  title: string;
  description: string;
  // iconName is already part of SkillData
  // technologies is already part of SkillData
};

export const skillsList: Array<SkillData> = [
  {
    id: "frontendDevelopment",
    iconName: "MonitorSmartphone",
    technologies: [
      { id: "react", name: "React" },
      { id: "angular", name: "Angular" },
      { id: "typescript", name: "TypeScript" },
      { id: "astro", name: "Astro" },
      { id: "tailwindcss", name: "Tailwind CSS" },
      { id: "html5", name: "HTML5" },
      { id: "css3", name: "CSS3" },
      { id: "javascript", name: "JavaScript" },
    ],
  },
  {
    id: "backendDevelopment",
    iconName: "ServerCog",
    technologies: [
      { id: "nodejs", name: "Node.js" },
      { id: "bun", name: "Bun" },
      { id: "deno", name: "Deno" },
      { id: "express", name: "Express.js" },
      { id: "nestjs", name: "NestJS" },
      { id: "hono", name: "Hono" },
      { id: "python", name: "Python" },
    ],
  },
  {
    id: "databaseManagement",
    iconName: "Database",
    technologies: [
      { id: "postgresql", name: "PostgreSQL" },
      { id: "mysql", name: "MySQL" },
      { id: "mongodb", name: "MongoDB" },
      { id: "sqlite", name: "SQLite" },
      { id: "prisma", name: "Prisma" },
      { id: "drizzleorm", name: "Drizzle ORM" },
    ],
  },
  {
    id: "uiUxDesign",
    iconName: "PenTool",
    technologies: [
      { id: "figma", name: "Figma" },
      { id: "tailwindcss", name: "Tailwind CSS" },
      { id: "shadcnui", name: "shadcn/ui" },
    ],
  },
  {
    id: "softwareArchitecture",
    iconName: "Network",
    technologies: [
      { id: "docker", name: "Docker" },
      { id: "kubernetes", name: "Kubernetes" },
      { id: "git", name: "Git" },
      { id: "amazonservices", name: "AWS" },
    ],
  },
];

// Function to get skills with translated content
export function getTranslatedSkills(
  lang: LanguageCode | undefined
): Array<TranslatedSkill> {
  const currentLang = lang || defaultLanguage;

  return skillsList.map((skill) => {
    type SkillIdKey =
      keyof (typeof ui)[typeof defaultLanguage]["skillsContent"];
    const currentSkillId = skill.id as SkillIdKey;

    const skillTranslations =
      ui[currentLang]?.skillsContent?.[currentSkillId] ||
      ui[defaultLanguage].skillsContent[currentSkillId]!;

    return {
      ...skill, // This includes id and iconName
      title: skillTranslations.title,
      description: skillTranslations.description,
    };
  });
}
