const paths = {
  layers: "M12 3 2 8l10 5 10-5-10-5zM2 13l10 5 10-5M2 18l10 5 10-5",
  users: "M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 20v-2a4 4 0 0 0-3-3.9M16 2.1a4 4 0 0 1 0 7.8",
  calendar: "M4 5h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM16 3v4M8 3v4M3 10h18",
  document: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM14 2v6h6M8 13h8M8 17h8",
  home: "M3 11 12 3l9 8M5 9.5V21h14V9.5M10 21v-6h4v6",
  coins: "M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3zM4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6",
  heartPulse: "M20.8 5.600a5.5 5.5 0 0 0-7.8 0L12 6.700l-1-1.100a5.5 5.5 0 0 0-7.8 7.800L12 22l8.8-8.600a5.5 5.5 0 0 0 0-7.800zM5 12h4l2-3 2 5 1.5-2H19",
  medal: "M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM8.5 9 6 2h4l2 5M15.5 9 18 2h-4l-2 5M12 12v5",
  shield: "M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10zM9 12l2 2 4-4",
  eye: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  sprout: "M12 22V11M12 11C12 7 9 4 4 4c0 5 3 7 8 7zM12 14c0-3.5 3-6 8-6 0 4.5-3 6-8 6z",
  sun: "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2M12 21v2M4.2 4.200l1.4 1.400M18.4 18.400l1.4 1.400M1 12h2M21 12h2M4.2 19.800l1.4-1.400M18.4 5.600l1.4-1.4",
  pin: "M12 22s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12zM12 12.500a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  book: "M4 19.500A2.5 2.5 0 0 1 6.5 17H20V3H6.500A2.5 2.5 0 0 0 4 5.500v14zM4 19.500A2.5 2.5 0 0 0 6.5 22H20v-5",
  hand: "M18 11V6a2 2 0 0 0-4 0M14 10V4a2 2 0 0 0-4 0v2M10 10.500V6a2 2 0 0 0-4 0v8M18 8a2 2 0 0 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.400L2.4 16a2 2 0 0 1 2.8-2.800L6 14",
  heart: "M20.8 5.600a5.5 5.5 0 0 0-7.8 0L12 6.700l-1-1.100a5.5 5.5 0 0 0-7.8 7.800L12 22l8.8-8.600a5.5 5.5 0 0 0 0-7.800z",
  store: "M3 9l1.5-5h15L21 9M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0M5 12v9h14v-9M10 21v-5h4v5",
  zap: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
  smile: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01",
  film: "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM7 3v18M17 3v18M3 8h4M3 16h4M17 8h4M17 16h4M3 12h18",
  graduation: "M2 9l10-5 10 5-10 5-10-5zM6 11.500V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.500M22 9v6",
  archive: "M3 4h18v4H3zM5 8v12h14V8M10 12h4",
  handshake: "M11 17l2 2a2 2 0 0 0 3-3M14 14l2.5 2.500a2 2 0 0 0 3-3L15 9l-1.5 1.500a2.1 2.1 0 0 1-3-3L13 5l-1-1a3 3 0 0 0-4 0L3 9l8 8M21 8l-3-3-5 0",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 7l-10 7L2 7",
  quote: "M10 8H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3v1a3 3 0 0 1-3 3M20 8h-4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3v1a3 3 0 0 1-3 3M10 8v7M20 8v7",
  arrow: "M5 12h14M13 6l6 6-6 6",
} as const;

export type IconName = keyof typeof paths;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

/** Decorative line icon; the surrounding text carries the meaning. */
export function Icon({ name, size = 22, className }: IconProps) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
