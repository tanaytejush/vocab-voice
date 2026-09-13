import { useCallback, useEffect, useRef, useState } from "react";

function getRecognitionCtor() {
  if (typeof window === "undefined") return null;
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

// Isolated speech-recognition logic. Nothing here touches audio storage —
// recognition results are transient browser events, never persisted.
export function useSpeechRecognition() {
  const RecognitionCtor = getRecognitionCtor();
  const isSupported = Boolean(RecognitionCtor);

  const recognitionRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isSupported) return undefined;

    const recognition = new RecognitionCtor();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let combined = "";
      for (let i = 0; i < event.results.length; i++) {
        combined += event.results[i][0].transcript;
      }
      setTranscript(combined.trim());
    };

    recognition.onerror = (event) => {
      if (event.error === "no-speech") {
        setError("No speech was detected. Try again.");
      } else if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        setError("Microphone access was denied.");
      } else {
        setError("Something went wrong with voice recognition.");
      }
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
      recognition.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSupported]);

  const start = useCallback(() => {
    if (!isSupported || !recognitionRef.current) return;
    setError(null);
    setTranscript("");
    try {
      recognitionRef.current.start();
      setListening(true);
    } catch {
      // start() throws if already started; ignore, state stays consistent.
    }
  }, [isSupported]);

  const stop = useCallback(() => {
    if (!isSupported || !recognitionRef.current) return;
    recognitionRef.current.stop();
    setListening(false);
  }, [isSupported]);

  const reset = useCallback(() => {
    setTranscript("");
    setError(null);
  }, []);

  return { isSupported, listening, transcript, error, start, stop, reset };
}
