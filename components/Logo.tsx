import Link from "next/link";
import { localeHref, type Locale } from "@/content";
import { brand } from "@/lib/brand";

type LogoProps = {
  variant: "horizontal" | "full" | "symbol";
  locale: Locale;
};

/** The thread of water: a stream that comes down from the source and meets the tide. */
export function BrandSymbol({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M9 2 C9 9 19 9 19 15 C19 19.5 13 21 7 21" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M2 26 q3.5 -3.2 7 0 t7 0 t7 0 t7 0" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" opacity=".55" />
      <circle cx="7" cy="21" r="2.6" fill="currentColor" />
    </svg>
  );
}

/** Brand mark: the symbol plus "Clínica Ambiental Ceará" over "O Encontro das Águas". */
export function Logo({ variant, locale }: LogoProps) {
  const { name, tagline } = brand[locale];
  return (
    <Link className={`brand-link logo-${variant}`} href={localeHref(locale)} aria-label={`${name} | ${tagline}`}>
      <BrandSymbol className="brand-symbol" />
      {variant !== "symbol" && (
        <span className="brand-words">
          <b>{name}</b>
          <small>{tagline}</small>
        </span>
      )}
    </Link>
  );
}
