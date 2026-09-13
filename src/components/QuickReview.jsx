export default function QuickReview({ items, onHearWord }) {
  if (items.length === 0) return null;

  return (
    <div className="quick-review">
      <h3 className="quick-review__title">Quick Review</h3>
      <ul className="quick-review__list">
        {items.map((entry) => (
          <li key={entry.word} className="quick-review__item">
            <button
              type="button"
              className="quick-review__word"
              onClick={() => onHearWord(entry.word)}
              aria-label={`Hear the pronunciation of ${entry.word}`}
            >
              <span aria-hidden="true">🔊</span> {entry.word}
            </button>
            <span className={`quick-review__status${entry.usedWord ? " is-good" : ""}`}>
              {entry.usedWord ? "used correctly" : "needs another practice"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
