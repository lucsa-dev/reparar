"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/content";
import { pageHref } from "@/content/sections";
import type { Dictionary } from "@/content/types";
import { Icon } from "./Icon";

type SiteNavProps = {
  content: Dictionary["nav"];
  locale: Locale;
  /** Id of the page that is currently open, from the menu items or "mandala". */
  current?: string;
};

export function SiteNav({ content, locale, current }: SiteNavProps) {
  const [open, setOpen] = useState(false);
  const items = [...content.items, { id: "mandala", label: content.mandala }];
  return (
    <nav className="site-nav" aria-label={content.label} onKeyDown={(event) => event.key === "Escape" && setOpen(false)}>
      <button type="button" className="site-nav-toggle" aria-expanded={open} aria-controls="site-nav-links" onClick={() => setOpen(!open)}>
        <Icon name={open ? "close" : "menu"} />
        {content.menu}
      </button>
      <ul id="site-nav-links" className={open ? "wide open" : "wide"}>
        {items.map(({ id, label }) => (
          <li key={id}>
            <Link href={pageHref(locale, id)} aria-current={current === id ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
