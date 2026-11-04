const partners = [
  { name: "UFC", src: "/logos/ufc.png", href: "https://www.ufc.br/" },
  { name: "FUNCAP", src: "/logos/funcap.svg", href: "https://www.ce.gov.br/funcap/", dark: true },
  { name: "Capes", src: "/logos/capes.png", href: "https://www.gov.br/capes/" },
];

export function PartnerLogos() {
  return (
    <ul className="partner-logos">
      {partners.map(({ name, src, href, dark }) => (
        <li key={name}>
          <a href={href} target="_blank" rel="noopener" className={dark ? "on-dark" : undefined}>
            <img src={src} alt={name} loading="lazy" />
          </a>
        </li>
      ))}
    </ul>
  );
}
