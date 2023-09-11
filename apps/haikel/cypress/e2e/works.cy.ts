describe("Works page", () => {
  it("Should display works page and test it", () => {
    cy.visit("http://localhost:3000/works");

    cy.get("h2").should("be.visible").contains("Works");

    cy.get("#description").should("be.visible").contains("List some of my works");

    cy.get("nav").should("be.visible").get("a").should("be.visible").contains("は");
    cy.get("#switch-theme").should("be.visible");
    cy.get("#menu").should("be.visible");

    cy.get("#work-item").should("be.visible");

    cy.get("footer")
      .should("be.visible")
      .get("p")
      .should("be.visible")
      .contains("Crafted by Haikel");
  });
});
