/**
 * contact.js — Module de gestion de la section Contact avec EmailJS
 * @description Intègre une section de contact responsive avec formulaire et gestion d'envoi via EmailJS.
 *              Fonctionne sans backend dédié.
 * @param {string} containerId - ID du conteneur DOM cible (par défaut : "contactContainer")
 */
export function initContact(containerId = "contactContainer") {
  // Vérification et récupération du conteneur
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Le conteneur "${containerId}" est introuvable.`);
    return;
  }

  // Injection du HTML
  container.innerHTML = `
    <section class="contact-wrapper container py-5">
      <div class="row align-items-stretch g-4">
        <!-- Colonne gauche : Informations de contact -->
        <div class="col-lg-5 col-md-6 contact-left p-4 rounded-4 shadow-lg bg-gradient">
          <h3 class="fw-bold text-white mb-4">
            <i class="bi bi-chat-dots-fill me-2" aria-hidden="true"></i>
            Entrons en contact
          </h3>
          <p class="text-light mb-4">
            Disponible pour toute collaboration, alternance ou projet digital.
          </p>

          <!-- Coordonnées -->
          <div class="contact-info-item mb-3">
            <i class="bi bi-telephone-fill text-warning me-3 fs-5" aria-hidden="true"></i>
            <a href="tel:+33612345678" class="text-white text-decoration-none">+33 6 12 34 56 78</a>
          </div>
          <div class="contact-info-item mb-4">
            <i class="bi bi-envelope-fill text-danger me-3 fs-5" aria-hidden="true"></i>
            <a href="mailto:sloreus96@yahoo.fr" class="text-white text-decoration-none">sloreus96@yahoo.fr</a>
          </div>

          <!-- Réseaux sociaux -->
          <h5 class="text-light fw-semibold mb-3">Réseaux sociaux</h5>
          <div class="social-icons d-flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/stanley-lorr%C3%A9us-98b89b62/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn linkedin"
              aria-label="Profil LinkedIn"
            >
              <i class="bi bi-linkedin" aria-hidden="true"></i>
              <span>@sloreus10</span>
            </a>
            <a
              href="https://github.com/sloreus10"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn github"
              aria-label="Profil GitHub"
            >
              <i class="bi bi-github" aria-hidden="true"></i>
              <span>@sloreus10</span>
            </a>
            <a
              href="https://facebook.com/sloreastar"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn facebook"
              aria-label="Profil Facebook"
            >
              <i class="bi bi-facebook" aria-hidden="true"></i>
              <span>@sloresatar</span>
            </a>
            <a
              href="https://instagram.com/sloreastar_47"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn instagram"
              aria-label="Profil Instagram"
            >
              <i class="bi bi-instagram" aria-hidden="true"></i>
              <span>@sloreastar_47</span>
            </a>
            <a
              href="https://www.tiktok.com/@sloreastar?_r=1&_t=ZS-91x312YU5Q2"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn tiktok"
              aria-label="Profil TikTok"
            >
              <i class="bi bi-tiktok" aria-hidden="true"></i>
              <span>@sloreastar</span>
            </a>
          </div>
        </div>

        <!-- Colonne droite : Formulaire de contact -->
        <div class="col-lg-7 col-md-6 contact-right">
          <div class="contact-card p-5 rounded-4 shadow-lg bg-white position-relative">
            <h4 class="fw-bold mb-4 text-primary">
              <i class="bi bi-send-fill me-2" aria-hidden="true"></i>
              Envoyer un message
            </h4>

            <form id="contactForm" novalidate class="needs-validation">
              <div class="row g-3">
                <!-- Champ Nom -->
                <div class="col-md-6">
                  <label for="user_name" class="form-label fw-semibold">Nom complet</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    class="form-control"
                    required
                    placeholder="Votre nom complet"
                    aria-describedby="nameHelp"
                  >
                  <div class="invalid-feedback">
                    Veuillez entrer votre nom.
                  </div>
                </div>

                <!-- Champ Email -->
                <div class="col-md-6">
                  <label for="user_email" class="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    class="form-control"
                    required
                    placeholder="votre@email.com"
                    aria-describedby="emailHelp"
                  >
                  <div class="invalid-feedback">
                    Adresse email invalide.
                  </div>
                </div>

                <!-- Champ Objet -->
                <div class="col-12">
                  <label for="subject" class="form-label fw-semibold">Objet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    class="form-control"
                    required
                    placeholder="Sujet de votre message"
                    aria-describedby="subjectHelp"
                  >
                  <div class="invalid-feedback">
                    Veuillez indiquer un objet.
                  </div>
                </div>

                <!-- Champ Message -->
                <div class="col-12">
                  <label for="message" class="form-label fw-semibold">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    class="form-control"
                    rows="5"
                    maxlength="1000"
                    required
                    placeholder="Votre message..."
                    aria-describedby="messageHelp"
                  ></textarea>
                  <small id="charCount" class="text-muted d-block text-end mt-1">0 / 1000 caractères</small>
                  <div class="invalid-feedback">
                    Le message ne peut pas être vide.
                  </div>
                </div>
              </div>

              <!-- Bouton d'envoi -->
              <button
                type="submit"
                id="submitBtn"
                class="btn btn-gradient w-100 mt-4 py-2 fw-semibold"
              >
                <i class="bi bi-envelope-paper-heart me-2" aria-hidden="true"></i>
                Envoyer le message
              </button>
            </form>

            <!-- Conteneur pour les alertes -->
            <div id="contactAlert" class="mt-3" role="alert"></div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Récupération des éléments DOM
  const form = container.querySelector("#contactForm");
  const textarea = form.querySelector("#message");
  const charCount = form.querySelector("#charCount");
  const alertContainer = container.querySelector("#contactAlert");
  const submitBtn = form.querySelector("#submitBtn");

  // Désactive le redimensionnement du textarea
  textarea.style.resize = "none";

  // Gestion du compteur de caractères
  textarea.addEventListener("input", () => {
    const currentLength = textarea.value.length;
    charCount.textContent = `${currentLength} / 1000 caractères`;
    charCount.classList.toggle("text-danger", currentLength > 900);
  });

  // Initialisation d'EmailJS
  if (typeof emailjs === "undefined") {
    console.error("⚠️ EmailJS n'est pas chargé. Vérifiez l'inclusion du script CDN avant contact.js.");
    return;
  }
  emailjs.init("dlyngNhZw3_DMkbcz"); // Clé publique

  // Gestion de l'envoi du formulaire
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    form.classList.remove("was-validated");

    // Validation du formulaire
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    // Désactivation du bouton pendant l'envoi
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Envoi en cours...
    `;

    try {
      // Envoi via EmailJS
      const response = await emailjs.send(
        "service_aohpei2",
        "template_mt64nof",
        {
          from_name: form.user_name.value,
          reply_to: form.user_email.value,
          subject: form.subject.value,
          message: form.message.value,
          date: new Date().toLocaleString("fr-FR"),
        }
      );

      // Réinitialisation du formulaire et affichage du succès
      alertContainer.innerHTML = `
        <div class="alert alert-success mt-3 animate__animated animate__fadeIn" role="alert">
          ✅ Message envoyé avec succès ! Merci pour votre contact.
        </div>
      `;
      form.reset();
      charCount.textContent = "0 / 1000 caractères";
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
      alertContainer.innerHTML = `
        <div class="alert alert-danger mt-3" role="alert">
          ❌ Une erreur est survenue. Veuillez réessayer plus tard.
        </div>
      `;
    } finally {
      // Réactivation du bouton
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <i class="bi bi-envelope-paper-heart me-2" aria-hidden="true"></i>
        Envoyer le message
      `;
    }
  });
}
