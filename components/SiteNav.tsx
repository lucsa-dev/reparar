"use client";

import { useState } from "react";
import type { Dictionary } from "@/content/types";
import { Icon } from "./Icon";

type SiteNavProps = {
  content: Dictionary["nav"];
  /** Path of the landing page when the menu is shown on another page. */
  home?: string;
};

export function SiteNav({ content, home = "" }: SiteNavProps) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="site-nav" aria-label={content.label} onKeyDown={(event) => event.key === "Escape" && setOpen(false)}>
      <button type="button" className="site-nav-toggle" aria-expanded={open} aria-controls="site-nav-links" onClick={() => setOpen(!open)}>
        <Icon name={open ? "close" : "menu"} />
        {content.menu}
      </button>
      <ul id="site-nav-links" className={open ? "wide open" : "wide"}>
        {content.items.map(({ id, label }) => (
          <li key={id}>
            <a href={`${home}#${id}`} onClick={() => setOpen(false)}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
