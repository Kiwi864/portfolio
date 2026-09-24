<script setup>
// The Design world — light, editorial, serif-led.
import { designProjects as work } from '../data/designProjects'
</script>

<template>
  <div class="design">
    <!-- NAV -->
    <header class="nav">
      <router-link to="/" class="nav__home">Samuel&nbsp;Tamas</router-link>
      <nav class="nav__links">
        <a href="#work">Work</a>
        <router-link to="/about">About</router-link>
        <a href="#contact">Contact</a>
      </nav>
      <router-link to="/frontend" class="nav__toggle">
        The frontend side <span aria-hidden="true">→</span>
      </router-link>
    </header>

    <!-- HERO -->
    <section class="hero">
      <p class="hero__eyebrow">Designer · art direction · systems</p>
      <h1 class="hero__title">
        I design the <em>quiet</em> parts <br />
        that make the loud parts&nbsp;work.
      </h1>
      <p class="hero__lede">
        Ten years turning fuzzy briefs into brands, editorial, and product
        surfaces with a point of view. I care most about the seams — the
        grid, the type, the transitions nobody notices until they're wrong.
      </p>
    </section>

    <!-- WORK -->
    <section id="work" class="work">
      <div class="section-head">
        <span class="section-head__label">Selected work</span>
        <span class="section-head__rule"></span>
        <span class="section-head__count">04</span>
      </div>

      <router-link
        v-for="p in work"
        :key="p.slug"
        :to="`/design/${p.slug}`"
        class="case"
      >
        <div
          class="case__media"
          :class="{ 'is-motion': p.motion }"
          :style="{ '--tint': p.tint }"
        >
          <video
            v-if="p.coverVideo"
            class="case__video"
            :poster="p.cover"
            autoplay
            loop
            muted
            playsinline
          >
            <source :src="p.coverVideo" type="video/mp4" />
          </video>
          <img
            v-else
            :src="p.cover"
            :class="{ 'is-contain': p.coverFit === 'contain' }"
            :alt="`${p.title} — cover`"
            loading="lazy"
          />
          <span v-if="p.motion" class="case__badge">▶ motion</span>
        </div>
        <div class="case__body">
          <span class="case__n">{{ p.n }}</span>
          <h2 class="case__title">{{ p.title }}</h2>
          <p class="case__kind">{{ p.kind }} · {{ p.year }}</p>
          <p class="case__note">{{ p.note }}</p>
          <div class="case__foot">
            <ul class="case__tags">
              <li v-for="t in p.tags" :key="t">{{ t }}</li>
            </ul>
            <span class="case__open">View case <span aria-hidden="true">→</span></span>
          </div>
        </div>
      </router-link>
    </section>

    <!-- ABOUT -->
    <section id="about" class="about">
      <p class="about__kicker">On approach</p>
      <p class="about__text">
        Good design is mostly <em>editing</em>. I start wide, make too much,
        then cut until only the necessary remains — and then cut one more
        thing. The work should feel inevitable, like it couldn't have been
        any other way.
      </p>
    </section>

    <!-- FOOTER -->
    <footer id="contact" class="foot">
      <div class="foot__lead">
        <p class="foot__kicker">Let's make something deliberate.</p>
        <a class="foot__mail" href="mailto:samco.tamas@gmail.com">
          samco.tamas@gmail.com
        </a>
      </div>
      <div class="foot__meta">
        <div class="foot__soc">
          <a href="https://www.linkedin.com/in/samuel-tama%C5%A1-5a5690356/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:samco.tamas@gmail.com">Email</a>
        </div>
        <router-link to="/frontend" class="foot__cross">
          Cross to the frontend side →
        </router-link>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.design {
  background: var(--d-paper);
  color: var(--d-ink);
  min-height: 100dvh;
  font-family: var(--sans);
  padding-inline: var(--gutter);
}
.design > * {
  max-width: var(--maxw);
  margin-inline: auto;
}

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
.nav__links {
  display: flex;
  gap: 1.75rem;
  font-size: 0.9rem;
}
.nav__links a {
  position: relative;
  color: var(--d-muted);
  transition: color 0.2s;
}
.nav__links a:hover { color: var(--d-ink); }
.nav__toggle {
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  color: var(--d-pigment);
  border: 1px solid var(--d-pigment);
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  transition: background 0.25s, color 0.25s;
}
.nav__toggle:hover {
  background: var(--d-pigment);
  color: var(--d-paper);
}

/* HERO */
.hero {
  padding-block: clamp(2.5rem, 7vw, 5rem) clamp(2rem, 5vw, 3.5rem);
}
.hero__eyebrow {
  font-family: var(--mono);
  font-size: 0.8rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--d-pigment);
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
}
.hero__title {
  font-family: var(--serif);
  font-weight: 340;
  font-size: clamp(2.4rem, 7vw, 5.6rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
}
.hero__title em {
  font-style: italic;
  color: var(--d-pigment);
}
.hero__lede {
  margin-top: clamp(1.75rem, 4vw, 2.5rem);
  max-width: 52ch;
  font-size: clamp(1.05rem, 1.6vw, 1.3rem);
  line-height: 1.5;
  color: var(--d-muted);
}

/* SECTION HEAD */
.section-head {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding-block: 1.25rem;
  border-top: 1px solid var(--d-ink);
}
.section-head__label {
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.section-head__rule {
  flex: 1;
  height: 1px;
  background: var(--d-line);
}
.section-head__count {
  font-family: var(--mono);
  font-size: 0.78rem;
  color: var(--d-muted);
}

/* CASES */
.case {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(1.5rem, 5vw, 4.5rem);
  align-items: center;
  padding-block: clamp(1.75rem, 4vw, 3rem);
  border-bottom: 1px solid var(--d-line);
  color: inherit;
}
.case:nth-child(even) .case__media { order: 2; }

.case__media {
  aspect-ratio: 4 / 5;
  width: 100%;
  max-width: 440px;
  margin-inline: auto;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(130% 100% at 50% 0%, rgba(255, 255, 255, 0.12), transparent 55%),
    var(--tint, var(--d-paper-2));
  box-shadow: 0 1px 0 var(--d-line);
  transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1),
    box-shadow 0.5s ease;
}
.case__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);
}
/* logos shouldn't be cropped — contain them, but the card still fills its width */
.case__media img.is-contain {
  object-fit: contain;
  padding: clamp(1.5rem, 5vw, 2.75rem);
}
/* motion project: the still comes alive with a slow cinematic drift */
.case__media.is-motion img {
  object-fit: cover;
  padding: 0;
  animation: kenburns 22s ease-in-out infinite;
}
.case__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.case__badge {
  position: absolute;
  bottom: 0.85rem;
  left: 0.85rem;
  font-family: var(--mono);
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
}
@keyframes kenburns {
  0% { transform: scale(1.02) translate3d(0, 0, 0); }
  50% { transform: scale(1.13) translate3d(-2%, -1.5%, 0); }
  100% { transform: scale(1.02) translate3d(0, 0, 0); }
}
.case:hover .case__media,
.case:focus-visible .case__media {
  transform: translateY(-6px);
  box-shadow: 0 26px 46px -26px rgba(23, 20, 16, 0.55);
}
.case:hover .case__media img,
.case:focus-visible .case__media img {
  transform: scale(1.04);
}
.case__media::after {
  /* subtle sheen on hover to signal "openable" */
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent 40%, rgba(255, 255, 255, 0.22) 50%, transparent 60%);
  transform: translateX(-100%);
  transition: transform 0.7s ease;
  pointer-events: none;
}
.case:hover .case__media::after { transform: translateX(100%); }

.case__n {
  font-family: var(--mono);
  color: var(--d-pigment);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
}
.case__title {
  font-family: var(--serif);
  font-weight: 380;
  font-size: clamp(2rem, 4.5vw, 3.4rem);
  line-height: 1;
  letter-spacing: -0.02em;
  margin-top: 0.5rem;
}
.case__kind {
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--d-muted);
  margin-top: 0.85rem;
  letter-spacing: 0.03em;
}
.case__note {
  margin-top: 1.1rem;
  max-width: 46ch;
  line-height: 1.55;
  color: #40392f;
}
.case__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.case__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.case__open {
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  color: var(--d-pigment);
  white-space: nowrap;
  transition: gap 0.2s;
}
.case__open span {
  display: inline-block;
  transition: transform 0.25s ease;
}
.case:hover .case__open span,
.case:focus-visible .case__open span {
  transform: translateX(4px);
}
.case__tags li {
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  padding: 0.35rem 0.7rem;
  border: 1px solid var(--d-line);
  border-radius: 999px;
  color: var(--d-muted);
}

/* ABOUT */
.about {
  padding-block: clamp(4rem, 10vw, 8rem);
  display: grid;
  grid-template-columns: minmax(0, 12rem) 1fr;
  gap: clamp(1.5rem, 5vw, 4rem);
  align-items: start;
}
.about__kicker {
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--d-pigment);
  padding-top: 0.6rem;
}
.about__text {
  font-family: var(--serif);
  font-weight: 340;
  font-size: clamp(1.5rem, 3.5vw, 2.6rem);
  line-height: 1.28;
  letter-spacing: -0.01em;
  max-width: 24ch;
}
.about__text em {
  font-style: italic;
  color: var(--d-pigment);
}

/* FOOTER */
.foot {
  border-top: 1px solid var(--d-ink);
  padding-block: clamp(3rem, 8vw, 6rem) clamp(2rem, 5vw, 3rem);
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}
.foot__kicker {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  color: var(--d-muted);
  margin-bottom: 0.75rem;
}
.foot__mail {
  font-family: var(--serif);
  font-size: clamp(1.8rem, 5vw, 3.4rem);
  letter-spacing: -0.02em;
  border-bottom: 2px solid transparent;
  transition: border-color 0.25s;
}
.foot__mail:hover { border-color: var(--d-pigment); }
.foot__meta {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
  text-align: right;
}
.foot__soc {
  display: flex;
  gap: 1.25rem;
  font-family: var(--mono);
  font-size: 0.8rem;
}
.foot__soc a { color: var(--d-muted); transition: color 0.2s; }
.foot__soc a:hover { color: var(--d-ink); }
.foot__cross {
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--d-pigment);
}

@media (max-width: 760px) {
  .case {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .case:nth-child(even) .case__media { order: 0; }
  .case__media { aspect-ratio: 5 / 4; }
  .about {
    grid-template-columns: 1fr;
  }
  .foot__meta {
    align-items: flex-start;
    text-align: left;
  }
}
</style>
