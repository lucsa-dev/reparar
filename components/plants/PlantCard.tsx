import type { Locale } from "@/content";
import { entryPhotos, entryTitle, type CatalogEntry } from "@/content/plant-catalog";
import { plantCopy, type CearaPlant, type PlantCopy } from "@/content/plants";
import { PhotoCarousel } from "./PhotoCarousel";
import { PhotoSkeleton } from "./PhotoSkeleton";

type PlantCardProps = {
  entry: CatalogEntry;
  locale: Locale;
};

/** Body of a card for a plant from the Lagoa dos Cavalos inventory; the record itself stays in Portuguese. */
function CearaDetails({ ceara, copy, showScientificName }: { ceara: CearaPlant; copy: PlantCopy; showScientificName: boolean }) {
  const fields = copy.cearaFields;
  const extras = [
    [fields.season, ceara.season],
    [fields.propagation, ceara.propagation],
    [fields.place, ceara.place],
  ].filter((field): field is [string, string] => field[1] !== undefined);
  return (
    <>
      {ceara.otherNames && <p className="plant-local-name"><i>{ceara.otherNames}</i></p>}
      {showScientificName && ceara.scientificName && <p className="plant-scientific"><i>{ceara.scientificName}</i></p>}
      {ceara.uses.length === 0 ? (
        <p className="plant-no-report">{fields.notRecorded}</p>
      ) : (
        <ul className="plant-uses" lang="pt-BR">
          {ceara.uses.map(({ for: use, part, preparation }) => (
            <li key={`${use}-${part}-${preparation}`}>
              {use && <p><b>{fields.for}:</b> {use}</p>}
              {part && <p><b>{fields.part}:</b> {part}</p>}
              {preparation && <p><b>{fields.preparation}:</b> {preparation}</p>}
            </li>
          ))}
        </ul>
      )}
      {extras.map(([label, value]) => (
        <p className="plant-detail" key={label} lang="pt-BR"><b>{label}:</b> {value}</p>
      ))}
      {ceara.note && <p className="plant-detail" lang="pt-BR">{ceara.note}</p>}
      {ceara.contraindication && <p className="plant-caution" lang="pt-BR">{fields.contraindication}: {ceara.contraindication}</p>}
      {ceara.caution && <p className="plant-caution">{copy.cautionNote}</p>}
      <div className="plant-tags">
        <span>{copy.categories.medicinal}</span>
        {ceara.citations !== undefined && <span>{fields.citations(ceara.citations)}</span>}
      </div>
      <p className="plant-territories">{copy.cearaSource}</p>
    </>
  );
}

export function PlantCard({ entry, locale }: PlantCardProps) {
  const copy = plantCopy[locale];
  const { plant, ceara } = entry;
  const photos = entryPhotos(entry);
  return (
    <li className="plant-card">
      {photos.length > 0 ? <PhotoCarousel photos={photos} locale={locale} /> : <PhotoSkeleton label={copy.noPhoto} />}
      {/* Fixed card height: longer accounts scroll inside the card, so it must be keyboard focusable. */}
      <div className="plant-card-body" tabIndex={0}>
        <h2>{entryTitle(entry, locale)}</h2>
        {ceara ? (
          <CearaDetails ceara={ceara} copy={copy} showScientificName={photos.length === 0} />
        ) : plant ? (
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
      </div>
    </li>
  );
}
