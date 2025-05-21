import type { ImageMetadata } from "astro";
import project0Img from "@/assets/p0.webp";
import project1Img from "@/assets/p1.webp";
import project2Img from "@/assets/p2.webp";
import project3Img from "@/assets/p3.webp";

// Import i18n utilities
import { ui, defaultLanguage, type LanguageCode } from "@/i18n/ui";

export type ProjectData = {
  id: string;
  imageUrl?: ImageMetadata;
  projectUrl?: string;
  codeUrl?: string;
  tags: Array<string>;
};

// Define the type for a project once its content is translated
export type TranslatedProject = ProjectData & {
  title: string;
  description: string;
  imageAltText: string;
};

export const projectsList: Array<ProjectData> = [
  {
    id: "codeHaven",
    imageUrl: project0Img,
    projectUrl: "https://staging.codehaven.eu/",
    codeUrl: "https://github.com/bakate/code-haven",
    tags: ["Next.js", "TypeScript", "drizzle-orm", "postgresql"],
  },
  {
    id: "afrikaZon",
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
  },
  {
    id: "samouraStore",
    imageUrl: project2Img,
    projectUrl: "https://e-commerce-cms-ney3.vercel.app/",
    codeUrl: "https://github.com/bakate/e-commerce-store",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "shadcn/ui"],
  },
  {
    id: "cms",
    imageUrl: project3Img,
    projectUrl: "https://e-commerce-cms-ebon.vercel.app/",
    codeUrl: "https://github.com/bakate/e-commerce-cms",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "shadcn/ui"],
  },
];

// Function to get projects with translated content
export function getTranslatedProjects(
  lang: LanguageCode | undefined
): Array<TranslatedProject> {
  const currentLang = lang || defaultLanguage;

  return projectsList.map((project) => {
    type ProjectIdKey =
      keyof (typeof ui)[typeof defaultLanguage]["projectsContent"];
    const currentProjectId = project.id as ProjectIdKey;

    const projectTranslations =
      ui[currentLang]?.projectsContent?.[currentProjectId] ??
      ui[defaultLanguage].projectsContent[currentProjectId];

    return {
      ...project,
      title: projectTranslations.title,
      description: projectTranslations.description,
      imageAltText: projectTranslations.imageAltText,
    };
  });
}
