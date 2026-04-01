const promptData = [
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
          "https://picsum.photos/seed/appA/520/900",
          "https://picsum.photos/seed/appB/520/900",
          "https://picsum.photos/seed/appC/520/900",
          "https://picsum.photos/seed/appD/520/900",
          "https://picsum.photos/seed/appE/520/900"
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
          "https://picsum.photos/seed/writeA/520/900",
          "https://picsum.photos/seed/writeB/520/900",
          "https://picsum.photos/seed/writeC/520/900",
          "https://picsum.photos/seed/writeD/520/900",
          "https://picsum.photos/seed/writeE/520/900"
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

Show how values change step-by-step.

4) Fourth Section - Logic Breakdown
- Why the loop runs that many times
- Why condition becomes true/false
- How data is flowing
- What pattern can be recognized

5) Fifth Section - Visual Thinking
- Explain flow like:
  Start -> Loop -> Check -> Update -> Repeat -> End
- Show simple arrow flow

6) Sixth Section - Common Mistakes
- What beginners usually misunderstand
- Edge cases (if applicable)

7) Response Rules
- Avoid big paragraphs
- Keep it structured
- Use symbols and spacing
- Do NOT directly rewrite optimized version unless asked
- Focus on understanding, not improvement

-----------------------------------------------------

Now analyze this code:

[                                             ]`,
        images: [
          "https://picsum.photos/seed/codeA/520/900",
          "https://picsum.photos/seed/codeB/520/900",
          "https://picsum.photos/seed/codeC/520/900",
          "https://picsum.photos/seed/codeD/520/900",
          "https://picsum.photos/seed/codeE/520/900"
        ]
      },
      {
        id: "expert-learning-roadmap",
        title: "Expert Learning Roadmap Prompt",
        category: "Learning Mastery",
        tagline: "Use this prompt to generate safe, structured, beginner-friendly mastery roadmaps.",
        prompt: `You are an Expert Learning Strategist and Responsible Mentor.

The user will provide only a topic name.

Your task is to create a SAFE, STRUCTURED, and BEGINNER-FRIENDLY roadmap for mastering that topic.

Follow these strict rules:

1) Start with:
   - Clear and simple definition of the topic
   - What it actually means
   - Common misconceptions
   - Ethical / legal considerations if applicable

2) Then explain:
   - Why this topic exists
   - What real-world problems it solves
   - Where it is used in real life

3) Provide a structured roadmap divided into levels:

Level 1 - Foundations
Level 2 - Core Skills
Level 3 - Intermediate Application
Level 4 - Advanced Mastery

For each level include:
   - What to learn
   - Why it matters
   - Example real-world situations
   - Mini practical exercises (safe & ethical only)

4) Add:
   - Required mindset
   - Common beginner mistakes
   - Safe learning resources types (no illegal guidance)

5) Response Style Rules:
   - Avoid large paragraphs
   - Use bullet points
   - Use symbols for clarity
   - Keep explanations short but meaningful
   - No dangerous instructions
   - No illegal operational details

6) End with:
   - 30-day action starter plan
   - Skill validation checklist

-----------------------------------------------------

Topic:
[                                     ]`,
        images: [
          "WhatsApp Image 2026-02-26 at 10.03.23 AM.jpeg",
          "WhatsApp Image 2026-02-26 at 10.03.23 AM (1).jpeg",
          "WhatsApp Image 2026-02-26 at 10.03.23 AM (2).jpeg",
          "WhatsApp Image 2026-02-26 at 10.03.24 AM.jpeg",
          "WhatsApp Image 2026-02-26 at 10.03.24 AM (1).jpeg",
          "WhatsApp Image 2026-02-26 at 10.03.24 AM (2).jpeg",
          "WhatsApp Image 2026-02-26 at 10.03.25 AM.jpeg"
        ]
      },
      {
        id: "cinematic-song-lyrics-generator",
        title: "Cinematic Song Lyrics Prompt",
        category: "Content Writing",
        tagline: "Use this prompt to generate emotionally powerful original lyrics with structured options.",
        prompt: `Create original, emotionally powerful song lyrics with cinematic depth, strong meaning, and natural musical rhythm.

Follow proper structure:
Verse 1
Pre-Chorus (if needed)
Chorus (Catchy Hook - Repeatable)
Verse 2
Bridge (Emotional twist)
Final Chorus (Stronger ending)

Maintain lyrical flow, balanced syllables, vivid imagery, and emotional progression. Avoid cliches. Keep it original.

------------------------------------------------------

SELECT OPTIONS USING LETTERS ONLY:

MOOD:
A - Romantic
B - Sad
C - Motivational
D - Dark
E - Happy
F - Nostalgic
G - Devotional
H - Energetic
I - Calm

THEME:
A - Love
B - Breakup
C - Self Growth
D - Friendship
E - Struggle
F - Success
G - Life Philosophy
H - Social Message

TEMPO / MUSIC STYLE:
A - Slow Melody
B - Acoustic Soft
C - Rap
D - Trap
E - Mass Commercial Beat
F - EDM
G - Piano Ballad
H - Folk
I - Classical Fusion

PERSPECTIVE:
A - First Person (I)
B - Second Person (You)
C - Third Person Storytelling

IMAGERY STYLE:
A - Rain
B - Fire
C - Sky
D - Night City Lights
E - Nature (Mountains, Rivers)
F - Village Rural
G - Abstract Poetic

EMOTIONAL ENDING:
A - Hopeful
B - Tragic
C - Powerful
D - Bittersweet
E - Open Ending
F - Redemption

------------------------------------------------------

Now type your selections like this example:

Mood: A
Theme: B
Tempo: G
Perspective: A
Imagery: A
Ending: D

Main Situation:
[ Briefly describe what is happening in the song moment ]`,
        images: [
          "https://picsum.photos/seed/songA/520/900",
          "https://picsum.photos/seed/songB/520/900",
          "https://picsum.photos/seed/songC/520/900",
          "https://picsum.photos/seed/songD/520/900",
          "https://picsum.photos/seed/songE/520/900"
        ]
      },
      {
        id: "concept-identification-only-1",
        title: "Concept Identification Only",
        category: "Concept Logic",
        tagline: "Use this prompt to identify only the correct concept category without solving the question.",
        prompt: `Concept Identification Only

Prompt:

This is the question. Below is my concept list.

From this list, tell me exactly which concept or logic I should use for this question.
Do not solve it.
Only identify the correct indexing logic category.

Concept List:

Programming / Algorithms:

Array indexing (0-based / 1-based)

Loop index logic

Conditional logic on index

Index mapping

Index offset logic

Index-based iteration vs value-based iteration

Index bounds checking

Index-based searching

Index-based sorting

Index slicing / subarray logic

Data Structures:

Positional access

Index-based updates

Index-based deletion/insertion

Index heaps

Databases:

Index lookup logic

Index scan vs full scan

Index-based joins

Hardware:

Indexed multiplexers

Address-indexed memory logic`,
        images: [
          "https://picsum.photos/seed/solveA/520/900",
          "https://picsum.photos/seed/solveB/520/900",
          "https://picsum.photos/seed/solveC/520/900",
          "https://picsum.photos/seed/solveD/520/900",
          "https://picsum.photos/seed/solveE/520/900"
        ]
      },
      {
        id: "deep-structured-topic-mastery",
        title: "Deep Structured Topic Mastery",
        category: "Learning Mastery",
        tagline: "Use this prompt to learn any topic deeply from beginner to advanced in a structured path.",
        prompt: `Deep Structured Topic Mastery

Prompt:

I want to deeply learn and master this topic from absolute beginner to advanced level.

Teach me in a highly structured and complete way.

Follow this structure strictly:

Explain what this topic is in the simplest way.

Explain why this topic exists and why it is important.

Explain where and how it is used in the real world.

List all foundational concepts I must understand first.

Teach those foundations step by step.

Move to intermediate concepts in logical order.

Move to advanced concepts in depth.

Explain connections between all concepts (big picture).

Give real-world examples wherever possible.

After each major section, give small practice tasks.

At the end, give one practical project idea.

List common beginner mistakes and how to avoid them.

Suggest how to revise and retain long-term.

Teaching rules:

Assume I am a complete beginner

Do not skip fundamentals

Teach step by step

Break complex ideas into smaller parts

Use simple explanations first, then deepen gradually

Explain reasoning clearly if problem-solving is involved

Build conceptual understanding before moving forward

Focus on clarity, not speed

Finally, give me a roadmap of what to learn next after mastering this topic.`,
        images: [
          "https://picsum.photos/seed/examA/520/900",
          "https://picsum.photos/seed/examB/520/900",
          "https://picsum.photos/seed/examC/520/900",
          "https://picsum.photos/seed/examD/520/900",
          "https://picsum.photos/seed/examE/520/900"
        ]
      },
      {
        id: "concept-identification-only-2",
        title: "Concept Identification Only (Variant)",
        category: "Concept Logic",
        tagline: "Use this prompt when you only need concept selection and not full solution steps.",
        prompt: `Concept Identification Only

Prompt:

This is the question. Below is my concept list.

From this list, tell me exactly which concept or logic I should use for this question.
Do not solve it.
Only identify the correct indexing logic category.

Concept List:

Programming / Algorithms:

Array indexing (0-based / 1-based)

Loop index logic

Conditional logic on index

Index mapping

Index offset logic

Index-based iteration vs value-based iteration

Index bounds checking

Index-based searching

Index-based sorting

Index slicing / subarray logic

Data Structures:

Positional access

Index-based updates

Index-based deletion/insertion

Index heaps

Databases:

Index lookup logic

Index scan vs full scan

Index-based joins

Hardware:

Indexed multiplexers

Address-indexed memory logic`,
        images: [
          "https://picsum.photos/seed/filmA/520/900",
          "https://picsum.photos/seed/filmB/520/900",
          "https://picsum.photos/seed/filmC/520/900",
          "https://picsum.photos/seed/filmD/520/900",
          "https://picsum.photos/seed/filmE/520/900"
        ]
      }
    ];

    const preferredCategoryOrder = [
      "Education",
      "Filmmaking",
      "Problem Solving",
      "Code Learning",
      "App Development",
      "Content Writing",
      "Concept Logic",
      "Learning Mastery"
    ];
    const categorySet = new Set(promptData.map((item) => item.category));
    const categories = preferredCategoryOrder.filter((label) => categorySet.has(label));

    const categoriesEl = document.getElementById("categories");
    const categoriesTitleEl = document.getElementById("categoriesTitle");
    const heroSectionEl = document.getElementById("heroSection");
    const promptGridEl = document.getElementById("promptGrid");
    const promptsPanelEl = document.getElementById("promptsPanel");
    const detailViewEl = document.getElementById("detailView");
    const imagePromptsViewEl = document.getElementById("imagePromptsView");
    const imagePromptGridEl = document.getElementById("imagePromptGrid");
    const imageBackBtn = document.getElementById("imageBackBtn");
    const detailTitleEl = document.getElementById("detailTitle");
    const detailTaglineEl = document.getElementById("detailTagline");
    const detailPromptTextEl = document.getElementById("detailPromptText");
    const screenshotsRowEl = document.getElementById("screenshotsRow");
    const copyBtn = document.getElementById("copyBtn");
    const backBtn = document.getElementById("backBtn");
    const heroTrackEl = document.getElementById("heroTrack");

    let selectedCategory = "All";
    let sliderImagePrompts = [];

    function renderCategories() {
      categoriesEl.innerHTML = "";

      const allBtn = createCategoryButton("All");
      categoriesEl.appendChild(allBtn);

      categories.forEach((category) => {
        const btn = createCategoryButton(category);
        categoriesEl.appendChild(btn);
      });
    }

    function createCategoryButton(label) {
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

      return button;
    }

    function renderPromptList() {
      promptGridEl.innerHTML = "";

      const visiblePrompts = selectedCategory === "All"
        ? promptData
        : promptData.filter((item) => item.category === selectedCategory);

      visiblePrompts.forEach((item) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "prompt-card";
        card.textContent = item.title;

        card.addEventListener("click", () => {
          showPromptDetails(item.id);
        });

        promptGridEl.appendChild(card);
      });
    }

    function showPromptDetails(promptId) {
      const item = promptData.find((entry) => entry.id === promptId);
      if (!item) return;

      detailTitleEl.textContent = item.title;
      detailTaglineEl.textContent = item.tagline;
      detailPromptTextEl.textContent = item.prompt;

      screenshotsRowEl.innerHTML = "";
      item.images.slice(0, 5).forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `${item.title} sample screenshot ${index + 1}`;
        screenshotsRowEl.appendChild(img);
      });

      copyBtn.setAttribute("data-copy-text", item.prompt);
      showDetailView();
    }

    function showDetailView() {
      imagePromptsViewEl.classList.add("hidden");
      promptsPanelEl.classList.add("hidden");
      detailViewEl.classList.remove("hidden");
    }

    function showListView() {
      heroSectionEl.classList.remove("hidden");
      categoriesTitleEl.classList.remove("hidden");
      categoriesEl.classList.remove("hidden");
      imagePromptsViewEl.classList.add("hidden");
      detailViewEl.classList.add("hidden");
      promptsPanelEl.classList.remove("hidden");
    }

    function showImagePromptView(imageKey) {
      heroSectionEl.classList.add("hidden");
      categoriesTitleEl.classList.add("hidden");
      categoriesEl.classList.add("hidden");
      promptsPanelEl.classList.add("hidden");
      detailViewEl.classList.add("hidden");
      imagePromptsViewEl.classList.remove("hidden");

      if (imageKey) {
        const card = imagePromptGridEl.querySelector(`[data-image-key="${imageKey}"]`);
        if (card) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
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

        const button = document.createElement("button");
        button.className = "action-btn";
        button.type = "button";
        button.textContent = "Copy Prompt";
        button.setAttribute("data-copy-image-prompt", item.prompt);

        card.appendChild(img);
        card.appendChild(text);
        card.appendChild(button);
        imagePromptGridEl.appendChild(card);
      });
    }

    copyBtn.addEventListener("click", () => {
      const text = copyBtn.getAttribute("data-copy-text") || "";
      navigator.clipboard.writeText(text).then(() => {
        const oldText = copyBtn.textContent;
        copyBtn.textContent = "Copied";
        setTimeout(() => {
          copyBtn.textContent = oldText;
        }, 1400);
      }).catch(() => {
        copyBtn.textContent = "Copy Failed";
        setTimeout(() => {
          copyBtn.textContent = "Copy Prompt";
        }, 1400);
      });
    });

    backBtn.addEventListener("click", showListView);
    imageBackBtn.addEventListener("click", showListView);

    imagePromptGridEl.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-copy-image-prompt]");
      if (!button) return;

      const text = button.getAttribute("data-copy-image-prompt") || "";
      navigator.clipboard.writeText(text).then(() => {
        const oldText = button.textContent;
        button.textContent = "Copied";
        setTimeout(() => {
          button.textContent = oldText;
        }, 1200);
      }).catch(() => {
        button.textContent = "Copy Failed";
        setTimeout(() => {
          button.textContent = "Copy Prompt";
        }, 1200);
      });
    });

    function setupHeroSlider() {
      const baseSlides = Array.from(heroTrackEl.querySelectorAll("img"));
      if (baseSlides.length < 2) return;

      const imagePromptTexts = [
        "Transform the uploaded image into a detailed pencil sketch artwork. The person in the uploaded photo should appear as a realistic hand-drawn portrait on a large canvas. Show an artist sitting in a traditional art studio, carefully sketching that same person's portrait on the canvas. Use soft graphite shading, visible pencil strokes, cross-hatching details, and a classic artistic mood. The studio background should include an easel, drawing tools, soft window light, and an authentic creative atmosphere. Keep the facial features accurate to the uploaded image while converting everything into a realistic pencil sketch style.",
        "Create a hyper-realistic cinematic film still with a strong emotional core and immersive storytelling atmosphere. Use professional cinema camera aesthetics with 2.39:1 anamorphic widescreen aspect ratio, 24fps film look, natural motion blur, realistic depth of field, and organic film grain texture. Lighting should be physically accurate and dramatic - motivated lighting only (practical sources like lamps, street lights, windows, fire, neon, moonlight). Use soft shadows, controlled highlights, balanced exposure, and natural skin tones. No overexposed highlights, no crushed blacks. Color grading should follow a professional cinema pipeline: high dynamic range, subtle contrast curve, soft highlight roll-off, rich blacks, filmic tonal separation, realistic color science. No oversaturation. No artificial HDR look. Lens characteristics: shallow depth of field where needed, cinematic bokeh, realistic lens compression, subtle lens breathing, no distortion unless motivated by scene. Atmosphere should feel immersive - natural haze, dust particles, light rays, volumetric lighting only if realistic to environment. Composition must feel intentional and story-driven: rule of thirds, layered foreground-midground-background depth, subject isolation, cinematic framing. The image should look like a frame from a high-budget feature film directed by an award-winning filmmaker. No artificial AI look. No plastic skin. No hyper-sharp digital artifacts. Pure cinematic realism. Scene Emotion & Situation: [                                                    ]",
        "Use the uploaded image as the main subject. Do NOT change the person's facial structure, identity, skin tone, or expression. Maintain complete realism and originality. Transform this image into a cinematic birthday celebration portrait with a professional photography look. Follow these enhancement guidelines: 1) Subject Enhancement: Natural skin tone correction (no plastic smoothing), subtle sharpness on eyes, soft cinematic contrast, preserve real facial details, no artificial AI face changes. 2) Background Upgrade: Replace or enhance background into a birthday celebration environment, elegant decorations (balloons, soft bokeh lights, subtle confetti), warm golden ambient lighting or stylish party lighting, depth of field effect (blurred background, sharp subject), keep it realistic and premium. 3) Lighting & Color: Cinematic color grading, balanced exposure, soft highlight glow, warm celebratory tones (gold, amber, soft pinks), professional DSLR-style dynamic range. 4) Text Addition: Add stylish typography: Happy Birthday [Name], elegant glowing text, soft drop shadow or neon-style subtle glow, text should blend naturally into scene, no cheap font look. 5) Atmosphere: Light confetti particles in air (subtle, not overcrowded), soft lens flare if natural, premium celebration mood, looks like taken by a professional photographer at a birthday event. 6) Output Style: High resolution, cinematic portrait, realistic lighting, no over-editing, no cartoon effect, no AI artifacts. The final image should look like an original high-end birthday photoshoot. Birthday Name to Display: [                                 ]",
        promptData[0]?.prompt || "",
        promptData[1]?.prompt || ""
      ];

      sliderImagePrompts = baseSlides.slice(0, 5).map((slide, index) => ({
        key: `hero-${index + 1}`,
        src: slide.src,
        alt: slide.alt,
        prompt: imagePromptTexts[index] || "Generate a practical prompt for this image.",
        promptPreview: (imagePromptTexts[index] || "Generate a practical prompt for this image.").replace(/\s+/g, " ").trim()
      }));
      renderImagePromptCards();

      // Build a circular track: [set A][set B][set C], start from set B.
      const buildSet = (suffix) =>
        sliderImagePrompts.map((slide) => {
          const img = document.createElement("img");
          img.src = slide.src;
          img.alt = `${slide.alt} ${suffix}`;
          img.setAttribute("data-image-key", slide.key);
          img.setAttribute("role", "button");
          img.setAttribute("tabindex", "0");
          return img;
        });

      heroTrackEl.innerHTML = "";
      [...buildSet("set-a"), ...buildSet("set-b"), ...buildSet("set-c")].forEach((img) => {
        heroTrackEl.appendChild(img);
      });

      const moveDuration = 850;
      const pauseDuration = 1000;
      const totalRealSlides = baseSlides.length;
      const middleSetStart = totalRealSlides;
      let slideDistance = 0;
      let currentIndex = middleSetStart;
      let timerId = null;
      let initialized = false;

      function calculateDistance() {
        const sampleSlide = heroTrackEl.children[middleSetStart];
        if (!sampleSlide) return;
        const gap = parseFloat(window.getComputedStyle(heroTrackEl).gap) || 0;
        slideDistance = sampleSlide.getBoundingClientRect().width + gap;
      }

      function applyPosition(withAnimation) {
        heroTrackEl.style.transition = withAnimation ? `transform ${moveDuration}ms ease` : "none";
        heroTrackEl.style.transform = `translateX(${-currentIndex * slideDistance}px)`;
      }

      function scheduleNext() {
        if (timerId) {
          window.clearTimeout(timerId);
        }
        if (slideDistance <= 0) return;
        timerId = window.setTimeout(() => {
          currentIndex += 1;
          applyPosition(true);
        }, pauseDuration);
      }

      heroTrackEl.addEventListener("transitionend", () => {
        // Jump back from set C to equivalent slide in set B with no visual break.
        if (currentIndex >= middleSetStart + totalRealSlides) {
          currentIndex -= totalRealSlides;
          applyPosition(false);
          void heroTrackEl.offsetWidth;
        }
        scheduleNext();
      });

      function initSliderPosition() {
        calculateDistance();
        if (slideDistance <= 0) return;
        applyPosition(false);
        if (!initialized) {
          initialized = true;
          scheduleNext();
        }
      }

      initSliderPosition();
      window.addEventListener("load", initSliderPosition);

      window.addEventListener("resize", () => {
        if (timerId) {
          window.clearTimeout(timerId);
          timerId = null;
        }
        calculateDistance();
        if (slideDistance <= 0) return;
        if (currentIndex < middleSetStart || currentIndex >= middleSetStart + totalRealSlides) {
          currentIndex = middleSetStart;
        }
        applyPosition(false);
        scheduleNext();
      });

      heroTrackEl.addEventListener("click", (event) => {
        const clickedImage = event.target.closest("img[data-image-key]");
        if (!clickedImage) return;
        const key = clickedImage.getAttribute("data-image-key");
        showImagePromptView(key);
      });

      heroTrackEl.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        const focusedImage = event.target.closest("img[data-image-key]");
        if (!focusedImage) return;
        event.preventDefault();
        const key = focusedImage.getAttribute("data-image-key");
        showImagePromptView(key);
      });
    }

    renderCategories();
    renderPromptList();
    setupHeroSlider();
