/*
  competences.js — Version 3 catégories : savoir, savoir-faire, savoir-être
*/

export const competences = {
  savoir: [
    {
      title: "Langages de programmation",
      skills: [
        { name: "HTML", iconClass: "fab fa-html5", color: "#E34F26", value: 90 },
        { name: "CSS", iconClass: "fab fa-css3-alt", color: "#1572B6", value: 88 },
        { name: "JavaScript", iconClass: "fab fa-js", color: "#F7DF1E", value: 85 },
        { name: "PHP", iconClass: "fab fa-php", color: "#777BB4", value: 80 },
        { name: "Java", iconClass: "fab fa-java", color: "#007396", value: 70 },
        { name: "Python", iconClass: "fab fa-python", color: "#3776AB", value: 70 },
        { name: "C", iconClass: "fas fa-code", color: "#A8B9CC", value: 60 },
        { name: "VBA", iconClass: "fas fa-file-code", color: "#1F4E79", value: 65 }
      ]
    },
    {
      title: "Bases de données & Backend",
      skills: [
        { name: "MySQL", iconClass: "fas fa-database", color: "#00618A", value: 80 },
        { name: "Oracle", iconClass: "fas fa-database", color: "#F80000", value: 70 },
        { name: "SQL", iconClass: "fas fa-table", color: "#F29111", value: 78 },
        { name: "Java EE", iconClass: "fab fa-java", color: "#E76F00", value: 65 }
      ]
    },
    {
      title: "Systèmes & Réseaux",
      skills: [
        { name: "Windows & UNIX", iconClass: "fas fa-desktop", color: "#4CAF50", value: 85 },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/npm/simple-icons@7/icons/linux.svg", value: 80 },
        { name: "Windows Server", iconClass: "fab fa-windows", color: "#0078D7", value: 75 },
        { name: "Cisco Networking (CCNA)", icon: "https://cdn.jsdelivr.net/npm/simple-icons@7/icons/cisco.svg", value: 70 },
        { name: "Cloud Computing", iconClass: "fas fa-cloud", color: "#0dcaf0", value: 65 },
        { name: "Sécurité & Fiabilité", iconClass: "fas fa-shield-alt", color: "#ff5722", value: 70 }
      ]
    },
    {
      title: "Outils & Environnements",
      skills: [
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/npm/simple-icons@7/icons/visualstudiocode.svg", value: 95 },
        { name: "Git", iconClass: "fab fa-git-alt", color: "#F05032", value: 85 },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/npm/simple-icons@7/icons/docker.svg", value: 65 },
        { name: "Android Studio", icon: "https://cdn.jsdelivr.net/npm/simple-icons@7/icons/androidstudio.svg", value: 75 },
        { name: "Microsoft Office", iconClass: "fas fa-file-word", color: "#0078D4", value: 90 },
        { name: ""}
      ]
    }
  ],

  savoirFaire: [
    {
      title: "Développement & intégration",
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/npm/simple-icons@7/icons/react.svg", value: 80 },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/npm/simple-icons@7/icons/bootstrap.svg", value: 88 },
        { name: "WordPress", icon: "https://cdn.jsdelivr.net/npm/simple-icons@7/icons/wordpress.svg", value: 85 },
        { name: "E-commerce & CMS", iconClass: "fas fa-shopping-cart", color: "#00C853", value: 75 },
        { name: "Applications mobiles (Android)", iconClass: "fas fa-mobile-alt", color: "#4CAF50", value: 70 }
      ]
    },
    {
      title: "Création visuelle & multimédia",
      skills: [
        { name: "Photoshop", icon: "https://cdn.jsdelivr.net/npm/simple-icons@7/icons/adobephotoshop.svg", value: 90 },
        { name: "Illustrator", icon: "https://cdn.jsdelivr.net/npm/simple-icons@7/icons/adobeillustrator.svg", value: 85 },
        { name: "Premiere Pro", icon: "https://cdn.jsdelivr.net/npm/simple-icons@7/icons/adobepremierepro.svg", value: 75 },
        { name: "After Effects", icon: "https://cdn.jsdelivr.net/npm/simple-icons@7/icons/adobeaftereffects.svg", value: 70 },
        { name: "Sérigraphie", iconClass: "fas fa-tshirt", color: "#F06292", value: 60 }
      ]
    },
    {
      title: "Community Management",
      skills: [
        { name: "Facebook", iconClass: "fab fa-facebook", color: "#1877F2", value: 90 },
        { name: "TikTok", iconClass: "fab fa-tiktok", color: "#010101", value: 70 },
        { name: "Instagram", iconClass: "fab fa-instagram", color: "#E4405F", value: 80 },
        { name: "YouTube", iconClass: "fab fa-youtube", color: "#FF0000", value: 90 }
      ]
    },
    {
      title: "Administration & maintenance",
      skills: [
        { name: "Maintenance & dépannage PC", iconClass: "fas fa-tools", color: "#2196F3", value: 85 },
        { name: "Vidéosurveillance", iconClass: "fas fa-video", color: "#E91E63", value: 70 },
        { name: "Assemblage & configuration", iconClass: "fas fa-network-wired", color: "#795548", value: 80 },
        { name: "Administration Oracle", iconClass: "fas fa-server", color: "#F44336", value: 70 }
      ]
    }
  ],

  savoirEtre: [
    {
      title: "Qualités humaines",
      skills: [
        { name: "Dynamique", value: 95 },
        { name: "Responsable", value: 90 },
        { name: "Autonome", value: 85 },
        { name: "Organisé", value: 90 },
        { name: "Capacité d’adaptation", value: 95 }
      ]
    },
    {
      title: "Communication & travail d’équipe",
      skills: [
        { name: "Écoute active", value: 90 },
        { name: "Prise de parole", value: 80 },
        { name: "Travail collaboratif", value: 95 },
        { name: "Résolution de problèmes", value: 85 }
      ]
    },
    {
      title: "Créativité & innovation",
      skills: [
        { name: "Créativité", value: 90 },
        { name: "Curiosité & apprentissage continu", value: 85 }
      ]
    }
  ]
};

/* ————————————————————————————————
   Rendu graphique des barres de progression
——————————————————————————————— */
export function generateAccordion(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map((cat, i) => `
    <div class="accordion-item fade-in">
      <h2 class="accordion-header" id="h-${containerId}-${i}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#c-${containerId}-${i}" aria-expanded="false" aria-controls="c-${containerId}-${i}">
          ${cat.title}
        </button>
      </h2>
      <div id="c-${containerId}-${i}" class="accordion-collapse collapse"
        aria-labelledby="h-${containerId}-${i}" data-bs-parent="#${containerId}">
        <div class="accordion-body">
          ${cat.skills.map(skill => `
            <div class="skill-row d-flex align-items-center">
              <div class="skill-logo">
                ${skill.iconClass
                  ? `<i class="${skill.iconClass}" style="color:${skill.color || '#333'}"></i>`
                  : skill.icon
                    ? `<img src="${skill.icon}" alt="${skill.name}" class="img-skill">`
                    : `<span class="logo-fallback">${skill.name.charAt(0)}</span>`}
              </div>
              <div class="skill-meta flex-grow-1">
                <div class="skill-name">${skill.name}</div>
                <div class="skill-bar" aria-valuenow="${skill.value}">
                  <div class="skill-bar-fill" style="width:${skill.value}%;">${skill.value}%</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

/* ————————————————————————————————
   Initialisation
——————————————————————————————— */
export function initSkills() {
  generateAccordion('savoir', competences.savoir);
  generateAccordion('savoirFaire', competences.savoirFaire);
  generateAccordion('savoirEtre', competences.savoirEtre);
}
