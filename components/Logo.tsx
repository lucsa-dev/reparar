import Link from "next/link";
import { localeHref, type Locale } from "@/content";

const BRAND_NAME = "Reparação Integral Comunitária";

const variants = {
  horizontal: { width: 963, height: 192, light: "logo-horizontal-light.webp", dark: "logo-horizontal-dark.webp" },
  full: { width: 720, height: 491, light: "logo-full-light.webp", dark: "logo-full-dark.webp" },
  symbol: { width: 210, height: 192, light: "symbol.webp", dark: "symbol.webp" },
};

type LogoProps = {
  variant: keyof typeof variants;
  locale: Locale;
};

/** Official mark. The dark version only recolors the wordmark so it stays legible on dark backgrounds. */
export function Logo({ variant, locale }: LogoProps) {
  const { width, height, light, dark } = variants[variant];
  return (
    <Link className={`brand-link logo-${variant}`} href={localeHref(locale)} aria-label={BRAND_NAME}>
      <img className="logo-on-light" src={`/brand/${light}`} alt={BRAND_NAME} width={width} height={height} />
      <img className="logo-on-dark" src={`/brand/${dark}`} alt="" width={width} height={height} />
    </Link>
  );
}
