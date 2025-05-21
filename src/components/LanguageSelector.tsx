import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

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
      // onSelectChange?.(); // Si tu as un callback
      window.location.href = targetUrl;
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
              "flex items-center gap-2 hover:bg-accent hover:cursor-pointer",
              currentLocale === lang.code ? "bg-accent" : ""
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
