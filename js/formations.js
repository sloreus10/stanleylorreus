/*
  formations.js — Timeline créative enrichie avec icônes
*/

export const formations = [
    { period: "Sept. 2025 – Présent", title: "BTS Communication", school: "ESARC Évolution – Lyon, France", description: "Études en communication et marketing digital, création de contenus visuels et stratégie de communication.", type: "bts" },
    { period: "2023 – 2025", title: "Master Informatique", school: "Université Grenoble Alpes – Grenoble, France", description: "Spécialisation en développement logiciel, systèmes d’information et gestion de projets informatiques.", type: "master" },
    { period: "2022 – 2023", title: "Formation spéciale en Génie Logiciel (M1)", school: "INUKA & Université du Québec à Montréal (UQAM)", description: "Cours avancés en conception logicielle, architecture et technologies modernes.", type: "certificat" },
    { period: "Depuis 2017", title: "Licence en Sciences Informatiques", school: "Université INUKA – Port-au-Prince, Haïti", description: "Études en programmation, bases de données, réseaux, intelligence artificielle et développement web/mobile.", type: "licence" },
    { period: "Juin – Juil. 2022", title: "CCNAv7 : Introduction aux réseaux", school: "INUKA – Port-au-Prince, Haïti", description: "Formation Cisco Networking Academy sur les bases des réseaux informatiques.", type: "certificat" },
    { period: "Avril 2022", title: "Formation en décodage de téléphones cellulaires", school: "GTech & ICJ – Port-au-Prince, Haïti", description: "Initiation aux techniques de déblocage, réparation et configuration d’appareils mobiles.", type: "certificat" },
    { period: "Juillet 2021", title: "Cybersecurity Essentials", school: "Cisco Networking Academy – INUKA, Port-au-Prince, Haïti", description: "Formation sur les fondamentaux de la cybersécurité et les bonnes pratiques de protection numérique.", type: "certificat" },
    { period: "Décembre 2020", title: "Installation de systèmes de vidéo surveillance", school: "Go On New English Institute – Port-au-Prince, Haïti", description: "Formation pratique sur l’installation, la configuration et la maintenance de systèmes de sécurité.", type: "certificat" },
    { period: "Octobre 2018", title: "Sérigraphie de base", school: "Haïti Univers Tech – Port-au-Prince, Haïti", description: "Apprentissage des techniques de base d’impression manuelle sur textiles et supports divers.", type: "certificat" },
    { period: "Septembre 2018", title: "Sérigraphie artisanale", school: "Compassion Academy & FENHA – Port-au-Prince, Haïti", description: "Approfondissement des méthodes artisanales de production graphique et d’impression locale.", type: "certificat" },
    { period: "2016 – 2017", title: "Diplôme d’études secondaires", school: "Collège des Professeurs Réunis (CPR) – Jérémie, Haïti", description: "Fin d’études secondaires avec spécialisation en sciences générales et introduction à l’informatique.", type: "secondaire" },
    { period: "2015 – 2016", title: "Cours de langue française", school: "Institut Français en Haïti (IFH) – Port-au-Prince, Haïti", description: "Perfectionnement de la maîtrise du français oral et écrit.", type: "langue" },
    { period: "2014 – 2015", title: "Cours de langue anglaise", school: "America English School (AES) – Port-au-Prince, Haïti", description: "Formation en anglais conversationnel et grammatical (niveau intermédiaire à avancé).", type: "langue" }
];

export function initFormations(containerId = "formations") {
    const container = document.getElementById(containerId);
    if (!container) return;

    const typeColors = {
        bts: "#f59e0b",
        licence: "#3b82f6",
        master: "#10b981",
        certificat: "#8b5cf6",
        secondaire: "#ef4444",
        langue: "#06b6d4"
    };

    const typeIcons = {
        bts: "🎯",
        licence: "🎓",
        master: "🎓",
        certificat: "💻",
        secondaire: "🏫",
        langue: "🌐"
    };

    const animations = [
        "translateY",   // slide up
        "scale",        // zoom
        "rotate",       // rotation
        "translateX",   // slide horizontal
        "flip"          // flip Y
    ];

    container.innerHTML = `
    <div class="formations-timeline position-relative d-flex flex-column align-items-center gap-5">
      ${formations.map((f, i) => `
        <div class="formation-card p-4 shadow-lg rounded d-flex align-items-start gap-3 position-relative overflow-hidden"
             style="max-width:720px;
                    background: linear-gradient(135deg, ${typeColors[f.type]}22, #ffffff);
                    border-left: 6px solid ${typeColors[f.type]};
                    transform: rotate(${i % 2 === 0 ? '-1.2deg' : '1.2deg'});
                    opacity: 0;
                    transition: all 0.5s ease;">
          <div class="formation-icon fs-2">${typeIcons[f.type]}</div>
          <div class="formation-info flex-grow-1 text-start">
            <div class="fw-bold mb-2" style="color:${typeColors[f.type]}">${f.period}</div>
            <h4 class="mb-1">${f.title}</h4>
            <div class="text-muted fst-italic mb-2">${f.school}</div>
            <p class="mb-0">${f.description}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;

    const cards = container.querySelectorAll(".formation-card");

    // Animation d'apparition différente par carte
    cards.forEach((card, i) => {
        const animType = animations[i % animations.length];

        // Définir l'état initial selon le type d'animation
        switch (animType) {
            case "translateY": card.style.transform += " translateY(20px)"; break;
            case "translateX": card.style.transform += " translateX(20px)"; break;
            case "scale": card.style.transform += " scale(0.8)"; break;
            case "rotate": card.style.transform += " rotate(-10deg)"; break;
            case "flip": card.style.transform += " rotateY(90deg)"; break;
        }

        // Apparition progressive
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = card.style.transform.replace(/(translateY\(.*?\)|translateX\(.*?\)|scale\(.*?\)|rotate\(.*?\)|rotateY\(.*?\))/g, '');
        }, i * 150);
    });


    // Hover effect
    cards.forEach((card, i) => {
        const rotation = i % 2 === 0 ? "-1.2deg" : "1.2deg";
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.04) rotate(0deg)";
            card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = `rotate(${rotation})`;
            card.style.boxShadow = "0 5px 10px rgba(0,0,0,0.1)";
        });
    });
}
