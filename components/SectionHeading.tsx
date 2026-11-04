type SectionHeadingProps = {
  label: string;
  title: string;
};

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <>
      <span className="label">{label}</span>
      <h2>{title}</h2>
    </>
  );
}
