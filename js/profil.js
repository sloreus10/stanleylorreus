/*
  profil.js — Animation typewriter pour l'onglet Profil
  - Réinitialisation complète à chaque affichage de l'onglet
  - Animation fluide sans bug
*/
const profilText = `Madame, Monsieur,

Actuellement étudiant en première année de BTS Communication à ESARC Évolution Lyon et issu d’un parcours en informatique, je possède une double compétence : la maîtrise des outils numériques et logiques du développement web, associée à une compréhension des enjeux de communication.

En tant que développeur, j’ai acquis des expériences dans la création d'interfaces, la gestion de bases de données, l’optimisation technique et l’intégration de fonctionnalités adaptées aux besoins utilisateurs. Cette expertise renforce ma capacité à concevoir, produire et améliorer des supports digitaux de manière efficace et structurée.

Parallèlement, ma formation en communication m’amène à travailler les fondamentaux : création de contenus, identité visuelle, rédaction, gestion de réseaux sociaux, veille stratégique. Cette combinaison me permet d’intervenir sur des projets mêlant technique et communication avec une vision globale : comprendre la cible, structurer un message, concevoir des supports adaptés et assurer une mise en œuvre performante.

Ce que je peux apporter à votre entreprise :
– Une réelle polyvalence entre production technique (web) et production communicationnelle ;  
– Une approche orientée solution, rigoureuse et méthodique ;  
– La capacité à optimiser vos supports digitaux (site, contenus, interfaces, automatisations) ;  
– Une motivation forte à apprendre, contribuer et m’intégrer rapidement dans votre équipe.

À la recherche d’un stage ou d’une alternance en communication, je souhaite rejoindre une structure dynamique afin de mettre mes compétences techniques et créatives au service de projets concrets et à valeur ajoutée.

Pour tout échange ou éventuel collaboration, vous trouverez mes coordonnées dans l’onglet « Contact ». Vous pouvez également me joindre directement à l’adresse : sloreus96@yahoo.fr.`

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
