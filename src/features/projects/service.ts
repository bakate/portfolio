import type { ImageMetadata } from "astro";
import project0Img from "@/assets/p0.webp";
import project1Img from "@/assets/p1.webp";
import project2Img from "@/assets/p2.webp";
import project3Img from "@/assets/p3.webp";
import codeHavenAuth from "@/assets/projects/codehaven/auth.png";
import codeHavenCourses from "@/assets/projects/codehaven/courses.png";
import codeHavenCourse from "@/assets/projects/codehaven/course.png";
import codeHavenPreview from "@/assets/projects/codehaven/preview.png";
import codeHavenProtected from "@/assets/projects/codehaven/protected.png";
import codeHavenStudentDashboard from "@/assets/projects/codehaven/student-dashboard.png";
import codeHavenTeacherDashboard from "@/assets/projects/codehaven/teacher-dashboard.png";
import codeHavenEditCourse from "@/assets/projects/codehaven/teacher-edit-course.png";

// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from "@/i18n/ui";

export type KeyFeature = {
  id: string; // for i18n key
  // icon?: string; // Optional: if you want to associate an icon from lucide-react or similar
};

export type TechnologyDetail = {
  id: string; // e.g., 'react', 'typescript'
  name: string; // e.g., 'React', 'TypeScript'
  // category?: 'frontend' | 'backend' | 'database' | 'devops' | 'other'; // Optional: for grouping
};

export type GalleryImage = {
  id: string;
  src: ImageMetadata; // Source of the gallery image, now strictly ImageMetadata
  alt: string; // Will be translated
  caption?: string; // Optional, will be translated
};

export type ProjectData = {
  id: string; // Keep as is, used for main i18n key and internal reference
  slug: string; // New: for URL generation, e.g., 'my-awesome-project'
  imageUrl?: ImageMetadata; // Main project image, keep as is
  projectUrl?: string; // Link to live project, keep as is
  codeUrl?: string; // Link to source code, keep as is
  tags: Array<string>; // Existing tags, can be used for quick filtering or display

  // New fields for detailed project page
  category?: string; // New: e.g., 'Web Application', 'Mobile App', 'Data Science'. Will be translated.
  date?: string; // New: e.g., '2023', 'Q2 2024', 'Jan 2023 - Mar 2024'. Will be translated.

  // galleryImages will have their alt/captions translated, so the structure itself is here
  galleryImages?: Array<{ id: string; src: ImageMetadata }>; // Store raw image data, alt/captions come from i18n

  // keyFeatures will have their title/description translated
  keyFeatures?: Array<KeyFeature>; // Array of feature IDs, details from i18n

  // technologiesUsed can be more detailed than simple tags
  technologiesUsed?: Array<TechnologyDetail>; // More structured than tags
};

// Define the type for a project once its content is translated
export type TranslatedKeyFeature = KeyFeature & {
  title: string;
  description: string;
};

export type TranslatedGalleryImage = GalleryImage & {
  // alt and caption are already strings and will be provided by the translation file
  // src is already ImageMetadata
};

export type TranslatedProject = ProjectData & {
  // Existing translated fields
  title: string; // Main title of the project
  description: string; // Short description for cards/previews
  imageAltText: string; // Alt text for the main project image

  // New translated fields for the detailed page
  categoryText?: string; // Translated category
  dateText?: string; // Translated date display string
  detailedDescription?: string; // Longer description for the project detail page
  galleryImagesTranslated?: Array<{
    id: string;
    src: ImageMetadata; // Source of the gallery image, now strictly ImageMetadata
    alt: string; // Translated alt text
    caption: string; // Translated caption
  }>;
  keyFeaturesTranslated?: Array<TranslatedKeyFeature>; // Key features with translated titles/descriptions
  challenges?: string; // Description of challenges faced (translated)
  learnings?: string; // Key learnings from the project (translated)
  // technologiesUsed.name will be translated if needed, or could be kept as is if they are proper names
};

export const projectsList: Array<ProjectData> = [
  {
    id: "codeHaven",
    slug: "code-haven",
    imageUrl: project0Img,
    projectUrl: "https://staging.codehaven.eu/",
    codeUrl: "https://github.com/bakate/code-haven",
    tags: ["Next.js", "TypeScript", "drizzle-orm", "postgresql"],
    category: "Web Application", // Placeholder
    date: "2024", // Placeholder
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
    ], // Placeholder
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
    ], // Placeholder with IDs
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
    imageUrl: project1Img,
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
    date: "2024", // Placeholder
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
    imageUrl: project2Img,
    projectUrl: "https://e-commerce-cms-ney3.vercel.app/",
    codeUrl: "https://github.com/bakate/e-commerce-store",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "shadcn/ui"],
    category: "E-commerce Storefront", // Placeholder
    date: "2023", // Placeholder
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
    imageUrl: project3Img,
    projectUrl: "https://e-commerce-cms-ebon.vercel.app/",
    codeUrl: "https://github.com/bakate/e-commerce-cms",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "shadcn/ui"],
    category: "Content Management System", // Placeholder
    date: "2023", // Placeholder
    galleryImages: [], // Placeholder
    keyFeatures: [{ id: "userManagement" }, { id: "contentEditing" }], // Placeholder with IDs
    technologiesUsed: [
      { id: "nextjs", name: "Next.js" },
      { id: "typescript", name: "TypeScript" },
    ], // Placeholder
  },
];

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
