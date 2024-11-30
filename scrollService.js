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
  scrollHiding() {
    const homeSection = document.getElementById("home");
    const controls = document.getElementById("controls");

    window.addEventListener("scroll", function () {
      const rect = homeSection.getBoundingClientRect();

      if (rect.bottom < 0) {
        controls.classList.add("hidden");
      } else {
        controls.classList.remove("hidden");
      }
    });
  },
};
