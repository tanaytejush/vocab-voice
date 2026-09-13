export default function VocabCard({ item, onHearWord, isSpeaking }) {
  return (
    <div className="vocab-card">
      <div className="vocab-card__headline">
        <h2 className="vocab-card__word">{item.word}</h2>
        <span className="vocab-card__pos">{item.partOfSpeech}</span>
      </div>

      <button
        type="button"
        className={`button button--outline vocab-card__hear${isSpeaking ? " is-speaking" : ""}`}
        onClick={onHearWord}
        aria-label={`Hear the word ${item.word}`}
      >
        <span aria-hidden="true">🔊</span> Hear the word
      </button>

      <dl className="vocab-card__details">
        <div>
          <dt>Meaning</dt>
          <dd>{item.definition}</dd>
        </div>
        <div>
          <dt>Example</dt>
          <dd>&ldquo;{item.example}&rdquo;</dd>
        </div>
        {item.synonym && (
          <div>
            <dt>Synonym</dt>
            <dd>{item.synonym}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
