<script setup>
// Individual case study — stays inside the light Design world.
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getDesignProject, getAdjacent } from '../data/designProjects'

const route = useRoute()
const project = computed(() => getDesignProject(route.params.slug))
const next = computed(() => getAdjacent(route.params.slug).next)
</script>

<template>
  <div class="design">
    <!-- NAV -->
    <header class="nav">
      <router-link to="/" class="nav__home">Samuel&nbsp;Tamas</router-link>
      <router-link to="/design" class="nav__back">
        <span aria-hidden="true">←</span> All design work
      </router-link>
      <router-link to="/frontend" class="nav__toggle">
        The frontend side <span aria-hidden="true">→</span>
      </router-link>
    </header>

    <template v-if="project">
      <!-- HERO -->
      <section class="phero">
        <span class="phero__n">{{ project.n }} — {{ project.kind }}</span>
        <h1 class="phero__title">{{ project.title }}</h1>
        <p class="phero__summary">{{ project.summary }}</p>
      </section>

      <!-- META -->
      <section class="meta">
        <div class="meta__col">
          <span class="meta__k">Role</span>
          <span class="meta__v">{{ project.role }}</span>
        </div>
        <div class="meta__col">
          <span class="meta__k">Timeline</span>
          <span class="meta__v">{{ project.timeline }}</span>
        </div>
        <div class="meta__col">
          <span class="meta__k">Client</span>
          <span class="meta__v">{{ project.client }}</span>
        </div>
        <div class="meta__col meta__col--wide">
          <span class="meta__k">Deliverables</span>
          <ul class="meta__list">
            <li v-for="d in project.deliverables" :key="d">{{ d }}</li>
          </ul>
        </div>
      </section>

      <!-- COVER -->
      <div
        class="cover"
        :class="{ 'is-motion': project.motion, 'is-contain': project.coverFit === 'contain' }"
        :style="{ '--tint': project.tint }"
      >
        <video
          v-if="project.coverVideo"
          class="cover__video"
          :poster="project.cover"
          autoplay
          loop
          muted
          playsinline
        >
          <source :src="project.coverVideo" type="video/mp4" />
        </video>
        <img v-else :src="project.heroCover || project.cover" :alt="`${project.title} — key screen`" />
        <span v-if="project.motion" class="cover__badge">▶ motion · plays on loop</span>
      </div>

      <!-- NOTES -->
      <section class="notes">
        <article v-for="(s, i) in project.sections" :key="i" class="note">
          <span class="note__idx">{{ String(i + 1).padStart(2, '0') }}</span>
          <h2 class="note__heading">{{ s.heading }}</h2>
          <p class="note__body">{{ s.body }}</p>
        </article>
      </section>

      <!-- GALLERY -->
      <section class="gallery">
        <div class="section-head">
          <span class="section-head__label">Gallery</span>
          <span class="section-head__rule"></span>
          <span class="section-head__count">{{ project.gallery.length }}</span>
        </div>
        <div
          class="gallery__grid"
          :class="{ 'gallery__grid--few': project.gallery.length <= 2 }"
          :style="{ '--tint': project.tint }"
        >
          <figure
            v-for="(g, i) in project.gallery"
            :key="i"
            class="shot"
            :class="{ 'is-motion': project.motion }"
          >
            <div class="shot__frame">
              <video
                v-if="g.video"
                class="shot__video"
                :poster="g.src"
                autoplay
                loop
                muted
                playsinline
              >
                <source :src="g.video" type="video/mp4" />
              </video>
              <img v-else :src="g.src" :alt="g.label" loading="lazy" />
              <span v-if="project.motion" class="shot__badge">▶</span>
            </div>
            <figcaption class="shot__cap">{{ g.label }}</figcaption>
          </figure>
        </div>
      </section>

      <!-- RESULTS -->
      <section class="results">
        <span class="results__label">Outcome</span>
        <div class="results__grid">
          <div v-for="r in project.results" :key="r.label" class="stat">
            <span class="stat__value">{{ r.value }}</span>
            <span class="stat__label">{{ r.label }}</span>
          </div>
        </div>
      </section>

      <!-- NEXT -->
      <router-link v-if="next" :to="`/design/${next.slug}`" class="nextp">
        <span class="nextp__k">Next case</span>
        <span class="nextp__title">{{ next.title }} <span aria-hidden="true">→</span></span>
      </router-link>
    </template>

    <!-- NOT FOUND -->
    <section v-else class="missing">
      <h1 class="missing__title">That case isn't here.</h1>
      <router-link to="/design" class="missing__link">← Back to design work</router-link>
    </section>

    <!-- FOOTER -->
    <footer class="foot">
      <a class="foot__mail" href="mailto:samco.tamas@gmail.com">
        samco.tamas@gmail.com
      </a>
      <router-link to="/design" class="foot__cross">All design work →</router-link>
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
.nav__back {
  font-family: var(--mono);
  font-size: 0.82rem;
  color: var(--d-muted);
  transition: color 0.2s;
}
.nav__back:hover { color: var(--d-ink); }
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
.nav__toggle:hover { background: var(--d-pigment); color: var(--d-paper); }

/* HERO */
.phero {
  padding-block: clamp(3rem, 9vw, 6.5rem) clamp(2rem, 5vw, 3.5rem);
  max-width: 60rem;
}
.phero__n {
  font-family: var(--mono);
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--d-pigment);
}
.phero__title {
  font-family: var(--serif);
  font-weight: 340;
  font-size: clamp(3rem, 10vw, 7rem);
  line-height: 0.98;
  letter-spacing: -0.03em;
  margin-top: 1.25rem;
}
.phero__summary {
  margin-top: clamp(1.5rem, 4vw, 2.25rem);
  max-width: 52ch;
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  line-height: 1.45;
  font-family: var(--serif);
  font-weight: 330;
  color: #40392f;
}

/* META */
.meta {
  display: grid;
  grid-template-columns: repeat(3, auto) 1fr;
  gap: clamp(1.25rem, 4vw, 3rem);
  padding-block: clamp(1.75rem, 4vw, 2.5rem);
  border-top: 1px solid var(--d-ink);
  border-bottom: 1px solid var(--d-line);
}
.meta__k {
  display: block;
  font-family: var(--mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--d-muted);
  margin-bottom: 0.6rem;
}
.meta__v { font-size: 0.98rem; }
.meta__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.meta__list li {
  font-family: var(--mono);
  font-size: 0.72rem;
  padding: 0.35rem 0.7rem;
  border: 1px solid var(--d-line);
  border-radius: 999px;
  color: var(--d-muted);
}

/* COVER */
.cover {
  position: relative;
  margin-top: clamp(1.5rem, 4vw, 2.5rem);
  width: 100%;
  height: min(52vh, 430px);
  border-radius: 4px;
  overflow: hidden;
  background:
    radial-gradient(120% 120% at 50% 0%, rgba(255, 255, 255, 0.14), transparent 60%),
    var(--tint, var(--d-paper-2));
}
.cover img,
.cover__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
/* logos are contained (never cropped) while the stage still spans full width */
.cover.is-contain img {
  object-fit: contain;
  padding: clamp(1.5rem, 5vw, 3.5rem);
}
/* motion still fallback drifts cinematically (video plays on its own) */
.cover.is-motion img {
  animation: kenburns 24s ease-in-out infinite;
}
.cover__badge {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 2;
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
}
@keyframes kenburns {
  0% { transform: scale(1.03) translate3d(0, 0, 0); }
  50% { transform: scale(1.14) translate3d(-2%, -1.5%, 0); }
  100% { transform: scale(1.03) translate3d(0, 0, 0); }
}

/* NOTES */
.notes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(1.5rem, 5vw, 4rem);
  padding-block: clamp(3rem, 7vw, 5rem);
  border-bottom: 1px solid var(--d-line);
}
.note__idx {
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--d-pigment);
}
.note__heading {
  font-family: var(--serif);
  font-weight: 360;
  font-size: clamp(1.6rem, 3.2vw, 2.4rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  margin-top: 0.6rem;
}
.note__body {
  margin-top: 1rem;
  max-width: 46ch;
  line-height: 1.6;
  color: #40392f;
}

/* SECTION HEAD (shared style) */
.section-head {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding-block: 1.25rem;
}
.section-head__label {
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.section-head__rule { flex: 1; height: 1px; background: var(--d-line); }
.section-head__count { font-family: var(--mono); font-size: 0.78rem; color: var(--d-muted); }

/* GALLERY (masonry via columns) */
.gallery { padding-block: clamp(1.5rem, 4vw, 2.5rem) clamp(2rem, 5vw, 3rem); }
.gallery__grid {
  columns: 4;
  column-gap: clamp(0.75rem, 2vw, 1.25rem);
  margin-top: 1.5rem;
}
.shot {
  margin: 0 0 clamp(0.75rem, 2vw, 1.5rem);
  break-inside: avoid;
}
.shot__frame {
  border-radius: 4px;
  overflow: hidden;
  background: var(--tint, var(--d-paper-2));
  box-shadow: 0 1px 0 var(--d-line);
  transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1),
    box-shadow 0.5s ease;
}
.shot__frame img,
.shot__frame video { width: 100%; height: auto; display: block; }
.shot:hover .shot__frame {
  transform: translateY(-4px);
  box-shadow: 0 22px 40px -26px rgba(23, 20, 16, 0.5);
}
/* motion shots animate + carry a play glyph */
.shot.is-motion .shot__frame { position: relative; }
.shot.is-motion .shot__frame img { animation: kenburns 22s ease-in-out infinite; }
.shot.is-motion:nth-child(2) .shot__frame img { animation-duration: 27s; animation-direction: reverse; }
.shot__badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  font-size: 0.7rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 999px;
}
/* galleries with only a couple of pieces sit side-by-side, not in a lopsided column grid */
.gallery__grid--few {
  columns: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(0.75rem, 2vw, 1.5rem);
}
.gallery__grid--few .shot { margin: 0; }
.shot__cap {
  margin-top: 0.6rem;
  font-family: var(--mono);
  font-size: 0.74rem;
  letter-spacing: 0.03em;
  color: var(--d-muted);
}

/* RESULTS */
.results {
  padding-block: clamp(3rem, 7vw, 5rem);
}
.results__label {
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--d-pigment);
}
.results__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1.25rem, 4vw, 3rem);
  margin-top: 2rem;
}
.stat__value {
  display: block;
  font-family: var(--serif);
  font-weight: 340;
  font-size: clamp(2.8rem, 7vw, 5rem);
  line-height: 1;
  letter-spacing: -0.03em;
}
.stat__label {
  display: block;
  margin-top: 0.6rem;
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  color: var(--d-muted);
}

/* NEXT */
.nextp {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-block: clamp(2.5rem, 6vw, 4rem);
  border-top: 1px solid var(--d-ink);
  color: inherit;
}
.nextp__k {
  font-family: var(--mono);
  font-size: 0.78rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--d-muted);
}
.nextp__title {
  font-family: var(--serif);
  font-weight: 340;
  font-size: clamp(2.4rem, 7vw, 5rem);
  letter-spacing: -0.03em;
  line-height: 1;
}
.nextp__title span { display: inline-block; transition: transform 0.3s ease; }
.nextp:hover .nextp__title span { transform: translateX(10px); }

/* MISSING */
.missing { padding-block: clamp(5rem, 15vw, 10rem); }
.missing__title {
  font-family: var(--serif);
  font-weight: 340;
  font-size: clamp(2.2rem, 6vw, 4rem);
}
.missing__link {
  display: inline-block;
  margin-top: 1.5rem;
  font-family: var(--mono);
  font-size: 0.85rem;
  color: var(--d-pigment);
}

/* FOOTER */
.foot {
  border-top: 1px solid var(--d-line);
  padding-block: clamp(2.5rem, 6vw, 4rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.foot__mail {
  font-family: var(--serif);
  font-size: clamp(1.4rem, 4vw, 2.4rem);
  letter-spacing: -0.02em;
  border-bottom: 2px solid transparent;
  transition: border-color 0.25s;
}
.foot__mail:hover { border-color: var(--d-pigment); }
.foot__cross { font-family: var(--mono); font-size: 0.82rem; color: var(--d-pigment); }

@media (max-width: 1100px) {
  .gallery__grid { columns: 3; }
}
@media (max-width: 760px) {
  .gallery__grid { columns: 2; }
}
@media (max-width: 760px) {
  .meta { grid-template-columns: 1fr 1fr; }
  .meta__col--wide { grid-column: 1 / -1; }
  .notes { grid-template-columns: 1fr; }
  .results__grid { grid-template-columns: 1fr; gap: 1.5rem; }
}
@media (max-width: 520px) {
  .gallery__grid { columns: 1; }
}
</style>
