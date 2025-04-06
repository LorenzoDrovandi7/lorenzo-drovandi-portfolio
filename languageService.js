export const languageService = {
  texts: {
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
      view_project_text_3: "View Project",
      description_project_1:
        "A website that shows the exchange rates of the day, integrating an API which allows you to select a currency and get updated results instantly.",
      description_project_2:
        "A replica of a Pokedex, using the HTML, CSS, JavaScript plus the integration of an API and with all the functions tested with Cypress.",
      description_project_3:
        "The game challenges players to remember and replicate a growing sequence of colors. Built using HTML, CSS, JavaScript, and Bootstrap, this project is fully responsive and deploys via Vercel.",
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
      view_project_text_3: "Ver Proyecto",
      description_project_1:
        "Un sitio web que muestra los tipos de cambio del día, integrando una API que permite seleccionar una moneda y obtener resultados actualizados al instante.",
      description_project_2:
        "Una réplica de una Pokedex, utilizando el HTML, CSS, JavaScript más la integración de una API y con todas las funciones probadas con Cypress.",
      description_project_3:
        "El juego desafía a los jugadores a recordar y replicar una secuencia creciente de colores. Este proyecto, creado con HTML, CSS, JavaScript y Bootstrap, es totalmente responsivo y se implementa a través de Vercel.",
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
  },

  changeLanguage(language) {
    const texts = this.texts[language];
    Object.keys(texts).forEach((key) => {
      const element = document.getElementById(key);
      if (element) {
        element.innerText = texts[key];
      }
    });
  },
};
