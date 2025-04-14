document.getElementById("contact-form").addEventListener("submit", function(e) {
  alert("Message envoyé !");
});

const langSelect = document.getElementById('lang-select');

const translations = {
  fr: {
    accueil: "Bienvenue !",
    presentation: "Je suis [fatou diouf], développeur web.",
    apropos: "Je suis passionné par le développement web front-end et back-end...",
    contactBtn: "Envoyer",
  },
  en: {
    accueil: "Welcome!",
    presentation: "I'm [fatou diouf], a web developer.",
    apropos: "I'm passionate about front-end and back-end web development...",
    contactBtn: "Send",
  }
};

langSelect.addEventListener("change", () => {
  const lang = langSelect.value;
  document.querySelector("#accueil h2").textContent = translations[lang].accueil;
  document.querySelector("#accueil p").textContent = translations[lang].presentation;
  document.querySelector("#apropos p").textContent = translations[lang].apropos;
  document.querySelector("#contact-form button").textContent = translations[lang].contactBtn;
});

const sections = document.querySelectorAll('.container');

function showSections() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

sections.forEach(s => s.classList.add('fade-in'));
window.addEventListener('scroll', showSections);
window.addEventListener('load', showSections);
// Attendre que le contenu de la page soit chargé
document.addEventListener('DOMContentLoaded', function() {
  const icon = document.getElementById('user-icon');

  // Ajouter la classe d'animation
  icon.style.animation = 'bounce 1s ease';

  // Supprimer l'animation après son exécution pour pouvoir la rejouer si nécessaire
  icon.addEventListener('animationend', function() {
    icon.style.animation = '';
  });
});


 