import type { Locale } from "@/content";
import { fieldPhotos } from "@/content/field-photos";

export function FieldGallery({ locale }: { locale: Locale }) {
  return (
    <ul className="field-gallery">
      {fieldPhotos.map(({ file, place, portrait, caption }) => (
        <li key={file}>
          <figure>
            <img src={`/field/${file}`} alt={caption[locale]} loading="lazy" decoding="async" className={portrait ? "portrait" : undefined} />
            <figcaption>{place ? `${caption[locale]} · ${place}` : caption[locale]}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
