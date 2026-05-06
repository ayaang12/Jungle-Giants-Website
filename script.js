// ── FIREFLIES ──
function spawnFireflies() {
  const container = document.getElementById('fireflies');
  if (!container) return;

  for (let i = 0; i < 22; i++) {
    const el = document.createElement('div');
    el.className = 'firefly';
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      --dur: ${4 + Math.random() * 6}s;
      --delay: ${Math.random() * 5}s;
      --dx: ${(Math.random() - 0.5) * 80}px;
      --dy: ${(Math.random() - 0.5) * 80}px;
    `;
    container.appendChild(el);
  }
}

// ── SCROLL REVEAL ──
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

// ── SMOOTH SCROLL CTA ──
function initCTA() {
  const btn = document.getElementById('discover-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.getElementById('story').scrollIntoView({ behavior: 'smooth' });
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  spawnFireflies();
  initScrollReveal();
  initCTA();
});
