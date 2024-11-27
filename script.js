const footer = document.querySelector("footer");
window.addEventListener("scroll", function () {
  const rect = footer.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    footer.classList.add("visible");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  function checkVisibility() {
    fadeElements.forEach(function (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

const texts = {
  en: {
    welcome: "Hi, I'm Lorenzo Drovandi",
    role: "Front-End Developer",
    work_btn: "See My Work",
    nav_home_text: "Home",
    nav_project_text: "Projects",
    nav_aboutme_text: "About Me",
    nav_contact_text: "Contact",
    project_title_text: "Projects",
    view_project_text_1: "View Project",
    view_project_text_2: "View Project",
    description_project_1:
      "A website that shows the exchange rates of the day, integrating an API which allows you to select a currency and get updated results instantly.",
    description_project_2:
      "A replica of a Pokedex, using the HTML, CSS, JavaScript and jQuery plus the integration of an API and with all the functions tested with Cypress.",
    aboutme_title_text: "About Me",
    aboutme_description_text:
      "Front-end developer with a knack for creating seamless digital experiences. Armed with HTML, CSS, JavaScript, and React, I transform ideas into dynamic, easy-to-use web applications. I'm passionate about combining creativity and code to deliver solutions that not only work, but also achieve objectives in the most effective way possible.",
    tech_title_text: "Technologies I Use",
    contact_title_text: "Contact Me",
    name_text: "Name:",
    message_text: "Message:",
    send_message_text: "Send",
    copy_text: "2024 Lorenzo Drovandi. All rights reserved.",
  },
  es: {
    welcome: "Hola, soy Lorenzo Drovandi",
    role: "Desarrollador Front-End",
    work_btn: "Ver mi trabajo",
    nav_home_text: "Inicio",
    nav_project_text: "Proyectos",
    nav_aboutme_text: "Sobre mí",
    nav_contact_text: "Contacto",
    project_title_text: "Proyectos",
    view_project_text_1: "Ver Proyecto",
    view_project_text_2: "Ver Proyecto",
    description_project_1:
      "Un sitio web que muestra los tipos de cambio del día, integrando una API que permite seleccionar una moneda y obtener resultados actualizados al instante.",
    description_project_2:
      "Una réplica de una Pokedex, utilizando el HTML, CSS, JavaScript y jQuery más la integración de una API y con todas las funciones probadas con Cypress.",
    aboutme_title_text: "Sobre mí",
    aboutme_description_text:
      "Desarrollador front-end con habilidad para crear experiencias digitales fluidas. Armado con HTML, CSS, JavaScript y React, transformo ideas en aplicaciones web dinámicas y fáciles de usar. Me apasiona combinar creatividad y código para ofrecer soluciones que no solo funcionen, sino que también logren objetivos de la manera más efectiva posible.",
    tech_title_text: "Tecnologías que utilizo",
    contact_title_text: "Contáctame",
    name_text: "Nombre:",
    message_text: "Mensaje:",
    send_message_text: "Enviar",
    copy_text: "2024 Lorenzo Drovandi. Todos los derechos reservados.",
  },
};

function changeLanguage(language) {
  document.getElementById("welcome").innerText = texts[language].welcome;
  document.getElementById("role").innerText = texts[language].role;
  document.getElementById("work_btn").innerText = texts[language].work_btn;
  document.getElementById("nav_home_text").innerText =
    texts[language].nav_home_text;
  document.getElementById("nav_project_text").innerText =
    texts[language].nav_project_text;
  document.getElementById("nav_aboutme_text").innerText =
    texts[language].nav_aboutme_text;
  document.getElementById("nav_contact_text").innerText =
    texts[language].nav_contact_text;
  document.getElementById("project_title_text").innerText =
    texts[language].project_title_text;
  document.getElementById("description_project_1").innerText =
    texts[language].description_project_1;
  document.getElementById("view_project_text_1").innerText =
    texts[language].view_project_text_1;
  document.getElementById("view_project_text_2").innerText =
    texts[language].view_project_text_2;
  document.getElementById("description_project_2").innerText =
    texts[language].description_project_2;
  document.getElementById("aboutme_title_text").innerText =
    texts[language].aboutme_title_text;
  document.getElementById("aboutme_description_text").innerText =
    texts[language].aboutme_description_text;
  document.getElementById("tech_title_text").innerText =
    texts[language].tech_title_text;
  document.getElementById("contact_title_text").innerText =
    texts[language].contact_title_text;
  document.getElementById("name_text").innerText = texts[language].name_text;
  document.getElementById("message_text").innerText =
    texts[language].message_text;
  document.getElementById("send_message_text").innerText =
    texts[language].send_message_text;
  document.getElementById("copy_text").innerText = texts[language].copy_text;
}

document.getElementById("lang-en").addEventListener("click", function () {
  changeLanguage("en");
});
document.getElementById("lang-es").addEventListener("click", function () {
  changeLanguage("es");
});

const toggleThemeBtn = document.getElementById("toggle-theme");
const themeIcon = document.getElementById("theme-icon");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark-mode") {
  document.body.classList.add("body-dark-mode");
  document.themeIcon.src = "images/light-mode.png";
  themeIcon.alt = "Switch to light mode";
}

toggleThemeBtn.addEventListener("click", function () {
  document.body.classList.toggle("body-dark-mode");

  if (document.body.classList.contains("body-dark-mode")) {
    themeIcon.src = "images/light-mode.png";
    themeIcon.alt = "Switch to light mode";
    localStorage.setItem("theme", "body-dark-mode");
  } else {
    themeIcon.src = "images/dark-mode.png";
    themeIcon.alt = "Switch to dark mode";
    localStorage.removeItem("theme");
  }
});
