export const projets = [
  {
    title: "Portfolio personnel",
    period: "2025",
    type: "Personnel",
    icon: "👤",
    image: "assets/img/projets/portfolio.png",
    technologies: ["React", "CSS", "HTML", "JavaScript"],
    description: "Portfolio développé en React avec animations, responsive design et showcase de projets.",
    skills: ["React", "Responsive Design", "Animations", "UI/UX"]
  },
  {
    title: "Application de gestion de tâches",
    period: "2024",
    type: "Académique",
    icon: "🎓",
    image: "assets/img/projets/todoapp.png",
    technologies: ["JavaScript", "PHP", "MySQL"],
    description: "Application pour gérer les tâches et projets avec interface intuitive.",
    skills: ["Gestion de base de données", "PHP", "JS", "UI/UX"]
  },
  {
    title: "Site e-commerce fictif",
    period: "2023",
    type: "Académique",
    icon: "🎓",
    image: "assets/img/projets/ecommerce.png",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    description: "Catalogue, panier et paiement simulé avec responsive design.",
    skills: ["Développement Web", "Bootstrap", "UI/UX", "JavaScript"]
  },
  {
    title: "Application mobile météo",
    period: "2023",
    type: "Personnel",
    icon: "👤",
    image: "assets/img/projets/weather.png",
    technologies: ["React Native", "API", "JSON"],
    description: "Application mobile pour consulter la météo en temps réel.",
    skills: ["React Native", "API", "Design mobile"]
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
