# VocabVoice

A small vocabulary practice tool built around the idea that the best way to actually remember a word is to use it in a sentence yourself, out loud.

You pick a topic and a difficulty, and it walks you through 5 words per session. For each word it reads it out to you, shows you the meaning and an example sentence, then asks you to say your own sentence using it. It listens, checks whether you used the word correctly, and gives you a score before moving on. At the end you get a quick recap of everything you practiced.

No accounts, no servers, no API keys — it runs entirely in your browser.

## What it does

- Choose from three topic areas — Everyday English, Interview vocab, or Travel — and three difficulty levels.
- Each word is spoken aloud along with its example sentence, using the browser's built-in text-to-speech.
- Record yourself speaking a sentence, or type one if you prefer (or if your browser doesn't support the mic).
- The app checks whether you actually used the word (or a natural form of it), whether what you said forms a proper sentence, and rolls that into a score out of 100.
- After 5 words you see your overall score and a review list — tap any word to hear it again.

## How the scoring works

It's straightforward and fully transparent. For each response it checks:

- Did you say or type anything at all?
- Does your sentence contain the target word (including common forms like plurals or -ing endings)?
- Is it long enough and structured enough to actually be a sentence, rather than just the word by itself?

Those checks combine into a score. There's no AI model judging your meaning or grammar — the app is honest about that and tells you so. The point is word usage and basic sentence formation, not perfection.

## Tech

- React 19 + Vite
- Plain CSS, no UI framework
- Web Speech API — `SpeechSynthesis` for playback, `SpeechRecognition` for input
- Runs entirely client-side

## Running it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints out, usually `http://localhost:5173`.

## Building for production

```bash
npm run build
npm run preview
```

## Browser notes

Speech recognition works in Chromium-based browsers (Chrome, Edge). Firefox and Safari don't support it yet, so on those the app falls back to a text input automatically — the scoring logic is exactly the same either way. Text-to-speech works across most modern browsers.

## Privacy

Your voice never leaves your device. The mic input is processed by your browser's own speech recognition and nothing is sent anywhere. There's no backend, no analytics, and no storage — everything resets when you close the tab.
