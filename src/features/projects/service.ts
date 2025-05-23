import {
  afrikaZonPreviewImage,
  codeHavenPreviewImage,
  samouraStorePreviewImage,
  cmsPreviewImage,
} from "@/assets/projects/all-previews";
import {
  codeHavenAuth,
  codeHavenCourse,
  codeHavenCourses,
  codeHavenEditCourse,
  codeHavenPreview,
  codeHavenProtected,
  codeHavenStudentDashboard,
  codeHavenTeacherDashboard,
} from "@/assets/projects/codehaven";

// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from "@/i18n/ui";
import type {
  ProjectData,
  SkillData,
  TranslatedProject,
  TranslatedSkill,
} from "./type";

const projectsListUnsorted: Array<ProjectData> = [
  {
    id: "codeHaven",
    slug: "code-haven",
    imageUrl: codeHavenPreviewImage,
    projectUrl: "https://staging.codehaven.eu/",
    codeUrl: "https://github.com/bakate/code-haven",
    tags: ["Next.js", "TypeScript", "drizzle-orm", "postgresql"],
    category: "LMS (Learning Management System)",
    date: "2024-07-15",
    galleryImages: [
      {
        id: "codeHavenAuth",
        src: codeHavenAuth,
      },
      {
        id: "codeHavenCourses",
        src: codeHavenCourses,
      },
      {
        id: "codeHavenCourse",
        src: codeHavenCourse,
      },
      {
        id: "codeHavenPreview",
        src: codeHavenPreview,
      },
      {
        id: "codeHavenProtected",
        src: codeHavenProtected,
      },
      {
        id: "codeHavenStudentDashboard",
        src: codeHavenStudentDashboard,
      },
      {
        id: "codeHavenTeacherDashboard",
        src: codeHavenTeacherDashboard,
      },
      {
        id: "codeHavenEditCourse",
        src: codeHavenEditCourse,
      },
    ],
    keyFeatures: [
      { id: "authentication" },
      { id: "dashboard" },
      { id: "userManagement" },
      { id: "contentEditing" },
      { id: "progressCalculation" },
      { id: "studentDashboard" },
      { id: "teacherMode" },
      { id: "createNewCourses" },
      { id: "createNewChapters" },
      { id: "dragAndDrop" },
      { id: "uploadThing" },
      { id: "mux" },
      { id: "hlsPlayer" },
      { id: "richTextEditor" },
    ],
    technologiesUsed: [
      { id: "nextjs", name: "Next.js" },
      { id: "typescript", name: "TypeScript" },
      { id: "drizzle-orm", name: "Drizzle ORM" },
      { id: "postgresql", name: "PostgreSQL" },
      { id: "hono", name: "Hono" },
      { id: "tanstack-query", name: "TanStack/React-Query" },
      { id: "heroui", name: "Hero UI" },
      { id: "tailwindcss", name: "TailwindCSS" },
      { id: "tRPC", name: "tRPC" },
      { id: "authjs", name: "AuthJS" },
      { id: "next-intl", name: "Next-Intl" },
      { id: "vercel", name: "Vercel" },
      { id: "mux", name: "Mux" },
    ],
  },
  {
    id: "afrikaZon",
    slug: "afrikazon",
    imageUrl: afrikaZonPreviewImage,
    projectUrl: "https://www.afrikazon.com/",
    codeUrl: "https://github.com/bakate/afrikazon",
    tags: [
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "shadcn/ui",
      "hono",
      "tanstack-query",
      "drizzle-orm",
      "postgresql",
    ],
    category: "E-commerce Platform", // Placeholder
    date: "2024-03-22", // Placeholder
    galleryImages: [], // Placeholder
    keyFeatures: [
      { id: "authentication" },
      { id: "checkout" },
      { id: "productDisplay" },
      { id: "cart" },
      { id: "paymentProcessing" },
      { id: "shipping" },
      { id: "orderManagement" },
      { id: "inventoryManagement" },
      { id: "customerSupport" },
      { id: "paymentProcessing" },
      { id: "shipping" },
      { id: "orderManagement" },
      { id: "roleManagement" },
      { id: "inventoryManagement" },
      { id: "customerSupport" },
    ],
    technologiesUsed: [
      { id: "nextjs", name: "Next.js" },
      { id: "tailwindcss", name: "TailwindCSS" },
      { id: "typescript", name: "TypeScript" },
      { id: "shadcn/ui", name: "shadcn/ui" },
      { id: "hono", name: "Hono" },
      { id: "tanstack-query", name: "TanStack/React-Query" },
      { id: "drizzle-orm", name: "Drizzle ORM" },
      { id: "postgresql", name: "PostgreSQL" },
      { id: "vercel", name: "Vercel" },
      { id: "stripe", name: "Stripe" },
      { id: "cloudinary", name: "Cloudinary" },
    ],
  },
  {
    id: "samouraStore",
    slug: "samoura-store",
    imageUrl: samouraStorePreviewImage,
    projectUrl: "https://e-commerce-cms-ney3.vercel.app/",
    codeUrl: "https://github.com/bakate/e-commerce-store",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "shadcn/ui"],
    category: "E-commerce Storefront", // Placeholder
    date: "2023-05-10", // Placeholder
    galleryImages: [], // Placeholder
    keyFeatures: [{ id: "productDisplay" }, { id: "cart" }], // Placeholder with IDs
    technologiesUsed: [
      { id: "nextjs", name: "Next.js" },
      { id: "typescript", name: "TypeScript" },
    ], // Placeholder
  },
  {
    id: "cms",
    slug: "cms",
    imageUrl: cmsPreviewImage,
    projectUrl: "https://e-commerce-cms-ebon.vercel.app/",
    codeUrl: "https://github.com/bakate/e-commerce-cms",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "shadcn/ui"],
    category: "Content Management System", // Placeholder
    date: "2023-04-15", // Placeholder
    galleryImages: [], // Placeholder
    keyFeatures: [{ id: "userManagement" }, { id: "contentEditing" }], // Placeholder with IDs
    technologiesUsed: [
      { id: "nextjs", name: "Next.js" },
      { id: "typescript", name: "TypeScript" },
    ], // Placeholder
  },
];

export const projectsList = [...projectsListUnsorted].sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});
// Helper function to translate a single project
function translateProject(
  project: ProjectData,
  lang: LanguageCode
): TranslatedProject {
  type ProjectIdKey =
    keyof (typeof ui)[typeof defaultLanguage]["projectsContent"];
  const currentProjectId = project.id as ProjectIdKey;

  // Ensure fallback to defaultLanguage for the entire project's content if not found in currentLang
  const projectContentSource = ui[lang]?.projectsContent?.[currentProjectId]
    ? ui[lang].projectsContent
    : ui[defaultLanguage].projectsContent;

  const i18nData = projectContentSource[currentProjectId];

  // Translate key features
  const keyFeaturesTranslated =
    project.keyFeatures?.map((kf) => {
      const typedKeyFeatures = i18nData?.keyFeatures as Record<
        string,
        { title: string; description: string } | undefined
      >;
      const featureTranslations = typedKeyFeatures?.[kf.id] ?? {
        title: kf.id,
        description: "Description missing",
      };
      return {
        ...kf,
        title: featureTranslations.title,
        description: featureTranslations.description,
      };
    }) ?? [];

  const galleryImagesTranslated =
    project.galleryImages?.map((gi) => {
      const typedGalleryImages = i18nData?.galleryImages as Record<
        string,
        { alt: string; caption: string } | undefined
      >;
      const imageTranslations = typedGalleryImages?.[gi.id] ?? {
        alt: `Alt text for ${gi.id} missing`,
        caption: "",
      };
      return {
        ...gi, // This includes src and id
        alt: imageTranslations.alt,
        caption: imageTranslations.caption,
      };
    }) ?? [];

  return {
    ...project,
    title: i18nData.title,
    description: i18nData.description,
    imageAltText: i18nData.imageAltText,
    categoryText: i18nData.categoryText ?? project.category,
    dateText: i18nData.dateText ?? project.date,
    detailedDescription:
      i18nData?.detailedDescription ?? "Detailed description missing",
    keyFeaturesTranslated,
    galleryImagesTranslated,
    challenges: i18nData?.challenges ?? "Challenges information missing",
    learnings: i18nData?.learnings ?? "Learnings information missing",
  };
}

// Function to get projects with translated content
export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;
  return projectsList.map((project) => translateProject(project, currentLang));
}

// Function to get a single project by its slug (untranslated)
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsList.find((project) => project.slug === slug);
}

// Function to get a single translated project by its slug
export function getTranslatedProjectBySlug(
  slug: string,
  lang: LanguageCode | undefined
): TranslatedProject | undefined {
  const project = getProjectBySlug(slug);
  if (!project) {
    return undefined;
  }
  const currentLang = lang || defaultLanguage;
  return translateProject(project, currentLang);
}

// Skills

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
  const currentLang = lang ?? defaultLanguage;

  return skillsList.map((skill) => {
    type SkillIdKey =
      keyof (typeof ui)[typeof defaultLanguage]["skillsContent"];
    const currentSkillId = skill.id as SkillIdKey;

    const skillTranslations =
      ui[currentLang]?.skillsContent?.[currentSkillId] ??
      ui[defaultLanguage].skillsContent[currentSkillId]!;

    return {
      ...skill, // This includes id and iconName
      title: skillTranslations.title,
      description: skillTranslations.description,
    };
  });
}
