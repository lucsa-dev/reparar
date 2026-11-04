import type { ReactNode } from "react";

type SplitLayoutProps = {
  /** Side of the section where the media sits on wide screens. */
  side: "left" | "right";
  media: ReactNode;
  /** Gives the media the larger column, for a row of photos beside a short text. */
  wideMedia?: boolean;
  children: ReactNode;
};

export function SplitLayout({ side, media, wideMedia = false, children }: SplitLayoutProps) {
  return (
    <div className={wideMedia ? "split wide split-wide-media" : "split wide"} data-side={side}>
      <div className="split-text">{children}</div>
      <div className="split-media">{media}</div>
    </div>
  );
}
