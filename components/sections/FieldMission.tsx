import { SectionHeading } from "@/components/SectionHeading";
import type { Dictionary } from "@/content/types";

export function FieldMission({ content }: { content: Dictionary["fieldMission"] }) {
  return (
    <section>
      <div className="wide">
        <div className="wrap start">
          <SectionHeading label={content.label} title={content.title} />
          <p>{content.intro}</p>
        </div>
        <div className="scroll">
          <table className="field">
            <thead>
              <tr>
                <th>{content.columns.date}</th>
                <th>{content.columns.place}</th>
                <th>{content.columns.record}</th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row) => (
                <tr key={`${row.date}-${row.place}`}>
                  <td>{row.date}</td>
                  <td>{row.place}</td>
                  <td>{row.record}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small muted ui mt-1">{content.source}</p>
      </div>
    </section>
  );
}
