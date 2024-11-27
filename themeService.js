export const themeService = {
  init() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark-mode") {
      document.body.classList.add("body-dark-mode");
    }
    this.updateIcon();
  },

  toggle() {
    document.body.classList.toggle("body-dark-mode");
    this.updateIcon();
    if (document.body.classList.contains("body-dark-mode")) {
      localStorage.setItem("theme", "dark-mode");
    } else {
      localStorage.removeItem("theme");
    }
  },

  updateIcon() {
    const themeIcon = document.getElementById("theme-icon");
    if (document.body.classList.contains("body-dark-mode")) {
      themeIcon.src = "images/light-mode.png";
      themeIcon.alt = "Switch to light mode";
    } else {
      themeIcon.src = "images/dark-mode.png";
      themeIcon.alt = "Switch to dark mode";
    }
  },
};
