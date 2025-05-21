export const languages: Record<"fr" | "en", { name: string; flag: string }> = {
  fr: { name: "Français", flag: "fr" },
  en: { name: "English", flag: "us" },
} as const;

export const defaultLanguage = "fr";

export type LanguageCode = keyof typeof languages;

export const ui = {
  fr: {
    projectsContent: {
      codeHaven: {
        title: "Code Haven",
        description:
          "Une plateforme d'apprentissage pour les futurs développeurs.",
        imageAltText: "Image du projet Code Haven",
      },
      afrikaZon: {
        title: " AfrikaZon",
        description:
          "Une plateforme e-commerce où l'on peut acheter des vêtements africains.",
        imageAltText: "Image du projet AfrikaZon",
      },
      samouraStore: {
        title: "Samoura Store",
        description:
          "Une plateforme e-commerce où l'on peut acheter des vêtements.",
        imageAltText: "Image du projet Samoura Store",
      },
      cms: {
        title: "Système de Gestion de Contenu",
        description:
          "Une plateforme où vous pouvez créer, éditer et supprimer du contenu.",
        imageAltText: "Image du projet CMS",
      },
    },
    site: {
      title: "Portfolio Bakate",
      description:
        "Mon portfolio et blog technique personnel de développeur FullStack.",
    },
    nav: {
      home: "Accueil",
      blog: "Blog",
      about: "À Propos",
      contact: "Contact",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
    homePage: {
      pageTitle: "Accueil | Bakate - Développeur FullStack",
      pageDescription:
        "Bienvenue sur le portfolio de Bakate, développeur FullStack passionné par la création d'expériences web innovantes.",
      heroGreeting: "Salut, c'est Bakate",
      heroSubtitlePart1: "Développeur FullStack",
      heroSubtitlePart2: "Passionné UI/UX",
      heroIntroduction:
        "Je suis un Développeur FullStack et mordu de UI/UX basé à Paris. J'adore créer des expériences numériques qui sont à la fois belles, fonctionnelles et centrées sur l'utilisateur. Fort d'une solide expérience en technologies front-end et back-end, je m'efforce de construire des solutions qui ne sont pas seulement techniquement robustes, mais aussi intuitives et engageantes pour les utilisateurs.",
      heroViewWorkButton: "Mes réalisations",
      heroContactButton: "Me contacter",
      heroImageAlt:
        "Illustration représentant Bakate ou un concept de développement",
      featuredProjectsTitle: "Projets à la Une",
      featuredProjectsDescription:
        "Voici quelques projets sur lesquels j'ai récemment travaillé. N'hésitez pas à les explorer !",
      projectCardViewProject: "Voir le projet",
      projectCardViewCode: "Voir le code",
      imageNotAvailable: "Image bientôt disponible",
    },
    blogPage: {
      pageTitle: "Mon Blog Technique",
      pageDescription:
        "Articles et réflexions sur le développement web, l'architecture logicielle, et les nouvelles technologies.",
      title: "Mon Blog Technique",
      description:
        "Articles et réflexions sur le développement web, l'architecture logicielle, et les nouvelles technologies.",
      comingSoon:
        "Les articles de blog apparaîtront ici bientôt. Revenez plus tard !",
    },
    aboutPage: {
      pageTitle: "À Propos de Moi",
      pageDescription:
        "Découvre mon parcours, mes compétences et mes passions en tant que développeur FullStack.",
      introduction:
        "Je suis Bakate, un développeur FullStack avec plus de 5 ans d'expérience dans la conception et la création d'applications web robustes et scalables.",
      skills:
        "Passionné par l'écosystème JavaScript/TypeScript, je travaille régulièrement avec des technologies modernes telles que React, Next.js, Angular, Node.js, et plus récemment Astro. J'ai un fort intérêt pour les architectures propres (Hexagonale) et les bases de données performantes comme PostgreSQL, tout en explorant des ORMs comme Drizzle.",

      reasonWhy:
        "Ce portfolio et ce blog sont une plateforme pour partager mes connaissances, documenter mes apprentissages et présenter mes projets. Mon objectif est de contribuer à la communauté des développeurs et d'explorer de nouvelles opportunités professionnelles.",
      additionalInfo:
        "En dehors du code, je suis curieux des avancées en IA et j'aime [mentionne un ou deux hobbies/intérêts personnels ici pour rendre la page plus personnelle].",
    },
    contactPage: {
      pageTitle: "Me Contacter",
      pageDescription:
        "Discutons de ton projet, d'une collaboration potentielle, ou simplement pour échanger sur la tech !",
      title: "Me Contacter",
      description:
        "Discutons de ton projet, d'une collaboration potentielle, ou simplement pour échanger sur la tech !",

      formTitle: "Envoyer un message",
      nameLabel: "Nom",
      emailLabel: "Email",
      messageLabel: "Message",
      sendButtonLabel: "Envoyer",

      calendarTitle: "Planifier un RDV",
      calendarDescription:
        "Tu préfères discuter de vive voix ? Réservez directement un créneau dans mon agenda.",
      calendarButtonLabel: "Voir mes disponibilités",
      calendarPlaceHolder:
        "L'intégration avec Google Calendar se fera bientôt...",
    },
    notFoundPage: {
      pageTitle: "Page non trouvée",
      title: "Oops ! Page non trouvée",
      message:
        "Désolé, la page que tu recherches semble introuvable. Vérifie l'URL ou retourne à l'accueil.",
      homeLink: "Retourner à l'accueil",
    },
  },
  en: {
    projectsContent: {
      codeHaven: {
        title: "Code Haven",
        description: "A learning platform for future developers",
        imageAltText: "Code Haven project image",
      },
      afrikaZon: {
        title: "AfrikaZon",
        description: "An e-commerce platform where we can buy African clothes.",
        imageAltText: "AfrikaZon project image",
      },
      samouraStore: {
        title: "Samoura Store",
        description: "An e-commerce platform where we can buy clothes.",
        imageAltText: "Samoura Store project image",
      },
      cms: {
        title: "Content Management System",
        description:
          "A platform where you can create, edit and delete content.",
        imageAltText: "CMS project image",
      },
    },
    site: {
      title: "Bakate Portfolio",
      description:
        "My personal technical portfolio and blog as a FullStack Developer.",
    },
    nav: {
      home: "Home",
      blog: "Blog",
      about: "About",
      contact: "Contact",
    },
    footer: {
      rights: "All rights reserved.",
    },
    homePage: {
      pageTitle: "Home | Bakate - FullStack Developer",
      pageDescription:
        "Welcome to the portfolio of Bakate, a FullStack developer passionate about creating innovative web experiences.",
      heroGreeting: "Hi, I'm Bakate",
      heroSubtitlePart1: "Full Stack Developer",
      heroSubtitlePart2: "UI/UX Enthusiast",
      heroIntroduction:
        "I'm a passionate Full Stack Developer and UI/UX enthusiast based in Paris. I love creating beautiful, functional, and user-centered digital experiences. With a strong foundation in both front-end and back-end technologies, I strive to build solutions that are not only technically sound but also intuitive and engaging for users.",
      heroViewWorkButton: "View My Work",
      heroContactButton: "Get In Touch",
      heroImageAlt: "Illustration representing Bakate or a development concept",
      featuredProjectsTitle: "Featured Projects",
      featuredProjectsDescription:
        "Here are some of the projects I've recently worked on. Feel free to explore!",
      projectCardViewProject: "View Project",
      projectCardViewCode: "View Code",
      imageNotAvailable: "Image not available for now",
    },
    blogPage: {
      pageTitle: "My Technical Blog",
      pageDescription:
        "Articles and thoughts on web development, software architecture, and new technologies.",
      title: "My Technical Blog",
      description:
        "Articles and thoughts on web development, software architecture, and new technologies.",
      comingSoon: "Blog posts will appear here soon. Check back later!",
    },
    aboutPage: {
      pageTitle: "About Me",
      pageDescription:
        "Discover my journey, skills, and passions as a FullStack Developer.",

      introduction:
        "I'm Bakate, a FullStack Developer with more than 5 years of experience in web application design and development.",

      skills:
        "Passionated by the JavaScript/TypeScript ecosystem, I regularly work with modern technologies such as React, Next.js, Angular, Node.js, and more recently Astro. I have a strong interest in proper architectures (Hexagonal) and performant databases like PostgreSQL, while exploring ORMs like Drizzle.",

      reasonWhy:
        "This portfolio and blog are a platform to share my knowledge, document my learnings, and present my projects. My goal is to contribute to the developer community and explore new professional opportunities.",

      additionalInfo:
        "Outside of code, I'm curious about AI advancements and enjoy [mention your hobbies/personal interests here to make the page more personal].",
    },
    contactPage: {
      pageTitle: "Contact Me",
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",

      title: "Contact Me",
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: "Send a message",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendButtonLabel: "Send",
      calendarTitle: "Schedule a Meeting",
      calendarDescription:
        "Prefer to talk live? Book a slot directly in my calendar.",
      calendarButtonLabel: "See my availability",
      calendarPlaceHolder:
        "The integration with Google Calendar will be soon...",
    },
    notFoundPage: {
      pageTitle: "Page Not Found",
      title: "Oops! Page Not Found",
      message:
        "Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.",
      homeLink: "Return to Homepage",
    },
  },
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Get the available keys for this feature from the default language
  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}
