# Raah — city sign reader

Raah is a mobile-first web prototype for reading Indian city signs and explaining the visible information in English, Hindi, or Telugu. It is designed for visual impairment, hearing impairment, and limited hand mobility.

The live flow is:

```text
Phone camera or photo upload
  → local image quality check
  → BHASHINI scenic OCR
  → BHASHINI translation when languages differ
  → Gemini explanation grounded in OCR text
  → BHASHINI translation + speech, with captions
```

Follow-up questions use BHASHINI speech recognition or typed text and the same captured evidence. The app does not save captured images. During a live request, the image/text is sent to the configured external services for processing.

## Run it

Install Node.js 20 or newer, then from this folder run:

```powershell
Copy-Item .env.example .env
npm start
```

Open <http://localhost:8001>. The practice sign works without API credentials; it is explicitly marked as a sample and uses a fixed example response for typed questions. Voice input makes a BHASHINI ASR request when that service is configured.

## Connect live services

Edit `.env` on the server. Do not add API keys to `web/app.js`, HTML, or any browser-visible file.

1. Create a Gemini API key in [Google AI Studio](https://aistudio.google.com/).
2. From BHASHINI Udyat, use the OCR inference key and ULCA profile credentials for this app.
3. Select or request BHASHINI pipelines for ASR, text translation, and TTS. Add each pipeline ID below. The ASR, translation, and TTS pipeline IDs may be the same if that pipeline supports those tasks; otherwise use the separate IDs.
4. Restart `npm start` and check the “Connected services” section in the app.

Relevant `.env` entries:

```dotenv
GEMINI_API_KEY=your_gemini_key
GEMINI_MODEL=gemini-2.5-flash

BHASHINI_INFERENCE_API_KEY=your_udyat_inference_key
BHASHINI_OCR_SERVICE_ID=bhashini/ocr-v2
BHASHINI_ULCA_USER_ID=your_ulca_user_id
BHASHINI_ULCA_API_KEY=your_ulca_api_key
BHASHINI_ASR_PIPELINE_ID=your_asr_pipeline_id
BHASHINI_TRANSLATION_PIPELINE_ID=your_translation_pipeline_id
BHASHINI_TTS_PIPELINE_ID=your_tts_pipeline_id
```

The OCR service is set to scenic mode for signboards. English, Hindi, and Telugu are available as selectable input/output languages; the active BHASHINI models assigned to your account must support the requested language pair. If you override the OCR service ID, check its language and modality support in Udyat first.

The live API routes are:

- `GET /api/status` — reports which providers are configured (never returns secrets).
- `POST /api/scan` — OCR, evidence translation, Gemini explanation, output translation, and TTS.
- `POST /api/transcribe` — BHASHINI ASR for the recorded voice question.
- `POST /api/ask` — grounded answer for typed or transcribed questions.
- `POST /api/localize` — change the current answer language without rescanning.

## Use it on a phone

Phone camera and microphone access require a secure browser context. `localhost` works on the development computer. For a phone, serve the app through HTTPS, for example with Cloud Run or another HTTPS host; the included `Dockerfile` reads the platform `PORT` and can be deployed as a single Node service. Add API keys through the host’s secret/environment settings, not in the image or repository.

The web app manifest and service worker allow installation and cache the interface shell. OCR, translation, Gemini, ASR, and BHASHINI speech still need an internet connection.

## Access features

- Screen-reader labels, keyboard focus, semantic headings, and spoken status updates.
- Voice-first camera action and voice follow-up, plus large tap controls.
- High-contrast caption panel, adjustable caption size, and adjustable speech speed.
- English/Hindi/Telugu interface text and answer selection.
- Image checks for blur, brightness, and small dimensions. These checks are only capture hints; a low score can be overridden.
- Clear “not enough information” behavior and prompts to retake unreadable signs.
- Browser speech preview when BHASHINI TTS is not configured; the service status and answer note identify this fallback.

## Scope and safety

Raah reads and explains text present in a captured sign. It does not fetch live bus schedules, plan routes, identify a verified walking path, or tell someone it is safe to cross. A sign’s text can be incomplete or misread; the app keeps the extracted text visible for confirmation and prompts for another photo when OCR finds no readable text.

This is a hackathon prototype, not a mobility safety device. Before public deployment, add authentication and request limits for the API routes and review the data handling terms for every service account used.

## Service references

- [BHASHINI API overview](https://bhashini.gitbook.io/bhashini-apis)
- [BHASHINI Udyat onboarding](https://bhashini.gitbook.io/bhashini-apis/pre-requisites-and-onboarding)
- [BHASHINI scenic OCR payload](https://bhashini-developer-portal-dev.bhashini.co.in/docs/api/optical-character-recognition-call/request-payload)
- [Gemini API reference](https://ai.google.dev/api/generate-content)
