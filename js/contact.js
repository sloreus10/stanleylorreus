/*
  contact.js — Section Contact Pro avec EmailJS
  (fonctionne sans backend)
*/

export function initContact(containerId = "contactContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section class="contact-wrapper container py-5">
      <div class="row align-items-stretch g-4">

        <!-- Colonne gauche -->
        <div class="col-lg-5 col-md-6 contact-left p-4 rounded-4 shadow-lg bg-gradient">
          <h3 class="fw-bold text-white mb-4"><i class="bi bi-chat-dots-fill me-2"></i>Entrons en contact</h3>
          <p class="text-light mb-4">Disponible pour toute collaboration, alternance ou projet digital.</p>

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
          </div>
        </div>

        <!-- Colonne droite -->
        <div class="col-lg-7 col-md-6 contact-right">
          <div class="contact-card p-5 rounded-4 shadow-lg bg-white">
            <h4 class="fw-bold mb-4 text-primary"><i class="bi bi-send-fill me-2"></i>Envoyer un message</h4>
            <form id="contactForm" novalidate class="needs-validation">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label fw-semibold">Nom complet</label>
                  <input type="text" name="user_name" class="form-control" required placeholder="Votre nom complet">
                  <div class="invalid-feedback">Veuillez entrer votre nom.</div>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">Email</label>
                  <input type="email" name="user_email" class="form-control" required placeholder="votre@email.com">
                  <div class="invalid-feedback">Adresse email invalide.</div>
                </div>

                <div class="col-12">
                  <label class="form-label fw-semibold">Objet</label>
                  <input type="text" name="subject" class="form-control" required placeholder="Sujet de votre message">
                  <div class="invalid-feedback">Veuillez indiquer un objet.</div>
                </div>

                <div class="col-12">
                  <label class="form-label fw-semibold">Message</label>
                  <textarea id="message" name="message" class="form-control" rows="5" maxlength="1000" required placeholder="Votre message..."></textarea>
                  <small id="charCount" class="text-muted d-block text-end mt-1">0 / 1000 caractères</small>
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

  const form = container.querySelector("#contactForm");
  const textarea = form.querySelector("#message");
  const charCount = form.querySelector("#charCount");
  const alertContainer = container.querySelector("#contactAlert");

  // === Gestion compteur caractères ===
  textarea.addEventListener("input", () => {
    const len = textarea.value.length;
    charCount.textContent = `${len} / 1000 caractères`;
    charCount.classList.toggle("text-danger", len > 900);
  });

  // === Envoi du message avec EmailJS ===
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    form.classList.remove("was-validated");
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    try {
      // ⚙️ Initialise EmailJS (à faire une seule fois)
      emailjs.init("dlyngNhZw3_DMkbcz"); // 👉 remplace par ta clé publique EmailJS

      await emailjs.send("service_aohpei2", "template_mt64nof", {
        from_name: form.user_name.value,
        reply_to: form.user_email.value,
        subject: form.subject.value,
        message: form.message.value,
        date: new Date().toLocaleString("fr-FR")
      });

      alertContainer.innerHTML = `
        <div class="alert alert-success mt-3">✅ Message envoyé avec succès ! Merci pour votre contact.</div>`;
      form.reset();
      charCount.textContent = "0 / 1000 caractères";
    } catch (err) {
      console.error(err);
      alertContainer.innerHTML = `
        <div class="alert alert-danger mt-3">❌ Une erreur est survenue. Veuillez réessayer plus tard.</div>`;
    }
  });
}
