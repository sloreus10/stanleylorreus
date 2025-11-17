/*
  profil.js — Animation typewriter pour l'onglet Profil
  - Réinitialisation complète à chaque affichage de l'onglet
  - Animation fluide sans bug
*/
const profilText = `Bonjour, je suis Stanley Lorréus.

Actuellement étudiant en Communication à ESARC Évolution Lyon, je combine un parcours solide en informatique à une passion pour les projets où stratégie, créativité et outils techniques s’articulent pour créer de la valeur.

Mon intérêt s’étend aussi bien à la communication traditionnelle (print, identité visuelle, rédaction, supports) qu’aux leviers digitaux (création de contenus, gestion des réseaux sociaux, veille stratégique, optimisation). 

Cette double compétence me permet d’intervenir sur l’ensemble du processus : analyser une cible, structurer un message, créer des supports percutants et assurer une exécution efficace grâce aux outils numériques.

À la recherche d’un stage ou d’une alternance en communication, je souhaite rejoindre une équipe dynamique pour contribuer à des projets concrets et variés.

Pour échanger ou collaborer, vous trouverez mes coordonnées dans l’onglet « Contact », ou vous pouvez me contacter directement par email : sloreus96@yahoo.fr`

export function initProfil() {
    const typeEl = document.getElementById('typewriter-text');
    if (!typeEl) return;

    // Réinitialisation complète du contenu et des styles
    typeEl.textContent = '';
    typeEl.classList.remove('typing');

    const TYPE_SPEED = 25;
    let typingState = {
        timerId: null,
        index: 0,
        running: false,
    };

    // Arrête l'animation en cours
    function stopTypewriter() {
        if (typingState.timerId) {
            clearTimeout(typingState.timerId);
            typingState.timerId = null;
        }
        typingState.running = false;
        typeEl.classList.remove('typing');
    }

    // Lance l'animation typewriter
    function startTypewriter() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            typeEl.textContent = profilText;
            return;
        }

        stopTypewriter();
        typeEl.textContent = ''; // Nettoyage complet avant de commencer
        typingState.index = 0;
        typingState.running = true;
        typeEl.classList.add('typing');

        (function type() {
            if (!typingState.running) {
                typeEl.classList.remove('typing');
                return;
            }
            if (typingState.index < profilText.length) {
                typeEl.textContent += profilText.charAt(typingState.index);
                typingState.index++;
                typingState.timerId = setTimeout(type, TYPE_SPEED);
            } else {
                typingState.running = false;
                typeEl.classList.remove('typing');
                typingState.timerId = null;
            }
        })();
    }

    // Lance l'animation à chaque appel de initProfil()
    startTypewriter();

    // Nettoie si l'onglet n'est plus visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stopTypewriter();
    });
}
