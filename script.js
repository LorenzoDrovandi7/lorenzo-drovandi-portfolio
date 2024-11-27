import { languageService } from "./languageService.js";
import { themeService } from "./themeService.js";
import { emailService } from "./emailService.js";
import { scrollService } from "./scrollService.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lang-en").addEventListener("click", () => {
    languageService.changeLanguage("en");
  });
  document.getElementById("lang-es").addEventListener("click", () => {
    languageService.changeLanguage("es");
  });
  const toggleThemeBtn = document.getElementById("toggle-theme");
  toggleThemeBtn.addEventListener("click", () => themeService.toggle());
  themeService.init();
  scrollService.observeFooter();
  scrollService.observeFadeIn();
  emailService.sendForm("contact-form");
});
