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
    skillsContent: {
      frontendDevelopment: {
        title: "Développement Frontend",
        description:
          "Création d'interfaces utilisateur réactives et accessibles avec des frameworks et bibliothèques modernes.",
      },
      backendDevelopment: {
        title: "Développement Backend",
        description:
          "Conception d'applications serveur robustes et d'API pour alimenter les applications web.",
      },
      databaseManagement: {
        title: "Gestion de Bases de Données",
        description:
          "Conception et optimisation de schémas de bases de données pour un stockage et une récupération efficaces des données.",
      },
      uiUxDesign: {
        title: "Conception UI/UX",
        description:
          "Création d'interfaces et d'expériences utilisateur intuitives et visuellement attrayantes.",
      },
      softwareArchitecture: {
        title: "Architecture Logicielle",
        description:
          "Application des principes de la Clean Architecture pour des systèmes maintenables et évolutifs.",
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
      mySkillsTitle: "Mes Compétences",
      mySkillsDescription:
        "Explorez l'expertise et les capacités qui définissent mon travail et ma passion.",
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
      firstNameLabel: "Prénom",
      lastNameLabel: "Nom",
      emailLabel: "Email",
      messageLabel: "Message",
      sendButtonLabel: "Envoyer",
      firstNamePlaceholder: "Ton prénom",

      lastNamePlaceholder: "Ton nom de famille",
      emailPlaceholder: "Ton adresse e-mail",
      messagePlaceholder: "Ton message ici...",
      calendarTitle: "Planifier un RDV",
      calendarDescription:
        "Tu préfères discuter de vive voix ? Réservez directement un créneau dans mon agenda.",
      calendarButtonLabel: "Voir mes disponibilités",
      calendarLinkLabel: "Voir mon agenda",
      calendarPlaceHolder:
        "L'intégration avec Google Calendar se fera bientôt...",
      orSeparatorText: "OU",
    },
    notFoundPage: {
      pageTitle: "Page Non Trouvée",
      title: "Oups ! Page Non Trouvée",
      message:
        "Désolé, la page que vous recherchez ne semble pas exister. Vérifiez l'URL ou retournez à la page d'accueil.",
      homeLink: "Retourner à l'Accueil",
    },
    zodErrors: {
      // Common errors
      invalid_type: "Type invalide.",
      invalid_type_received_undefined: "Ce champ est requis.", // For required fields
      // String errors
      too_small_string_minimum: "Doit contenir au moins {minimum} caractères.",
      too_big_string_maximum: "Ne doit pas dépasser {maximum} caractères.",
      invalid_string_email: "Adresse e-mail invalide.",
      invalid_string_url: "URL invalide.",
      invalid_string_uuid: "UUID invalide.",
      // You can add more specific messages as needed
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
    skillsContent: {
      frontendDevelopment: {
        title: "Frontend Development",
        description:
          "Building responsive and accessible user interfaces with modern frameworks and libraries.",
      },
      backendDevelopment: {
        title: "Backend Development",
        description:
          "Creating robust server-side applications and APIs to power web applications.",
      },
      databaseManagement: {
        title: "Database Management",
        description:
          "Designing and optimizing database schemas for efficient data storage and retrieval.",
      },
      uiUxDesign: {
        title: "UI/UX Design",
        description:
          "Creating intuitive and visually appealing user interfaces and experiences.",
      },
      softwareArchitecture: {
        title: "Software Architecture",
        description:
          "Applying Clean Architecture principles for maintainable and scalable systems.",
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
      mySkillsTitle: "My Skills",
      mySkillsDescription:
        "Explore the expertise and abilities that define my work and passion.",
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
      firstNameLabel: "First Name",
      lastNameLabel: "Last Name",
      emailLabel: "Email",
      messageLabel: "Message",
      sendButtonLabel: "Send",
      firstNamePlaceholder: "Your first name",
      lastNamePlaceholder: "Your last name",
      emailPlaceholder: "Your email address",
      messagePlaceholder: "Your message here...",
      calendarTitle: "Schedule a Meeting",
      calendarDescription:
        "Prefer to talk live? Book a slot directly in my calendar.",
      calendarButtonLabel: "See my availability",
      calendarLinkLabel: "See my calendar",
      calendarPlaceHolder:
        "The integration with Google Calendar will be soon...",
      orSeparatorText: "OR",
    },
    notFoundPage: {
      pageTitle: "Page Not Found",
      title: "Oops! Page Not Found",
      message:
        "Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.",
      homeLink: "Return to Homepage",
    },
    zodErrors: {
      // Common errors
      invalid_type: "Invalid type.",
      invalid_type_received_undefined: "This field is required.", // For required fields
      // String errors
      too_small_string_minimum: "Must be at least {minimum} characters long.",
      too_big_string_maximum: "Must be no more than {maximum} characters long.",
      invalid_string_email: "Invalid email address.",
      invalid_string_url: "Invalid URL.",
      invalid_string_uuid: "Invalid UUID.",
      // You can add more specific messages as needed
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
