// Deterministic, transparent scoring. No language model, no semantic
// understanding — just simple checks a reviewer can read in one pass.

const MIN_MEANINGFUL_WORDS = 4;

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9'\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Matches the target word allowing for common suffixes (plurals, -ed, -ing,
// -ly) without dragging in a stemming library.
function containsTargetWord(normalizedText, targetWord) {
  const target = targetWord.toLowerCase();
  const pattern = new RegExp(`\\b${target}(s|es|ed|ing|ly)?\\b`, "i");
  return pattern.test(normalizedText);
}

export function evaluateSentence(rawText, targetWord) {
  const said = Boolean(rawText && rawText.trim().length > 0);
  const normalized = said ? normalize(rawText) : "";
  const wordCount = normalized ? normalized.split(" ").filter(Boolean).length : 0;

  const usedWord = said && containsTargetWord(normalized, targetWord);
  const longEnough = wordCount >= MIN_MEANINGFUL_WORDS;
  // A "sentence" here just means: more than the target word alone, and not
  // just the target word repeated.
  const isSentence =
    said &&
    wordCount > 1 &&
    !(wordCount <= 2 && usedWord);

  let score = 0;
  if (said) score += 10;
  if (usedWord) score += 55;
  if (longEnough) score += 20;
  if (isSentence) score += 15;
  score = Math.min(100, score);

  let headline;
  let detail;

  if (!said) {
    headline = "No speech detected.";
    detail = "Try speaking again, a little closer to the microphone.";
  } else if (usedWord && isSentence && longEnough) {
    headline = "Excellent!";
    detail = `You used "${targetWord}" correctly in your sentence.`;
  } else if (usedWord && !longEnough) {
    headline = "Good attempt.";
    detail = `You used "${targetWord}" — now try a slightly longer sentence around it.`;
  } else if (!usedWord) {
    headline = "Good attempt.";
    detail = `Try using "${targetWord}" directly in a sentence.`;
  } else {
    headline = "Good attempt.";
    detail = `Try building a full sentence around "${targetWord}".`;
  }

  return {
    said,
    usedWord,
    isSentence,
    longEnough,
    wordCount,
    score,
    headline,
    detail,
    transcript: rawText || "",
  };
}
