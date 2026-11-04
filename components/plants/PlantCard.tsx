import type { Locale } from "@/content";
import { entryTitle, photoPath, type CatalogEntry } from "@/content/plant-catalog";
import { plantCopy } from "@/content/plants";

type PlantCardProps = {
  entry: CatalogEntry;
  locale: Locale;
};

export function PlantCard({ entry, locale }: PlantCardProps) {
  const copy = plantCopy[locale];
  const { plant, photos } = entry;
  return (
    <li className="plant-card">
      {photos.map((photo) => (
        <figure className="plant-photo" key={photo.page}>
          <img src={photoPath(photo)} alt={photo.fullName} loading="lazy" decoding="async" />
          <figcaption><i>{photo.fullName}</i> · {copy.bookLists[photo.list]}</figcaption>
        </figure>
      ))}
      <h2>{entryTitle(entry, locale)}</h2>
      {plant ? (
        <>
          {plant.localNames?.map(({ name, language }) => (
            <p className="plant-local-name" key={name}><i>{name}</i> · {language}</p>
          ))}
          {photos.length === 0 && plant.scientificName && <p className="plant-scientific"><i>{plant.scientificName}</i></p>}
          {plant.meaning && <p className="plant-detail"><b>{copy.meaning}:</b> {plant.meaning[locale]}</p>}
          <p className="plant-detail"><b>{copy.uses}:</b> {plant.uses[locale]}</p>
          {plant.story && <p className="plant-detail"><b>{copy.story}:</b> {plant.story[locale]}</p>}
          {plant.caution && <p className="plant-caution">{copy.cautionNote}</p>}
          <div className="plant-tags">
            {plant.categories.map((category) => (
              <span key={category}>{copy.categories[category]}</span>
            ))}
          </div>
          <p className="plant-territories"><b>{copy.territories}:</b> {plant.territories.join(" · ")}</p>
        </>
      ) : (
        <p className="plant-no-report">{copy.noReport}</p>
      )}
      {photos.length > 0 && <p className="plant-credit">{copy.photoCredit}</p>}
    </li>
  );
}
