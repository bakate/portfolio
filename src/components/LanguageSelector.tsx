import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export type Language = {
  code: string;
  name: string;
  flag: string;
  targetUrl: string;
};

type LanguageSelectorProps = {
  currentLocale: string;
  languages: Array<Language>;
  // onSelectChange?: () => void; // Optionnel, si tu as besoin d'un callback
};

export function LanguageSelector({
  currentLocale,
  languages,
}: LanguageSelectorProps) {
  const [isPending, startTransition] = React.useTransition();

  function onSelectLanguage(targetUrl: string) {
    startTransition(() => {
      const currentPathname = window.location.pathname;

      // More specific regex patterns for better readability and maintenance
      const patterns = {
        // French blog detail: /blog/slug (no language prefix)
        frenchBlogDetail: /^\/blog\/[^\/]+(?:\/.*)?$/,
        // English blog detail: /en/blog/slug
        englishBlogDetail: /^\/en\/blog\/[^\/]+(?:\/.*)?$/,
        // Combined pattern for any blog detail page
        anyBlogDetail: /^(?:\/en)?\/blog\/[^\/]+(?:\/.*)?$/,
      };

      const isBlogDetailPage = patterns.anyBlogDetail.test(currentPathname);
      let finalTargetUrl = targetUrl;

      if (isBlogDetailPage) {
        // Determine current language and redirect to appropriate blog index
        if (patterns.englishBlogDetail.test(currentPathname)) {
          // Currently on English blog detail → go to French blog index
          finalTargetUrl = '/blog/';
        } else if (patterns.frenchBlogDetail.test(currentPathname)) {
          // Currently on French blog detail → go to English blog index
          finalTargetUrl = '/en/blog/';
        }
      }
      window.location.href = finalTargetUrl;
    });
  }

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          disabled={isPending}
          className="size-8 p-0 hover:bg-accent"
          aria-label="Changer de langue"
        >
          {currentLanguage ? (
            <img
              src={`https://flagcdn.com/w20/${currentLanguage.flag}.png`}
              alt={`Drapeau ${currentLanguage.name}`}
              width={20}
              height={15}
              className="object-contain"
            />
          ) : (
            <span className="text-sm">{currentLocale.toUpperCase()}</span> // Fallback si drapeau non trouvé
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[180px]">
        {languages.map((lang) => (
          <DropdownMenuCheckboxItem
            key={lang.code}
            className={cn(
              'flex items-center gap-2 hover:bg-accent hover:cursor-pointer',
              currentLocale === lang.code ? 'bg-accent' : ''
            )}
            checked={currentLocale === lang.code}
            onCheckedChange={() => onSelectLanguage(lang.targetUrl)}
            disabled={isPending}
          >
            <img
              src={`https://flagcdn.com/w20/${lang.flag}.png`}
              alt={`Drapeau ${lang.name}`}
              width={20}
              height={15}
              className="object-contain mr-2"
            />
            {lang.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
