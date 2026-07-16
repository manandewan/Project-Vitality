// Data Structure for Campus Wellness Initiatives
const ideasData = [
  {
    id: 1.1,
    title: "1.1: Digital Canteen Guide",
    quadrant: "q3",
    vertical: "Awareness",
    impact: "Medium",
    feasibility: "High",
    biomarkers: "Blood Pressure, Blood Glucose, Insulin Sensitivity (via nutrient awareness).",
    ops: "A mobile-friendly, student-governed guide hosted on Instagram/WhatsApp Link-in-Bio. Highlights positive options ('Nutritious Picks') and estimates macro values (sugar, salt, fat) based on recipe composition reference guides.",
    tweak: "Uses positive-selection framing ('Nutritious Picks') to avoid vendor pushback. Prominently features an estimations disclaimer."
  },
  {
    id: 1.2,
    title: "1.2: Mythbusters Infographics",
    quadrant: "q3",
    vertical: "Awareness",
    impact: "Low-Medium",
    feasibility: "High",
    biomarkers: "Stress Cortisol, Fasting Glucose (via debunking sleep & dietary myths).",
    ops: "Weekly digital carousels (Hook -> Science -> Local Swap -> Action Tip) posted on student-run social handles using high-contrast Canva layouts.",
    tweak: "Slide template includes a standardized medical advice disclaimer footnote to protect student volunteers from medical liability."
  },
  {
    id: 1.3,
    title: "1.3: Vitality Micro-Broadcasts",
    quadrant: "q4",
    vertical: "Awareness",
    impact: "Low-Medium",
    feasibility: "Medium-Low",
    biomarkers: "Morning Cortisol, Sleep Latency, Heart Rate Variability.",
    ops: "15-minute Instagram Live or Zoom Q&As featuring medical and fitness experts answering pre-submitted student questions.",
    tweak: "Shifted from physical auditoriums to virtual micro-broadcasts to bypass venue friction and low attendance. Host reads a standard liability statement."
  },
  {
    id: 1.4,
    title: "1.4: Dorm Room Hacks Video Series",
    quadrant: "q3",
    vertical: "Awareness",
    impact: "Low-Medium",
    feasibility: "High",
    biomarkers: "Physical Strain, Waking Cortisol (via ergonomic and sleep adjustments).",
    ops: "Humorous short-form Reels (under 60s) showing students low-cost circadian and structural dorm hacks, shot on mobile phones.",
    tweak: "A Creative Guidelines checklist prevents publishing hacks that pose physical, fire, electrical, or food safety hazards."
  },
  {
    id: 1.5,
    title: "1.5: Nutrition Decoder Carousel",
    quadrant: "q3",
    vertical: "Awareness",
    impact: "Medium",
    feasibility: "High",
    biomarkers: "Fasting Blood Glucose, Glycemic and Insulin Stability.",
    ops: "Visual social media carousels dissecting popular vending products, translating sugar/sodium grams to physical teaspoon equivalents.",
    tweak: "Fully digital to avoid vending machine sticker conflicts with vendors. Relies on factual packaging labels to prevent defamation."
  },
  {
    id: 1.6,
    title: "1.6: Seminars with Industry Experts",
    quadrant: "q4",
    vertical: "Awareness",
    impact: "Low-Medium",
    feasibility: "Medium-Low",
    biomarkers: "Biomarker alignment, Health literacy factors.",
    ops: "On-campus physical seminars and workshops partnering with medical college PG students or alumni activists who speak on a voluntary, zero-fee basis.",
    tweak: "Scheduled during existing department lecture slots to guarantee attendance. A moderator reads a standard medical disclaimer."
  },
  {
    id: 2.1,
    title: "2.1: Canteen Condition Analysis & Zero-Cost Upgrades",
    quadrant: "q2",
    vertical: "Impact",
    impact: "High",
    feasibility: "Medium",
    biomarkers: "Hypertension (via sodium reduction), Insulin sensitivity, general micronutrient absorption.",
    ops: "Audit current canteen prep/ingredient environments and propose small zero-cost upgrades (removing salt shakers, sprout options) backed by student petition signatures.",
    tweak: "Framed as a collaborative optimization project to help canteen contractors increase customer footfall and goodwill rather than a hostile audit. Proposals use general research databases to avoid targeted defamation."
  },
  {
    id: 2.2,
    title: "2.2: On-Campus Biomarker Health Camp",
    quadrant: "q2",
    vertical: "Impact",
    impact: "High",
    feasibility: "Medium",
    biomarkers: "Vitamin D3, Vitamin B12, Iron/Hemoglobin, Lipids, HbA1c.",
    ops: "Partner with an external clinical diagnostic laboratory (e.g. Tata 1mg, Lal PathLabs) to host a temporary blood collection desk on campus, offering student discounts.",
    tweak: "Camp is operated 100% by partner lab's professional clinical staff. Payments, consents, and reports are handled directly via lab's secure portal; student organizers handle only logistics and never touch clinical data, ensuring DPDP compliance."
  },
  {
    id: 2.3,
    title: "2.3: VenkyWalks Step Leagues",
    quadrant: "q2",
    vertical: "Impact",
    impact: "High",
    feasibility: "Medium",
    biomarkers: "Insulin Sensitivity, Heart Rate Variability, Cardiovascular Output.",
    ops: "Competitive department-level step count leagues during winter, tracking steps via mobile screen-logs and rewarding with sponsored coupons.",
    tweak: "AQI Safety Protocol: Suspends outdoor tracking if PM2.5 AQI exceeds 250, shifting walk requirements indoors to prevent respiratory hazards."
  },
  {
    id: 2.4,
    title: "2.4: Impromptu Physical Challenges",
    quadrant: "q1",
    vertical: "Impact",
    impact: "High",
    feasibility: "High",
    biomarkers: "Muscular Recruitment, Fasting Blood Glucose, Adrenaline and Dopamine.",
    ops: "Set up spontaneous push-up, pull-up, plank, or squat spots in high-traffic campus areas during lunch breaks, validating results live on site.",
    tweak: "Requires a quick safety check to screen out pre-existing joint or cardiac concerns. Activity is suspended if outdoor heat exceeds 38°C or AQI exceeds 250."
  },
  {
    id: 3.1,
    title: "3.1: Annual Campus Health Census",
    quadrant: "q3",
    vertical: "Research",
    impact: "Low-Medium",
    feasibility: "High",
    biomarkers: "Stress and fatigue trends, sleep latency (observational markers).",
    ops: "A yearly digital questionnaire mapping student fatigue, sleep latency, PG diets, and stress levels to build a local academic data base.",
    tweak: "Census form is 100% anonymous. Cafe coupon raffle is split into a separate, disconnected form to protect student health data privacy."
  },
  {
    id: 3.2,
    title: "3.2: PG & Outstation Diet Diaries",
    quadrant: "q4",
    vertical: "Research",
    impact: "Low-Medium",
    feasibility: "Medium-Low",
    biomarkers: "PG dietary nutrient gaps, caloric density.",
    ops: "Track structural nutrient gaps in outstation student residences using self-guided digital diet diaries in targeted PG areas.",
    tweak: "Removes exact address logging. Focuses strictly on broad regional PG clusters (e.g. Satya Niketan PGs) to maintain privacy."
  },
  {
    id: 3.3,
    title: "3.3: Reference-Based Food Estimation",
    quadrant: "q3",
    vertical: "Research",
    impact: "Medium",
    feasibility: "High",
    biomarkers: "Estimated sodium and trans fat hypertension factors.",
    ops: "Calculate estimated sodium and macro profiles of common canteen recipes by mapping ingredients to standard databases (IFCT/USDA).",
    tweak: "Uses standard IFCT/USDA nutrition databases for estimation. Presents generic item profiles rather than singling out specific vendors."
  }
];

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const grid = document.getElementById("initiatives-grid");
  const detailContainer = document.getElementById("idea-detail");

  // Render function — filter by vertical name or show all
  function renderIdeas(filter = "all") {
    grid.innerHTML = "";

    const filtered = filter === "all"
      ? ideasData
      : ideasData.filter(idea => idea.vertical === filter);

    filtered.forEach(idea => {
      let verticalClass = "";
      let badgeClass = "";
      if (idea.vertical === "Awareness") { verticalClass = "vertical-awareness"; badgeClass = "badge-awareness"; }
      else if (idea.vertical === "Impact") { verticalClass = "vertical-impact"; badgeClass = "badge-impact"; }
      else if (idea.vertical === "Research") { verticalClass = "vertical-research"; badgeClass = "badge-research"; }

      const card = document.createElement("div");
      card.className = `idea-card ${verticalClass}`;
      card.innerHTML = `
        <div class="idea-card-header">
          <span class="idea-title">${idea.title}</span>
          <span class="${badgeClass}">${idea.vertical}</span>
        </div>
        <p class="idea-summary">${idea.biomarkers.split(',')[0].trim()}</p>
      `;
      card.addEventListener("click", () => showDetails(idea));
      grid.appendChild(card);
    });
  }

  // Show detail panel
  function showDetails(idea) {
    let badgeClass = "badge-primary";
    if (idea.vertical === "Awareness") badgeClass = "badge-awareness";
    else if (idea.vertical === "Impact") badgeClass = "badge-impact";
    else if (idea.vertical === "Research") badgeClass = "badge-research";

    let accentColor = idea.vertical === "Awareness" ? "var(--accent-indigo)"
      : idea.vertical === "Impact" ? "#f59e0b"
      : "#14b8a6";

    detailContainer.style.display = "block";
    detailContainer.innerHTML = `
      <div class="idea-detail-header">
        <h3 style="color: ${accentColor}">${idea.title}</h3>
        <span class="${badgeClass}" style="padding: 0.35rem 0.75rem; font-size: 0.85rem; border-radius: 6px;">${idea.vertical}</span>
      </div>
      <div class="idea-detail-grid">
        <div>
          <div class="detail-block">
            <h4>Target Biomarkers</h4>
            <p>${idea.biomarkers}</p>
          </div>
          <div class="detail-block">
            <h4>How It Works</h4>
            <p>${idea.ops}</p>
          </div>
        </div>
        <div>
          <div class="detail-block">
            <h4>Design Considerations</h4>
            <p style="color: var(--text-muted);">${idea.tweak}</p>
          </div>
        </div>
      </div>
    `;
    detailContainer.scrollIntoView({ behavior: "smooth" });
  }

  // Tab filters
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderIdeas(tab.getAttribute("data-filter"));
      detailContainer.style.display = "none";
    });
  });

  // Initial render
  renderIdeas("all");

  // Hamburger nav toggle
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.textContent = isOpen ? "✕" : "☰";
    });
    // Close nav when a link is tapped on mobile
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        navToggle.textContent = "☰";
      });
    });
  }
});


