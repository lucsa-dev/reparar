const videos = [
  { id: "iVvl3MRPU7s", title: "Lagoa dos Cavalos e o Bem Viver", author: "Coletivo Audiovisual Caroá" },
  { id: "kDiJanz7bkE", title: "PANC na Lagoa dos Cavalos - Do plantio à mesa", author: "Escola de Gastronomia Social Ivens Dias Branco" },
];

export function FruitVideos() {
  return (
    <ul className="fruit-videos">
      {videos.map(({ id, title, author }) => (
        <li key={id}>
          <figure>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}`}
              title={title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <figcaption><b>{title}</b> · {author}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
