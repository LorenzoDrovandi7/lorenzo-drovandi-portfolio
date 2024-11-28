export const emailService = {
  sendForm(formId) {
    const form = document.getElementById(formId);
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_8691hlc", "template_stvds1t", form).then(
        () => {
          alert("Success!");
          const feedback = document.getElementById("form-feedback");
          feedback.style.display = "block";
          feedback.innerText = "¡Correo enviado exitosamente!";
          feedback.style.color = "green";
        },
        (error) => {
          console.error("Error:", error);
          alert("Error.");
          const feedback = document.getElementById("form-feedback");
          feedback.style.display = "block";
          feedback.innerText = "Hubo un error al enviar el mensaje.";
          feedback.style.color = "red";
        }
      );
    });
  },
};
