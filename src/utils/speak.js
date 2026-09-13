// Thin wrapper around SpeechSynthesis. Isolated so components never talk
// to the browser API directly.

export function isSpeechSynthesisSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function speak(text, { rate = 0.95, pitch = 1, onEnd } = {}) {
  if (!isSpeechSynthesisSupported() || !text) {
    if (onEnd) onEnd();
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = rate;
  utterance.pitch = pitch;
  utterance.lang = "en-US";
  if (onEnd) utterance.onend = onEnd;
  window.speechSynthesis.speak(utterance);
}

export function speakSequence(parts, options = {}) {
  const queue = parts.filter(Boolean);
  if (queue.length === 0) return;

  const speakNext = () => {
    const next = queue.shift();
    if (next === undefined) return;
    speak(next, { ...options, onEnd: queue.length ? speakNext : options.onEnd });
  };
  speakNext();
}

export function stopSpeaking() {
  if (isSpeechSynthesisSupported()) {
    window.speechSynthesis.cancel();
  }
}
