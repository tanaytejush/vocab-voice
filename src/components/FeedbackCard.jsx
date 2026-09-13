export default function FeedbackCard({ result, onNext, isLastWord }) {
  return (
    <div className="feedback" role="status">
      <h3 className="feedback__headline">{result.headline}</h3>
      <p className="feedback__detail">{result.detail}</p>

      <div className="feedback__grid">
        <div className="feedback__stat">
          <span className="feedback__stat-label">Correct word usage</span>
          <span className={`feedback__stat-value${result.usedWord ? " is-good" : ""}`}>
            {result.usedWord ? "Yes" : "Needs improvement"}
          </span>
        </div>
        <div className="feedback__stat">
          <span className="feedback__stat-label">Sentence detected</span>
          <span className={`feedback__stat-value${result.isSentence ? " is-good" : ""}`}>
            {result.isSentence ? "Yes" : "Needs improvement"}
          </span>
        </div>
        <div className="feedback__stat">
          <span className="feedback__stat-label">Score</span>
          <span className="feedback__stat-value">{result.score} / 100</span>
        </div>
      </div>

      <p className="feedback__disclosure">
        Practice feedback is based on your spoken sentence and vocabulary-word usage.
      </p>

      <button type="button" className="button button--primary" onClick={onNext}>
        {isLastWord ? "See results →" : "Next word →"}
      </button>
    </div>
  );
}
