export const projets = [

  /* ———  PROJETS ORIENTÉS COMMUNICATION  ——— */

  {
    title: "Campagne sur les réseaux sociaux",
    period: "2024",
    type: "Bénévolat",
    icon: "📣",
    image: "assets/img/projets/socialMedia.jpg",
    technologies: ["Canva", "Meta Business Suite", "Photoshop"],
    description: "Conception d’une campagne sur les réseaux sociaux avec des messages clés pour sensibiliser les gens à s'inscrire à une formation.",
    skills: ["Stratégie de communication", "Rédaction", "Création graphique", "Planification"]
  },

  {
    title: "Affiche & identité visuelle – Projet Com",
    period: "2025",
    type: "Académique",
    icon: "🎨",
    image: "assets/img/projets/creationGraphiques.jpg",
    technologies: ["Illustrator", "Photoshop"],
    description: "Création des affiches publicitaires dans le cadre des projets académiques.",
    skills: ["Print", "Identité visuelle", "Conception graphique", "Analyse de cible"]
  },

  {
    title: "Podcast – Projet BTS",
    period: "2025",
    type: "Académique",
    icon: "🎧",
    image: "assets/img/projets/podcast.jpg",
    technologies: ["FL Studio", "Canva"],
    description: "Réalisation des podcasts : écriture des script, enregistrement, habillage sonore et montage.",
    skills: ["Production audio", "Écriture", "Création de message", "Techniques radio"]
  },

  /* ——— CRÉATION VISUELLE ——— */

  {
    title: "Créations graphiques : logos & visuels",
    period: "2020 — 2025",
    type: "Personnel / Bénévolat",
    icon: "🖌️",
    image: "assets/img/projets/creationGraphiques.jpg",
    technologies: ["Photoshop", "Illustrator", "Canva", "After Effects"],
    description: "Réalisation de logos, flyers, certificats, bannières et mini-vidéos pour des particuliers et des projets personnels.",
    skills: ["Identité visuelle", "Édition graphique", "Créativité"]
  },

  /* ——— STORYTELLING & CONTENU ——— */

  {
    title: "Mini-série : histoires de marques",
    period: "2025",
    type: "Académique",
    icon: "📖",
    image: "assets/img/projets/portfolio.png",
    technologies: ["Canva", "Premiere Pro", "Photoshop", "Illustrator"],
    description: "Série de contenus courts alliant storytelling, design et veille pour raconter l’évolution stratégique de grandes marques.",
    skills: ["Storytelling", "Veille", "Montage vidéo", "Podcast", "Stratégie éditoriale"]
  },

  /* ——— PÉDAGOGIE & IMPACT ——— */

  {
    title: "Sensibilisation au numérique pour jeunes",
    period: "2020 — 2024",
    type: "Bénévolat",
    icon: "📚",
    image: "assets/img/projets/socialMedia1.jpg",
    technologies: ["Microsoft Office", "Google Workspace", "Windows", "Canva"],
    description: "Création et animation d’ateliers d’initiation au numérique pour accompagner des jeunes dans leurs premiers usages digitaux.",
    skills: ["Pédagogie", "Communication orale", "Vulgarisation", "Animation"]
  },

  /* ——— DÉVELOPPEMENT & OUTILS DIGITAUX ——— */

  {
    title: "Portfolio personnel",
    period: "2025",
    type: "Personnel",
    icon: "👤",
    image: "assets/img/projets/dev.jpg",
    technologies: ["React", "CSS", "HTML", "JavaScript"],
    description: "Création d’un portfolio moderne avec animations, responsive design et interface pensée pour valoriser mes projets.",
    skills: ["React", "UI/UX", "Responsive Design", "Animations"]
  },

  {
    title: "Application de gestion de tâches",
    period: "2024",
    type: "Personnel",
    icon: "🎓",
    image: "assets/img/projets/taches.jpg",
    technologies: ["JavaScript", "PHP", "MySQL"],
    description: "Conception d’une application intuitive pour organiser tâches et projets, avec espace de gestion et base de données.",
    skills: ["Backend", "Base de données", "JavaScript", "UI/UX"]
  },

  {
    title: "Site e-commerce fictif",
    period: "2023",
    type: "Personnel",
    icon: "🛒",
    image: "assets/img/projets/ecommerce.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel"],
    description: "Création d’un mini-site e-commerce incluant catalogue, panier et système de paiement simulé.",
    skills: ["Développement Web", "Laravel", "Architecture MVC"]
  },

  {
    title: "Application mobile météo",
    period: "2023",
    type: "Personnel",
    icon: "🌦️",
    image: "assets/img/projets/weather.png",
    technologies: ["React Native", "API", "JSON"],
    description: "App mobile affichant la météo en temps réel grâce à une API externe et une interface mobile légère.",
    skills: ["React Native", "API", "Design mobile"]
  },

  /* ——— EXPÉRIENCE PROFESSIONNELLE INFORMATIQUE ——— */

  {
    title: "Système automatisé Excel/VBA (post-urgence)",
    period: "2016",
    type: "Professionnel",
    icon: "🏛️",
    image: "assets/img/projets/developper1.jpg",
    technologies: ["Excel", "VBA"],
    description: "Automatisation du traitement de centaines de données collectées après l'ouragan Matthew pour accélérer l’analyse des données.",
    skills: ["Analyse", "Automatisation", "Gestion de données", "Rigueur"]
  }

];

export function initProjects(containerId = "projets") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="projects-slider">
      <div class="slides">
        ${projets.map(p => `
          <div class="slide-card">
            <div class="card-inner">
              <div class="card-front">
                <div class="image-container">
                  <img src="${p.image}" alt="${p.title}">
                  <div class="badge">${p.icon} ${p.type}</div>
                </div>
                <div class="card-content">
                  <div class="period">${p.period}</div>
                  <h4 class="title">${p.title}</h4>
                  <button class="flip-btn">Voir plus</button>
                </div>
              </div>
              <div class="card-back">
                <div class="card-back-content">
                    <h4>Description : </h4>
                  <p class="description">${p.description}</p>
                  <h4>Techonolies : </h4>
                  <ul class="technologies">
                    ${p.technologies.map(tech => `<li>${tech}</li>`).join('')}
                  </ul>
                </div>
                <button class="flip-btn">Retour</button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <button class="prev-btn">&lt;</button>
      <button class="next-btn">&gt;</button>
    </div>
  `;

  const slidesContainer = container.querySelector(".slides");
  const slideCards = Array.from(container.querySelectorAll(".slide-card"));
  const slideCount = slideCards.length;
  let currentIndex = 0;

  function updateSlides() {
    const angle = 30;
    slideCards.forEach((slide, i) => {
      const offset = i - currentIndex;
      slide.style.transform = `
        translateX(${offset * 360}px)
        rotateY(${offset * -angle}deg)
        scale(${offset === 0 ? 1 : 0.8})
      `;
      slide.style.zIndex = offset === 0 ? 10 : 5;
      slide.style.opacity = offset > 2 || offset < -2 ? 0 : 1;
    });
  }

  updateSlides();

  container.querySelector(".prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlides();
  });

  container.querySelector(".next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlides();
  });

  container.querySelectorAll(".flip-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const cardInner = e.target.closest(".card-inner");
      cardInner.classList.toggle("flipped");
    });
  });
}
