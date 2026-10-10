const $ = (selector) => document.querySelector(selector);
const LANG_NAMES = { en: 'English', hi: 'हिन्दी', te: 'తెలుగు' };
const I18N = {
  en: {
    skip: 'Skip to the main content', brandTag: 'Your way, made clear', checking: 'Checking services', sampleMode: 'Sample mode', liveReady: 'Live services ready', partialReady: 'Some services connected',
    responseLanguage: 'Response language', eyebrow: 'A clearer way through the city', headline: 'Know what the sign says.', intro: 'Point, read, and hear a short explanation in your language. Raah tells you when a sign is hard to read.', languagesTitle: 'English · हिंदी · తెలుగు', languagesNote: 'Speech and captions in your chosen language',
    captureTitle: 'Capture a sign', captureHelp: 'Bus boards, platforms, exits, shop signs', cameraPrompt: 'Place the sign inside the frame', cameraHint: 'Keep the phone still and include all the text.', openCamera: 'Open camera', choosePhoto: 'Choose photo', takePhoto: 'Take photo', closeCamera: 'Close camera', qualityEmpty: 'A photo check will appear here before reading.', signLanguage: 'Language on the sign', questionLanguage: 'Language for questions', readSign: 'Read this sign', voiceControl: 'Voice control', voiceCommandHint: 'Tap Voice control and say “Read this sign” or ask a question.', noStorage: 'Your photo is sent for processing and is not saved by Raah.', scanAnyway: 'Try this photo anyway', retake: 'Retake photo',
    resultTitle: 'Hear and read', resultHelp: 'A short explanation, with the sign text for reference', waitingTitle: 'Your sign will appear here', waitingText: 'Capture a sign to see its text, hear a plain-language explanation, and ask a follow-up question.', trySample: 'Try a sample sign', liveAnswer: 'Sign explanation', hearAgain: 'Hear this again', signText: 'Text read from the sign', hideText: 'Hide', showText: 'Show', followupTitle: 'Ask about this sign', followupHelp: 'Answers use only the text we just read.', questionLabel: 'Your question', questionPlaceholder: 'For example, which bus is listed?', askByVoice: 'Ask by voice', voiceHint: 'Tap once to start, again to finish', working: 'Reading the sign…', dismiss: 'Dismiss',
    accessTitle: 'Made for different ways of moving', accessText: 'Speak, listen, or follow along with large captions.', textSize: 'Text size', speechSpeed: 'Speech speed', serviceTitle: 'Connected services', serviceHint: 'Setup status', serviceDescription: 'Keys stay on this server. Add your approved BHASHINI and Gemini credentials to the local .env file to enable live requests.', bhashiniDocs: 'BHASHINI API onboarding and docs ↗', footerText: 'Sign information, made easier to access.', safetyNote: 'A sign reader, not a navigation or crossing safety system.',
    qualityGood: 'The photo looks readable. Check the extracted text before relying on it.', qualityBlur: 'The photo may be blurry. Hold still and retake for clearer text.', qualityDark: 'The photo looks too dark. Move to brighter light and try again.', qualityBright: 'The photo may be washed out. Avoid glare and try another angle.', qualitySmall: 'The image is small. Move closer so the letters fill more of the frame.',
    confidenceHigh: 'Clear text', confidenceMedium: 'Some uncertainty', confidenceLow: 'Unclear text', sampleTitle: 'Bus 24 · Central Station', sampleAnswer: 'The sample board lists Bus 24 for Central Station and shows Platform B. It has no live schedule or arrival time.', sampleNext: 'Ask a station worker or conductor to confirm where this bus boards.', sampleUnknown: 'The sample sign does not show that information.', sampleNote: 'Practice example only · no live route or arrival information was checked.', liveNote: 'Based on the visible sign text. Live routes, schedules, and crossing conditions are not checked.',
  },
  hi: {
    skip: 'मुख्य सामग्री पर जाएँ', brandTag: 'आपका रास्ता, अब आसान', checking: 'सेवाएँ जाँची जा रही हैं', sampleMode: 'नमूना मोड', liveReady: 'लाइव सेवाएँ तैयार', partialReady: 'कुछ सेवाएँ जुड़ी हैं',
    responseLanguage: 'जवाब की भाषा', eyebrow: 'शहर में रास्ता और साफ़', headline: 'जानें, संकेत क्या कहता है।', intro: 'संकेत की तस्वीर लें, पढ़ें और अपनी भाषा में छोटा जवाब सुनें। पढ़ना कठिन हो तो राह आपको बताएगा।', languagesTitle: 'English · हिंदी · తెలుగు', languagesNote: 'आपकी चुनी भाषा में आवाज़ और कैप्शन',
    captureTitle: 'संकेत की तस्वीर लें', captureHelp: 'बस बोर्ड, प्लेटफ़ॉर्म, निकास और दुकान के संकेत', cameraPrompt: 'संकेत को फ्रेम के अंदर रखें', cameraHint: 'फ़ोन स्थिर रखें और पूरा पाठ तस्वीर में लें।', openCamera: 'कैमरा खोलें', choosePhoto: 'तस्वीर चुनें', takePhoto: 'तस्वीर लें', closeCamera: 'कैमरा बंद करें', qualityEmpty: 'पढ़ने से पहले तस्वीर की जाँच यहाँ दिखेगी।', signLanguage: 'संकेत की भाषा', questionLanguage: 'सवाल की भाषा', readSign: 'संकेत पढ़ें', voiceControl: 'बोलकर चलाएँ', voiceCommandHint: 'बोलकर चलाएँ दबाएँ और “संकेत पढ़ें” कहें या सवाल पूछें।', noStorage: 'तस्वीर पढ़ने के लिए भेजी जाती है; राह इसे सहेजता नहीं है।', scanAnyway: 'फिर भी यह तस्वीर पढ़ें', retake: 'फिर से तस्वीर लें',
    resultTitle: 'सुनें और पढ़ें', resultHelp: 'छोटा जवाब और साथ में संकेत का पाठ', waitingTitle: 'आपका संकेत यहाँ दिखेगा', waitingText: 'संकेत की तस्वीर लें। उसका पाठ और आसान जवाब देखें या सुनें, फिर सवाल पूछें।', trySample: 'नमूना संकेत देखें', liveAnswer: 'संकेत का अर्थ', hearAgain: 'फिर से सुनें', signText: 'संकेत से पढ़ा गया पाठ', hideText: 'छिपाएँ', showText: 'दिखाएँ', followupTitle: 'इस संकेत के बारे में पूछें', followupHelp: 'जवाब अभी पढ़े गए पाठ पर आधारित होगा।', questionLabel: 'आपका सवाल', questionPlaceholder: 'उदाहरण: कौन-सी बस लिखी है?', askByVoice: 'बोलकर पूछें', voiceHint: 'शुरू करने के लिए टैप करें, रोकने के लिए फिर टैप करें', working: 'संकेत पढ़ा जा रहा है…', dismiss: 'बंद करें',
    accessTitle: 'अलग-अलग ज़रूरतों के लिए', accessText: 'बोलें, सुनें या बड़े कैप्शन पढ़ें।', textSize: 'पाठ का आकार', speechSpeed: 'आवाज़ की गति', serviceTitle: 'जुड़ी सेवाएँ', serviceHint: 'सेटअप की स्थिति', serviceDescription: 'API कुंजियाँ इस सर्वर पर रहती हैं। लाइव अनुरोध शुरू करने के लिए अपनी स्वीकृत BHASHINI और Gemini जानकारी स्थानीय .env फ़ाइल में जोड़ें।', bhashiniDocs: 'BHASHINI API सेटअप और दस्तावेज़ ↗', footerText: 'संकेत की जानकारी, अब आसानी से उपलब्ध।', safetyNote: 'यह संकेत पढ़ता है; रास्ता बताने या सड़क पार करने की सुरक्षा प्रणाली नहीं है।',
    qualityGood: 'तस्वीर पढ़ने योग्य लगती है। भरोसा करने से पहले पढ़ा गया पाठ जाँचें।', qualityBlur: 'तस्वीर धुंधली हो सकती है। फ़ोन स्थिर रखें और फिर से तस्वीर लें।', qualityDark: 'तस्वीर बहुत अँधेरी लगती है। तेज़ रोशनी में फिर से कोशिश करें।', qualityBright: 'तस्वीर में चमक अधिक हो सकती है। चमक से बचें और दूसरा कोण आज़माएँ।', qualitySmall: 'तस्वीर छोटी है। पास जाएँ ताकि अक्षर फ्रेम में बड़े दिखें।',
    confidenceHigh: 'पाठ साफ़ है', confidenceMedium: 'कुछ अनिश्चितता', confidenceLow: 'पाठ स्पष्ट नहीं', sampleTitle: 'बस 24 · सेंट्रल स्टेशन', sampleAnswer: 'नमूना बोर्ड पर सेंट्रल स्टेशन के लिए बस 24 और प्लेटफ़ॉर्म B लिखा है। इसमें लाइव समय-सारणी या आने का समय नहीं है।', sampleNext: 'बस कहाँ से मिलेगी, यह स्टेशन कर्मचारी या कंडक्टर से पूछें।', sampleUnknown: 'नमूना संकेत में यह जानकारी नहीं है।', sampleNote: 'केवल अभ्यास का उदाहरण · लाइव मार्ग या आने का समय नहीं जाँचा गया।', liveNote: 'जवाब संकेत के दिख रहे पाठ पर आधारित है। लाइव मार्ग, समय-सारणी या सड़क पार करने की स्थिति नहीं जाँची गई।',
  },
  te: {
    skip: 'ప్రధాన విషయానికి వెళ్లండి', brandTag: 'మీ దారి, సులభంగా', checking: 'సేవలను తనిఖీ చేస్తున్నాం', sampleMode: 'నమూనా మోడ్', liveReady: 'లైవ్ సేవలు సిద్ధం', partialReady: 'కొన్ని సేవలు కనెక్ట్ అయ్యాయి',
    responseLanguage: 'సమాధానం భాష', eyebrow: 'నగరంలో దారి మరింత స్పష్టం', headline: 'బోర్డుపై ఏముందో తెలుసుకోండి.', intro: 'బోర్డును చూపించి, చదివి, మీ భాషలో చిన్న వివరణ వినండి. చదవడం కష్టమైతే రాహ్ మీకు చెబుతుంది.', languagesTitle: 'English · हिंदी · తెలుగు', languagesNote: 'మీ భాషలో మాటలు, క్యాప్షన్లు',
    captureTitle: 'బోర్డు చిత్రాన్ని తీయండి', captureHelp: 'బస్ బోర్డులు, ప్లాట్‌ఫారమ్‌లు, ఎగ్జిట్‌లు, షాపు బోర్డులు', cameraPrompt: 'బోర్డును ఫ్రేమ్‌లో ఉంచండి', cameraHint: 'ఫోన్‌ను కదపకుండా, మొత్తం అక్షరాలు వచ్చేలా చూడండి.', openCamera: 'కెమెరా తెరవండి', choosePhoto: 'ఫోటో ఎంచుకోండి', takePhoto: 'ఫోటో తీయండి', closeCamera: 'కెమెరా మూసివేయండి', qualityEmpty: 'చదివే ముందు ఫోటో తనిఖీ ఇక్కడ కనిపిస్తుంది.', signLanguage: 'బోర్డుపై ఉన్న భాష', questionLanguage: 'ప్రశ్నల భాష', readSign: 'బోర్డును చదవండి', voiceControl: 'మాటతో నియంత్రణ', voiceCommandHint: 'మాటతో నియంత్రణను నొక్కి “బోర్డును చదవండి” అని చెప్పండి లేదా ప్రశ్న అడగండి.', noStorage: 'చదవడానికి ఫోటో పంపబడుతుంది; రాహ్ దాన్ని సేవ్ చేయదు.', scanAnyway: 'ఈ ఫోటోతో ప్రయత్నించండి', retake: 'మళ్లీ ఫోటో తీయండి',
    resultTitle: 'వినండి, చదవండి', resultHelp: 'చిన్న వివరణతో పాటు బోర్డుపై ఉన్న పాఠ్యం', waitingTitle: 'మీ బోర్డు ఇక్కడ కనిపిస్తుంది', waitingText: 'బోర్డు ఫోటో తీయండి. దానిపై ఉన్న పాఠ్యాన్ని, సులభమైన వివరణను చూడండి లేదా వినండి; తర్వాత ప్రశ్న అడగండి.', trySample: 'నమూనా బోర్డు చూడండి', liveAnswer: 'బోర్డు వివరణ', hearAgain: 'మళ్లీ వినండి', signText: 'బోర్డు నుంచి చదివిన పాఠ్యం', hideText: 'దాచండి', showText: 'చూపండి', followupTitle: 'ఈ బోర్డు గురించి అడగండి', followupHelp: 'ఇప్పుడే చదివిన పాఠ్యంపైనే సమాధానం ఉంటుంది.', questionLabel: 'మీ ప్రశ్న', questionPlaceholder: 'ఉదాహరణ: ఏ బస్సు ఉంది?', askByVoice: 'మాట్లాడి అడగండి', voiceHint: 'ప్రారంభించడానికి నొక్కండి, ఆపడానికి మళ్లీ నొక్కండి', working: 'బోర్డును చదువుతున్నాం…', dismiss: 'మూసివేయండి',
    accessTitle: 'విభిన్న అవసరాలకు అనుగుణంగా', accessText: 'మాట్లాడండి, వినండి లేదా పెద్ద క్యాప్షన్లు చదవండి.', textSize: 'అక్షరాల పరిమాణం', speechSpeed: 'మాటల వేగం', serviceTitle: 'కనెక్ట్ అయిన సేవలు', serviceHint: 'సెటప్ స్థితి', serviceDescription: 'API కీలు ఈ సర్వర్‌లోనే ఉంటాయి. లైవ్ అభ్యర్థనల కోసం ఆమోదించిన BHASHINI, Gemini వివరాలను స్థానిక .env ఫైల్‌లో జోడించండి.', bhashiniDocs: 'BHASHINI API సెటప్, డాక్యుమెంట్లు ↗', footerText: 'బోర్డు సమాచారం, సులభంగా అందుబాటులో.', safetyNote: 'ఇది బోర్డును చదువుతుంది; దారి లేదా రోడ్డు దాటే భద్రతా వ్యవస్థ కాదు.',
    qualityGood: 'ఫోటో చదవగలిగేలా ఉంది. ఆధారపడే ముందు చదివిన పాఠ్యాన్ని తనిఖీ చేయండి.', qualityBlur: 'ఫోటో అస్పష్టంగా ఉండవచ్చు. ఫోన్‌ను స్థిరంగా ఉంచి మళ్లీ తీయండి.', qualityDark: 'ఫోటో చీకటిగా ఉంది. వెలుతురు ఉన్న చోట మళ్లీ ప్రయత్నించండి.', qualityBright: 'ఫోటోలో మెరుపు ఎక్కువగా ఉంది. మెరుపు లేకుండా మరో కోణంలో తీయండి.', qualitySmall: 'చిత్రం చిన్నగా ఉంది. అక్షరాలు పెద్దగా కనిపించేలా దగ్గరగా వెళ్లండి.',
    confidenceHigh: 'పాఠ్యం స్పష్టంగా ఉంది', confidenceMedium: 'కొంత అనిశ్చితి', confidenceLow: 'పాఠ్యం స్పష్టంగా లేదు', sampleTitle: 'బస్సు 24 · సెంట్రల్ స్టేషన్', sampleAnswer: 'నమూనా బోర్డులో సెంట్రల్ స్టేషన్‌కు బస్సు 24, ప్లాట్‌ఫారమ్ B అని ఉంది. ప్రత్యక్ష షెడ్యూల్ లేదా రాక సమయం ఇందులో లేదు.', sampleNext: 'ఈ బస్సు ఎక్కడ ఎక్కాలో స్టేషన్ సిబ్బందిని లేదా కండక్టర్‌ను అడగండి.', sampleUnknown: 'ఈ నమూనా బోర్డులో ఆ సమాచారం లేదు.', sampleNote: 'అభ్యాస నమూనా మాత్రమే · ప్రత్యక్ష మార్గం లేదా రాక సమయాన్ని తనిఖీ చేయలేదు.', liveNote: 'చిత్రంలో కనిపించిన పాఠ్యంపై ఆధారపడింది. ప్రత్యక్ష మార్గాలు, సమయాలు, రోడ్డు దాటే పరిస్థితులు తనిఖీ చేయలేదు.',
  },
};

const SERVICES = [
  ['ocr', 'BHASHINI OCR'], ['asr', 'BHASHINI voice recognition'], ['translation', 'BHASHINI translation'], ['tts', 'BHASHINI speech'], ['llm', 'Gemini sign explanation'],
];
const state = {
  services: null, imageData: null, photoName: '', quality: null, allowWarning: false, cameraStream: null, inputLanguageTouched: false,
  evidenceText: '', englishEvidence: '', scanLanguage: 'en', demo: false, currentAnswer: null, answerAudio: null,
  mediaRecorder: null, mediaChunks: [], qualityPromise: null,
};

function t(key) { return I18N[$('#response-language').value]?.[key] || I18N.en[key] || key; }
function applyLanguage() {
  const lang = $('#response-language').value;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (I18N[lang]?.[key]) node.textContent = I18N[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (I18N[lang]?.[key]) node.placeholder = I18N[lang][key];
  });
  $('#response-language').setAttribute('aria-label', t('responseLanguage'));
  $('#input-language').setAttribute('aria-label', t('questionLanguage'));
  $('#toggle-evidence').textContent = $('#evidence-text').classList.contains('is-hidden') ? t('showText') : t('hideText');
  if (state.quality && state.imageData) showQuality(state.quality);
}

function announce(message) {
  $('#announcement').textContent = '';
  window.setTimeout(() => { $('#announcement').textContent = message; }, 30);
  if ('vibrate' in navigator) navigator.vibrate(18);
}

async function refreshStatus() {
  try {
    const response = await fetch('/api/status', { cache: 'no-store' });
    const data = await response.json();
    state.services = data.services || {};
    const liveReady = state.services.ocr && state.services.llm;
    const allReady = liveReady && state.services.asr && state.services.translation && state.services.tts;
    const pill = $('#mode-pill');
    pill.classList.toggle('is-live', liveReady);
    $('#mode-label').textContent = allReady ? t('liveReady') : liveReady ? t('partialReady') : t('sampleMode');
    const list = $('#service-list');
    list.replaceChildren();
    SERVICES.forEach(([key, label]) => {
      const li = document.createElement('li');
      li.classList.toggle('ready', Boolean(state.services[key]));
      li.textContent = `${label} · ${state.services[key] ? 'connected' : 'setup needed'}`;
      list.append(li);
    });
    $('#service-details').open = !allReady;
  } catch {
    $('#mode-label').textContent = t('sampleMode');
  }
}

function setBusy(isBusy, message) {
  $('#busy-indicator').classList.toggle('is-hidden', !isBusy);
  if (message) $('#busy-text').textContent = message;
  $('#scan-button').disabled = isBusy || !state.imageData || state.quality === null || (Boolean(state.quality?.warning) && !state.allowWarning);
  $('#ask-button').disabled = isBusy;
  $('#voice-button').disabled = isBusy;
  $('#voice-capture-button').disabled = isBusy;
  $('#camera-button').disabled = isBusy;
  $('#photo-button').disabled = isBusy;
}

function showError(message) {
  $('#error-text').textContent = message;
  $('#error-message').classList.remove('is-hidden');
  $('#service-details').open = true;
  announce(message);
}

function setVoiceUi(isRecording, liveSpeech = false) {
  $('#voice-button').classList.toggle('is-recording', isRecording);
  $('#voice-capture-button').classList.toggle('is-recording', isRecording);
  const label = isRecording ? (liveSpeech ? 'Tap to finish recording' : 'Listening…') : t('askByVoice');
  $('#voice-label').textContent = label;
  $('#voice-capture-button').querySelector('[data-i18n]').textContent = isRecording ? label : t('voiceControl');
}

function clearError() { $('#error-message').classList.add('is-hidden'); }

async function setPhoto(dataUrl, name) {
  state.demo = false;
  state.imageData = dataUrl;
  state.photoName = name || 'Sign photo';
  state.quality = null;
  state.englishEvidence = '';
  state.allowWarning = false;
  state.evidenceText = '';
  state.currentAnswer = null;
  state.answerAudio = null;
  $('#photo-preview').src = dataUrl;
  $('#photo-preview').classList.remove('is-hidden');
  $('#camera-preview').classList.add('is-hidden');
  $('#capture-placeholder').classList.add('is-hidden');
  $('#preview-tag').textContent = state.photoName;
  $('#preview-tag').classList.remove('is-hidden');
  $('#answer-content').classList.add('is-hidden');
  $('#empty-result').classList.remove('is-hidden');
  $('#followup').classList.add('is-hidden');
  $('#warning-actions').classList.add('is-hidden');
  $('#scan-button').disabled = true;
  clearError();
  state.qualityPromise = analyzePhoto(dataUrl).then((result) => {
    state.quality = result;
    showQuality(result);
  }).catch(() => {
    state.quality = { warning: 'blur' };
    showQuality(state.quality);
  });
  return state.qualityPromise;
}

async function analyzePhoto(dataUrl) {
  const image = new Image();
  image.src = dataUrl;
  await image.decode();
  const canvas = $('#analysis-canvas');
  const width = Math.min(420, image.naturalWidth);
  const height = Math.max(1, Math.round(image.naturalHeight * width / image.naturalWidth));
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d', { willReadFrequently: true });
  context.drawImage(image, 0, 0, width, height);
  const pixels = context.getImageData(0, 0, width, height).data;
  const gray = new Float32Array(width * height);
  let brightness = 0;
  for (let i = 0, p = 0; i < pixels.length; i += 4, p += 1) {
    const value = .2126 * pixels[i] + .7152 * pixels[i + 1] + .0722 * pixels[i + 2];
    gray[p] = value;
    brightness += value;
  }
  brightness /= gray.length;
  let lapTotal = 0;
  let lapSquare = 0;
  let count = 0;
  for (let y = 1; y < height - 1; y += 1) {
    for (let x = 1; x < width - 1; x += 1) {
      const at = y * width + x;
      const lap = gray[at - width] + gray[at - 1] - 4 * gray[at] + gray[at + 1] + gray[at + width];
      lapTotal += lap;
      lapSquare += lap * lap;
      count += 1;
    }
  }
  const blurScore = count ? lapSquare / count - (lapTotal / count) ** 2 : 0;
  let warning = '';
  if (brightness < 39) warning = 'dark';
  else if (brightness > 229) warning = 'bright';
  else if (image.naturalWidth < 560 || image.naturalHeight < 360) warning = 'small';
  else if (blurScore < 24) warning = 'blur';
  return { warning, brightness: Math.round(brightness), blurScore: Math.round(blurScore), width: image.naturalWidth, height: image.naturalHeight };
}

function showQuality(result) {
  const box = $('#quality-box');
  const key = result.warning ? `quality${result.warning[0].toUpperCase()}${result.warning.slice(1)}` : 'qualityGood';
  $('#quality-message').textContent = t(key);
  box.classList.toggle('is-warning', Boolean(result.warning));
  box.classList.toggle('is-good', !result.warning);
  $('#warning-actions').classList.toggle('is-hidden', !result.warning);
  $('#scan-button').disabled = Boolean(result.warning) && !state.allowWarning;
}

async function startCamera() {
  clearError();
  if (!navigator.mediaDevices?.getUserMedia) {
    $('#photo-input').click();
    showError('Live camera is unavailable in this browser. Choose or take a photo using the phone camera option.');
    return;
  }
  try {
    stopCamera(false);
    state.imageData = null;
    state.quality = null;
    state.allowWarning = false;
    state.evidenceText = '';
    state.englishEvidence = '';
    state.currentAnswer = null;
    state.answerAudio = null;
    $('#scan-button').disabled = true;
    $('#quality-message').textContent = t('qualityEmpty');
    $('#quality-box').classList.remove('is-warning', 'is-good');
    $('#answer-content').classList.add('is-hidden');
    $('#followup').classList.add('is-hidden');
    $('#empty-result').classList.remove('is-hidden');
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' }, width: { ideal: 1600 } }, audio: false });
    state.cameraStream = stream;
    const video = $('#camera-preview');
    video.srcObject = stream;
    video.classList.remove('is-hidden');
    $('#photo-preview').classList.add('is-hidden');
    $('#capture-placeholder').classList.add('is-hidden');
    $('#preview-tag').classList.add('is-hidden');
    $('#capture-actions').classList.add('is-hidden');
    $('#camera-live-actions').classList.remove('is-hidden');
    announce('Camera is open. Center the sign and take a photo.');
  } catch (error) {
    $('#photo-input').click();
    showError(error.name === 'NotAllowedError' ? 'Camera access was not allowed. Choose a photo or enable camera permission in your browser.' : 'I could not open the camera. Choose a photo and try again.');
  }
}

function stopCamera(restore = true) {
  if (state.cameraStream) state.cameraStream.getTracks().forEach((track) => track.stop());
  state.cameraStream = null;
  $('#camera-preview').srcObject = null;
  $('#camera-preview').classList.add('is-hidden');
  $('#camera-live-actions').classList.add('is-hidden');
  $('#capture-actions').classList.remove('is-hidden');
  if (restore) {
    if (state.imageData) $('#photo-preview').classList.remove('is-hidden');
    else $('#capture-placeholder').classList.remove('is-hidden');
  }
}

async function captureFrame() {
  const video = $('#camera-preview');
  if (!video.videoWidth) { showError('The camera is still starting. Wait a moment and try again.'); return; }
  const scale = Math.min(1, 1800 / video.videoWidth);
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(video.videoWidth * scale);
  canvas.height = Math.round(video.videoHeight * scale);
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  await setPhoto(canvas.toDataURL('image/jpeg', .88), 'Camera photo');
  stopCamera(false);
}

async function readSelectedFile(file) {
  if (!file) return;
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    showError('Choose a JPG, PNG, or WebP photo.');
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    showError('This photo is over 10 MB. Choose a smaller photo.');
    return;
  }
  stopCamera(false);
  const dataUrl = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  await setPhoto(dataUrl, file.name);
}

async function apiPost(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  let payload;
  try { payload = await response.json(); } catch { payload = {}; }
  if (!response.ok) throw new Error(payload.error || `The request could not be completed (${response.status}).`);
  return payload;
}

async function runScan(force = false) {
  if (!state.imageData) { showError('Take or choose a sign photo first.'); return; }
  if (state.quality === null && state.qualityPromise) await state.qualityPromise;
  if (state.quality?.warning && !force && !state.allowWarning) {
    $('#warning-actions').classList.remove('is-hidden');
    return;
  }
  clearError();
  setBusy(true, t('working'));
  $('#empty-result').classList.add('is-hidden');
  try {
    const result = await apiPost('/api/scan', {
      imageData: state.imageData,
      scanLanguage: $('#scan-language').value,
      responseLanguage: $('#response-language').value,
    });
    state.demo = false;
    state.evidenceText = result.ocrText;
    state.englishEvidence = result.englishEvidence || result.ocrText;
    state.currentAnswer = result;
    state.answerAudio = result.audio;
    showAnswer(result, result.ocrText, result.source);
    if (result.evidenceTranslation === 'not-configured' && result.scanLanguage !== 'en') {
      $('#answer-note').textContent += ' The sign was read in its original language because BHASHINI translation is not configured.';
    }
    if (result.signTranslation === 'not-configured' && result.scanLanguage !== result.responseLanguage) {
      $('#answer-note').textContent += ' The extracted text remains in its original language.';
    }
    announce(`${result.title}. ${result.answer}`);
    if (result.speechMode === 'browser-preview' && result.speechWarning) $('#answer-note').textContent += ` ${result.speechWarning}`;
    playAnswer(true);
  } catch (error) {
    $('#empty-result').classList.remove('is-hidden');
    showError(error.message);
  } finally {
    setBusy(false);
  }
}

function showAnswer(result, evidence, source = 'live') {
  $('#empty-result').classList.add('is-hidden');
  $('#answer-content').classList.remove('is-hidden');
  $('#followup').classList.remove('is-hidden');
  $('#answer-title').textContent = result.title || '';
  $('#answer-text').textContent = result.answer || '';
  $('#next-step').textContent = result.nextStep || '';
  $('#next-step-wrap').classList.toggle('is-hidden', !result.nextStep);
  $('#confidence').textContent = t(`confidence${(result.confidence || 'low')[0].toUpperCase()}${(result.confidence || 'low').slice(1)}`);
  $('#evidence-text').textContent = result.translatedSignText && result.translatedSignText !== evidence
    ? `${evidence}\n\n${result.translatedSignText}` : evidence;
  $('#answer-tag').textContent = source === 'demo' ? 'Practice example' : t('liveAnswer');
  $('#answer-note').textContent = source === 'demo' ? t('sampleNote') : t('liveNote');
  $('#transcript').classList.add('is-hidden');
  $('#question-input').value = '';
  $('#answer-content').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

async function submitQuestion(question = $('#question-input').value.trim()) {
  if (!question) { $('#question-input').focus(); return; }
  if (!state.evidenceText) { showError('Capture and read a sign before asking a question.'); return; }
  if (state.demo) { renderDemoAnswer(question); return; }
  clearError();
  setBusy(true, 'Checking the sign text…');
  try {
    const result = await apiPost('/api/ask', {
      question,
      evidenceText: state.evidenceText,
      englishEvidence: state.englishEvidence,
      scanLanguage: $('#scan-language').value,
      inputLanguage: $('#input-language').value,
      responseLanguage: $('#response-language').value,
    });
    state.currentAnswer = result;
    state.answerAudio = result.audio;
    showAnswer(result, state.evidenceText, result.source);
    if (result.transcript) $('#transcript').textContent = `Heard: ${result.transcript}`;
    announce(`${result.title}. ${result.answer}`);
    if (result.speechMode === 'browser-preview' && result.speechWarning) $('#answer-note').textContent += ` ${result.speechWarning}`;
    playAnswer(true);
  } catch (error) {
    showError(error.message);
  } finally {
    setBusy(false);
  }
}

const DEMO_ANSWERS = {
  en: {
    title: I18N.en.sampleTitle,
    answer: I18N.en.sampleAnswer,
    nextStep: I18N.en.sampleNext,
    unknown: I18N.en.sampleUnknown,
  },
  hi: {
    title: I18N.hi.sampleTitle,
    answer: I18N.hi.sampleAnswer,
    nextStep: I18N.hi.sampleNext,
    unknown: I18N.hi.sampleUnknown,
  },
  te: {
    title: I18N.te.sampleTitle,
    answer: I18N.te.sampleAnswer,
    nextStep: I18N.te.sampleNext,
    unknown: I18N.te.sampleUnknown,
  },
};
const DEMO_TEXT = 'CITY BUS INFORMATION\nBUS 24 → CENTRAL STATION\nBOARDING AREA · PLATFORM B';

function loadSample() {
  stopCamera(false);
  state.demo = true;
  state.demoQuestion = '';
  state.imageData = null;
  state.photoName = 'Practice sign';
  state.quality = null;
  state.qualityPromise = null;
  state.evidenceText = DEMO_TEXT;
  state.englishEvidence = DEMO_TEXT;
  state.answerAudio = null;
  state.currentAnswer = null;
  $('#photo-preview').src = '/sample-bus.svg';
  $('#photo-preview').classList.remove('is-hidden');
  $('#capture-placeholder').classList.add('is-hidden');
  $('#preview-tag').textContent = 'PRACTICE SIGN · SAMPLE TEXT';
  $('#preview-tag').classList.remove('is-hidden');
  $('#quality-message').textContent = 'Prepared sample · the text below is supplied for this practice example.';
  $('#quality-box').classList.remove('is-warning');
  $('#quality-box').classList.add('is-good');
  $('#warning-actions').classList.add('is-hidden');
  $('#scan-button').disabled = true;
  renderDemoAnswer('');
  $('#answer-content').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  announce('Practice sign loaded. It lists bus 24 for Central Station and Platform B.');
  playAnswer(true);
}

function renderDemoAnswer(question) {
  state.demo = true;
  state.demoQuestion = question;
  const lang = $('#response-language').value;
  const result = { ...DEMO_ANSWERS[lang], confidence: 'high', source: 'demo' };
  if (question && !/(bus|24|central|station|platform|where|which|number|बस|स्टेशन|प्लेट|ఎక్కడ|బస్సు|స్టేషన్|ప్లాట్)/i.test(question)) {
    result.answer = DEMO_ANSWERS[lang].unknown;
    result.nextStep = '';
  }
  state.currentAnswer = result;
  state.answerAudio = null;
  showAnswer(result, DEMO_TEXT, 'demo');
  if (question) $('#question-input').value = question;
  announce(`${result.title}. ${result.answer}`);
  playAnswer(true);
}

function playAnswer(allowBrowserVoice = true) {
  const speed = Number($('#speech-speed').value);
  if (state.answerAudio) {
    const audio = new Audio(state.answerAudio);
    audio.playbackRate = speed;
    audio.play().catch(() => announce('Tap Hear this again to play the spoken answer.'));
    return;
  }
  if (!allowBrowserVoice || !state.currentAnswer || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const text = [state.currentAnswer.title, state.currentAnswer.answer, state.currentAnswer.nextStep].filter(Boolean).join('. ');
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = { en: 'en-IN', hi: 'hi-IN', te: 'te-IN' }[$('#response-language').value];
  utterance.rate = speed;
  window.speechSynthesis.speak(utterance);
}

function pcmToWav(buffer, outputRate = 16000) {
  const sourceRate = buffer.sampleRate;
  const frameCount = Math.max(1, Math.floor(buffer.duration * outputRate));
  const samples = new Float32Array(frameCount);
  const channels = Array.from({ length: buffer.numberOfChannels }, (_, index) => buffer.getChannelData(index));
  for (let i = 0; i < frameCount; i += 1) {
    const sourceIndex = i * sourceRate / outputRate;
    const lower = Math.floor(sourceIndex);
    const upper = Math.min(Math.ceil(sourceIndex), channels[0].length - 1);
    const mix = sourceIndex - lower;
    let total = 0;
    for (const channel of channels) total += channel[lower] * (1 - mix) + channel[upper] * mix;
    samples[i] = total / channels.length;
  }
  const bytes = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(bytes);
  const writeText = (offset, value) => { for (let i = 0; i < value.length; i += 1) view.setUint8(offset + i, value.charCodeAt(i)); };
  writeText(0, 'RIFF'); view.setUint32(4, 36 + samples.length * 2, true); writeText(8, 'WAVE'); writeText(12, 'fmt ');
  view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, 1, true); view.setUint32(24, outputRate, true);
  view.setUint32(28, outputRate * 2, true); view.setUint16(32, 2, true); view.setUint16(34, 16, true); writeText(36, 'data'); view.setUint32(40, samples.length * 2, true);
  for (let i = 0; i < samples.length; i += 1) {
    const sample = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(44 + i * 2, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
  }
  const chunk = new Uint8Array(bytes);
  let binary = '';
  for (let offset = 0; offset < chunk.length; offset += 0x8000) binary += String.fromCharCode(...chunk.subarray(offset, Math.min(offset + 0x8000, chunk.length)));
  return `data:audio/wav;base64,${btoa(binary)}`;
}

async function blobToWav(blob) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) throw new Error('This browser cannot prepare microphone audio. Type your question instead.');
  const context = new AudioContextClass();
  try {
    const decoded = await context.decodeAudioData(await blob.arrayBuffer());
    return pcmToWav(decoded);
  } finally {
    await context.close();
  }
}

async function handleSpokenText(text) {
  $('#transcript').textContent = `${$('#input-language').value === 'en' ? 'Heard' : $('#input-language').value === 'hi' ? 'सुना' : 'విన్నది'}: ${text}`;
  $('#transcript').classList.remove('is-hidden');
  const readCommand = /(read|scan|capture|take (a )?(photo|picture)|पढ़|फोटो|చదవ|ఫోటో).*(sign|board|this|संकेत|बोर्ड|బోర్డు|సైన్)?/i.test(text);
  const openCameraCommand = /(open|start|turn on|खोल|कैमरा खोल|కెమెరా తెరువు)/i.test(text);
  if (openCameraCommand && !state.cameraStream) {
    await startCamera();
    return;
  }
  if (readCommand) {
    if (state.cameraStream) {
      await captureFrame();
      await runScan();
    } else if (state.imageData) await runScan();
    else if (!state.evidenceText) await startCamera();
    else if (state.demo) renderDemoAnswer(text);
    else await submitQuestion(text);
    return;
  }
  if (state.evidenceText) {
    if (state.demo) renderDemoAnswer(text);
    else await submitQuestion(text);
  } else {
    $('#question-input').value = text;
    showError('Capture and read a sign before asking a question about it.');
  }
}

async function stopAndSendRecording() {
  const recorder = state.mediaRecorder;
  if (!recorder || recorder.state === 'inactive') return;
  $('#voice-label').textContent = t('askByVoice');
  setVoiceUi(false);
  setBusy(true, 'Preparing your voice question…');
  recorder.onstop = async () => {
    recorder.stream.getTracks().forEach((track) => track.stop());
    try {
      const audioData = await blobToWav(new Blob(state.mediaChunks, { type: recorder.mimeType || 'audio/webm' }));
      const transcriptPayload = await apiPost('/api/transcribe', { audioData, inputLanguage: $('#input-language').value });
      await handleSpokenText(transcriptPayload.transcript);
    } catch (error) {
      showError(error.message);
    } finally {
      setBusy(false);
    }
  };
  recorder.stop();
}

async function beginRecording() {
  clearError();
  if (!state.services?.asr) {
    showError('BHASHINI voice recognition is not connected. Add the ASR pipeline settings in .env, or type your question.');
    return;
  }
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    showError('Voice recording is unavailable in this browser. Type your question instead.');
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
    const mimeType = ['audio/webm;codecs=opus', 'audio/ogg;codecs=opus'].find((type) => MediaRecorder.isTypeSupported(type));
    const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
    state.mediaChunks = [];
    recorder.ondataavailable = (event) => { if (event.data.size) state.mediaChunks.push(event.data); };
    state.mediaRecorder = recorder;
    recorder.start();
    setVoiceUi(true, true);
    announce('Listening. Ask one short question, then tap the voice button again.');
  } catch (error) {
    showError(error.name === 'NotAllowedError' ? 'Microphone access was not allowed. Type your question or enable microphone permission.' : 'I could not start microphone recording. Type your question instead.');
  }
}

async function toggleVoice() {
  if (state.mediaRecorder?.state === 'recording') { await stopAndSendRecording(); return; }
  await beginRecording();
}

function setFontSize(direction) {
  const body = document.body;
  body.classList.toggle('large-captions', direction > 0);
}

$('#response-language').addEventListener('change', async () => {
  applyLanguage();
  if (!state.inputLanguageTouched) $('#input-language').value = $('#response-language').value;
  refreshStatus();
  if (state.demo && state.evidenceText) renderDemoAnswer(state.demoQuestion || '');
  else if (state.currentAnswer?.answerEnglish && state.evidenceText) {
    setBusy(true, 'Updating the response language…');
    try {
      const result = await apiPost('/api/localize', {
        answerEnglish: state.currentAnswer.answerEnglish,
        evidenceText: state.evidenceText,
        scanLanguage: $('#scan-language').value,
        responseLanguage: $('#response-language').value,
      });
      state.currentAnswer = result;
      state.answerAudio = result.audio;
      showAnswer(result, state.evidenceText, 'live');
      if (result.speechMode === 'browser-preview' && result.speechWarning) $('#answer-note').textContent += ` ${result.speechWarning}`;
      playAnswer(true);
    } catch (error) {
      showError(error.message);
    } finally {
      setBusy(false);
    }
  }
});
$('#input-language').addEventListener('change', () => { state.inputLanguageTouched = true; });
$('#scan-language').addEventListener('change', () => {
  if (!state.demo && state.currentAnswer) {
    state.evidenceText = '';
    state.englishEvidence = '';
    state.currentAnswer = null;
    state.answerAudio = null;
    $('#answer-content').classList.add('is-hidden');
    $('#followup').classList.add('is-hidden');
    $('#empty-result').classList.remove('is-hidden');
    announce('Sign language changed. Read the photo again before asking a question.');
  }
});
$('#camera-button').addEventListener('click', startCamera);
$('#photo-button').addEventListener('click', () => $('#photo-input').click());
$('#photo-input').addEventListener('change', (event) => readSelectedFile(event.target.files?.[0]));
$('#take-photo-button').addEventListener('click', captureFrame);
$('#close-camera-button').addEventListener('click', () => stopCamera());
$('#scan-button').addEventListener('click', () => runScan());
$('#scan-anyway-button').addEventListener('click', () => { state.allowWarning = true; runScan(true); });
$('#retake-button').addEventListener('click', () => $('#photo-input').click());
$('#ask-button').addEventListener('click', () => submitQuestion());
$('#question-input').addEventListener('keydown', (event) => { if (event.key === 'Enter') submitQuestion(); });
$('#voice-button').addEventListener('click', toggleVoice);
$('#voice-capture-button').addEventListener('click', toggleVoice);
$('#sample-button').addEventListener('click', loadSample);
$('#speak-button').addEventListener('click', () => playAnswer(true));
$('#font-up').addEventListener('click', () => setFontSize(1));
$('#font-down').addEventListener('click', () => setFontSize(-1));
$('#speech-speed').addEventListener('input', () => { $('#speed-value').value = `${Number($('#speech-speed').value).toFixed(1).replace('.0', '')}×`; });
$('#toggle-evidence').addEventListener('click', () => {
  const text = $('#evidence-text');
  const hidden = text.classList.toggle('is-hidden');
  $('#toggle-evidence').setAttribute('aria-expanded', String(!hidden));
  $('#toggle-evidence').textContent = hidden ? t('showText') : t('hideText');
});
$('#error-dismiss').addEventListener('click', clearError);
window.addEventListener('online', () => { refreshStatus(); announce('Internet connection restored.'); });
window.addEventListener('offline', () => showError('You are offline. The sample sign remains available; live OCR and voice services need a connection.'));
window.addEventListener('pagehide', () => stopCamera(false));

applyLanguage();
refreshStatus();
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('/sw.js').catch(() => {});
