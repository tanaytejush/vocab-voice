import { TOPICS, DIFFICULTIES } from "../data/vocabulary";

export default function SessionSetup({ topic, difficulty, onTopicChange, onDifficultyChange, onStart }) {
  return (
    <section className="setup" aria-label="Session setup">
      <div className="setup__group" role="group" aria-label="Choose a topic">
        <span className="setup__label">Topic</span>
        <div className="setup__options">
          {TOPICS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`chip${topic === t.id ? " chip--active" : ""}`}
              aria-pressed={topic === t.id}
              onClick={() => onTopicChange(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="setup__group" role="group" aria-label="Choose a difficulty">
        <span className="setup__label">Difficulty</span>
        <div className="setup__options">
          {DIFFICULTIES.map((d) => (
            <button
              key={d.id}
              type="button"
              className={`chip${difficulty === d.id ? " chip--active" : ""}`}
              aria-pressed={difficulty === d.id}
              onClick={() => onDifficultyChange(d.id)}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <button type="button" className="button button--primary setup__start" onClick={onStart}>
        Start session
      </button>
    </section>
  );
}
