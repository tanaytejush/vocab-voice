import { useState } from "react";

export default function PracticePanel({
  word,
  isSupported,
  listening,
  transcript,
  error,
  onStart,
  onStop,
  onSubmitTyped,
  disabled,
}) {
  const [typedValue, setTypedValue] = useState("");

  const handleTypedSubmit = (event) => {
    event.preventDefault();
    if (!typedValue.trim()) return;
    onSubmitTyped(typedValue.trim());
    setTypedValue("");
  };

  return (
    <section className="practice" aria-label="Practice speaking">
      <p className="practice__prompt">
        Now use <strong>&ldquo;{word}&rdquo;</strong> in your own sentence.
      </p>

      {isSupported ? (
        <div className="practice__voice">
          <button
            type="button"
            className={`mic-button${listening ? " mic-button--listening" : ""}`}
            onClick={listening ? onStop : onStart}
            disabled={disabled}
            aria-pressed={listening}
            aria-label={listening ? "Stop recording" : "Start speaking"}
          >
            <span className="mic-button__icon" aria-hidden="true">
              {listening ? "■" : "🎙"}
            </span>
            <span className="mic-button__label">{listening ? "Stop" : "Start speaking"}</span>
          </button>

          <div className="practice__transcript" aria-live="polite">
            {listening && !transcript && <span className="practice__listening-hint">Listening…</span>}
            {transcript && <p>&ldquo;{transcript}&rdquo;</p>}
          </div>

          {error && (
            <p className="practice__error" role="alert">
              {error}
            </p>
          )}
        </div>
      ) : (
        <div className="practice__fallback">
          <p className="practice__fallback-note">Voice practice is not supported in this browser.</p>
          <form onSubmit={handleTypedSubmit} className="practice__typed-form">
            <label htmlFor="typed-sentence" className="sr-only">
              Type your sentence instead
            </label>
            <input
              id="typed-sentence"
              type="text"
              placeholder="Type your sentence instead"
              value={typedValue}
              onChange={(event) => setTypedValue(event.target.value)}
              disabled={disabled}
            />
            <button type="submit" className="button button--primary" disabled={disabled || !typedValue.trim()}>
              Submit
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
