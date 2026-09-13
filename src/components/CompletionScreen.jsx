import QuickReview from "./QuickReview";

export default function CompletionScreen({ results, onPracticeAgain, onChangeTopic, onHearWord }) {
  const total = results.length;
  const average = Math.round(results.reduce((sum, r) => sum + r.score, 0) / total);
  const successCount = results.filter((r) => r.usedWord).length;

  return (
    <div className="completion">
      <h2 className="completion__title">Session complete!</h2>

      <div className="completion__stats">
        <div>
          <span className="completion__stat-value">{total}</span>
          <span className="completion__stat-label">Words practiced</span>
        </div>
        <div>
          <span className="completion__stat-value">{average}</span>
          <span className="completion__stat-label">Average score</span>
        </div>
        <div>
          <span className="completion__stat-value">{successCount}</span>
          <span className="completion__stat-label">Used successfully</span>
        </div>
      </div>

      <QuickReview items={results} onHearWord={onHearWord} />

      <div className="completion__actions">
        <button type="button" className="button button--primary" onClick={onPracticeAgain}>
          Practice again
        </button>
        <button type="button" className="button button--outline" onClick={onChangeTopic}>
          Change topic
        </button>
      </div>
    </div>
  );
}
