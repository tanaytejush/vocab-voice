export default function ProgressHeader({ current, total, score }) {
  return (
    <div className="progress" role="status" aria-live="polite">
      <div className="progress__dots" aria-hidden="true">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`progress__dot${i < current ? " progress__dot--done" : ""}${
              i === current - 1 ? " progress__dot--current" : ""
            }`}
          />
        ))}
      </div>
      <div className="progress__text">
        <span>
          Word {current} of {total}
        </span>
        <span className="progress__score">Score: {score}</span>
      </div>
    </div>
  );
}
