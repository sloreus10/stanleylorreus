/*
  script.js — Gestion des onglets et initialisation des modules
*/
import { initProfil } from './profil.js';
import { initSkills } from './competences.js';
import { initExperience } from './experiences.js';
import { initFormations } from './formations.js';
import { initProjects } from './projets.js';
import { initContact } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // Mise à jour de l'année dans le footer
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Gestion du loader
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

    // Gestion des onglets
    const tabButtons = document.querySelectorAll('.nav-tabs .nav-link[data-bs-toggle="tab"]');
    tabButtons.forEach((tab) => {
        tab.addEventListener('click', async () => {
            const target = tab.dataset.bsTarget.replace('#', '');
            await showLoader(420);

            // Réinitialisation complète à chaque clic sur un onglet
            switch (target) {
                case 'profil':
                    initProfil();
                    break;
                case 'competences':
                    initSkills();
                    break;
                case 'experiences':
                    initExperience();
                    break;
                case 'formations':
                    initFormations();
                    break;
                case 'projets':
                    initProjects();
                    break;
                case 'contact':
                    initContact();
                    break;
            }
        });
    });

    // Initialisation de l'onglet actif par défaut
    initProfil();
});
