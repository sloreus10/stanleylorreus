/*
  profil.js — Gestion du contenu de l’onglet Profil
  - Typewriter automatique
*/

export function initProfil() {
  const typeEl = document.getElementById('typewriter-text');
  const DEFAULT_TEXT = "Bonjour, je suis Stanley LORREUS.\nDéveloppeur full stack avec plusieurs années d'expérience et étudiant en communication à ESARC Évolution, Lyon (69002). Je souhaite combiner mes compétences techniques en informatique et mes connaissances en communication pour contribuer à des projets innovants et créer des solutions digitales performantes.\nDisponible dès maintenant pour une alternance (2 jours en formation / 3 jours en entreprise) ou à partir du 1er décembre 2025 pour un stage.";
  const TYPE_SPEED = 25;
  const typingState = { timerId: null, index: 0, running: false };

  function stopTypewriter() {
    if (typingState.timerId) clearTimeout(typingState.timerId);
    typingState.timerId = null;
    typingState.running = false;
    if (typeEl) typeEl.classList.remove('typing');
  }

  function typewriter({ text = DEFAULT_TEXT, speed = TYPE_SPEED } = {}) {
    if (!typeEl) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      typeEl.textContent = text;
      return;
    }

    stopTypewriter();
    typeEl.textContent = '';
    typingState.index = 0;
    typingState.running = true;
    typeEl.classList.add('typing');

    (function type() {
      if (!typingState.running) { typeEl.classList.remove('typing'); return; }
      if (typingState.index < text.length) {
        typeEl.textContent += text.charAt(typingState.index++);
        typingState.timerId = setTimeout(type, speed);
      } else {
        typingState.running = false;
        typeEl.classList.remove('typing');
        typingState.timerId = null;
      }
    })();
  }

  typewriter();
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopTypewriter(); });
}
