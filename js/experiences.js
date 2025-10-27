export const experiences = [
  {
    year: "Avr. 2020 – Présent",
    title: "Bénévolat en communauté",
    company: "Communauté locale",
    description: "Initiation des jeunes aux outils numériques, création graphique (logos, flyers, certificats), montage vidéo et gestion de contenus numériques.",
    type: "bénévole"
  },
  {
    year: "Oct. 2020 – Sept. 2023",
    title: "Technicien en informatique",
    company: "Collectif du Financement Populaire (KOFIP, Haïti)",
    description: "Support technique, maintenance du parc informatique, formation des utilisateurs et sensibilisation à la sécurité numérique.",
    type: "pro"
  },
  {
    year: "Oct. 2016 – Déc. 2016",
    title: "Responsable informatique – Mission humanitaire",
    company: "Mairie de Jérémie (Haïti)",
    description: "Planification et réalisation d’enquêtes post-catastrophe, automatisation du traitement des données sous Excel/VBA.",
    type: "bénévole"
  },
  {
    year: "Juin 2019 – Août 2019",
    title: "Stage Développement Web",
    company: "Startup Tech Solutions",
    description: "Création d’un site vitrine, intégration HTML/CSS/JS, optimisation responsive et suivi SEO.",
    type: "stage"
  },
  {
    year: "Janv. 2018 – Mars 2018",
    title: "Assistant Informatique",
    company: "Université INUKA – Port-au-Prince",
    description: "Assistance aux enseignants pour la maintenance informatique et support aux étudiants.",
    type: "pro"
  }
];

export function initExperience(containerId = "experiences") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const typeColors = {
    pro: "#10b981",
    bénévole: "#f59e0b",
    stage: "#3b82f6"
  };

  const typeIcons = {
    pro: "💼",
    bénévole: "🤝",
    stage: "🛠️"
  };

  container.innerHTML = experiences.map((exp, i) => `
    <div class="timeline-item ${i % 2 === 0 ? 'left' : 'right'}" 
         style="opacity:0; transform: translateY(20px); transition: all 0.5s ease ${i * 0.15}s;">
      <div class="timeline-dot" style="background-color:${typeColors[exp.type]}">
        ${typeIcons[exp.type]}
      </div>
      <div class="timeline-content p-4 rounded shadow-sm bg-white">
        <div class="timeline-year mb-1">${exp.year}</div>
        <h4 class="timeline-title mb-1">${exp.title}</h4>
        <div class="timeline-company mb-2"><strong>${exp.company}</strong></div>
        <p class="timeline-desc mb-0">${exp.description}</p>
      </div>
    </div>
  `).join('');

  // Animation progressive
  const items = container.querySelectorAll(".timeline-item");
  items.forEach(item => {
    setTimeout(() => {
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, 100);
  });
}
