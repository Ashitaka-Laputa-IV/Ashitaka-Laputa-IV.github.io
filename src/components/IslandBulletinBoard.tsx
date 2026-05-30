import { useState } from "react";
import { Card } from "animal-island-ui";
import { bulletinEntries } from "../data/profile";

export function IslandBulletinBoard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="content-section bulletin-section" id="bulletin">
      <div className="section-heading-center">
        <p className="section-kicker">Bulletin Board</p>
        <h2>岛上公告板</h2>
        <p>把一些还在发光的想法，钉成几张会被海风翻动的便签。</p>
      </div>
      <Card type="dashed" className="bulletin-board-card">
        <div className="bulletin-pin-row" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div
          className={`bulletin-note-grid ${
            openIndex === null ? "" : "has-open-note"
          }`}
        >
          {bulletinEntries.map((entry, index) => {
            const isOpen = openIndex === index;
            const answerId = `bulletin-answer-${index}`;

            return (
              <div
                className={`bulletin-note ${isOpen ? "is-open" : ""}`}
                key={entry.question}
              >
                <button
                  type="button"
                  className="bulletin-note-trigger"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="bulletin-note-icon" aria-hidden="true">
                    {isOpen ? "-" : "+"}
                  </span>
                  <span className="bulletin-note-question">
                    {entry.question}
                  </span>
                  <span className="bulletin-note-leaf" aria-hidden="true" />
                </button>
                <div
                  className="bulletin-note-answer"
                  id={answerId}
                  aria-hidden={!isOpen}
                >
                  <p>{entry.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </section>
  );
}
