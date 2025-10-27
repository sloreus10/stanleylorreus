/*
  script.js — Portfolio de John Doe (script principal)
  - Gère footer, loader, onglets, typewriter sur Profil, formulaire sur Contact
  - Importe les modules spécifiques aux onglets
*/

import { initProfil } from './profil.js';
import { initSkills } from './competences.js';
import { initExperience } from './experiences.js';
import { initFormations } from './formations.js';
import { initProjects } from './projets.js';
import { initContact } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ---------- Footer année ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Loader ---------- */
  const overlay = document.getElementById('reloadOverlay');
  let loaderTimer = null;

  function showLoader(duration = 400) {
    if (!overlay) return Promise.resolve();
    if (loaderTimer) clearTimeout(loaderTimer);

    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');

    return new Promise((resolve) => {
      loaderTimer = setTimeout(() => {
        overlay.classList.remove('show');
        overlay.setAttribute('aria-hidden', 'true');
        loaderTimer = null;
        resolve();
      }, duration);
    });
  }

  /* ---------- Onglets / navigation ---------- */
  const tabButtons = document.querySelectorAll('.nav-tabs .nav-link[data-bs-toggle="tab"]');
  tabButtons.forEach((tab) => {
    tab.addEventListener('click', async () => {
      const target = String(tab.dataset.bsTarget || '').replace('#', '');
      await showLoader(420);

      // Initialisation modules selon onglet
      switch(target) {
        case 'profil': initProfil(); break;
        case 'competences': initSkills(); break;
        case 'experiences': initExperience(); break;
        case 'formations': initFormations(); break;
        case 'projets': initProjects(); break;
        case 'contact': initContact(); break;
      }
    });
  });

  // Lancer automatiquement l’onglet actif
  const activeTab = document.querySelector('.nav-tabs .nav-link.active[data-bs-toggle="tab"]');
  if (activeTab) {
    const target = activeTab.dataset.bsTarget.replace('#', '');
    switch(target) {
      case 'profil': initProfil(); break;
      case 'competences': initSkills(); break;
      case 'experiences': initExperience(); break;
      case 'formations': initFormations(); break;
      case 'projets': initProjects(); break;
      case 'contact': initContact(); break;
    }
  }
});
