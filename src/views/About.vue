<script setup>
// About — the person behind both worlds. Content sourced from the CV.
// Bridge styling: design-world paper + serif, frontend-world mono labels,
// both accents (vermilion = design, teal = dev) meeting at a seam.
const facets = [
  {
    side: 'design',
    label: 'As a designer',
    line: 'Type, systems and art direction — turning fuzzy needs into interfaces that feel inevitable.',
    tags: ['UI/UX Design', 'Figma', 'Brand'],
  },
  {
    side: 'dev',
    label: 'As a developer',
    line: 'I ship what I design — accessible, resilient frontends built from scratch, down to the details.',
    tags: ['HTML / CSS / JS', 'TypeScript', 'Node.js'],
  },
]

const experience = [
  {
    date: 'Sep 2026 — Present',
    role: 'Design Internship',
    org: 'Skyro — AI & IT High School',
    meta: 'Internship · Bratislava, Slovakia · Hybrid',
  },
  {
    date: 'Jul 2026',
    role: 'Activities Coordinator',
    org: 'Hemisféra',
    meta: 'Seasonal · Bratislava, Slovakia · On-site',
  },
  {
    date: 'Mar 2026',
    role: 'Leadership',
    body: 'Led a team of 12 through a week-long competitive challenge — juggling unexpected problems, pressure and rival teams. It sharpened my communication, leadership and decision-making, and taught me how to motivate people and help them do their best work.',
  },
  {
    date: '2026',
    role: 'Web Development',
    body: 'Spent six months building a Medium.com-inspired web app with a colleague, focused on the frontend. The project won the best-project award.',
  },
]

const education = [
  {
    date: '2025 – 2029',
    place: 'Secondary School of Information Technology and Artificial Intelligence — Skyro',
  },
]

const skills = [
  { name: 'HTML / CSS / JS', level: 'Highly skilled', dots: 4, side: 'dev' },
  { name: 'UI/UX Design', level: 'Advanced', dots: 3, side: 'design' },
  { name: 'Communication', level: 'Highly skilled', dots: 4, side: 'both' },
  { name: 'Figma', level: 'Competent', dots: 2, side: 'design' },
]

const languages = [
  { name: 'English', level: 'B2', dots: 4 },
  { name: 'German', level: 'A2', dots: 2 },
]
</script>

<template>
  <div class="about">
    <!-- NAV -->
    <header class="nav">
      <router-link to="/" class="nav__home">Samuel&nbsp;Tamaš</router-link>
      <nav class="nav__links">
        <router-link to="/design">Design</router-link>
        <router-link to="/frontend">Frontend</router-link>
      </nav>
    </header>

    <!-- HERO -->
    <section class="hero">
      <div class="hero__text">
        <p class="eyebrow">About</p>
        <h1 class="hero__name">Samuel&nbsp;Tamaš</h1>
        <p class="hero__role">
          <span class="ink-design">Designer</span>
          <span class="hero__amp">&amp;</span>
          <span class="ink-dev">Frontend&nbsp;Developer</span>
        </p>
        <p class="hero__bio">
          I'm a designer and frontend developer drawn to building digital
          products that are both functional and visually striking. I love
          connecting design, technology and people — and my real strength is
          <em>listening</em>: understanding what others need and turning it
          into something meaningful.
        </p>
        <div class="hero__contacts">
          <a href="mailto:samco.tamas@gmail.com">samco.tamas@gmail.com</a>
          <a
            href="https://www.linkedin.com/in/samuel-tama%C5%A1-5a5690356/"
            target="_blank"
            rel="noopener noreferrer"
          >LinkedIn <span aria-hidden="true">↗</span></a>
          <a
            href="https://github.com/Kiwi864"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <!-- FACETS -->
    <section class="facets">
      <article
        v-for="f in facets"
        :key="f.side"
        class="facet"
        :class="'is-' + f.side"
      >
        <span class="facet__label">{{ f.label }}</span>
        <p class="facet__line">{{ f.line }}</p>
        <ul class="facet__tags">
          <li v-for="t in f.tags" :key="t">{{ t }}</li>
        </ul>
      </article>
    </section>

    <!-- EXPERIENCE + EDUCATION -->
    <section class="cols">
      <div class="col">
        <div class="section-head">
          <span class="section-head__label">Experience</span>
          <span class="section-head__rule"></span>
        </div>
        <article v-for="e in experience" :key="e.role" class="entry">
          <span class="entry__date">{{ e.date }}</span>
          <h3 class="entry__role">{{ e.role }}</h3>
          <p v-if="e.org" class="entry__org">{{ e.org }}</p>
          <p v-if="e.meta" class="entry__meta">{{ e.meta }}</p>
          <p v-if="e.body" class="entry__body">{{ e.body }}</p>
        </article>
      </div>

      <div class="col">
        <div class="section-head">
          <span class="section-head__label">Education</span>
          <span class="section-head__rule"></span>
        </div>
        <article v-for="ed in education" :key="ed.place" class="entry">
          <span class="entry__date">{{ ed.date }}</span>
          <p class="entry__place">{{ ed.place }}</p>
        </article>

        <div class="section-head section-head--gap">
          <span class="section-head__label">Languages</span>
          <span class="section-head__rule"></span>
        </div>
        <ul class="meters">
          <li v-for="l in languages" :key="l.name" class="meter">
            <span class="meter__name">{{ l.name }}</span>
            <span class="meter__track" aria-hidden="true">
              <span v-for="n in 6" :key="n" class="dot" :class="{ on: n <= l.dots }"></span>
            </span>
            <span class="meter__level">{{ l.level }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- SKILLS -->
    <section class="skills">
      <div class="section-head">
        <span class="section-head__label">Skills</span>
        <span class="section-head__rule"></span>
      </div>
      <ul class="meters meters--wide">
        <li
          v-for="s in skills"
          :key="s.name"
          class="meter"
          :class="'side-' + s.side"
        >
          <span class="meter__name">{{ s.name }}</span>
          <span class="meter__track" aria-hidden="true">
            <span v-for="n in 4" :key="n" class="dot" :class="{ on: n <= s.dots }"></span>
          </span>
          <span class="meter__level">{{ s.level }}</span>
        </li>
      </ul>
    </section>

    <!-- FOOTER -->
    <footer class="foot">
      <p class="foot__kicker">Two minds, one maker.</p>
      <a class="foot__mail" href="mailto:samco.tamas@gmail.com">samco.tamas@gmail.com</a>
      <div class="foot__nav">
        <router-link to="/design">The design side <span aria-hidden="true">→</span></router-link>
        <router-link to="/frontend">The frontend side <span aria-hidden="true">→</span></router-link>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.about {
  background: var(--d-paper);
  color: var(--d-ink);
  min-height: 100dvh;
  font-family: var(--sans);
  padding-inline: var(--gutter);
  /* two accents for the two crafts */
  --dev: #12796b;
}
.about > * {
  max-width: var(--maxw);
  margin-inline: auto;
}

.eyebrow {
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--d-pigment);
}
.ink-design { color: var(--d-pigment); }
.ink-dev { color: var(--dev); }

/* NAV */
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-block: clamp(1.25rem, 3vw, 2rem);
  border-bottom: 1px solid var(--d-line);
  flex-wrap: wrap;
}
.nav__home {
  font-family: var(--serif);
  font-style: italic;
  font-size: 1.15rem;
}
.nav__links { display: flex; gap: 1.75rem; font-size: 0.9rem; }
.nav__links a { color: var(--d-muted); transition: color 0.2s; }
.nav__links a:hover { color: var(--d-ink); }

/* HERO */
.hero {
  padding-block: clamp(2.5rem, 7vw, 5.5rem);
}
.hero__text { max-width: 60rem; }
.hero__name {
  font-family: var(--serif);
  font-weight: 340;
  font-size: clamp(2.6rem, 7vw, 5.5rem);
  line-height: 1;
  letter-spacing: -0.02em;
  margin-top: 1rem;
}
.hero__role {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.75rem;
  align-items: baseline;
  margin-top: 1.1rem;
  font-family: var(--mono);
  font-size: clamp(0.9rem, 1.6vw, 1.15rem);
  letter-spacing: 0.02em;
}
.hero__amp { color: var(--d-muted); }
.hero__bio {
  margin-top: clamp(1.5rem, 3vw, 2rem);
  max-width: 52ch;
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  line-height: 1.55;
  color: #40392f;
}
.hero__bio em { font-style: italic; color: var(--d-pigment); }
.hero__contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.5rem;
  margin-top: 1.75rem;
  font-family: var(--mono);
  font-size: 0.82rem;
}
.hero__contacts a {
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s, color 0.2s;
}
.hero__contacts a:hover { border-color: var(--d-pigment); }
.hero__contacts .is-muted { color: var(--d-muted); }

/* FACETS */
.facets {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(1rem, 3vw, 2rem);
  padding-block: clamp(1rem, 3vw, 2rem);
}
.facet {
  border: 1px solid var(--d-line);
  border-top: 3px solid var(--accent, var(--d-line));
  border-radius: 4px;
  padding: clamp(1.25rem, 3vw, 2rem);
  background: var(--d-paper-2);
}
.facet.is-design { --accent: var(--d-pigment); }
.facet.is-dev { --accent: var(--dev); }
.facet__label {
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}
.facet__line {
  font-family: var(--serif);
  font-weight: 340;
  font-size: clamp(1.15rem, 2vw, 1.55rem);
  line-height: 1.28;
  margin-top: 0.85rem;
}
.facet__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.25rem;
}
.facet__tags li {
  font-family: var(--mono);
  font-size: 0.72rem;
  padding: 0.32rem 0.65rem;
  border: 1px solid var(--d-line);
  border-radius: 999px;
  color: var(--d-muted);
}

/* SECTION HEAD */
.section-head {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding-block: 1rem;
  border-top: 1px solid var(--d-ink);
}
.section-head--gap { margin-top: 2.5rem; }
.section-head__label {
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.section-head__rule { flex: 1; height: 1px; background: var(--d-line); }

/* COLS: experience + education */
.cols {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: clamp(1.5rem, 5vw, 4.5rem);
  padding-block: clamp(2rem, 5vw, 3.5rem);
}
.entry {
  padding-block: clamp(1.25rem, 3vw, 1.75rem);
  border-bottom: 1px solid var(--d-line);
}
.entry__date {
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  color: var(--dev);
}
.entry__role {
  font-family: var(--serif);
  font-weight: 360;
  font-size: clamp(1.4rem, 2.6vw, 2rem);
  letter-spacing: -0.01em;
  margin-top: 0.35rem;
}
.entry__org {
  margin-top: 0.3rem;
  font-family: var(--serif);
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  color: var(--d-ink);
}
.entry__meta {
  margin-top: 0.4rem;
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.03em;
  color: var(--d-muted);
}
.entry__body {
  margin-top: 0.75rem;
  max-width: 52ch;
  line-height: 1.55;
  color: #40392f;
}
.entry__place {
  margin-top: 0.4rem;
  font-family: var(--serif);
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  line-height: 1.3;
}

/* METERS (languages + skills) */
.meters { display: grid; gap: 0.9rem; margin-top: 1.25rem; }
.meters--wide {
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem clamp(1.5rem, 5vw, 4rem);
  margin-top: 1.5rem;
}
.meter {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 0.75rem 1rem;
  padding-bottom: 0.9rem;
  border-bottom: 1px solid var(--d-line);
}
.meter__name { font-size: 0.98rem; }
.meter__track { display: inline-flex; gap: 5px; }
.dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  border: 1px solid var(--d-muted);
}
.dot.on { background: var(--d-ink); border-color: var(--d-ink); }
.side-design .dot.on { background: var(--d-pigment); border-color: var(--d-pigment); }
.side-dev .dot.on { background: var(--dev); border-color: var(--dev); }
.meter__level {
  font-family: var(--mono);
  font-size: 0.72rem;
  color: var(--d-muted);
  min-width: 8ch;
  text-align: right;
}

.skills { padding-block: clamp(1rem, 3vw, 2rem) clamp(2rem, 5vw, 3.5rem); }

/* FOOTER */
.foot {
  border-top: 1px solid var(--d-ink);
  padding-block: clamp(3rem, 7vw, 5rem) clamp(2rem, 5vw, 3rem);
}
.foot__kicker {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  color: var(--d-muted);
}
.foot__mail {
  display: inline-block;
  margin-top: 0.75rem;
  font-family: var(--serif);
  font-size: clamp(1.8rem, 5vw, 3.4rem);
  letter-spacing: -0.02em;
  border-bottom: 2px solid transparent;
  transition: border-color 0.25s;
}
.foot__mail:hover { border-color: var(--d-pigment); }
.foot__nav {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
  font-family: var(--mono);
  font-size: 0.82rem;
}
.foot__nav a:first-child { color: var(--d-pigment); }
.foot__nav a:last-child { color: var(--dev); }

@media (max-width: 800px) {
  .facets { grid-template-columns: 1fr; }
  .cols { grid-template-columns: 1fr; }
  .meters--wide { grid-template-columns: 1fr; }
}
</style>
