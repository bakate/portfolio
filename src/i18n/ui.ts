export const languages: Record<"fr" | "en", { name: string; flag: string }> = {
  fr: { name: "Français", flag: "fr" },
  en: { name: "English", flag: "us" },
} as const;

export const defaultLanguage = "fr";

export type LanguageCode = keyof typeof languages;

export const ui = {
  fr: {
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
      pageTitle: "Accueil",
      pageDescription: "Bienvenue sur mon Portfolio !",
      welcome: "Bienvenue sur mon Portfolio !",
      subtitle:
        "Développeur FullStack passionné par la création d'expériences web modernes et performantes.",
      cta: "Découvrir mes projets",
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
        "Découvrez mon parcours, mes compétences et mes passions en tant que développeur FullStack.",
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
        "Discutons de votre projet, d'une collaboration potentielle, ou simplement pour échanger sur la tech !",
      title: "Me Contacter",
      description:
        "Discutons de votre projet, d'une collaboration potentielle, ou simplement pour échanger sur la tech !",

      formTitle: "Envoyer un message",
      nameLabel: "Nom",
      emailLabel: "Email",
      messageLabel: "Message",
      sendButtonLabel: "Envoyer",

      calendarTitle: "Planifier un RDV",
      calendarDescription:
        "Vous préférez discuter de vive voix ? Réservez directement un créneau dans mon agenda.",
      calendarButtonLabel: "Voir mes disponibilités",
      calendarPlaceHolder:
        "L'intégration avec Google Calendar se fera bientôt...",
    },
  },
  en: {
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
      pageTitle: "Home",
      pageDescription: "Welcome to my Portfolio!",
      welcome: "Welcome to my Portfolio!",
      subtitle:
        "Passionate FullStack Developer creating modern and performant web experiences.",
      cta: "Discover my projects",
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
