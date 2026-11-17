import Link from "next/link";
import { Icon } from "./Icon";

/** Set on a landing page section: the section shows a summary and links to its own page. */
export type More = { href: string; label: string };

export function SectionMore({ more }: { more: More }) {
  return (
    <Link className="btn solid section-more" href={more.href}>
      {more.label}
      <Icon name="arrow" size={18} />
    </Link>
  );
}
