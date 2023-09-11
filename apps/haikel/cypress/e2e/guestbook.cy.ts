describe("Guestbook page", () => {
  it("Should display guestbook page and test it", () => {
    cy.visit("http://localhost:3000/guestbook");

    cy.wait(1000);

    // test title
    cy.get("h2").should("be.visible").contains("Guestbook");

    // test description
    cy.get(`[data-cy="description"]`)
      .should("be.visible")
      .contains("Write a message for me and others.");

    // test sign in with github button
    cy.get(`[aria-label="sign in with github"]`).should("be.visible");

    // test sign in with google button
    cy.get(`[aria-label="sign in with google"]`).should("be.visible");

    // test guest-item
    cy.get(`[data-cy="guest-item"]`).should("be.visible");

    // test navbar
    cy.get("nav").should("be.visible").get("a").should("be.visible").contains("は");
    cy.get(`[aria-label="switch theme"]`).should("be.visible");
    cy.get(`[data-cy="menu"]`).should("be.visible");

    // test footer
    cy.get("footer")
      .should("be.visible")
      .get("p")
      .should("be.visible")
      .contains("Crafted by Haikel");
  });
});
