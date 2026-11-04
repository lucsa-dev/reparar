import type { Locale } from "@/content";
import { fieldPhotos } from "@/content/field-photos";
import { ZoomableImage } from "./ZoomableImage";

export function FieldGallery({ locale }: { locale: Locale }) {
  return (
    <ul className="field-gallery">
      {fieldPhotos.map(({ file, place, portrait, caption }) => (
        <li key={file}>
          <figure>
            <ZoomableImage src={`/field/${file}`} alt={caption[locale]} locale={locale} caption={place ? `${caption[locale]} · ${place}` : caption[locale]} className={portrait ? "portrait" : undefined} />
            <figcaption>{place ? `${caption[locale]} · ${place}` : caption[locale]}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
