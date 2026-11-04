import type { Locale } from "@/content";
import { bookPhotoNote, sectionPhotos } from "@/content/section-photos";
import { ZoomableImage } from "./ZoomableImage";

type SectionPhotosProps = {
  section: keyof typeof sectionPhotos;
  locale: Locale;
  showBookNote?: boolean;
};

export function SectionPhotos({ section, locale, showBookNote = false }: SectionPhotosProps) {
  const photos = sectionPhotos[section];
  return (
    <div className="section-photos-block">
      <ul className="section-photos" data-count={photos.length}>
        {photos.map(({ src, caption }) => (
          <li key={src}>
            <figure>
              <ZoomableImage src={src} alt={caption[locale]} locale={locale} />
              <figcaption>{caption[locale]}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      {showBookNote && <p className="section-photos-note">{bookPhotoNote[locale]}</p>}
    </div>
  );
}
