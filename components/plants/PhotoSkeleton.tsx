export function PhotoSkeleton({ label }: { label: string }) {
  return (
    <div className="plant-photo-skeleton" role="img" aria-label={label}>
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8.5" cy="9.5" r="1.5" />
        <path d="M21 16l-5-5L6 20" />
      </svg>
    </div>
  );
}
