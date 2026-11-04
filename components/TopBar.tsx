import type { Locale } from "@/content";
import type { Dictionary } from "@/content/types";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

type TopBarProps = {
  locale: Locale;
  ui: Dictionary["ui"];
  path?: string;
};

export function TopBar({ locale, ui, path }: TopBarProps) {
  return (
    <div className="top-bar wide">
      <LanguageSwitcher current={locale} label={ui.languageLabel} path={path} />
      <ThemeToggle label={ui.themeToggle} />
    </div>
  );
}
