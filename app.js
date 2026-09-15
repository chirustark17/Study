// ============================================================
// KAS PRELIMS 2026 — APP LOGIC
// ============================================================

const STORAGE_KEY = 'kas2026_progress_v1';

let progress = {};
try {
  progress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
} catch(e) { progress = {}; }

let activeFilter = 'all';
let searchQuery = '';
let openTopics = new Set();

function saveProgress(){
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch(e){}
}

function topicKey(sectionId, idx){ return sectionId + '::' + idx; }

// ---------------- TOAST ----------------
function showToast(msg){
  const container = document.getElementById('toastContainer');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="dot"></span><span>${msg}</span>`;
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add('out');
    setTimeout(() => el.remove(), 260);
  }, 2600);
}

// ---------------- COUNTDOWN ----------------
function updateCountdown(){
  const exam = new Date(MASTER_DATA.meta.examDate + 'T00:00:00');
  const now = new Date();
  const diffMs = exam - now;
  const days = Math.max(0, Math.ceil(diffMs / (1000*60*60*24)));
  document.getElementById('countdown').innerHTML = `<strong>${days}</strong> days to Prelims (15 Nov 2026)`;
}

// ---------------- TAG RENDER ----------------
function renderTags(tags){
  return tags.map(t => `<span class="tag ${t.k}">${t.l}</span>`).join('');
}

// ---------------- PROGRESS COUNT ----------------
function countProgress(){
  let total = 0, done = 0;
  MASTER_DATA.syllabus.forEach(sec => {
    sec.topics.forEach((t, i) => {
      total++;
      if (progress[topicKey(sec.id, i)]) done++;
    });
  });
  document.getElementById('progressText').textContent = `${done} / ${total} topics studied`;
}

// ---------------- TOPIC CARD ----------------
function topicMatchesFilter(topic){
  if (activeFilter === 'all') return true;
  if (activeFilter === 'recurring') return !!topic.recurring;
  if (activeFilter === 'ncert') return topic.tags.some(t => t.k === 'ncert') && !topic.tags.some(t => t.k === 'degree');
  if (activeFilter === 'degree') return topic.tags.some(t => t.k === 'degree');
  return true;
}

function topicMatchesSearch(topic, sectionTitle){
  if (!searchQuery) return true;
  const hay = (topic.name + ' ' + topic.desc + ' ' + sectionTitle).toLowerCase();
  return hay.includes(searchQuery);
}

function renderTopicCard(sec, topic, idx){
  const key = topicKey(sec.id, idx);
  const isDone = !!progress[key];
  const isOpen = openTopics.has(key);
  const visible = topicMatchesFilter(topic) && topicMatchesSearch(topic, sec.title);

  return `
  <div class="topic-card ${isDone ? 'done' : ''} ${isOpen ? 'open' : ''} ${visible ? '' : 'hidden'}" data-key="${key}">
    <div class="topic-row">
      <div class="topic-check ${isDone ? 'checked' : ''}" data-action="toggle-check" data-key="${key}" role="checkbox" aria-checked="${isDone}" tabindex="0"></div>
      <div class="topic-main" data-action="toggle-open" data-key="${key}">
        <div class="topic-title-row">
          <span class="topic-title">${topic.name}</span>
          ${renderTags(topic.tags)}
          ${topic.recurring ? '<span class="tag-recur">↻ Recurring in PYQs</span>' : ''}
        </div>
        ${isOpen ? `<div class="topic-desc">${topic.desc}</div>` : ''}
      </div>
      <div class="topic-expand">▾</div>
    </div>
  </div>`;
}

// ---------------- SYLLABUS SECTION RENDER ----------------
function renderSyllabusSection(sec){
  if (sec.isCurrentAffairs){
    return renderCurrentAffairsSection(sec);
  }

  const topicsHtml = sec.topics.map((t, i) => renderTopicCard(sec, t, i)).join('');
  const doneCount = sec.topics.filter((t,i) => progress[topicKey(sec.id, i)]).length;

  return `
  <section class="section" id="${sec.id}">
    <div class="section-head">
      <div class="section-eyebrow">${sec.paper} · ${sec.section}</div>
      <h3>${sec.title}</h3>
      <div class="sub">${sec.meta} · ${doneCount}/${sec.topics.length} studied</div>
    </div>
    <div class="topic-group">
      ${topicsHtml}
    </div>
  </section>`;
}

function renderCurrentAffairsSection(sec){
  const isNational = sec.id === 'p1-ca';
  const cats = isNational ? MASTER_DATA.currentAffairsCategories : MASTER_DATA.karnatakaGS.map(k => `${k.cat} — ${k.ex}`);

  let extra = '';
  if (isNational){
    extra = `
    <div class="card pad" style="margin-top:20px;">
      <div class="flow">
        <div class="flow-step">Read daily<br><span style="font-weight:400;color:var(--muted);font-size:11px;">(you already do this)</span></div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">File under one of the 8 categories, dated</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Monthly: cross-check a roundup source</div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">Weekly: skim your own notes for recall</div>
      </div>
    </div>
    <div class="info-box amber" style="margin-top:16px;">
      <h5>Worked example — BRICS</h5>
      <p>Don't try to read everything ever written about BRICS. Wikipedia focus: "Member states" section (current members + accession years), "Summits" section (host country + year for the last 3 summits), and India's specific chairship years (2012, 2016, 2021, 2026). Skip founding history beyond one sentence — it's rarely tested.</p>
    </div>
    <div class="section-head" style="margin-top:28px;">
      <h4 style="font-family:var(--serif);font-size:16px;color:var(--navy);">Confirmed anchors for this exam cycle</h4>
      <div class="sub">Already on record — keep building forward from here</div>
    </div>
    <div class="card pad">
      <ul style="list-style:none;">
        ${MASTER_DATA.currentAffairsAnchors.map(a => `<li style="font-size:12.5px;color:var(--ink);padding:8px 0;border-bottom:1px solid var(--line);line-height:1.5;">• ${a}</li>`).join('')}
      </ul>
    </div>`;
  } else {
    extra = `
    <div class="info-box green" style="margin-top:20px;">
      <h5>Action for you specifically</h5>
      <p>Since you're starting from zero here, don't backfill a year of state news from memory. Start a dedicated Karnataka current affairs note today, subscribe to one Karnataka-specific monthly digest, and skim the past 2-3 months of Karnataka govt press releases to build forward from.</p>
    </div>`;
  }

  const catCards = isNational
    ? MASTER_DATA.currentAffairsCategories.map(c => `<div class="wiki-card"><div class="focus">• ${c}</div></div>`).join('')
    : MASTER_DATA.karnatakaGS.map(k => `<div class="wiki-card"><div class="topic">${k.cat}</div><div class="focus">${k.ex}</div></div>`).join('');

  return `
  <section class="section" id="${sec.id}">
    <div class="section-head">
      <div class="section-eyebrow">${sec.paper} · ${sec.section}</div>
      <h3>${sec.title}</h3>
      <div class="sub">${sec.meta} · No fixed topic list — tracked as a live category, not memorized as a static syllabus</div>
    </div>
    ${catCards}
    ${extra}
  </section>`;
}

// ---------------- BAR CHART RENDER ----------------
function renderBarChart(title, labels, series, height=20){
  let rows = '';
  labels.forEach((label, li) => {
    rows += `<div class="bar-group-label">${label}</div>`;
    series.forEach(s => {
      const val = s.data[li];
      const max = Math.max(...series.flatMap(x => x.data), 1);
      const pct = Math.max((val / max) * 100, 3);
      const wide = pct > 18;
      rows += `
      <div class="bar-row">
        <div class="bar-label">${s.name}</div>
        <div class="bar-track">
          <div class="bar-fill" style="width:${pct}%; background:${s.color};">
            ${wide ? `<span class="bar-value">${val}</span>` : ''}
          </div>
          ${!wide ? `<span class="bar-value outside" style="position:absolute; left:${pct}%; top:50%; transform:translateY(-50%);">${val}</span>` : ''}
        </div>
      </div>`;
    });
  });

  const legend = series.map(s => `
    <div class="chart-legend-item">
      <span class="chart-legend-swatch" style="background:${s.color};"></span>${s.name}
    </div>`).join('');

  return `
  <div class="chart-wrap">
    <div class="chart-title">${title}</div>
    <div class="bar-chart">${rows}</div>
    <div class="chart-legend">${legend}</div>
  </div>`;
}

// ---------------- OVERVIEW SECTION ----------------
function renderOverview(){
  const totalTopics = MASTER_DATA.syllabus.reduce((a,s) => a + s.topics.length, 0);
  const recurringCount = MASTER_DATA.syllabus.reduce((a,s) => a + s.topics.filter(t=>t.recurring).length, 0);

  return `
  <section class="section" id="overview">
    <div class="hero">
      <h2>Everything you need for KAS Prelims, in one place.</h2>
      <p>Every sub-subtopic across both papers, tagged by NCERT class or degree-level depth. Real question-format analysis from four actual KPSC papers. Your personal strategy, mapped to where you're starting from. Click any topic to expand it, check it off as you study, and use the filters above to focus on what matters most.</p>
      <div class="hero-stats">
        <div class="hero-stat"><div class="num">${totalTopics}</div><div class="label">Trackable topics</div></div>
        <div class="hero-stat"><div class="num">4</div><div class="label">Real papers analyzed</div></div>
        <div class="hero-stat"><div class="num">${recurringCount}</div><div class="label">Confirmed recurring themes</div></div>
        <div class="hero-stat"><div class="num">9</div><div class="label">Question format types</div></div>
      </div>
    </div>

    <div class="two-col">
      <div class="card pad">
        <h4 style="font-family:var(--serif); font-size:16px; color:var(--navy); margin-bottom:14px;">Official pattern</h4>
        <table class="data-table">
          <thead><tr><th>Paper</th><th>Questions</th><th>Sections</th></tr></thead>
          <tbody>
            ${MASTER_DATA.pattern.papers.map(p => `<tr><td><strong>${p.name}</strong><br><span style="color:var(--muted)">${p.marks} marks</span></td><td>${p.questions}</td><td>${p.sections}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="card pad">
        <h4 style="font-family:var(--serif); font-size:16px; color:var(--navy); margin-bottom:14px;">Key facts</h4>
        <ul style="list-style:none;">
          ${MASTER_DATA.pattern.facts.map(f => `<li style="font-size:12px;color:var(--ink);padding:7px 0;border-bottom:1px solid var(--line);line-height:1.5;">${f}</li>`).join('')}
        </ul>
      </div>
    </div>
  </section>`;
}

// ---------------- STRATEGY SECTION ----------------
function renderStrategy(){
  return `
  <section class="section" id="strategy">
    <div class="section-head">
      <div class="section-eyebrow">Personalized</div>
      <h3>Your Strategy Map</h3>
      <div class="sub">Based on exactly where you're starting from in each section</div>
    </div>
    ${MASTER_DATA.personalStrategy.map(s => `
      <div class="strat-card">
        <div class="sec">${s.section}</div>
        <div class="start">${s.start}</div>
        <div class="impl">${s.implication}</div>
      </div>
    `).join('')}

    <div class="section-head" style="margin-top:32px;">
      <h4 style="font-family:var(--serif); font-size:18px; color:var(--navy);">What the PYQ analysis changes about your approach</h4>
    </div>
    ${MASTER_DATA.strategyImplications.map(s => `
      <div class="impl-card">
        <div>
          <h5>${s.title}</h5>
          <p>${s.detail}</p>
        </div>
      </div>
    `).join('')}
  </section>`;
}

// ---------------- PLAN SECTION ----------------
function renderPlan(){
  return `
  <section class="section" id="plan">
    <div class="section-head">
      <div class="section-eyebrow">Sequencing</div>
      <h3>Study Sequence &amp; Priority Order</h3>
      <div class="sub">Front-load where you're starting from zero and the ceiling is highest; run current-affairs tracks in parallel from day one</div>
    </div>
    ${MASTER_DATA.sequencingPlan.map(p => `
      <div class="plan-item">
        <div class="plan-priority">${p.priority}</div>
        <div class="plan-body">
          <h5>${p.area}</h5>
          <p>${p.approach}</p>
        </div>
      </div>
    `).join('')}
  </section>`;
}

// ---------------- PYQ: DATA SCOPE ----------------
function renderPyqScope(){
  return `
  <section class="section" id="pyq-scope">
    <div class="section-head">
      <div class="section-eyebrow">PYQ Analysis</div>
      <h3>Data Scope &amp; Its Limits</h3>
      <div class="sub">Real data, not estimation — and an honest account of where it runs thin</div>
    </div>
    <table class="data-table">
      <thead><tr><th>Year</th><th>Papers</th><th>Confidence</th></tr></thead>
      <tbody>
        ${MASTER_DATA.dataScope.map(d => `<tr><td><strong>${d.year}</strong></td><td>${d.papers}</td><td>${d.note}</td></tr>`).join('')}
      </tbody>
    </table>
    <div class="info-box amber" style="margin-top:20px;">
      <h5>What this means for you</h5>
      <p>Four data points across 7 years is real signal — enough to trust a directional trend — but not enough to claim precise year-by-year percentages will repeat exactly in 2026. Findings throughout this site are tagged <span class="confidence-badge verified" style="margin:0 4px;">Verified</span> when directly counted from a real paper.</p>
    </div>
  </section>`;
}

// ---------------- PYQ: FORMAT SHIFT ----------------
function renderPyqFormat(){
  return `
  <section class="section" id="pyq-format">
    <div class="section-head">
      <div class="section-eyebrow">PYQ Analysis · Headline Finding</div>
      <h3>Question Format Has Structurally Shifted</h3>
      <div class="sub"><span class="confidence-badge verified">Verified</span> Straight-recall MCQs are vanishing; multi-statement judgment questions now dominate</div>
    </div>
    ${renderBarChart('Question format mix, Paper I (% of 100 questions)', MASTER_DATA.formatTrend.labels, MASTER_DATA.formatTrend.series)}
    <div class="two-col" style="margin-top:20px;">
      <div class="info-box red">
        <h5>Old habit that no longer works</h5>
        <p>Memorizing single facts to recognize "the correct option" among 4 choices. In Dec 2024, this style covered barely a quarter of Paper I.</p>
      </div>
      <div class="info-box green">
        <h5>What to build instead</h5>
        <p>The ability to independently judge each of 3-4 sub-statements (a),(b),(c),(d) as true/false, THEN combine them — being unsure on even one sub-statement breaks the whole question.</p>
      </div>
    </div>

    <div class="section-head" style="margin-top:32px;">
      <h4 style="font-family:var(--serif); font-size:18px; color:var(--navy);">Where each format shows up</h4>
    </div>
    <div class="two-col">
      <div class="card pad" style="border-color:var(--navy); border-width:1.5px;">
        <h5 style="font-family:var(--serif); color:var(--navy); font-size:16px; margin-bottom:4px;">Paper I</h5>
        <div style="font-size:11px; color:var(--muted); font-style:italic; margin-bottom:12px;">Current Affairs + Humanities</div>
        <ul style="list-style:none;">
          ${MASTER_DATA.paperCharacter.paperI.map(x => `<li style="font-size:12px;color:var(--ink);padding:8px 0;border-bottom:1px solid var(--line);line-height:1.5;">• ${x}</li>`).join('')}
        </ul>
      </div>
      <div class="card pad" style="border-color:var(--amber); border-width:1.5px;">
        <h5 style="font-family:var(--serif); color:var(--amber); font-size:16px; margin-bottom:4px;">Paper II</h5>
        <div style="font-size:11px; color:var(--muted); font-style:italic; margin-bottom:12px;">Karnataka CA + Science/Environment + GMA</div>
        <ul style="list-style:none;">
          ${MASTER_DATA.paperCharacter.paperII.map(x => `<li style="font-size:12px;color:var(--ink);padding:8px 0;border-bottom:1px solid var(--line);line-height:1.5;">• ${x}</li>`).join('')}
        </ul>
      </div>
    </div>
  </section>`;
}

// ---------------- PYQ: TYPE CATALOGUE ----------------
function renderPyqTypes(){
  return `
  <section class="section" id="pyq-types">
    <div class="section-head">
      <div class="section-eyebrow">PYQ Analysis</div>
      <h3>The Full Catalogue of Question Types</h3>
      <div class="sub"><span class="confidence-badge verified">Verified</span> Every KAS Prelims question falls into one of these 9 structural types</div>
    </div>
    <div class="card pad">
      <div class="qtype-list">
        ${MASTER_DATA.questionTypes.map(q => `
          <div class="qtype-row">
            <div class="qtype-num">${q.id}</div>
            <div class="qtype-name">${q.name}</div>
            <div>
              <div class="qtype-desc">${q.desc}</div>
              <div class="qtype-example">"${q.example}"</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="section-head" style="margin-top:32px;">
      <h4 style="font-family:var(--serif); font-size:18px; color:var(--navy);">GMA exact sequence (from your verified Aug 2024 paper)</h4>
      <div class="sub">Q10 through Q27 — 18 consecutive questions, always in this order</div>
    </div>
    <table class="data-table">
      <thead><tr><th>Question</th><th>Topic</th><th>Type</th></tr></thead>
      <tbody>
        ${MASTER_DATA.gmaSequence.map(g => `<tr><td><strong>${g.q}</strong></td><td>${g.topic}</td><td style="font-style:italic;color:var(--muted);">${g.type}</td></tr>`).join('')}
      </tbody>
    </table>
    <div class="info-box green" style="margin-top:16px;">
      <h5>Takeaway</h5>
      <p>Numeracy is the largest single GMA sub-block (8 of 18). Comprehension is always passage-based and always comes last. Practice in this exact order to match real exam rhythm.</p>
    </div>
  </section>`;
}

// ---------------- PYQ: WEIGHTAGE ----------------
function renderPyqWeightage(){
  return `
  <section class="section" id="pyq-weightage">
    <div class="section-head">
      <div class="section-eyebrow">PYQ Analysis</div>
      <h3>Paper I Topic Weightage</h3>
      <div class="sub"><span class="confidence-badge verified">Verified</span> Question counts out of 100, consistent across two full years of real data</div>
    </div>
    ${renderBarChart('Topic weightage comparison', MASTER_DATA.topicWeightage.labels, MASTER_DATA.topicWeightage.series)}
    <div class="section-head" style="margin-top:28px;">
      <h4 style="font-family:var(--serif); font-size:16px; color:var(--navy);">What this tells you</h4>
    </div>
    <div class="impl-card"><div><h5>Geography, Economy, History, Polity are consistently co-equal</h5><p>All four land in the 14-18 range across both years — no single subject dominates Paper I. Do not deprioritize any one of these four.</p></div></div>
    <div class="impl-card" style="border-left-color:var(--amber);"><div><h5>Current Affairs (National + International combined) is effectively the largest single block</h5><p>13+13=26 in 2020, and 15+12=27 in 2024 — larger than any individual static subject. This confirms current affairs deserves daily, not occasional, attention.</p></div></div>
    <div class="impl-card" style="border-left-color:var(--green);"><div><h5>Science & Technology in Paper I jumped from 1 to 6 between years</h5><p>A real, dated increase — worth noting, though 2 data points isn't enough to call it a firm trend. Don't ignore Sci&Tech current-developments even in Paper I.</p></div></div>
  </section>`;
}

// ---------------- PYQ: RECURRING TOPICS ----------------
function renderPyqRecurring(){
  return `
  <section class="section" id="pyq-recurring">
    <div class="section-head">
      <div class="section-eyebrow">PYQ Analysis</div>
      <h3>Topics That Repeat Across Years</h3>
      <div class="sub"><span class="confidence-badge verified">Verified</span> Tested in more than one of the four papers analyzed — genuine recurrence, not a one-off</div>
    </div>
    <div class="recur-grid">
      ${MASTER_DATA.recurringTopics.map(g => `
        <div class="recur-card">
          <h5>${g.subject}</h5>
          <ul>${g.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>
      `).join('')}
    </div>
  </section>`;
}

// ---------------- NCERT INDEX ----------------
function renderNcertIndex(){
  return `
  <section class="section" id="ncert-index">
    <div class="section-head">
      <div class="section-eyebrow">Reference</div>
      <h3>NCERT Class-Wise Master Index</h3>
      <div class="sub">Which class's textbook covers what — single reference table</div>
    </div>
    <div class="card pad">
      ${MASTER_DATA.ncertIndex.map(n => `
        <div class="ncert-row">
          <div class="ncert-cls">${n.cls}</div>
          <div class="ncert-coverage">${n.coverage}</div>
        </div>
      `).join('')}
    </div>
  </section>`;
}

// ---------------- WIKI GUIDE ----------------
function renderWikiGuide(){
  return `
  <section class="section" id="wiki-guide">
    <div class="section-head">
      <div class="section-eyebrow">Reference</div>
      <h3>How To Use Wikipedia Effectively</h3>
      <div class="sub">Go to Wikipedia for a NAMED entity/event/scheme, and read only the relevant sections — not the full article</div>
    </div>
    ${MASTER_DATA.wikiExamples.map(w => `
      <div class="wiki-card">
        <div class="topic">${w.topic}</div>
        <div class="focus">${w.focus}</div>
      </div>
    `).join('')}
    <div class="info-box amber" style="margin-top:16px;">
      <h5>General rule</h5>
      <p>If a Wikipedia article's table of contents has more than ~6 sections, you only need 2 of them for Prelims — the ones with dates, figures, or named provisions. Narrative/background sections are Mains-essay material, not Prelims fact-recall material.</p>
    </div>
  </section>`;
}

// ---------------- LEGEND ----------------
function renderLegend(){
  return `
  <div class="legend">
    <div class="legend-item"><span class="tag ncert">6</span> NCERT class — study that class's chapter first</div>
    <div class="legend-item"><span class="tag degree">DEGREE</span> Extra depth beyond NCERT</div>
    <div class="legend-item"><span class="tag ca">CA</span> Current affairs — tracked live, not memorized as a static list</div>
    <div class="legend-item"><span class="tag ssle">SSLC</span> GMA only — capped at Class 10 difficulty</div>
    <div class="legend-item"><span class="tag-recur">↻ Recurring</span> Confirmed tested in 2+ real papers</div>
  </div>`;
}

// ---------------- FULL RENDER ----------------
function renderAll(){
  const parts = [];
  parts.push(renderOverview());
  parts.push(renderStrategy());
  parts.push(renderPlan());
  parts.push(`<div id="syllabus-anchor"></div>`);
  parts.push(renderLegend());
  MASTER_DATA.syllabus.forEach(sec => parts.push(renderSyllabusSection(sec)));
  parts.push(renderPyqScope());
  parts.push(renderPyqFormat());
  parts.push(renderPyqTypes());
  parts.push(renderPyqWeightage());
  parts.push(renderPyqRecurring());
  parts.push(renderNcertIndex());
  parts.push(renderWikiGuide());

  document.getElementById('content').innerHTML = parts.join('');
  countProgress();
  attachTopicHandlers();
  applySearchAndFilter();
}

// ---------------- EVENT HANDLERS ----------------
function attachTopicHandlers(){
  document.querySelectorAll('[data-action="toggle-check"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = el.getAttribute('data-key');
      const wasChecked = !!progress[key];
      progress[key] = !wasChecked;
      saveProgress();
      const card = el.closest('.topic-card');
      card.classList.toggle('done', progress[key]);
      el.classList.toggle('checked', progress[key]);
      el.setAttribute('aria-checked', progress[key]);
      countProgress();
      if (progress[key]){
        showToast('Marked as studied');
      }
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); el.click(); }
    });
  });

  document.querySelectorAll('[data-action="toggle-open"]').forEach(el => {
    el.addEventListener('click', () => {
      const key = el.getAttribute('data-key');
      const card = el.closest('.topic-card');
      if (openTopics.has(key)){
        openTopics.delete(key);
        card.classList.remove('open');
      } else {
        openTopics.add(key);
        card.classList.add('open');
      }
      // re-render just this card's desc without a full re-render, for perf & to keep scroll position
      const sec = MASTER_DATA.syllabus.find(s => key.startsWith(s.id + '::'));
      const idx = parseInt(key.split('::')[1], 10);
      const topic = sec.topics[idx];
      let descEl = card.querySelector('.topic-desc');
      if (openTopics.has(key)){
        if (!descEl){
          descEl = document.createElement('div');
          descEl.className = 'topic-desc';
          card.querySelector('.topic-main').appendChild(descEl);
        }
        descEl.textContent = topic.desc;
      } else {
        if (descEl) descEl.remove();
      }
    });
  });
}

function applySearchAndFilter(){
  let anyVisible = false;
  MASTER_DATA.syllabus.forEach(sec => {
    sec.topics.forEach((t, i) => {
      const key = topicKey(sec.id, i);
      const card = document.querySelector(`.topic-card[data-key="${key}"]`);
      if (!card) return;
      const visible = topicMatchesFilter(t) && topicMatchesSearch(t, sec.title);
      card.classList.toggle('hidden', !visible);
      if (visible) anyVisible = true;
    });
  });
}

// ---------------- SIDEBAR NAV ----------------
function setupNav(){
  const links = document.querySelectorAll('.nav-link');
  const sidebar = document.getElementById('sidebar');
  const isMobile = () => window.matchMedia('(max-width: 900px)').matches;

  links.forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.getAttribute('data-target'));
      if (isMobile()) sidebar.classList.remove('open');
      if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), isMobile() ? 50 : 0);
    });
  });

  document.getElementById('sidebarToggle').addEventListener('click', () => {
    if (isMobile()) sidebar.classList.toggle('open');
  });

  // active-state on scroll
  const sections = Array.from(document.querySelectorAll('.section'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const id = entry.target.id;
        links.forEach(l => l.classList.toggle('active', l.getAttribute('data-target') === id));
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
  sections.forEach(s => observer.observe(s));
}

// ---------------- SEARCH & FILTER SETUP ----------------
function setupSearch(){
  const input = document.getElementById('searchInput');
  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery = input.value.trim().toLowerCase();
      applySearchAndFilter();
    }, 150);
  });
}

function setupFilters(){
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.getAttribute('data-filter');
      applySearchAndFilter();
    });
  });
}

// ---------------- INIT ----------------
document.addEventListener('DOMContentLoaded', () => {
  updateCountdown();
  renderAll();
  setupNav();
  setupSearch();
  setupFilters();
  showToast('Progress saves automatically in this browser');
});
