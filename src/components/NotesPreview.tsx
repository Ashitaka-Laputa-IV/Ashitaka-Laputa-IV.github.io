import { Button, Card } from "animal-island-ui";
import { pullRequests } from "../data/profile";

function formatMergedAt(iso: string) {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}.${m}.${day}`;
}

export function NotesPreview() {
  return (
    <section className="content-section" id="pr">
      <div className="section-heading-center">
        <p className="section-kicker">PR</p>
        <h2>开源 · 提交的贡献</h2>
        <p>把在别人的小岛上补过的木板晒出来，也算是我留下的潮汐痕迹。</p>
      </div>
      <div className="pr-grid">
        {pullRequests.map((pr) => (
          <Card type="dashed" key={pr.number}>
            <div className="pr-head">
              <span className="pr-repo">{pr.repo}</span>
              <span className="pr-number">#{pr.number}</span>
            </div>
            <h3 className="pr-title">{pr.title}</h3>
            <div className="pr-foot">
              <span className="pr-date">merged {formatMergedAt(pr.mergedAt)}</span>
              <Button icon="leaf" onClick={() => window.open(pr.url, "_blank")}>
                查看 PR
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
