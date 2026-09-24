<script setup>
// The Frontend world — dark, terminal, mono-led.
import { ref, onMounted, onBeforeUnmount } from 'vue'

const projects = [
  {
    path: '~/medium.oryks.org',
    title: 'Medium — recreation',
    url: 'https://medium.oryks.org',
    desc: 'A full recreation of Medium.com — read and write stories, feeds and pagination — hand-built in vanilla JavaScript, HTML and CSS, no framework. Adds a custom AI image generator so writers create article artwork inline via a third-party image model.',
    stack: ['JavaScript', 'HTML', 'CSS', 'AI image API'],
    metric: 'live · medium.oryks.org',
    status: 'shipped',
  },
  {
    path: '~/kocky.oryks.org',
    title: 'Kocky — dice game',
    url: 'https://kocky.oryks.org',
    desc: 'An online version of the Farkle dice game from Kingdom Come: Deliverance II. Public and private multiplayer lobbies, configurable stakes, and roll / keep / bank mechanics, wrapped in a medieval tavern theme ("The Tavern Awaits").',
    stack: ['TypeScript', 'Node.js', 'HTML', 'CSS'],
    metric: 'live · kocky.oryks.org',
    status: 'shipped',
  },
  {
    path: '~/workspace.oryks.org',
    title: 'Skyro Workspace',
    url: 'https://workspace.oryks.org',
    desc: 'A hackathon-built hub that puts a Skyro student\'s whole study life in one place — Google Drive, Meet and Discord, schedules and reminders, with AI built in. Google OAuth sign-in or guest access.',
    stack: ['Node.js', 'Google OAuth', 'Discord API', 'AI'],
    metric: 'live · workspace.oryks.org',
    status: 'shipped',
  },
]

const stack = [
  'JavaScript', 'TypeScript', 'Node.js', 'Elysia', 'Prisma',
  'HTML', 'CSS', 'Vue', 'Vanilla JS', 'WebSockets',
  'Accessibility', 'Responsive',
]

// tiny typed-hero effect (respects reduced motion)
const typed = ref('')
const full = 'const maker = { design, code };'
let timer = null
onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    typed.value = full
    return
  }
  let i = 0
  timer = setInterval(() => {
    typed.value = full.slice(0, ++i)
    if (i >= full.length) clearInterval(timer)
  }, 45)
})
onBeforeUnmount(() => clearInterval(timer))
</script>

<template>
  <div class="fe">
    <!-- NAV -->
    <header class="nav">
      <router-link to="/" class="nav__home">
        <span class="nav__prompt">samuel@tamas</span>:<span class="nav__path">~</span>$
      </router-link>
      <nav class="nav__links">
        <a href="#work">work</a>
        <a href="#stack">stack</a>
        <router-link to="/about">about</router-link>
        <a href="#contact">contact</a>
      </nav>
      <router-link to="/design" class="nav__toggle">
        <span aria-hidden="true">←</span> the design side
      </router-link>
    </header>

    <!-- HERO -->
    <section class="hero">
      <p class="hero__eyebrow">// frontend engineer · interfaces &amp; motion</p>
      <h1 class="hero__title">
        I build interfaces that<br />
        <span class="hero__accent">feel</span> as good as they look.
      </h1>
      <pre class="hero__code"><code>{{ typed }}<span class="cursor">▋</span></code></pre>
      <p class="hero__lede">
        A designer who ships production code. I turn design systems into fast,
        accessible, resilient frontends — and I sweat the 16ms.
      </p>
    </section>

    <!-- WORK -->
    <section id="work" class="work">
      <div class="section-head">
        <span class="section-head__label">$ ls ~/projects</span>
        <span class="section-head__rule"></span>
        <span class="section-head__count">{{ projects.length }} dirs</span>
      </div>

      <a
        v-for="p in projects"
        :key="p.path"
        class="proj"
        :href="p.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="proj__head">
          <span class="proj__path">{{ p.path }}</span>
          <span class="proj__status" :class="'is-' + p.status">{{ p.status }}</span>
        </div>
        <h2 class="proj__title">{{ p.title }}</h2>
        <p class="proj__desc">{{ p.desc }}</p>
        <div class="proj__foot">
          <ul class="proj__stack">
            <li v-for="s in p.stack" :key="s">{{ s }}</li>
          </ul>
          <span class="proj__metric">{{ p.metric }} <span aria-hidden="true">↗</span></span>
        </div>
      </a>
    </section>

    <!-- STACK -->
    <section id="stack" class="stack">
      <div class="section-head">
        <span class="section-head__label">$ cat stack.json</span>
        <span class="section-head__rule"></span>
      </div>
      <ul class="stack__grid">
        <li v-for="s in stack" :key="s" class="stack__item">{{ s }}</li>
      </ul>
    </section>

    <!-- FOOTER -->
    <footer id="contact" class="foot">
      <p class="foot__kicker">// let's build something fast</p>
      <a class="foot__mail" href="mailto:samco.tamas@gmail.com">
        samco.tamas@gmail.com
      </a>
      <div class="foot__meta">
        <div class="foot__soc">
          <a href="https://github.com/Kiwi864" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/samuel-tama%C5%A1-5a5690356/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:samco.tamas@gmail.com">Email</a>
        </div>
        <router-link to="/design" class="foot__cross">
          ← cross to the design side
        </router-link>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.fe {
  background: var(--f-slate);
  color: var(--f-foam);
  min-height: 100dvh;
  font-family: var(--mono);
  padding-inline: var(--gutter);
  background-image:
    linear-gradient(var(--f-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--f-line) 1px, transparent 1px);
  background-size: 46px 46px;
  background-attachment: fixed;
}
.fe > * {
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
  border-bottom: 1px solid var(--f-line);
  flex-wrap: wrap;
}
.nav__home { font-size: 0.9rem; }
.nav__prompt { color: var(--f-signal); }
.nav__path { color: var(--f-dim); }
.nav__links {
  display: flex;
  gap: 1.5rem;
  font-size: 0.85rem;
}
.nav__links a { color: var(--f-dim); transition: color 0.2s; }
.nav__links a:hover { color: var(--f-foam); }
.nav__links a::before { content: ''; }
.nav__toggle {
  font-size: 0.78rem;
  letter-spacing: 0.03em;
  color: var(--f-signal);
  border: 1px solid var(--f-line);
  padding: 0.5rem 0.85rem;
  border-radius: 4px;
  transition: border-color 0.25s, background 0.25s;
}
.nav__toggle:hover {
  border-color: var(--f-signal);
  background: rgba(125, 226, 209, 0.08);
}

/* HERO */
.hero {
  padding-block: clamp(4rem, 12vw, 8rem) clamp(3rem, 8vw, 6rem);
}
.hero__eyebrow {
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  color: var(--f-signal);
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
}
.hero__title {
  font-weight: 500;
  font-size: clamp(2.2rem, 6.5vw, 5rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
}
.hero__accent {
  color: var(--f-signal);
  font-style: italic;
}
.hero__code {
  margin-top: clamp(1.75rem, 4vw, 2.5rem);
  background: var(--f-slate-2);
  border: 1px solid var(--f-line);
  border-left: 2px solid var(--f-signal);
  border-radius: 4px;
  padding: 1rem 1.25rem;
  font-size: clamp(0.85rem, 1.6vw, 1.05rem);
  overflow-x: auto;
  color: var(--f-foam);
}
.hero__code .cursor {
  color: var(--f-signal);
  animation: blink 1.1s steps(1) infinite;
}
@keyframes blink { 50% { opacity: 0; } }
.hero__lede {
  margin-top: 2rem;
  max-width: 56ch;
  font-size: clamp(0.95rem, 1.5vw, 1.15rem);
  line-height: 1.6;
  color: var(--f-dim);
}

/* SECTION HEAD */
.section-head {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding-block: 1rem;
  border-top: 1px solid var(--f-line);
}
.section-head__label {
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  color: var(--f-signal);
}
.section-head__rule { flex: 1; height: 1px; background: var(--f-line); }
.section-head__count { font-size: 0.78rem; color: var(--f-dim); }

/* PROJECTS */
.proj {
  display: block;
  color: inherit;
  position: relative;
  padding: clamp(1.75rem, 4vw, 2.75rem);
  border: 1px solid var(--f-line);
  border-top: none;
  background: rgba(18, 22, 28, 0.6);
  backdrop-filter: blur(2px);
  transition: background 0.3s, border-color 0.3s;
}
.proj:first-of-type { border-top: 1px solid var(--f-line); }
.proj:hover {
  background: rgba(125, 226, 209, 0.05);
  border-color: rgba(125, 226, 209, 0.3);
}
.proj__head {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
}
.proj__path { color: var(--f-signal); font-size: 0.85rem; }
.proj__status {
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  border: 1px solid currentColor;
}
.proj__status.is-shipped { color: var(--f-signal); }
.proj__status.is-wip { color: #f2c14e; }
.proj__title {
  font-size: clamp(1.5rem, 3.5vw, 2.4rem);
  font-weight: 500;
  letter-spacing: -0.03em;
  margin-top: 1rem;
  font-family: var(--sans);
}
.proj__desc {
  margin-top: 0.85rem;
  max-width: 60ch;
  line-height: 1.6;
  color: var(--f-dim);
  font-family: var(--sans);
  font-size: 0.98rem;
}
.proj__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.proj__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.proj__stack li {
  font-size: 0.72rem;
  padding: 0.3rem 0.6rem;
  border: 1px solid var(--f-line);
  border-radius: 4px;
  color: var(--f-foam);
}
.proj__metric { font-size: 0.78rem; color: var(--f-signal); }

/* STACK */
.stack { padding-top: clamp(3rem, 7vw, 5rem); }
.stack__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1px;
  background: var(--f-line);
  border: 1px solid var(--f-line);
  margin-top: 1.5rem;
}
.stack__item {
  background: var(--f-slate);
  padding: 1.1rem 1.25rem;
  font-size: 0.88rem;
  color: var(--f-dim);
  transition: color 0.2s, background 0.2s;
}
.stack__item::before {
  content: '› ';
  color: var(--f-signal);
}
.stack__item:hover { color: var(--f-foam); background: var(--f-slate-2); }

/* FOOTER */
.foot {
  border-top: 1px solid var(--f-line);
  margin-top: clamp(3rem, 8vw, 6rem);
  padding-block: clamp(3rem, 8vw, 5rem) clamp(2rem, 5vw, 3rem);
}
.foot__kicker { color: var(--f-signal); font-size: 0.85rem; }
.foot__mail {
  display: inline-block;
  margin-top: 1rem;
  font-family: var(--sans);
  font-size: clamp(1.6rem, 5vw, 3.2rem);
  letter-spacing: -0.03em;
  border-bottom: 2px solid transparent;
  transition: border-color 0.25s;
}
.foot__mail:hover { border-color: var(--f-signal); }
.foot__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--f-line);
}
.foot__soc { display: flex; gap: 1.25rem; font-size: 0.82rem; }
.foot__soc a { color: var(--f-dim); transition: color 0.2s; }
.foot__soc a:hover { color: var(--f-foam); }
.foot__cross { font-size: 0.82rem; color: var(--f-signal); }

</style>
