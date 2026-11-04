"use client";

import { useRef, useState } from "react";
import { ZoomableImage } from "@/components/ZoomableImage";
import type { Locale } from "@/content";
import type { CatalogPhoto } from "@/content/plant-catalog";
import { plantCopy } from "@/content/plants";

type PhotoCarouselProps = {
  photos: CatalogPhoto[];
  locale: Locale;
};

export function PhotoCarousel({ photos, locale }: PhotoCarouselProps) {
  const copy = plantCopy[locale];
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  function goTo(index: number) {
    const track = trackRef.current;
    track?.scrollTo({ left: index * track.clientWidth });
  }

  function syncCurrent() {
    const track = trackRef.current;
    if (track) setCurrent(Math.round(track.scrollLeft / track.clientWidth));
  }

  return (
    <div className="plant-carousel">
      <div className="plant-track" ref={trackRef} onScroll={syncCurrent}>
        {photos.map(({ src, species }) => (
          <figure className="plant-slide" key={src}>
            <ZoomableImage src={src} alt={species.fullName} locale={locale} caption={`${species.fullName} · ${copy.bookLists[species.list]}`} />
            <figcaption><i>{species.fullName}</i> · {copy.bookLists[species.list]}</figcaption>
          </figure>
        ))}
      </div>
      {photos.length > 1 && (
        <>
          <span className="plant-carousel-count" aria-live="polite" aria-label={copy.photoCount(current + 1, photos.length)}>
            {current + 1}/{photos.length}
          </span>
          <button type="button" className="plant-carousel-button previous" aria-label={copy.previousPhoto} disabled={current === 0} onClick={() => goTo(current - 1)}>‹</button>
          <button type="button" className="plant-carousel-button next" aria-label={copy.nextPhoto} disabled={current === photos.length - 1} onClick={() => goTo(current + 1)}>›</button>
        </>
      )}
    </div>
  );
}
