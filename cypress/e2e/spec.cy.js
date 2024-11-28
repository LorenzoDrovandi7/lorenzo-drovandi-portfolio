describe("Language Switch", () => {
  it("should switch to Spanish when clicking the Spanish language button", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("#lang-es").click();
    cy.get("#welcome").should("have.text", "Hola, soy Lorenzo Drovandi");
  });

  it("should switch to English when clicking the English language button", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("#lang-en").click();
    cy.get("#welcome").should("have.text", "Hi, I'm Lorenzo Drovandi");
  });
});
describe("Theme Toggle", () => {
  it("should toggle dark mode when clicking the theme switch button", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("#toggle-theme").click();
    cy.get("body").should("have.class", "body-dark-mode");
    cy.get("#theme-icon").should("have.attr", "src", "images/light-mode.png");
  });

  it("should toggle back to light mode", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("#toggle-theme").click();
    cy.get("#toggle-theme").click();
    cy.get("body").should("not.have.class", "body-dark-mode");
    cy.get("#theme-icon").should("have.attr", "src", "images/dark-mode.png");
  });
});
describe("Contact Form", () => {
  it("should submit the contact form successfully", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get("#contact-form").within(() => {
      cy.get('input[name="name"]').type("John Doe");
      cy.get('input[name="email"]').type("lorenzodrovandi665@gmail.com");
      cy.get('textarea[name="message"]').type(
        "Hello, I want to ask about your services."
      );
      cy.get('button[type="submit"]').click();
    });
    cy.contains("¡Correo enviado exitosamente!").should("be.visible");
  });
});
