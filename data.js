// ============================================================
// KAS PRELIMS 2026 — MASTER DATA
// Consolidated from Part A (Syllabus/NCERT/Citations) and
// Part B (PYQ Pattern Analysis) decks + original strategy PDF.
// ============================================================

const MASTER_DATA = {

  meta: {
    examDate: "2026-11-15",
    title: "KAS Prelims 2026",
    subtitle: "Complete Study Companion",
    preparedFor: "Chirag K S"
  },

  // ---------------- PATTERN FACTS ----------------
  pattern: {
    papers: [
      { name: "Paper I", questions: 100, marks: 200, sections: "Current Events (40) + Humanities: History, Geography, Polity, Economy (60)" },
      { name: "Paper II", questions: 100, marks: 200, sections: "Karnataka State GS (40) + Science/Tech/Environment (30) + Mental Ability (30)" }
    ],
    facts: [
      "400 total marks, 200 questions, 2 hours per paper",
      "−0.25 negative marking for each wrong answer; 0 penalty for unattempted",
      "Prelims marks are NOT added to final merit — purely qualifying, 1:15 ratio advances to Mains",
      "General Mental Ability capped at SSLC (Class 10) difficulty; everything else at degree level",
      "Question paper set in both Kannada and English"
    ]
  },

  // ---------------- PYQ FORMAT TYPES ----------------
  questionTypes: [
    { id: 1, name: "Straight MCQ", desc: "Single best answer, no sub-statements.", example: "Which of the following is the highest peak in Karnataka?" },
    { id: 2, name: "Statement correctness", desc: "3-4 lettered statements (a)(b)(c)(d); pick which combination is correct.", example: "Which of the following statements are correct with reference to X? (1) a,b,c (2) b,c,d ..." },
    { id: 3, name: "Statement correctness w/ count", desc: "Same as above, but options are \"Only 1/2/3/4 statements are correct\" — you must count, not just identify.", example: "How many of the above statements are correct? (1) Only one (2) Only two ..." },
    { id: 4, name: "Match the following", desc: "Two lists (List-I / List-II); match items, choose the correct combination code.", example: "Match List-I (Schemes) with List-II (Ministries)." },
    { id: 5, name: "Assertion-Reason", desc: "Assertion (A) + Reason (R); judge truth of each AND whether R explains A.", example: "Both A and R are true and R is the correct explanation of A." },
    { id: 6, name: "Arrange in sequence", desc: "Put items in chronological/ascending/descending order; choose the matching code.", example: "Arrange the following events in chronological order." },
    { id: 7, name: "Logical reasoning (GMA only)", desc: "Blood relations, coding, syllogism, seating arrangement, direction sense, series.", example: "If A is C's mother and D is B's son..." },
    { id: 8, name: "Quantitative (GMA only)", desc: "Percentages, probability, averages, profit-loss, time-work, basic algebra.", example: "A number reduced by 25% becomes 225..." },
    { id: 9, name: "Reading comprehension (GMA only)", desc: "One passage, 3-7 questions in a row testing inference/vocabulary/main idea.", example: "According to the passage, the author believes..." }
  ],

  // ---------------- FORMAT TREND (chart data) ----------------
  formatTrend: {
    labels: ["2020 Paper I", "2024 (Dec) Paper I"],
    series: [
      { name: "Straight MCQ", data: [80, 24], color: "#7A8296" },
      { name: "Statement-correctness (incl. count)", data: [17, 66], color: "#16233F" },
      { name: "Match the following", data: [2, 7], color: "#C9812F" }
    ]
  },

  // ---------------- TOPIC WEIGHTAGE (chart data) ----------------
  topicWeightage: {
    labels: ["Geography", "Economy", "History", "Polity", "CA-International", "CA-National", "Env & Ecology", "Sci & Tech", "CA-Karnataka"],
    series: [
      { name: "2020 (Aug) Paper I", data: [18, 17, 17, 14, 13, 13, 6, 1, 1], color: "#7A8296" },
      { name: "2024 (Dec) Paper I", data: [16, 17, 16, 14, 15, 12, 2, 6, 2], color: "#16233F" }
    ]
  },

  // ---------------- WHERE FORMATS APPEAR ----------------
  paperCharacter: {
    paperI: [
      "Statement-correctness (plain + count-based) dominates — confirmed 66% in the most recent (Dec 2024) paper",
      "Straight MCQ still present but now a minority format",
      "Match-the-following and Assertion-Reason appear as a small but consistent minority (7-9 combined)",
      "ZERO General Mental Ability questions — confirmed across all 4 papers analyzed"
    ],
    paperII: [
      "First ~40 questions: Karnataka-specific current affairs, heavy statement-correctness format, very scheme/policy-detail focused",
      "Next block: Science, Tech, Environment — mixes straight MCQ with statement-correctness; Assertion-Reason appears here specifically (not in Paper I)",
      "GMA is a solid CONTIGUOUS block (not scattered) — confirmed in both 2020 and Aug 2024 papers, roughly the last 25-30 questions",
      "GMA block order is consistent: Reasoning → Numeracy → Comprehension (passage-based, always last)"
    ]
  },

  // ---------------- RECURRING HIGH-VALUE TOPICS ----------------
  recurringTopics: [
    { subject: "History", items: [
      "Karnataka freedom movement (Rani Chennamma's commander, Dandi March participants, KPCC Flag Satyagraha, Salt Satyagraha/Vidurashwatha/Isuru)",
      "Hoysala & Vijayanagara architecture / Karnataka dynasties",
      "Ancient South Indian administration: Satavahana town bodies, Chola landholder associations"
    ]},
    { subject: "Polity", items: [
      "Specific numbered Articles: 164, 12, 355, 270/271 (cess-surcharge), 21A",
      "Pardoning power / Pocket Veto (Indian vs US comparison)",
      "Committees & commissions matched to chairmen"
    ]},
    { subject: "Geography", items: [
      "Karst topography & wind-erosion landforms (near-identical style across years)",
      "Drainage patterns (dendritic, radial, pinnate, trellis)",
      "Ozone layer / atmospheric layers"
    ]},
    { subject: "Economy", items: [
      "RBI monetary tools: Repo, CRR, Reverse Repo, LAF, OMO",
      "Finance Commission & GST Council constitutional basis",
      "Fiscal/revenue/primary deficit distinctions"
    ]},
    { subject: "Current Affairs", items: [
      "Geopolitical alliances/groupings as a CATEGORY (BRICS, Chip4, Djibouti Code) — the specific event changes yearly but this question-category is a fixture",
      "UNESCO World Heritage additions (India/Karnataka)",
      "Ramsar wetland additions"
    ]}
  ],

  // ---------------- GMA SEQUENCE ----------------
  gmaSequence: [
    { q: "Q10", topic: "Blood relations", type: "Reasoning" },
    { q: "Q11", topic: "Symbolic operations (redefined math symbols)", type: "Numeracy" },
    { q: "Q12", topic: "Percentage", type: "Numeracy" },
    { q: "Q13", topic: "Averages", type: "Numeracy" },
    { q: "Q14", topic: "Probability", type: "Numeracy" },
    { q: "Q15", topic: "Combinations", type: "Numeracy" },
    { q: "Q16", topic: "Probability", type: "Numeracy" },
    { q: "Q17", topic: "Probability", type: "Numeracy" },
    { q: "Q18", topic: "Linear equations (heads & feet)", type: "Numeracy" },
    { q: "Q19", topic: "Syllogism", type: "Reasoning" },
    { q: "Q20", topic: "Seating arrangement", type: "Reasoning" },
    { q: "Q21-23", topic: "Passage 1 (3 questions)", type: "Comprehension" },
    { q: "Q24-27", topic: "Passage 2 (4 questions)", type: "Comprehension" }
  ],

  // ---------------- KARNATAKA STATE GS EXAMPLES ----------------
  karnatakaGS: [
    { cat: "Scheme eligibility specifics", ex: "Yuva Nidhi eligibility criteria, Pourakarmika Gruha Bhagya Yojana construction limits, Sandhya Suraksha age/income limits" },
    { cat: "Budget line-items", ex: "Food parks announced at specific airports, road network km targets under Pragati Path, healthcare budget allocation" },
    { cat: "Named institutions & their mandates", ex: "KKRDB jurisdiction & chairperson rules, Karnataka Agricultural Prices Commission, KEONICS activities" },
    { cat: "Recent policy documents by exact name", ex: "Startup Policy 2022-27 pillars, AVGC-XR Policy 2024-2029, Data Centre Policy 2022-27, Karnataka Stamp (Amendment) Act 2023" },
    { cat: "Karnataka-specific firsts/awards", ex: "First Kambala at Bengaluru Palace, Padma Award recipients from Karnataka, Blue Flag beaches (Kasarkod, Padubidri)" }
  ],

  // ---------------- CURRENT AFFAIRS TRACKING CATEGORIES ----------------
  currentAffairsCategories: [
    "National politics & governance — policy, bills, judgments, appointments",
    "International relations — bilateral visits, treaties, diplomatic shifts",
    "Summits & conferences — venue, host, theme, outcomes, India's role",
    "Awards & honours — Nobel, Bharat Ratna/Padma, sporting/literary awards",
    "Defence — inductions, exercises, DRDO tests, leadership appointments",
    "Economy in the news — RBI policy, Budget, financial-sector reforms",
    "Sports — major tournament winners, records",
    "Science & tech in the news — launches, tech policy"
  ],

  // ---------------- CONFIRMED CURRENT EVENTS ANCHORS (2026 cycle) ----------------
  currentAffairsAnchors: [
    "BRICS Summit 2026 — India hosted the 18th BRICS Summit in New Delhi (12–13 Sept 2026); India's 4th BRICS chairship (previously 2012, 2016, 2021)",
    "Raisina Middle East Conference (Jan 2026, Abu Dhabi) — India-Middle East cooperation, IMEC corridor, AI governance",
    "80th Independence Day (Aug 2026) — theme \"Yuva Shakti: Leading the journey to Viksit Bharat @2047\"; 150 years of Vande Mataram",
    "23rd Commonwealth Games 2026 — India finished 4th overall",
    "Arunachal Pradesh's first Ramsar Site designated (2026)",
    "Defence leadership: General Dhiraj Seth as 31st Army Chief (\"VIJAY\" vision); Air Marshal Ashutosh Dixit as Vice Chief of Air Staff",
    "Defence hardware: INS Mahendragiri, INS Malvan commissioned; DRDO Pinaka Long Range Guided Rocket flight-test",
    "FIFA World Cup 2026 and ICC T20 Women's World Cup 2026 held",
    "India AI Impact Expo 2026 unveiled by PM Modi (Feb 2026)"
  ],

  // ---------------- WIKIPEDIA CITATION EXAMPLES ----------------
  wikiExamples: [
    { topic: "BRICS", focus: "\"Member states\" (current members + accession years) and \"Summits\" table (host/year, last 3). Skip founding history beyond 1 line." },
    { topic: "A Constitutional Amendment (e.g. 73rd)", focus: "The infobox (date, purpose) and \"Provisions\" section only. Skip \"Background\"/\"Debate\" narrative sections — rarely tested." },
    { topic: "A government scheme (e.g. PM-Kisan)", focus: "Infobox for launch date + ministry, and \"Eligibility\"/\"Benefits\" section for exact figures. Skip \"Criticism\"/\"Reception\" sections." },
    { topic: "A Bill in the news", focus: "Search \"[Bill name] India\" — read \"Provisions\" section for what it actually changes. Note current status (passed/pending) since this changes fast." },
    { topic: "A monument/UNESCO site (e.g. Hoysala temples)", focus: "\"Location\" and \"UNESCO inscription\" sections for exact dates/reasoning. Skip lengthy architectural-style descriptions unless the exam has tested that specific site before." }
  ],

  // ---------------- NCERT CLASS INDEX ----------------
  ncertIndex: [
    { cls: "6", coverage: "History: ancient India (Our Pasts I) · Geography: Earth basics (The Earth Our Habitat) · Civics: Social & Political Life I" },
    { cls: "7", coverage: "History: medieval India (Our Pasts II) · Geography: physical processes (Our Environment) · Civics: SPL II" },
    { cls: "8", coverage: "History: colonial/modern India (Our Pasts III) · Geography: resources (Resources & Development) · Civics: Indian Constitution (SPL III)" },
    { cls: "9", coverage: "History: world context (India & Contemporary World I) · Geography: India physical (Contemporary India I) · Economics basics · Civics: Democratic Politics I" },
    { cls: "10", coverage: "History: nationalism & INM (India & Contemporary World II) · Geography: resources/agri (Contemporary India II) · Economics: development · Civics: federalism, parties (Democratic Politics II)" },
    { cls: "11", coverage: "Geography: physical & Indian environment · Political Science: Constitution at Work · Economics: Indian Economic Development" },
    { cls: "12", coverage: "Political Science: world politics + post-independence India · History: themed volumes · Geography: human geography, India people & economy" }
  ],

  // ---------------- MAIN SYLLABUS TREE ----------------
  // Each section: paper, title, meta, weightageNote, topics[]
  // Each topic: name, tags[{label, kind}], desc
  syllabus: [
    {
      id: "p1-ca",
      paper: "Paper I",
      section: "Section A",
      title: "Current Events — National & International",
      meta: "40 questions, 80 marks",
      isCurrentAffairs: true,
      topics: []
    },
    {
      id: "p1-history-ancient",
      paper: "Paper I",
      section: "Section B · History",
      title: "Ancient India",
      meta: "Emphasis: social, economic, cultural, political aspects",
      topics: [
        { name: "Indus Valley Civilization", tags: [{l:"6",k:"ncert"}], desc: "Sites, town planning, seals, trade, decline. Wiki focus: \"Harappan society\" + \"Decline\" sections only." },
        { name: "Vedic Age", tags: [{l:"6",k:"ncert"}], desc: "Early vs Later Vedic, literature, varna origins, political organization." },
        { name: "Buddhism & Jainism", tags: [{l:"6",k:"ncert"}], desc: "Founders, teachings, councils, royal patronage. Wiki focus: \"Councils\" table for quick dates." },
        { name: "Mauryan Empire", tags: [{l:"6",k:"ncert"}], desc: "Chandragupta, Chanakya/Arthashastra, Ashoka's edicts & dhamma." },
        { name: "Gupta Age", tags: [{l:"6",k:"ncert"}], desc: "\"Golden Age\" achievements, Samudragupta's conquests (Allahabad Pillar Inscription — repeat PYQ theme)." },
        { name: "Karnataka ancient dynasties", tags: [{l:"11",k:"ncert"},{l:"DEGREE",k:"degree"}], desc: "Kadambas, Gangas, Chalukyas of Badami — capitals, architecture. High-value: repeatedly tested.", recurring: true },
        { name: "Ancient art & architecture", tags: [{l:"DEGREE",k:"degree"}], desc: "Rock-cut architecture, early temple styles, ancient Kannada literary beginnings." }
      ]
    },
    {
      id: "p1-history-medieval",
      paper: "Paper I",
      section: "Section B · History",
      title: "Medieval India",
      meta: "Vijayanagara & Hoysala carry high Karnataka-specific weight",
      topics: [
        { name: "Delhi Sultanate", tags: [{l:"7",k:"ncert"}], desc: "Five dynasties, administrative innovations, early Bhakti movement." },
        { name: "Vijayanagara Empire", tags: [{l:"7",k:"ncert"},{l:"DEGREE",k:"degree"}], desc: "Founders, Krishnadevaraya, Battle of Talikota, Hampi. Recurring PYQ theme (foreign travellers matched to rulers, ruler at Talikota).", recurring: true },
        { name: "Deccan Sultanates & Bahmani Kingdom", tags: [{l:"DEGREE",k:"degree"}], desc: "Formation, conflict with Vijayanagara, Deccan cultural syncretism." },
        { name: "Mughal Empire", tags: [{l:"7",k:"ncert"}], desc: "Babur to Aurangzeb, mansabdari, Akbar's policies, decline. Wiki focus: reign-by-reign table for quick recall." },
        { name: "Bhakti & Sufi movements", tags: [{l:"7",k:"ncert"}], desc: "Kabir, Basavanna/Lingayat movement, Chaitanya. Recurring: Namdev/Kabir/Ravidas professions tested.", recurring: true },
        { name: "Hoysalas", tags: [{l:"11",k:"ncert"},{l:"DEGREE",k:"degree"}], desc: "Belur, Halebidu architecture. Directly tested via UNESCO World Heritage (Sacred Ensembles of the Hoysalas) — very high priority.", recurring: true },
        { name: "Wodeyars of Mysore & Keladi Nayakas", tags: [{l:"DEGREE",k:"degree"}], desc: "Medieval Karnataka regional polities." }
      ]
    },
    {
      id: "p1-history-modern",
      paper: "Paper I",
      section: "Section B · History",
      title: "Modern India & National Movement",
      meta: "Highest-weightage History sub-area — explicit Karnataka emphasis in syllabus",
      topics: [
        { name: "British consolidation", tags: [{l:"8",k:"ncert"}], desc: "Carnatic Wars, Plassey & Buxar, Subsidiary Alliance, Doctrine of Lapse." },
        { name: "1857 Revolt", tags: [{l:"8",k:"ncert"}], desc: "Causes, leaders, suppression, Crown takeover." },
        { name: "Socio-religious reform movements", tags: [{l:"8",k:"ncert"}], desc: "Brahmo Samaj, Arya Samaj, Aligarh Movement — reformer-to-cause matching is a recurring format.", recurring: true },
        { name: "INC & freedom movement phases", tags: [{l:"8",k:"ncert"},{l:"10",k:"ncert"}], desc: "Moderate/Extremist phases, Gandhian era, INA. Recurring: chronological sequencing (August Offer, Cripps, Cabinet Mission) — practice ordering, not just facts.", recurring: true },
        { name: "Karnataka's role in freedom movement", tags: [{l:"DEGREE",k:"degree"}], desc: "Rani Chennamma, Sangolli Rayanna, Karnataka's Dandi March/Quit India participants, Ekikarana (Unification). CONFIRMED recurring across multiple years — highest ROI History topic.", recurring: true, highPriority: true },
        { name: "Constitutional developments (Acts of 1773-1935)", tags: [{l:"8",k:"ncert"},{l:"9",k:"ncert"}], desc: "Regulating Act through GoI Act 1935 — key provisions of each." },
        { name: "Partition & Independence", tags: [{l:"8",k:"ncert"}], desc: "Mountbatten Plan, princely states integration, Hyderabad/Kashmir accession." }
      ]
    },
    {
      id: "p1-geo-world-india",
      paper: "Paper I",
      section: "Section B · Geography",
      title: "World & India Geography",
      meta: "\"World Geography and Geography of India with a focus on Karnataka\"",
      topics: [
        { name: "Physical geography (World)", tags: [{l:"6",k:"ncert"},{l:"11",k:"ncert"}], desc: "Plate tectonics, landforms, climate types, ocean currents. Recurring: karst topography, wind erosion landforms — study process/formation, not just definitions.", recurring: true },
        { name: "Physiography of India", tags: [{l:"9",k:"ncert"},{l:"11",k:"ncert"}], desc: "Himalayas, Northern Plains, Peninsular Plateau, Coastal Plains, Islands." },
        { name: "Drainage system", tags: [{l:"9",k:"ncert"},{l:"11",k:"ncert"}], desc: "Himalayan vs Peninsular rivers — recurring: match river to state/tributary.", recurring: true },
        { name: "Climate of India", tags: [{l:"9",k:"ncert"}], desc: "Monsoon mechanism, seasons, regional variation." },
        { name: "Soils, vegetation, agriculture", tags: [{l:"10",k:"ncert"}], desc: "Soil types, cropping patterns, Green Revolution." },
        { name: "Mineral & energy resources", tags: [{l:"10",k:"ncert"}], desc: "Distribution — recurring: country/state matched to top mineral producer.", recurring: true },
        { name: "Population & settlement geography", tags: [{l:"9",k:"ncert"},{l:"12",k:"ncert"}], desc: "Census-based demography — India + Karnataka literacy/density figures directly tested." }
      ]
    },
    {
      id: "p1-geo-karnataka",
      paper: "Paper I",
      section: "Section B · Geography",
      title: "Karnataka-Specific Geography",
      meta: "Explicit syllabus emphasis — consistently high PYQ frequency",
      topics: [
        { name: "Physical divisions", tags: [{l:"DEGREE",k:"degree"}], desc: "Karavali (coastal), Malnad, Maidan (Deccan plateau) regions." },
        { name: "Major rivers", tags: [{l:"DEGREE",k:"degree"}], desc: "Kaveri, Krishna, Tungabhadra, Sharavathi — basins, inter-state disputes. Recurring: waterfall-to-river matching.", recurring: true },
        { name: "Agro-climatic zones", tags: [{l:"DEGREE",k:"degree"}], desc: "Karnataka's distinct agricultural zones, incl. North Eastern Transition Zone (directly tested)." },
        { name: "Mineral resources", tags: [{l:"DEGREE",k:"degree"}], desc: "Iron ore (Bellary-Hospet), manganese, gold (Kolar), granite." },
        { name: "Forests & wildlife", tags: [{l:"DEGREE",k:"degree"}], desc: "Western Ghats biodiversity, national parks/sanctuaries — heavily tested via IUCN status & animal-sanctuary matching.", recurring: true },
        { name: "Districts & regional geography", tags: [{l:"DEGREE",k:"degree"}], desc: "Administrative divisions, peaks (height-ordering tested), waterfalls, mountain passes." },
        { name: "Irrigation in Karnataka", tags: [{l:"DEGREE",k:"degree"}], desc: "Tank irrigation trends, % irrigated area — recurring Economy/Geography crossover theme.", recurring: true }
      ]
    },
    {
      id: "p1-polity-constitutional",
      paper: "Paper I",
      section: "Section B · Polity",
      title: "Constitutional Framework",
      meta: "Consistently one of the top-weighted Paper I subjects",
      topics: [
        { name: "Making of the Constitution", tags: [{l:"8",k:"ncert"},{l:"11",k:"ncert"}], desc: "Constituent Assembly, key committees & their chairmen — recurring match-type format.", recurring: true },
        { name: "Preamble & salient features", tags: [{l:"8",k:"ncert"},{l:"11",k:"ncert"}], desc: "Federal-with-unitary-bias, parliamentary system, single citizenship." },
        { name: "Fundamental Rights & DPSP", tags: [{l:"8",k:"ncert"},{l:"11",k:"ncert"}], desc: "All six FR categories, DPSP articles — recurring: specific Article numbers (Art 12, 21A, 38).", recurring: true },
        { name: "Union Government", tags: [{l:"11",k:"ncert"}], desc: "President (pardoning power, veto types — ALL recurring PYQ themes), PM, Parliament, Judiciary.", recurring: true },
        { name: "State Government & federalism", tags: [{l:"11",k:"ncert"}], desc: "Governor, State legislature, Centre-State relations, Sixth Schedule (tribal areas)." },
        { name: "Constitutional & statutory bodies", tags: [{l:"11",k:"ncert"},{l:"DEGREE",k:"degree"}], desc: "UPSC/CAG/Election Commission, NITI Aayog, Finance Commission — recurring: composition & powers.", recurring: true }
      ]
    },
    {
      id: "p1-polity-local",
      paper: "Paper I",
      section: "Section B · Polity",
      title: "Local Self-Government",
      meta: "Highest direct relevance to the KAS administrative role",
      topics: [
        { name: "73rd & 74th Amendments", tags: [{l:"8",k:"ncert"},{l:"DEGREE",k:"degree"}], desc: "Panchayati Raj & Municipalities institutionalization — 11th/12th Schedule subjects devolved." },
        { name: "Three-tier Panchayati Raj structure", tags: [{l:"DEGREE",k:"degree"}], desc: "Gram/Taluk/Zilla Panchayat — powers & functions." },
        { name: "Karnataka Panchayati Raj specifics", tags: [{l:"DEGREE",k:"degree"}], desc: "Karnataka Panchayat Raj Act 1993 — exact commencement date is a confirmed PYQ detail.", recurring: true },
        { name: "Urban local bodies", tags: [{l:"8",k:"ncert"},{l:"DEGREE",k:"degree"}], desc: "Municipal Corporation, Municipality, Nagar Panchayat — Karnataka's City Corporation list is directly tested." },
        { name: "Anti-Defection Law", tags: [{l:"11",k:"ncert"},{l:"DEGREE",k:"degree"}], desc: "52nd Amendment — confirmed PYQ." },
        { name: "Autonomous District Councils", tags: [{l:"DEGREE",k:"degree"}], desc: "Executive/judicial/legislative powers — confirmed PYQ under Sixth Schedule." }
      ]
    },
    {
      id: "p1-economy",
      paper: "Paper I",
      section: "Section B · Economy",
      title: "Economy",
      meta: "Consistently co-equal weightage with Geography/History/Polity",
      topics: [
        { name: "Basic concepts & Five-Year Plans", tags: [{l:"10",k:"ncert"},{l:"11",k:"ncert"}], desc: "Sectors, GDP/GNP/NNP, Plan legacy even post-NITI Aayog." },
        { name: "1991 LPG Reforms", tags: [{l:"10",k:"ncert"}], desc: "Liberalization, Privatization, Globalization — causes & key changes." },
        { name: "Monetary policy tools", tags: [{l:"12",k:"ncert"},{l:"DEGREE",k:"degree"}], desc: "Repo, CRR, Reverse Repo, LAF, OMO — CONFIRMED high-recurrence topic across years.", recurring: true, highPriority: true },
        { name: "Fiscal concepts", tags: [{l:"12",k:"ncert"},{l:"DEGREE",k:"degree"}], desc: "Fiscal/revenue/primary deficit distinctions — confirmed recurring, exact definitions matter.", recurring: true },
        { name: "Finance Commission & GST Council", tags: [{l:"DEGREE",k:"degree"}], desc: "Constitutional basis (Art 280, Art 279A) — confirmed recurring.", recurring: true },
        { name: "Rural development & welfare schemes", tags: [{l:"DEGREE",k:"degree"}], desc: "MGNREGA, PM-Kisan, PMAY — exact figures (financial assistance amounts) tested directly." },
        { name: "Poverty & demographics", tags: [{l:"10",k:"ncert"},{l:"DEGREE",k:"degree"}], desc: "Multidimensional Poverty Index (NITI Aayog/UNDP/OPHI) — confirmed recurring theme.", recurring: true }
      ]
    },
    {
      id: "p2-karnataka-gs",
      paper: "Paper II",
      section: "Section A",
      title: "Karnataka State Current Affairs",
      meta: "40 questions, 80 marks — start-from-scratch priority area",
      isCurrentAffairs: true,
      topics: []
    },
    {
      id: "p2-scitech",
      paper: "Paper II",
      section: "Section B · Science & Technology",
      title: "Science & Technology",
      meta: "Combined with Environment for 30Q/60 marks — educated non-specialist level",
      topics: [
        { name: "Space technology", tags: [{l:"DEGREE",k:"degree"},{l:"CA",k:"ca"}], desc: "ISRO missions (Gaganyaan, Chandrayaan, Aditya-L1) — confirmed heavily recurring, mission objectives tested in detail.", recurring: true, highPriority: true },
        { name: "Basic physics concepts", tags: [{l:"9",k:"ncert"},{l:"10",k:"ncert"}], desc: "Mechanics, optics (rainbow formation confirmed PYQ), electricity — everyday-application framing, not derivations." },
        { name: "Basic chemistry concepts", tags: [{l:"9",k:"ncert"},{l:"10",k:"ncert"}], desc: "Radioactivity/half-life, polymers, pollutants — confirmed recurring at conceptual level.", recurring: true },
        { name: "Basic biology/genetics", tags: [{l:"10",k:"ncert"},{l:"12",k:"ncert"}], desc: "Hardy-Weinberg, ecology energy flow, second messengers — confirmed recurring.", recurring: true },
        { name: "IT & digital technology", tags: [{l:"CA",k:"ca"}], desc: "Blockchain, Web 3.0, AI policy developments — conceptual understanding tested via statement-correctness." },
        { name: "Defence technology", tags: [{l:"CA",k:"ca"}], desc: "DRDO developments — overlaps with Paper I-A current affairs." },
        { name: "Nuclear technology", tags: [{l:"DEGREE",k:"degree"},{l:"CA",k:"ca"}], desc: "Small Modular Reactors, nuclear power plant economics — confirmed recurring theme.", recurring: true }
      ]
    },
    {
      id: "p2-environment",
      paper: "Paper II",
      section: "Section B · Environment & Ecology",
      title: "Environment & Ecology",
      meta: "Consistently recurring: wetlands, protected areas, conservation policy",
      topics: [
        { name: "Ecosystem basics", tags: [{l:"7",k:"ncert"},{l:"12",k:"ncert"}], desc: "Food chains, energy flow, biogeochemical cycles." },
        { name: "Biodiversity & hotspots", tags: [{l:"12",k:"ncert"}], desc: "Western Ghats relevance — confirmed via Kasturirangan Committee, Lion-Tailed Macaque questions.", recurring: true },
        { name: "Climate change & international agreements", tags: [{l:"DEGREE",k:"degree"},{l:"CA",k:"ca"}], desc: "Paris Agreement, COP framework, Mission LiFE — confirmed recurring.", recurring: true },
        { name: "Protected area network", tags: [{l:"DEGREE",k:"degree"}], desc: "National Parks, Wildlife Sanctuaries, Biosphere Reserves — Karnataka-specific ones heavily tested via matching format.", recurring: true },
        { name: "Ramsar wetlands", tags: [{l:"CA",k:"ca"}], desc: "Confirmed recurring theme — new additions tested yearly, know the current Karnataka Ramsar count.", recurring: true },
        { name: "Environmental legislation", tags: [{l:"DEGREE",k:"degree"}], desc: "Environment Protection Act, Wildlife Protection Act, Forest Conservation Act — Eco-Sensitive Zone rules confirmed PYQ." },
        { name: "Ozone layer & atmosphere", tags: [{l:"11",k:"ncert"}], desc: "Confirmed recurring: Dobson units, CFCs, atmospheric layer classification.", recurring: true }
      ]
    },
    {
      id: "p2-gma",
      paper: "Paper II",
      section: "Section C · General Mental Ability",
      title: "General Mental Ability",
      meta: "30 questions, 60 marks — officially capped at SSLC/Class 10 difficulty",
      topics: [
        { name: "Comprehension", tags: [{l:"10",k:"ncert"},{l:"SSLC",k:"ssle"}], desc: "Passage-based: main idea, inference, vocabulary-in-context. Confirmed: always 2 passages, 3-4 Qs each, always LAST in the GMA block." },
        { name: "Logical reasoning", tags: [{l:"10",k:"ncert"},{l:"SSLC",k:"ssle"}], desc: "Blood relations, coding-decoding, syllogism, seating arrangement, direction sense, series — confirmed recurring exact sub-types.", recurring: true },
        { name: "Decision making & problem solving", tags: [{l:"10",k:"ncert"},{l:"SSLC",k:"ssle"}], desc: "Situation-based judgment questions." },
        { name: "Basic numeracy", tags: [{l:"8",k:"ncert"},{l:"10",k:"ncert"},{l:"SSLC",k:"ssle"}], desc: "Percentages, ratio, SI/CI, profit-loss, time-work, averages, probability — confirmed LARGEST GMA sub-block (8 of 18 in verified paper).", recurring: true, highPriority: true },
        { name: "Data interpretation", tags: [{l:"10",k:"ncert"},{l:"SSLC",k:"ssle"}], desc: "Tables, bar/line/pie charts, data sufficiency — all capped at SSLC level per notification." }
      ]
    }
  ],

  // ---------------- PERSONAL STRATEGY MAP ----------------
  personalStrategy: [
    { section: "Paper I-A: National/Intl Current Affairs", start: "Already reading newspapers regularly", implication: "Lowest new-effort area — convert your existing habit into structured notes rather than starting new reading." },
    { section: "Paper I-B: Humanities", start: "Last studied formally in Class 10", implication: "Highest-effort area. Needs full NCERT-base rebuild before adding degree-layer depth. Budget the most calendar time here." },
    { section: "Paper II-A: State GS", start: "Starting from scratch", implication: "Needs an active new habit built immediately — don't leave this for later, since it compounds daily like national current affairs does." },
    { section: "Paper II-B: Science/Tech/Environment", start: "Already has general idea", implication: "Lighter lift — focus mainly on staying current, less on foundational rebuilding." },
    { section: "Paper II-C: Mental Ability", start: "Confident/can focus well here", implication: "Your strength area — maintain with steady practice rather than over-investing time that's better spent on Humanities." }
  ],

  // ---------------- WEEKLY SEQUENCING PLAN ----------------
  sequencingPlan: [
    { priority: 1, area: "Polity + Panchayati Raj", approach: "NCERT base first, then degree add-on layer; highest weightage + your weakest declared starting point overlap here." },
    { priority: 2, area: "Modern History (Karnataka-weighted)", approach: "NCERT base, then Karnataka freedom-movement degree layer specifically — this is explicitly syllabus-emphasized." },
    { priority: 3, area: "National Current Affairs (parallel, daily)", approach: "Convert existing reading into structured notes from day one." },
    { priority: 3, area: "Karnataka Current Affairs (parallel, daily)", approach: "Build new habit from day one — do not delay." },
    { priority: 4, area: "Geography (India + Karnataka)", approach: "NCERT base, then Karnataka degree layer." },
    { priority: 5, area: "Ancient & Medieval History", approach: "NCERT base sufficient for most of it; Karnataka dynasties get degree-layer attention." },
    { priority: 6, area: "Economy", approach: "NCERT base + degree layer; conceptual, moderate time investment." },
    { priority: 7, area: "Science/Tech/Environment (light, ongoing)", approach: "Weekly current-developments skim; you already have the base." },
    { priority: 7, area: "Mental Ability (light, ongoing)", approach: "Daily short practice sets (20-30 min) throughout, not backloaded to the final week." }
  ],

  strategyImplications: [
    { title: "Practice format, not just content", detail: "Drill statement-correctness sets specifically — 3-4 statements per question, judge each independently before combining. This is now the dominant format, not a variant." },
    { title: "Don't skip 'Only 1/2/3/4 correct' style questions", detail: "The count-based variant (25% of Dec-2024 Paper I) is harder than plain statement-correctness because there's no elimination shortcut — you must be sure about every statement." },
    { title: "Treat Karnataka State GS as a memorization-heavy zone", detail: "Scheme names, eligibility numbers, and exact policy document titles are tested directly — vague familiarity with \"the scheme exists\" isn't enough." },
    { title: "GMA: master Numeracy fundamentals first", detail: "It's the largest GMA sub-block; Comprehension is passage-based and needs no separate \"topic\" prep — just timed practice." }
  ],

  dataScope: [
    { year: "2017", papers: "Paper I & II", note: "Full question-by-question classification" },
    { year: "2020 (Aug)", papers: "Paper I & II", note: "Full classification + explicit format/subject counts" },
    { year: "2024 (Aug)", papers: "Paper I & II", note: "Verified directly from your uploaded scanned paper — highest confidence" },
    { year: "2024 (Dec)", papers: "Paper I & II", note: "Full classification + explicit format/subject counts" }
  ]
};
