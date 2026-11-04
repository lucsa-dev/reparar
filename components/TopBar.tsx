import type { Locale } from "@/content";
import type { Dictionary } from "@/content/types";
import { Logo } from "./Logo";
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
      <div className="top-bar-brand">
        <Logo variant="horizontal" locale={locale} />
        <Logo variant="symbol" locale={locale} />
      </div>
      <div className="top-bar-actions">
        <LanguageSwitcher current={locale} label={ui.languageLabel} path={path} />
        <ThemeToggle label={ui.themeToggle} />
      </div>
    </div>
  );
}
