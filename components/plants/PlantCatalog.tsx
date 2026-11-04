"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/content";
import { catalog, entryMatchesCategory, entryTitle, type CatalogEntry } from "@/content/plant-catalog";
import { plantCategories, plantCopy, type PlantCategory } from "@/content/plants";
import { PlantCard } from "./PlantCard";

type Filter = "all" | "reports" | PlantCategory;

function normalize(text: string) {
  return text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

function searchableText(entry: CatalogEntry, locale: Locale) {
  const { plant, photos } = entry;
  const parts = [entryTitle(entry, locale), ...photos.map((photo) => photo.fullName)];
  if (plant) {
    const localNames = plant.localNames?.map(({ name, language }) => `${name} ${language}`) ?? [];
    const details = [plant.scientificName, plant.meaning?.[locale], plant.story?.[locale]].filter((part) => part !== undefined);
    parts.push(plant.uses[locale], ...details, ...plant.territories, ...localNames);
  }
  return normalize(parts.join(" "));
}

function matchesFilter(entry: CatalogEntry, filter: Filter) {
  if (filter === "all") return true;
  if (filter === "reports") return entry.plant !== undefined;
  return entryMatchesCategory(entry, filter);
}

export function PlantCatalog({ locale }: { locale: Locale }) {
  const copy = plantCopy[locale];
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  // Plants with recorded accounts come first; species known only from the book follow.
  const sorted = useMemo(
    () =>
      [...catalog].sort(
        (a, b) => Number(!a.plant) - Number(!b.plant) || entryTitle(a, locale).localeCompare(entryTitle(b, locale), locale),
      ),
    [locale],
  );
  const visible = sorted.filter(
    (entry) => matchesFilter(entry, filter) && searchableText(entry, locale).includes(normalize(query.trim())),
  );
  const options: { value: Filter; label: string }[] = [
    { value: "all", label: copy.all },
    { value: "reports", label: copy.withReports },
    ...plantCategories.map((category) => ({ value: category, label: copy.categories[category] })),
  ];

  return (
    <>
      <div className="plants-controls">
        <label className="plants-search">
          <span>{copy.searchLabel}</span>
          <input type="search" value={query} placeholder={copy.searchPlaceholder} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <div className="plants-filters" role="group" aria-label={copy.filterLabel}>
          {options.map(({ value, label }) => (
            <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}</button>
          ))}
        </div>
      </div>
      <p className="plants-count" aria-live="polite">{copy.count(visible.length, catalog.length)}</p>
      {visible.length === 0 ? (
        <p className="muted">{copy.empty}</p>
      ) : (
        <ul className="plant-grid">
          {visible.map((entry) => (
            <PlantCard key={entry.id} entry={entry} locale={locale} />
          ))}
        </ul>
      )}
    </>
  );
}
