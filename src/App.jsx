import { useMemo, useState } from "react";
import SessionSetup from "./components/SessionSetup";
import ProgressHeader from "./components/ProgressHeader";
import VocabCard from "./components/VocabCard";
import PracticePanel from "./components/PracticePanel";
import FeedbackCard from "./components/FeedbackCard";
import CompletionScreen from "./components/CompletionScreen";
import { buildSession, VOCABULARY } from "./data/vocabulary";
import { evaluateSentence } from "./utils/evaluation";
import { useSpeechRecognition } from "./hooks/useSpeechRecognition";
import { speak, speakSequence, stopSpeaking } from "./utils/speak";

const STAGES = {
  SETUP: "setup",
  LEARN: "learn",
  DONE: "done",
};

export default function App() {
  const [stage, setStage] = useState(STAGES.SETUP);
  const [topic, setTopic] = useState("everyday");
  const [difficulty, setDifficulty] = useState("beginner");

  const [session, setSession] = useState([]);
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [currentResult, setCurrentResult] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const { isSupported, listening, transcript, error, start, stop, reset } = useSpeechRecognition();

  const currentWord = session[index];
  const score = useMemo(() => {
    if (results.length === 0) return 0;
    const total = results.reduce((sum, r) => sum + r.score, 0);
    return Math.round(total / results.length);
  }, [results]);

  function handleStartSession() {
    const newSession = buildSession(topic, difficulty, 5);
    setSession(newSession);
    setIndex(0);
    setResults([]);
    setCurrentResult(null);
    reset();
    setStage(STAGES.LEARN);
  }

  function handleHearWord(word) {
    const entry = session.find((w) => w.word === word) || currentWord;
    if (!entry) return;
    setIsSpeaking(true);
    speakSequence([entry.word, entry.example], { onEnd: () => setIsSpeaking(false) });
  }

  function handleHearReviewWord(word) {
    const entry = VOCABULARY.find((w) => w.word === word);
    if (!entry) return;
    speak(entry.word);
  }

  function handleEvaluate(rawText) {
    const result = evaluateSentence(rawText, currentWord.word);
    setCurrentResult({ ...result, word: currentWord.word });
    stopSpeaking();
  }

  function handleStopRecording() {
    stop();
    handleEvaluate(transcript);
  }

  function handleTypedSubmit(text) {
    handleEvaluate(text);
  }

  function handleNext() {
    const updatedResults = [...results, currentResult];
    setResults(updatedResults);
    setCurrentResult(null);
    reset();

    if (index + 1 >= session.length) {
      setStage(STAGES.DONE);
    } else {
      setIndex(index + 1);
    }
  }

  function handlePracticeAgain() {
    handleStartSession();
  }

  function handleChangeTopic() {
    stopSpeaking();
    setStage(STAGES.SETUP);
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">VocabVoice</h1>
        <p className="app__subtitle">Learn new words by speaking them.</p>
      </header>

      <main className="app__main">
        {stage === STAGES.SETUP && (
          <SessionSetup
            topic={topic}
            difficulty={difficulty}
            onTopicChange={setTopic}
            onDifficultyChange={setDifficulty}
            onStart={handleStartSession}
          />
        )}

        {stage === STAGES.LEARN && currentWord && (
          <div className="session">
            <ProgressHeader current={index + 1} total={session.length} score={score} />

            <VocabCard item={currentWord} onHearWord={() => handleHearWord(currentWord.word)} isSpeaking={isSpeaking} />

            {!currentResult ? (
              <PracticePanel
                word={currentWord.word}
                isSupported={isSupported}
                listening={listening}
                transcript={transcript}
                error={error}
                onStart={start}
                onStop={handleStopRecording}
                onSubmitTyped={handleTypedSubmit}
                disabled={isSpeaking}
              />
            ) : (
              <FeedbackCard result={currentResult} onNext={handleNext} isLastWord={index + 1 >= session.length} />
            )}
          </div>
        )}

        {stage === STAGES.DONE && (
          <CompletionScreen
            results={results}
            onPracticeAgain={handlePracticeAgain}
            onChangeTopic={handleChangeTopic}
            onHearWord={handleHearReviewWord}
          />
        )}
      </main>
    </div>
  );
}
