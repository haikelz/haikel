describe("Works page", () => {
  it("Should display works page and test it", () => {
    cy.visit("http://localhost:3000/works");

    // test title
    cy.get("h2").should("be.visible").contains("Works");

    // test description
    cy.get(`[data-cy="description"]`).should("be.visible").contains("List some of my works");

    // test work item
    cy.get(`[data-cy="work-item"]`).should("be.visible");

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
