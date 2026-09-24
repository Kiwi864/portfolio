<script setup>
// The splitter. One page, two worlds meeting at a seam.
// Left = Design (light, serif). Right = Frontend (dark, mono).
</script>

<template>
  <main class="split" aria-label="Choose a world">
    <!-- Centered wordmark: blend-difference so it reads on both sides -->
    <div class="mark">
      <span class="mark__name">SAMUEL&nbsp;TAMAS</span>
      <span class="mark__sub">maker with two minds</span>
    </div>

    <!-- DESIGN -->
    <router-link to="/design" class="panel panel--design">
      <span class="panel__idx">01</span>
      <div class="panel__body">
        <h1 class="panel__word">Design</h1>
        <p class="panel__desc">Visual systems, type &amp; art direction.</p>
      </div>
      <span class="panel__enter">Enter&nbsp;→</span>
    </router-link>

    <!-- FRONTEND -->
    <router-link to="/frontend" class="panel panel--frontend">
      <span class="panel__idx">02</span>
      <div class="panel__body">
        <h1 class="panel__word">Frontend</h1>
        <p class="panel__desc">// interfaces, motion &amp; performance</p>
      </div>
      <span class="panel__enter">enter&nbsp;→</span>
    </router-link>

    <div class="hint" aria-hidden="true">choose a side</div>
  </main>
</template>

<style scoped>
.split {
  position: relative;
  display: flex;
  min-height: 100dvh;
  overflow: hidden;
}

/* Each half is a full clickable world-door */
.panel {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: clamp(1.5rem, 4vw, 3.5rem);
  min-width: 0;
  transition: flex-grow 0.55s cubic-bezier(0.2, 0.7, 0.2, 1);
  overflow: hidden;
}

.panel--design {
  background: var(--d-paper);
  color: var(--d-ink);
}
.panel--frontend {
  background: var(--f-slate);
  color: var(--f-foam);
  /* faint terminal grid */
  background-image:
    linear-gradient(var(--f-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--f-line) 1px, transparent 1px);
  background-size: 46px 46px;
  background-position: center;
}
.panel--frontend::before {
  /* darken the grid so it's a whisper, not a table */
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(120% 90% at 70% 40%, transparent, var(--f-slate) 78%);
}
.panel--frontend > * {
  position: relative;
}

/* hover / focus expands the chosen world */
.split:has(.panel:hover) .panel:not(:hover),
.split:has(.panel:focus-visible) .panel:not(:focus-visible) {
  flex-grow: 0.6;
}
.panel:hover,
.panel:focus-visible {
  flex-grow: 1.55;
}

.panel__idx {
  position: absolute;
  top: clamp(1.25rem, 3vw, 2.5rem);
  font-family: var(--mono);
  font-size: 0.8rem;
  letter-spacing: 0.15em;
}
.panel--design .panel__idx {
  left: clamp(1.5rem, 4vw, 3.5rem);
  color: var(--d-pigment);
}
.panel--frontend .panel__idx {
  right: clamp(1.5rem, 4vw, 3.5rem);
  color: var(--f-signal);
}

.panel__word {
  font-weight: 500;
  line-height: 0.9;
  font-size: clamp(3rem, 9vw, 8rem);
  letter-spacing: -0.02em;
}
.panel--design .panel__word {
  font-family: var(--serif);
  font-optical-sizing: auto;
  font-style: italic;
  font-weight: 400;
}
.panel--frontend .panel__word {
  font-family: var(--mono);
  font-weight: 500;
  letter-spacing: -0.04em;
}
.panel--frontend .panel__word::after {
  content: '_';
  color: var(--f-signal);
  animation: blink 1.1s steps(1) infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}

.panel__desc {
  margin-top: 1rem;
  max-width: 30ch;
  font-size: clamp(0.95rem, 1.4vw, 1.15rem);
}
.panel--design .panel__desc {
  font-family: var(--serif);
  color: var(--d-muted);
}
.panel--frontend .panel__desc {
  font-family: var(--mono);
  font-size: 0.9rem;
  color: var(--f-dim);
}

.panel__enter {
  position: absolute;
  top: clamp(1.25rem, 3vw, 2.5rem);
  font-family: var(--mono);
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.panel--design .panel__enter {
  right: clamp(1.5rem, 4vw, 3.5rem);
  color: var(--d-pigment);
}
.panel--frontend .panel__enter {
  left: clamp(1.5rem, 4vw, 3.5rem);
  color: var(--f-signal);
}
.panel:hover .panel__enter,
.panel:focus-visible .panel__enter {
  opacity: 1;
  transform: translateY(0);
}

/* the seam */
.split::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: var(--seam);
  background: linear-gradient(var(--f-signal), var(--d-pigment));
  transform: translateX(-50%);
  z-index: 3;
  opacity: 0.5;
  pointer-events: none;
}

/* centered wordmark straddling the seam */
.mark {
  position: absolute;
  top: clamp(1.1rem, 3vw, 2.2rem);
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  text-align: center;
  color: #fff;
  mix-blend-mode: difference;
  pointer-events: none;
}
.mark__name {
  display: block;
  font-family: var(--mono);
  font-size: clamp(0.7rem, 1.5vw, 0.85rem);
  letter-spacing: 0.42em;
  padding-left: 0.42em;
}
.mark__sub {
  display: block;
  margin-top: 0.35rem;
  font-family: var(--serif);
  font-style: italic;
  font-size: 0.8rem;
  letter-spacing: 0.02em;
  opacity: 0.8;
}

.hint {
  position: absolute;
  bottom: clamp(1rem, 3vw, 2rem);
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #fff;
  mix-blend-mode: difference;
  pointer-events: none;
  animation: rise 3s ease-in-out infinite;
}
@keyframes rise {
  0%, 100% { transform: translate(-50%, 0); opacity: 0.6; }
  50% { transform: translate(-50%, -4px); opacity: 1; }
}

/* --- mobile: stack the two worlds --- */
@media (max-width: 720px) {
  .split {
    flex-direction: column;
  }
  .panel {
    flex: 1;
    justify-content: center;
    padding-block: clamp(3rem, 12vw, 5rem);
  }
  .split:has(.panel:hover) .panel:not(:hover),
  .split:has(.panel:focus-visible) .panel:not(:focus-visible),
  .panel:hover,
  .panel:focus-visible {
    flex-grow: 1;
  }
  .split::after {
    top: 50%;
    left: 0;
    right: 0;
    bottom: auto;
    width: auto;
    height: var(--seam);
    background: linear-gradient(90deg, var(--d-pigment), var(--f-signal));
    transform: translateY(-50%);
  }
  .panel__idx { top: auto; bottom: clamp(1.25rem, 4vw, 2rem); }
  .panel--design .panel__idx,
  .panel--frontend .panel__idx {
    left: clamp(1.5rem, 6vw, 2.5rem);
    right: auto;
  }
  .panel__enter { display: none; }
  .hint { display: none; }
  .mark { top: 50%; transform: translate(-50%, -50%); }
}
</style>
