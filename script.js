const fallbackPromptData = [
  {
    id: "one-day-problem-solving",
    title: "One Day Problem Solving Prompt",
    category: "Problem Solving",
    tagline: "Use this prompt to solve urgent challenges with a focused one-day action plan.",
    prompt: `You are my strategic problem-solving assistant. I have exactly one day to solve this issue: [describe issue].

Break your response into five sections:
1. Root cause analysis (clear and short).
2. Fastest high-impact actions for today.
3. Timeline for morning, afternoon, evening.
4. Risks I may face and mitigation for each.
5. A final checklist I can execute in 30-minute blocks.

Keep the advice practical, specific, and measurable.`,
    images: [
      "WhatsApp Image 2026-02-26 at 10.28.46 AM.jpeg",
      "WhatsApp Image 2026-02-26 at 10.28.47 AM.jpeg",
      "WhatsApp Image 2026-02-26 at 10.28.47 AM (1).jpeg"
    ]
  },
  {
    id: "exam-preparation",
    title: "Exam Preparation Prompt",
    category: "Education",
    tagline: "Use this prompt to convert your syllabus into a practical study roadmap.",
    prompt: `Act as an expert study coach. I am preparing for [exam name] and I have [number of days] days left.

Create a full preparation plan including:
1. A daily study schedule.
2. Topic prioritization based on marks and difficulty.
3. Revision strategy every 3 days.
4. Mock test pattern and analysis method.
5. Last 48-hour final revision approach.

Output should be concise, realistic, and easy to follow.`,
    images: [
      "WhatsApp Image 2026-02-26 at 10.16.16 AM.jpeg",
      "WhatsApp Image 2026-02-26 at 10.16.16 AM (1).jpeg",
      "WhatsApp Image 2026-02-26 at 10.16.18 AM.jpeg"
    ]
  },
  {
    id: "short-film-script",
    title: "Short Film Script Prompt",
    category: "Filmmaking",
    tagline: "Use this prompt to create a complete short-film script with scene-level clarity.",
    prompt: `You are a professional screenwriter. Write a short film script (8-12 minutes) based on this theme: [theme].

Include:
1. Logline.
2. Main character profile.
3. 3-act structure (setup, conflict, resolution).
4. Scene-by-scene breakdown with location and mood.
5. Realistic dialogue snippets for key scenes.

Tone should be cinematic and emotionally engaging.`,
    images: [
      "WhatsApp Image 2026-02-26 at 10.10.45 AM.jpeg",
      "WhatsApp Image 2026-02-26 at 10.10.45 AM (1).jpeg",
      "WhatsApp Image 2026-02-26 at 10.03.23 AM.jpeg"
    ]
  },
  {
    id: "app-feature-spec",
    title: "App Feature Spec Prompt",
    category: "App Development",
    tagline: "Use this prompt to define one app feature from idea to implementation details.",
    prompt: `Act as a senior product manager. I want to build this app feature: [feature description].

Generate a complete feature specification with:
1. Problem statement and user pain points.
2. User stories and acceptance criteria.
3. Primary flow and edge cases.
4. Data requirements and API suggestions.
5. Success metrics and rollout plan.

Format the response so both developers and designers can execute it.`,
    images: [
      "https://picsum.photos/seed/appA/520/900"
    ]
  },
  {
    id: "seo-blog-outline",
    title: "SEO Blog Outline Prompt",
    category: "Content Writing",
    tagline: "Use this prompt to generate a ranking-focused blog structure with clear section flow.",
    prompt: `You are an expert content strategist. Create an SEO-optimized blog outline for this topic: [topic].

Include:
1. Search intent and target audience.
2. Suggested title options with keyword placement.
3. H1, H2, H3 outline structure.
4. Key points to cover under each heading.
5. A short CTA section at the end.

Make the outline practical, clear, and ready for writing.`,
    images: [
      "https://picsum.photos/seed/writeA/520/900"
    ]
  },
  {
    id: "code-explainer-dry-run",
    title: "Code Explanation Dry Run Prompt",
    category: "Code Learning",
    tagline: "Use this prompt to get clear, step-by-step code understanding with dry run tables.",
    prompt: `You are a patient programming teacher.

The user will paste a piece of code.

Your task is to explain the code in a CLEAR, STEP-BY-STEP, DRY-RUN format.

Follow these strict instructions:

1) First Section - Code Overview
- What this program is trying to do (in simple words)
- Input -> Process -> Output format
- Type of pattern used (loop, recursion, condition, array traversal, etc.)

2) Second Section - Line-by-Line Explanation
- Explain each line briefly
- No long paragraphs
- Use bullet points
- Mention variable purpose clearly

3) Third Section - Dry Run Table
If the code contains loops, conditions, or variable updates:

Create a simple table like:
Step | Line Executed | Variable Values | What Happened
------------------------------------------------------

Show how values change step-by-step.`,
    images: [
      "https://picsum.photos/seed/codeA/520/900"
    ]
  },
  {
    id: "expert-learning-roadmap",
    title: "Expert Learning Roadmap Prompt",
    category: "Learning Mastery",
    tagline: "Use this prompt to generate safe, structured, beginner-friendly mastery roadmaps.",
    prompt: `You are an Expert Learning Strategist and Responsible Mentor.

Create a safe and structured roadmap for the given topic.

Include:
1. What the topic means in simple words.
2. Common misconceptions and ethical boundaries.
3. 4 learning levels: Foundations, Core, Intermediate, Advanced.
4. Practical mini exercises for each level.
5. 30-day starter plan and validation checklist.`,
    images: [
      "WhatsApp Image 2026-02-26 at 10.03.23 AM.jpeg",
      "WhatsApp Image 2026-02-26 at 10.03.23 AM (1).jpeg",
      "WhatsApp Image 2026-02-26 at 10.03.23 AM (2).jpeg"
    ]
  },
  {
    id: "cinematic-song-lyrics-generator",
    title: "Cinematic Song Lyrics Prompt",
    category: "Content Writing",
    tagline: "Use this prompt to generate emotionally powerful original lyrics with structured options.",
    prompt: `Create original cinematic song lyrics with strong emotion and natural rhythm.

Structure:
Verse 1
Pre-Chorus
Chorus
Verse 2
Bridge
Final Chorus

Then ask the user to choose mood, theme, tempo, perspective, imagery, and ending.`,
    images: [
      "https://picsum.photos/seed/songA/520/900",
      "https://picsum.photos/seed/songB/520/900"
    ]
  },
  {
    id: "concept-identification-only-1",
    title: "Concept Identification Only",
    category: "Concept Logic",
    tagline: "Use this prompt to identify only the correct concept category without solving the question.",
    prompt: `From the given concept list, identify only the exact concept needed for the question.

Rules:
- Do not solve the question.
- Do not provide steps.
- Only return the correct concept label.`,
    images: [
      "https://picsum.photos/seed/solveA/520/900"
    ]
  },
  {
    id: "deep-structured-topic-mastery",
    title: "Deep Structured Topic Mastery",
    category: "Learning Mastery",
    tagline: "Use this prompt to learn any topic deeply from beginner to advanced in a structured path.",
    prompt: `Teach this topic from absolute beginner to advanced in strict order:

1. What it is
2. Why it matters
3. Real-world usage
4. Foundations
5. Intermediate concepts
6. Advanced concepts
7. Practice tasks per stage
8. One practical project
9. Revision plan and next roadmap`,
    images: [
      "https://picsum.photos/seed/examA/520/900"
    ]
  },
  {
    id: "concept-identification-only-2",
    title: "Concept Identification Only (Variant)",
    category: "Concept Logic",
    tagline: "Use this prompt when you only need concept selection and not full solution steps.",
    prompt: `Identify only the best matching concept from the list.

No solution.
No explanation steps.
Return concept name only.`,
    images: [
      "https://picsum.photos/seed/filmA/520/900"
    ]
  }
];

const categoriesEl = document.getElementById("categories");
const categoriesTitleEl = document.getElementById("categoriesTitle");
const quickFiltersEl = document.getElementById("quickFilters");
const heroSectionEl = document.getElementById("heroSection");
const promptGridEl = document.getElementById("promptGrid");
const promptsPanelEl = document.getElementById("promptsPanel");
const detailViewEl = document.getElementById("detailView");
const imagePromptsViewEl = document.getElementById("imagePromptsView");
const adminViewEl = document.getElementById("adminView");
const imagePromptGridEl = document.getElementById("imagePromptGrid");
const imageBackBtn = document.getElementById("imageBackBtn");
const detailTitleEl = document.getElementById("detailTitle");
const detailTaglineEl = document.getElementById("detailTagline");
const detailPromptTextEl = document.getElementById("detailPromptText");
const screenshotsRowEl = document.getElementById("screenshotsRow");
const togglePinBtn = document.getElementById("togglePinBtn");
const toggleFavoriteBtn = document.getElementById("toggleFavoriteBtn");
const copyBtn = document.getElementById("copyBtn");
const saveToPromptTyperBtn = document.getElementById("saveToPromptTyperBtn");
const backBtn = document.getElementById("backBtn");
const bridgeStatusEl = document.getElementById("bridgeStatus");
const searchForm = document.getElementById("searchForm");
const searchInputEl = document.getElementById("searchInput");
const searchClearBtn = document.getElementById("searchClearBtn");
const heroTrackEl = document.getElementById("heroTrack");
const heroDotsEl = document.getElementById("heroDots");
const heroKickerEl = document.getElementById("heroKicker");
const heroHeadlineEl = document.getElementById("heroHeadline");
const heroDescriptionEl = document.getElementById("heroDescription");
const openAdminBtn = document.getElementById("openAdminBtn");
const heroOpenBtn = document.getElementById("heroOpenBtn");
const heroBrowseBtn = document.getElementById("heroBrowseBtn");
const heroPrevBtn = document.getElementById("heroPrevBtn");
const heroNextBtn = document.getElementById("heroNextBtn");
const closeAdminBtn = document.getElementById("closeAdminBtn");
const adminForm = document.getElementById("adminForm");
const adminPromptIdEl = document.getElementById("adminPromptId");
const adminTitleEl = document.getElementById("adminTitle");
const adminCategoryEl = document.getElementById("adminCategory");
const adminTaglineEl = document.getElementById("adminTagline");
const adminPromptEl = document.getElementById("adminPrompt");
const adminImageEl = document.getElementById("adminImage");
const adminFeaturedEl = document.getElementById("adminFeatured");
const adminImagePreviewWrapEl = document.getElementById("adminImagePreviewWrap");
const adminImagePreviewEl = document.getElementById("adminImagePreview");
const adminResetBtn = document.getElementById("adminResetBtn");
const adminStatusEl = document.getElementById("adminStatus");
const adminListEl = document.getElementById("adminList");
const introOverlayEl = document.getElementById("introOverlay");
const introStatusEl = document.getElementById("introStatus");
const introAudioEl = document.getElementById("introAudio");

const promptTyperBridgeUrl = "http://127.0.0.1:8765";

let promptData = [];
let selectedCategory = "All";
let sliderImagePrompts = [];
let featuredHeroSlides = [];
let currentDetailPrompt = null;
let pendingAdminImageData = "";
let editingExistingImage = "";
let searchQuery = "";
let activeQuickFilter = "all";
let promptMeta = {};

const promptMetaStorageKey = "prompt_bank_meta_v1";
const introMinMs = 450;
const introMaxWaitMs = 1800;
const netTimeoutMs = 1800;
const introAudioStartSec = 5;
const introAudioEndSec = 10;
const introAudioTargetVolume = 0.85;
const introAudioFadeInSec = 0.8;
const introAudioFadeOutSec = 0.8;

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizePrompt(item, index) {
  const title = String(item.title || `Untitled Prompt ${index + 1}`).trim();
  const prompt = String(item.prompt || item.content || "").trim();
  const category = String(item.category || "General").trim() || "General";
  const tagline = String(item.tagline || "").trim();
  const id = String(item.id || slugify(title) || `prompt-${index + 1}`);
  const mainImage = String(item.mainImage || item.heroImage || item.image || item.images?.[0] || "").trim();
  const images = Array.isArray(item.images)
    ? item.images.filter((image) => typeof image === "string" && image.trim())
    : [];
  if (mainImage && !images.includes(mainImage)) {
    images.unshift(mainImage);
  }

  return {
    id,
    title,
    category,
    tagline,
    prompt,
    images,
    mainImage,
    featuredInSlider: Boolean(item.featuredInSlider ?? item.featured ?? mainImage),
  };
}

function loadPromptMeta() {
  try {
    const raw = localStorage.getItem(promptMetaStorageKey);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      promptMeta = parsed;
    }
  } catch (_error) {
    promptMeta = {};
  }
}

function savePromptMeta() {
  localStorage.setItem(promptMetaStorageKey, JSON.stringify(promptMeta));
}

function getPromptMeta(id) {
  if (!promptMeta[id]) {
    promptMeta[id] = { pinned: false, favorite: false, lastOpenedAt: 0 };
  }
  return promptMeta[id];
}

function getCategories() {
  return [...new Set(promptData.map((item) => item.category).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function getDisplayImages(item) {
  if (item.images.length) {
    return item.images;
  }
  return item.mainImage ? [item.mainImage] : [];
}

function getFeaturedPrompts() {
  return promptData.filter((item) => item.mainImage && item.featuredInSlider);
}

function renderCategories() {
  categoriesEl.innerHTML = "";
  ["All", ...getCategories()].forEach((label) => {
    const button = document.createElement("button");
    button.className = "category-btn" + (selectedCategory === label ? " active" : "");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => {
      selectedCategory = label;
      renderCategories();
      renderPromptList();
      showListView();
    });
    categoriesEl.appendChild(button);
  });
}

function renderPromptList() {
  promptGridEl.innerHTML = "";
  const loweredQuery = searchQuery.trim().toLowerCase();
  let visiblePrompts = promptData.filter((item) => {
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    if (!categoryMatch) return false;
    if (!loweredQuery) return true;

    const haystack = [
      item.title,
      item.category,
      item.tagline,
      item.prompt
    ].join(" ").toLowerCase();
    return haystack.includes(loweredQuery);
  });

  if (activeQuickFilter === "pinned") {
    visiblePrompts = visiblePrompts.filter((item) => getPromptMeta(item.id).pinned);
  } else if (activeQuickFilter === "favorites") {
    visiblePrompts = visiblePrompts.filter((item) => getPromptMeta(item.id).favorite);
  } else if (activeQuickFilter === "recent") {
    visiblePrompts = visiblePrompts.filter((item) => getPromptMeta(item.id).lastOpenedAt > 0);
  }

  visiblePrompts = [...visiblePrompts].sort((a, b) => {
    const aMeta = getPromptMeta(a.id);
    const bMeta = getPromptMeta(b.id);
    if (activeQuickFilter === "recent") {
      return bMeta.lastOpenedAt - aMeta.lastOpenedAt;
    }
    if (aMeta.pinned !== bMeta.pinned) return aMeta.pinned ? -1 : 1;
    if (aMeta.favorite !== bMeta.favorite) return aMeta.favorite ? -1 : 1;
    return a.title.localeCompare(b.title);
  });

  visiblePrompts.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "prompt-card";
    const meta = getPromptMeta(item.id);
    const markers = [];
    if (meta.pinned) markers.push("PINNED");
    if (meta.favorite) markers.push("FAVORITE");
    const titleNode = document.createElement("span");
    titleNode.textContent = item.title;
    card.appendChild(titleNode);
    if (markers.length) {
      const metaNode = document.createElement("span");
      metaNode.className = "card-meta";
      metaNode.textContent = markers.join(" | ");
      card.appendChild(metaNode);
    }
    card.addEventListener("click", () => showPromptDetails(item.id));
    promptGridEl.appendChild(card);
  });

  if (!visiblePrompts.length) {
    const empty = document.createElement("div");
    empty.className = "prompt-card";
    empty.textContent = "No prompts matched your search.";
    promptGridEl.appendChild(empty);
  }
}

function showPromptDetails(promptId) {
  const item = promptData.find((entry) => entry.id === promptId);
  if (!item) return;

  currentDetailPrompt = item;
  const itemMeta = getPromptMeta(item.id);
  itemMeta.lastOpenedAt = Date.now();
  savePromptMeta();
  detailTitleEl.textContent = item.title;
  detailTaglineEl.textContent = item.tagline || item.category;
  detailPromptTextEl.textContent = item.prompt;
  togglePinBtn.textContent = itemMeta.pinned ? "Unpin" : "Pin";
  toggleFavoriteBtn.textContent = itemMeta.favorite ? "Unfavorite" : "Favorite";

  screenshotsRowEl.innerHTML = "";
  getDisplayImages(item).slice(0, 5).forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${item.title} sample screenshot ${index + 1}`;
    screenshotsRowEl.appendChild(img);
  });

  copyBtn.setAttribute("data-copy-text", item.prompt);
  saveToPromptTyperBtn.setAttribute("data-prompt-title", item.title);
  saveToPromptTyperBtn.setAttribute("data-prompt-content", item.prompt);
  showDetailView();
}

function showDetailView() {
  imagePromptsViewEl.classList.add("hidden");
  adminViewEl.classList.add("hidden");
  promptsPanelEl.classList.add("hidden");
  detailViewEl.classList.remove("hidden");
  closeAdminBtn.classList.add("hidden");
}

function showListView() {
  heroSectionEl.classList.remove("hidden");
  categoriesTitleEl.classList.remove("hidden");
  categoriesEl.classList.remove("hidden");
  imagePromptsViewEl.classList.add("hidden");
  adminViewEl.classList.add("hidden");
  detailViewEl.classList.add("hidden");
  promptsPanelEl.classList.remove("hidden");
  closeAdminBtn.classList.add("hidden");
  if (window.location.hash === "#admin") {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }
}

function showImagePromptView(imageKey) {
  heroSectionEl.classList.add("hidden");
  categoriesTitleEl.classList.add("hidden");
  categoriesEl.classList.add("hidden");
  promptsPanelEl.classList.add("hidden");
  detailViewEl.classList.add("hidden");
  adminViewEl.classList.add("hidden");
  imagePromptsViewEl.classList.remove("hidden");
  closeAdminBtn.classList.add("hidden");

  if (imageKey) {
    const card = imagePromptGridEl.querySelector(`[data-image-key="${imageKey}"]`);
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}

function showAdminView() {
  heroSectionEl.classList.add("hidden");
  categoriesTitleEl.classList.add("hidden");
  categoriesEl.classList.add("hidden");
  promptsPanelEl.classList.add("hidden");
  detailViewEl.classList.add("hidden");
  imagePromptsViewEl.classList.add("hidden");
  adminViewEl.classList.remove("hidden");
  closeAdminBtn.classList.remove("hidden");
  window.location.hash = "admin";
}

function updateSearchUi() {
  searchClearBtn.classList.toggle("hidden", !searchQuery.trim());
}

function renderImagePromptCards() {
  imagePromptGridEl.innerHTML = "";
  sliderImagePrompts.forEach((item) => {
    const card = document.createElement("div");
    card.className = "orange-box image-prompt-card";
    card.setAttribute("data-image-key", item.key);

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;

    const text = document.createElement("p");
    text.className = "image-prompt-text";
    text.textContent = item.promptPreview;

    const copyButton = document.createElement("button");
    copyButton.className = "action-btn";
    copyButton.type = "button";
    copyButton.textContent = "Copy Prompt";
    copyButton.setAttribute("data-copy-image-prompt", item.prompt);

    const saveButton = document.createElement("button");
    saveButton.className = "action-btn action-btn-secondary";
    saveButton.type = "button";
    saveButton.textContent = "Save to PromptTyper";
    saveButton.setAttribute("data-save-title", item.title);
    saveButton.setAttribute("data-save-content", item.prompt);

    card.appendChild(img);
    card.appendChild(text);
    card.appendChild(copyButton);
    card.appendChild(saveButton);
    imagePromptGridEl.appendChild(card);
  });
}

function renderAdminList() {
  adminListEl.innerHTML = "";
  promptData.forEach((item) => {
    const article = document.createElement("article");
    article.className = "admin-item";

    const title = document.createElement("h4");
    title.textContent = item.title;

    const info = document.createElement("p");
    info.textContent = item.tagline || item.category || "No tagline";

    const meta = document.createElement("div");
    meta.className = "admin-item-meta";
    meta.textContent = item.mainImage
      ? item.featuredInSlider ? "Image attached | Slider enabled" : "Image attached | List only"
      : "No image | List only";

    const actions = document.createElement("div");
    actions.className = "admin-item-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "action-btn action-btn-secondary";
    editBtn.type = "button";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => loadPromptIntoAdmin(item.id));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "action-btn action-btn-secondary";
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deletePrompt(item.id));

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    article.appendChild(title);
    article.appendChild(info);
    article.appendChild(meta);
    article.appendChild(actions);
    adminListEl.appendChild(article);
  });
}

function renderAll() {
  renderCategories();
  renderQuickFilters();
  renderPromptList();
  renderAdminList();
  setupHeroSlider();
}

function renderQuickFilters() {
  if (!quickFiltersEl) return;
  const buttons = quickFiltersEl.querySelectorAll("button[data-quick-filter]");
  buttons.forEach((button) => {
    const isActive = button.getAttribute("data-quick-filter") === activeQuickFilter;
    button.classList.toggle("active", isActive);
  });
}

function collectIntroImageUrls() {
  const heroImages = promptData
    .filter((item) => item.mainImage)
    .slice(0, 8)
    .map((item) => item.mainImage);

  const sampleImages = promptData
    .flatMap((item) => getDisplayImages(item).slice(0, 1))
    .slice(0, 6);

  return [...new Set([...heroImages, ...sampleImages])].filter(Boolean);
}

function preloadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

async function fetchWithTimeout(url, options = {}, timeoutMs = netTimeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function runIntroLoader() {
  if (!introOverlayEl) return;
  const start = Date.now();
  const urls = collectIntroImageUrls();
  const audioEndPromise = await playIntroAudio();

  if (!urls.length) {
    introStatusEl.textContent = "Starting...";
  } else {
    introStatusEl.textContent = "Starting...";
  }

  let loadedCount = 0;
  const preloadTasks = urls.map(async (url) => {
    const ok = await preloadImage(url);
    loadedCount += 1;
    if (introStatusEl && loadedCount >= urls.length) introStatusEl.textContent = "Ready";
  });

  await Promise.race([
    Promise.all(preloadTasks),
    new Promise((resolve) => setTimeout(resolve, introMaxWaitMs)),
  ]);

  const elapsed = Date.now() - start;
  if (elapsed < introMinMs) {
    await new Promise((resolve) => setTimeout(resolve, introMinMs - elapsed));
  }

  if (audioEndPromise) {
    await audioEndPromise;
  }

  introOverlayEl.classList.add("is-hidden");
}

async function playIntroAudio() {
  if (!introAudioEl) return;
  try {
    introAudioEl.currentTime = introAudioStartSec;
    introAudioEl.volume = 0;
    await introAudioEl.play();
    return waitForIntroAudioSegmentEnd();
  } catch (_error) {
    if (introStatusEl) {
      introStatusEl.textContent = "Tap anywhere to play intro...";
    }
    return waitForIntroTapToPlay();
  }
}

function waitForIntroTapToPlay() {
  return new Promise((resolve) => {
    if (!introOverlayEl || !introAudioEl) {
      resolve();
      return;
    }

    const handleTap = async () => {
      if (introStatusEl) {
        introStatusEl.textContent = "Playing intro...";
      }

      try {
        introAudioEl.currentTime = introAudioStartSec;
        introAudioEl.volume = 0;
        await introAudioEl.play();
        await waitForIntroAudioSegmentEnd();
      } catch (_error) {
        // Continue intro even if user gesture playback still fails.
      }

      resolve();
    };

    introOverlayEl.addEventListener("pointerdown", handleTap, { once: true });
  });
}

function waitForIntroAudioSegmentEnd() {
  return new Promise((resolve) => {
    if (!introAudioEl) {
      resolve();
      return;
    }

    const endAt = Math.max(introAudioStartSec, introAudioEndSec);
    const fadeOutStartAt = Math.max(introAudioStartSec, endAt - introAudioFadeOutSec);
    const fadeInEndAt = introAudioStartSec + introAudioFadeInSec;
    let rafId = null;
    const finalize = () => {
      introAudioEl.pause();
      introAudioEl.removeEventListener("ended", finalize);
      introAudioEl.removeEventListener("error", finalize);
      introAudioEl.removeEventListener("timeupdate", onTimeUpdate);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      introAudioEl.volume = introAudioTargetVolume;
      resolve();
    };

    const tickFade = () => {
      const now = introAudioEl.currentTime;
      let volume = introAudioTargetVolume;

      if (now < fadeInEndAt) {
        const fadeInProgress = Math.max(0, Math.min(1, (now - introAudioStartSec) / Math.max(0.01, introAudioFadeInSec)));
        volume = introAudioTargetVolume * fadeInProgress;
      }

      if (now >= fadeOutStartAt) {
        const fadeOutProgress = Math.max(0, Math.min(1, (endAt - now) / Math.max(0.01, introAudioFadeOutSec)));
        volume = Math.min(volume, introAudioTargetVolume * fadeOutProgress);
      }

      introAudioEl.volume = Math.max(0, Math.min(introAudioTargetVolume, volume));
      if (!introAudioEl.paused) {
        rafId = requestAnimationFrame(tickFade);
      }
    };

    const onTimeUpdate = () => {
      if (introAudioEl.currentTime >= endAt) {
        finalize();
      }
    };

    introAudioEl.addEventListener("ended", finalize, { once: true });
    introAudioEl.addEventListener("error", finalize, { once: true });
    introAudioEl.addEventListener("timeupdate", onTimeUpdate);
    tickFade();
  });
}

async function checkPromptTyperBridge() {
  try {
    const response = await fetchWithTimeout(`${promptTyperBridgeUrl}/health`);
    if (!response.ok) {
      throw new Error("offline");
    }
    bridgeStatusEl.textContent = "PromptTyper connection: active";
    bridgeStatusEl.classList.add("is-online");
    return true;
  } catch (_error) {
    bridgeStatusEl.textContent = "PromptTyper connection: app not running";
    bridgeStatusEl.classList.remove("is-online");
    return false;
  }
}

async function loadPromptLibrary() {
  try {
    const response = await fetchWithTimeout(`${promptTyperBridgeUrl}/prompt-bank-data`);
    if (!response.ok) {
      throw new Error("No saved prompt bank data");
    }
    const payload = await response.json();
    if (!payload.ok || !Array.isArray(payload.prompts)) {
      throw new Error("Invalid prompt bank payload");
    }
    promptData = payload.prompts.map(normalizePrompt);
  } catch (_error) {
    promptData = fallbackPromptData.map(normalizePrompt);
  }
}

function restoreMissingFallbackPrompts() {
  const existing = new Set(promptData.map((item) => item.id));
  let added = 0;

  fallbackPromptData.forEach((rawItem) => {
    if (existing.has(rawItem.id)) return;
    const normalized = normalizePrompt(rawItem, promptData.length + added);
    promptData.push(normalized);
    existing.add(normalized.id);
    added += 1;
  });

  return added;
}

async function savePromptLibrary() {
  const response = await fetchWithTimeout(`${promptTyperBridgeUrl}/prompt-bank-data`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompts: promptData })
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.ok === false) {
    throw new Error(payload.error || "Could not save Prompt Bank");
  }
}

async function sendPromptToPromptTyper(title, content, source) {
  const response = await fetchWithTimeout(`${promptTyperBridgeUrl}/import-prompt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, source })
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok || payload.ok === false) {
    throw new Error(payload.error || "PromptTyper import failed");
  }
}

function loadPromptIntoAdmin(promptId) {
  const item = promptData.find((entry) => entry.id === promptId);
  if (!item) return;

  adminPromptIdEl.value = item.id;
  adminTitleEl.value = item.title;
  adminCategoryEl.value = item.category;
  adminTaglineEl.value = item.tagline;
  adminPromptEl.value = item.prompt;
  adminFeaturedEl.checked = Boolean(item.mainImage && item.featuredInSlider);
  adminImageEl.value = "";
  pendingAdminImageData = "";
  editingExistingImage = item.mainImage || "";
  updateAdminPreview(item.mainImage || "");
  adminStatusEl.textContent = `Editing "${item.title}"`;
  showAdminView();
}

function resetAdminForm() {
  adminForm.reset();
  adminPromptIdEl.value = "";
  pendingAdminImageData = "";
  editingExistingImage = "";
  adminFeaturedEl.checked = false;
  adminStatusEl.textContent = "";
  updateAdminPreview("");
}

function updateAdminPreview(src) {
  if (!src) {
    adminImagePreviewWrapEl.classList.add("hidden");
    adminImagePreviewEl.removeAttribute("src");
    return;
  }
  adminImagePreviewWrapEl.classList.remove("hidden");
  adminImagePreviewEl.src = src;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}

async function deletePrompt(promptId) {
  const item = promptData.find((entry) => entry.id === promptId);
  if (!item) return;
  if (!window.confirm(`Delete "${item.title}"?`)) return;

  promptData = promptData.filter((entry) => entry.id !== promptId);
  delete promptMeta[promptId];
  savePromptMeta();
  try {
    await savePromptLibrary();
    renderAll();
    resetAdminForm();
    adminStatusEl.textContent = "Prompt deleted.";
  } catch (error) {
    adminStatusEl.textContent = error.message;
  }
}

function setupHeroSlider() {
  featuredHeroSlides = getFeaturedPrompts().slice(0, 8).map((item) => ({
    key: item.id,
    src: item.mainImage,
    alt: item.title,
    kicker: item.category || "Featured Prompt",
    title: item.title,
    description: item.tagline || item.prompt.slice(0, 110),
    prompt: item.prompt
  }));

  sliderImagePrompts = featuredHeroSlides.map((slide) => ({
    key: slide.key,
    src: slide.src,
    alt: slide.alt,
    title: slide.title,
    prompt: slide.prompt,
    promptPreview: slide.prompt.replace(/\s+/g, " ").trim()
  }));
  renderImagePromptCards();

  heroTrackEl.innerHTML = "";
  heroDotsEl.innerHTML = "";

  if (!featuredHeroSlides.length) {
    heroKickerEl.textContent = "Prompt Library";
    heroHeadlineEl.textContent = "Add an image in Admin to show a prompt in the top slider";
    heroDescriptionEl.textContent = "Text-only prompts still appear in the main list below.";
    return;
  }

  const slidesWithClones = [
    featuredHeroSlides[featuredHeroSlides.length - 1],
    ...featuredHeroSlides,
    featuredHeroSlides[0]
  ];

  slidesWithClones.forEach((slide, index) => {
    const article = document.createElement("article");
    article.className = "hero-slide";
    article.tabIndex = 0;
    article.setAttribute("data-image-key", slide.key);
    article.setAttribute("data-slide-index", String(index));

    const img = document.createElement("img");
    img.src = slide.src;
    img.alt = slide.alt;

    const content = document.createElement("div");
    content.className = "hero-slide-content";

    const kicker = document.createElement("p");
    kicker.className = "hero-slide-tag";
    kicker.textContent = slide.kicker;

    const title = document.createElement("h3");
    title.className = "hero-slide-title";
    title.textContent = slide.title;

    const text = document.createElement("p");
    text.className = "hero-slide-text";
    text.textContent = slide.description;

    content.appendChild(kicker);
    content.appendChild(title);
    content.appendChild(text);
    article.appendChild(img);
    article.appendChild(content);
    heroTrackEl.appendChild(article);
  });

  featuredHeroSlides.forEach((_slide, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero-dot";
    dot.addEventListener("click", () => goToSlide(index + 1));
    heroDotsEl.appendChild(dot);
  });

  const slides = Array.from(heroTrackEl.children);
  const dots = Array.from(heroDotsEl.children);
  const slideDuration = 620;
  const autoDelay = 3800;
  let currentIndex = 1;
  let autoTimer = null;

  function getSlideStep() {
    const activeSlide = slides[currentIndex];
    if (!activeSlide) return 0;
    const gap = parseFloat(window.getComputedStyle(heroTrackEl).gap) || 0;
    return activeSlide.offsetWidth + gap;
  }

  function syncActiveVisuals() {
    const realIndex = (currentIndex - 1 + featuredHeroSlides.length) % featuredHeroSlides.length;
    const active = featuredHeroSlides[realIndex];
    if (!active) return;

    slides.forEach((slide, idx) => slide.classList.toggle("is-active", idx === currentIndex));
    dots.forEach((dot, idx) => dot.classList.toggle("active", idx === realIndex));
    heroKickerEl.textContent = active.kicker;
    heroHeadlineEl.textContent = active.title;
    heroDescriptionEl.textContent = active.description;
    heroOpenBtn.setAttribute("data-image-key", active.key);
  }

  function applyTransform(animate = true) {
    const step = getSlideStep();
    if (!step) return;
    const viewport = heroTrackEl.parentElement;
    const viewportWidth = viewport.clientWidth;
    const activeSlide = slides[currentIndex];
    const slideWidth = activeSlide.offsetWidth;
    const offset = (viewportWidth - slideWidth) / 2;
    heroTrackEl.style.transition = animate ? `transform ${slideDuration}ms ease` : "none";
    heroTrackEl.style.transform = `translateX(${offset - currentIndex * step}px)`;
    syncActiveVisuals();
  }

  function scheduleAuto() {
    window.clearTimeout(autoTimer);
    autoTimer = window.setTimeout(() => goToSlide(currentIndex + 1), autoDelay);
  }

  function goToSlide(index, animate = true) {
    currentIndex = index;
    applyTransform(animate);
    scheduleAuto();
  }

  heroTrackEl.ontransitionend = () => {
    if (currentIndex === 0) {
      currentIndex = featuredHeroSlides.length;
      applyTransform(false);
    } else if (currentIndex === slides.length - 1) {
      currentIndex = 1;
      applyTransform(false);
    }
    syncActiveVisuals();
  };

  heroPrevBtn.onclick = () => goToSlide(currentIndex - 1);
  heroNextBtn.onclick = () => goToSlide(currentIndex + 1);
  heroOpenBtn.onclick = () => showImagePromptView(heroOpenBtn.getAttribute("data-image-key"));
  heroBrowseBtn.onclick = () => document.getElementById("categoriesTitle").scrollIntoView({ behavior: "smooth", block: "start" });

  heroTrackEl.onclick = (event) => {
    const slide = event.target.closest(".hero-slide[data-image-key]");
    if (slide) {
      showImagePromptView(slide.getAttribute("data-image-key"));
    }
  };

  heroTrackEl.onkeydown = (event) => {
    const slide = event.target.closest(".hero-slide[data-image-key]");
    if (!slide) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showImagePromptView(slide.getAttribute("data-image-key"));
    }
  };

  goToSlide(1, false);
}

copyBtn.addEventListener("click", () => {
  const text = copyBtn.getAttribute("data-copy-text") || "";
  navigator.clipboard.writeText(text).then(() => {
    const oldText = copyBtn.textContent;
    copyBtn.textContent = "Copied";
    setTimeout(() => {
      copyBtn.textContent = oldText;
    }, 1400);
  });
});

saveToPromptTyperBtn.addEventListener("click", async () => {
  const title = saveToPromptTyperBtn.getAttribute("data-prompt-title") || currentDetailPrompt?.title || "Imported Prompt";
  const content = saveToPromptTyperBtn.getAttribute("data-prompt-content") || currentDetailPrompt?.prompt || "";
  const oldText = saveToPromptTyperBtn.textContent;
  saveToPromptTyperBtn.textContent = "Opening...";
  try {
    await sendPromptToPromptTyper(title, content, "Prompt Bank");
    saveToPromptTyperBtn.textContent = "Opened in PromptTyper";
  } catch (_error) {
    saveToPromptTyperBtn.textContent = "PromptTyper Offline";
  }
  await checkPromptTyperBridge();
  setTimeout(() => {
    saveToPromptTyperBtn.textContent = oldText;
  }, 1800);
});

togglePinBtn.addEventListener("click", () => {
  if (!currentDetailPrompt) return;
  const meta = getPromptMeta(currentDetailPrompt.id);
  meta.pinned = !meta.pinned;
  savePromptMeta();
  togglePinBtn.textContent = meta.pinned ? "Unpin" : "Pin";
  renderPromptList();
});

toggleFavoriteBtn.addEventListener("click", () => {
  if (!currentDetailPrompt) return;
  const meta = getPromptMeta(currentDetailPrompt.id);
  meta.favorite = !meta.favorite;
  savePromptMeta();
  toggleFavoriteBtn.textContent = meta.favorite ? "Unfavorite" : "Favorite";
  renderPromptList();
});

backBtn.addEventListener("click", showListView);
imageBackBtn.addEventListener("click", showListView);
openAdminBtn.addEventListener("click", showAdminView);
closeAdminBtn.addEventListener("click", showListView);
adminResetBtn.addEventListener("click", resetAdminForm);
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
});
searchInputEl.addEventListener("input", () => {
  searchQuery = searchInputEl.value;
  updateSearchUi();
  renderPromptList();
});
searchClearBtn.addEventListener("click", () => {
  searchQuery = "";
  searchInputEl.value = "";
  updateSearchUi();
  renderPromptList();
  searchInputEl.focus();
});

quickFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-quick-filter]");
  if (!button) return;
  activeQuickFilter = button.getAttribute("data-quick-filter") || "all";
  renderQuickFilters();
  renderPromptList();
});

adminImageEl.addEventListener("change", async () => {
  const [file] = adminImageEl.files || [];
  if (!file) {
    pendingAdminImageData = "";
    updateAdminPreview(editingExistingImage);
    return;
  }
  pendingAdminImageData = await readFileAsDataUrl(file);
  updateAdminPreview(pendingAdminImageData);
});

adminForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = adminTitleEl.value.trim();
  const prompt = adminPromptEl.value.trim();
  if (!title || !prompt) {
    adminStatusEl.textContent = "Title and prompt are required.";
    return;
  }

  const id = adminPromptIdEl.value.trim() || slugify(title) || `prompt-${Date.now()}`;
  const mainImage = pendingAdminImageData || editingExistingImage || "";
  const item = normalizePrompt({
    id,
    title,
    category: adminCategoryEl.value.trim() || "General",
    tagline: adminTaglineEl.value.trim(),
    prompt,
    mainImage,
    images: mainImage ? [mainImage] : [],
    featuredInSlider: Boolean(mainImage && adminFeaturedEl.checked),
  }, 0);

  const existingIndex = promptData.findIndex((entry) => entry.id === id);
  if (existingIndex >= 0) {
    promptData[existingIndex] = item;
  } else {
    promptData.unshift(item);
  }

  try {
    await savePromptLibrary();
    renderAll();
    adminStatusEl.textContent = "Prompt saved.";
    resetAdminForm();
  } catch (error) {
    adminStatusEl.textContent = error.message;
  }
});

imagePromptGridEl.addEventListener("click", (event) => {
  const copyButton = event.target.closest("button[data-copy-image-prompt]");
  if (copyButton) {
    const text = copyButton.getAttribute("data-copy-image-prompt") || "";
    navigator.clipboard.writeText(text).then(() => {
      const oldText = copyButton.textContent;
      copyButton.textContent = "Copied";
      setTimeout(() => {
        copyButton.textContent = oldText;
      }, 1200);
    });
    return;
  }

  const saveButton = event.target.closest("button[data-save-content]");
  if (!saveButton) return;
  const oldText = saveButton.textContent;
  saveButton.textContent = "Opening...";
  sendPromptToPromptTyper(
    saveButton.getAttribute("data-save-title") || "Imported Prompt",
    saveButton.getAttribute("data-save-content") || "",
    "Prompt Bank"
  ).then(() => {
    saveButton.textContent = "Opened in PromptTyper";
  }).catch(() => {
    saveButton.textContent = "PromptTyper Offline";
  }).finally(async () => {
    await checkPromptTyperBridge();
    setTimeout(() => {
      saveButton.textContent = oldText;
    }, 1800);
  });
});

window.addEventListener("resize", () => {
  if (!heroSectionEl.classList.contains("hidden")) {
    setupHeroSlider();
  }
});

(async function init() {
  loadPromptMeta();
  const introPromise = runIntroLoader();
  await loadPromptLibrary();
  const restoredCount = restoreMissingFallbackPrompts();
  await checkPromptTyperBridge();
  if (restoredCount > 0) {
    try {
      await savePromptLibrary();
    } catch (_error) {
      // Keep UI usable even if local bridge save is unavailable.
    }
  }
  updateSearchUi();
  renderAll();
  await introPromise;
  if (window.location.hash === "#admin") {
    showAdminView();
  }
})();
