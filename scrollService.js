export const scrollService = {
  observeFooter() {
    const footer = document.querySelector("footer");
    window.addEventListener("scroll", function () {
      const rect = footer.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        footer.classList.add("visible");
      }
    });
  },

  observeFadeIn() {
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
  },
};
