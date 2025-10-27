/*
  contact.js — Section Contact pro en 2 colonnes
*/

export function initContact(containerId = "contactContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section class="contact-wrapper container py-5">
      <div class="row align-items-stretch g-4">

        <!-- Colonne gauche : Infos de contact -->
        <div class="col-lg-5 col-md-6 contact-left p-4 rounded-4 shadow-lg bg-gradient">
          <h3 class="fw-bold text-white mb-4"><i class="bi bi-chat-dots-fill me-2"></i>Entrons en contact</h3>
          <p class="text-light mb-4">Disponible pour des collaborations, projets ou opportunités professionnelles.</p>

          <div class="contact-info-item mb-3">
            <i class="bi bi-telephone-fill text-warning me-3 fs-5"></i>
            <span class="text-white">+33 6 12 34 56 78</span>
          </div>
          <div class="contact-info-item mb-4">
            <i class="bi bi-envelope-fill text-danger me-3 fs-5"></i>
            <span class="text-white">sloreus96@yahoo.fr</span>
          </div>

          <h5 class="text-light fw-semibold mb-3">Réseaux sociaux</h5>
          <div class="social-icons d-flex flex-wrap gap-3">
            <a href="https://linkedin.com/in/sloreus10" target="_blank" class="social-btn linkedin">
              <i class="bi bi-linkedin"></i><span>@sloreus10</span>
            </a>
            <a href="https://github.com/sloreus10" target="_blank" class="social-btn github">
              <i class="bi bi-github"></i><span>@sloreus10</span>
            </a>
            <a href="https://twitter.com/sloreus10" target="_blank" class="social-btn twitter">
              <i class="bi bi-twitter-x"></i><span>@sloreus10</span>
            </a>
            <a href="https://instagram.com/sloreastar_47" target="_blank" class="social-btn instagram">
              <i class="bi bi-instagram"></i><span>@sloreastar_47</span>
            </a>
            <a href="https://tiktok.com/sloreastar" target="_blank" class="social-btn tiktok">
              <i class="bi bi-tiktok"></i><span>@sloreastar</span>
            </a>
            <a href="https://facebook.com/sloreastar" target="_blank" class="social-btn facebook">
              <i class="bi bi-facebook"></i><span>@sloreastar</span>
            </a>
          </div>
        </div>

        <!-- Colonne droite : Formulaire -->
        <div class="col-lg-7 col-md-6 contact-right">
          <div class="contact-card p-5 rounded-4 shadow-lg bg-white">
            <h4 class="fw-bold mb-4 text-primary"><i class="bi bi-send-fill me-2"></i>Envoyer un message</h4>
            <form novalidate class="needs-validation">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label fw-semibold">Nom complet</label>
                  <input type="text" class="form-control" required placeholder="Votre nom complet">
                  <div class="invalid-feedback">Veuillez entrer votre nom.</div>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">Email</label>
                  <input type="email" class="form-control" required placeholder="votre@email.com">
                  <div class="invalid-feedback">Adresse email invalide.</div>
                </div>
                <div class="col-12">
                  <label class="form-label fw-semibold">Message</label>
                  <textarea class="form-control" rows="5" required placeholder="Votre message..."></textarea>
                  <div class="invalid-feedback">Le message ne peut pas être vide.</div>
                </div>
              </div>
              <button type="submit" class="btn btn-gradient w-100 mt-4 py-2 fw-semibold">
                <i class="bi bi-envelope-paper-heart me-2"></i>Envoyer le message
              </button>
            </form>
            <div id="contactAlert" class="mt-3"></div>
          </div>
        </div>

      </div>
    </section>
  `;

  // Gestion du formulaire
  const form = container.querySelector("form");
  const alertContainer = container.querySelector("#contactAlert");

  const createAlert = (msg, type = "success") => `
    <div class="alert alert-${type} alert-dismissible fade show mt-3" role="alert">
      ${msg}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>`;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    form.classList.remove("was-validated");
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    const overlay = document.getElementById("reloadOverlay");
    overlay?.classList.add("show");
    await new Promise(r => setTimeout(r, 800));
    overlay?.classList.remove("show");

    alertContainer.innerHTML = createAlert("✅ Message envoyé avec succès ! Merci pour votre contact.");
    form.reset();
  });
}
