"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/content";
import { plants } from "@/content/plant-data";
import { plantCategories, plantCopy, type Plant, type PlantCategory } from "@/content/plants";

function normalize(text: string) {
  return text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

function searchableText(plant: Plant, locale: Locale) {
  const localNames = plant.localNames?.map(({ name, language }) => `${name} ${language}`) ?? [];
  const details = [plant.scientificName, plant.meaning?.[locale], plant.story?.[locale]].filter(Boolean);
  return normalize([plant.name[locale], plant.uses[locale], ...details, ...plant.territories, ...localNames].join(" "));
}

export function PlantCatalog({ locale }: { locale: Locale }) {
  const copy = plantCopy[locale];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<PlantCategory | null>(null);

  const sorted = useMemo(
    () => [...plants].sort((a, b) => a.name[locale].localeCompare(b.name[locale], locale)),
    [locale],
  );
  const visible = sorted.filter(
    (plant) =>
      (!category || plant.categories.includes(category)) && searchableText(plant, locale).includes(normalize(query.trim())),
  );

  return (
    <>
      <div className="plants-controls">
        <label className="plants-search">
          <span>{copy.searchLabel}</span>
          <input type="search" value={query} placeholder={copy.searchPlaceholder} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <div className="plants-filters" role="group" aria-label={copy.filterLabel}>
          <button type="button" aria-pressed={category === null} onClick={() => setCategory(null)}>{copy.all}</button>
          {plantCategories.map((option) => (
            <button key={option} type="button" aria-pressed={category === option} onClick={() => setCategory(option)}>
              {copy.categories[option]}
            </button>
          ))}
        </div>
      </div>
      <p className="plants-count" aria-live="polite">{copy.count(visible.length, plants.length)}</p>
      {visible.length === 0 ? (
        <p className="muted">{copy.empty}</p>
      ) : (
        <ul className="plant-grid">
          {visible.map((plant) => (
            <li className="plant-card" key={plant.id}>
              <h2>{plant.name[locale]}</h2>
              {plant.localNames?.map(({ name, language }) => (
                <p className="plant-local-name" key={name}><i>{name}</i> · {language}</p>
              ))}
              {plant.scientificName && <p className="plant-scientific"><i>{plant.scientificName}</i></p>}
              {plant.meaning && <p className="plant-detail"><b>{copy.meaning}:</b> {plant.meaning[locale]}</p>}
              <p className="plant-detail"><b>{copy.uses}:</b> {plant.uses[locale]}</p>
              {plant.story && <p className="plant-detail"><b>{copy.story}:</b> {plant.story[locale]}</p>}
              {plant.caution && <p className="plant-caution">{copy.cautionNote}</p>}
              <div className="plant-tags">
                {plant.categories.map((option) => (
                  <span key={option}>{copy.categories[option]}</span>
                ))}
              </div>
              <p className="plant-territories"><b>{copy.territories}:</b> {plant.territories.join(" · ")}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
