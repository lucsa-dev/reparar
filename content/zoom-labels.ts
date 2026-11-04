import type { Locale } from "./index";

export const zoomLabels: Record<Locale, { open: (name: string) => string; close: string }> = {
  pt: { open: (name) => `Ampliar imagem: ${name}`, close: "Fechar imagem" },
  es: { open: (name) => `Ampliar imagen: ${name}`, close: "Cerrar imagen" },
  en: { open: (name) => `Enlarge image: ${name}`, close: "Close image" },
};
