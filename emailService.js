export const emailService = {
  sendForm(formId) {
    const form = document.getElementById(formId);
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_8691hlc", "template_stvds1t", form).then(
        () => {
          alert("Success!");
        },
        (error) => {
          console.error("Error:", error);
          alert("Error.");
        }
      );
    });
  },
};
