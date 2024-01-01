describe("Notes page", () => {
  it("Should display notes page and test it", () => {
    cy.visit("http://localhost:3000/notes");

    // test title
    cy.get("h2").should("be.visible").contains("Notes");

    // test description
    cy.get(`[data-cy="description"]`)
      .should("be.visible")
      .contains(
        "Sometimes, i write something. Mostly about technical stuff. So yeah, i call this as Notes."
      );

    // test navbar
    cy.get("nav")
      .should("be.visible")
      .get("a")
      .should("be.visible")
      .contains("は");
    cy.get(`[aria-label="switch theme"]`).should("be.visible");
    cy.get(`[data-cy="menu"]`).should("be.visible");

    // test footer
    cy.get("footer")
      .should("be.visible")
      .get("p")
      .should("be.visible")
      .contains("Crafted by Haikel");

    // test search feature if user's input matched
    cy.get("input")
      .type("Switching", { delay: 0.5 })
      .get(`[data-cy="note-item"]`)
      .should("be.visible");

    // test search feature if user's input is not matched
    cy.get("input")
      .clear()
      .type("Not matched user input", { delay: 0.5 })
      .get(`[data-cy="not-found-note"]`)
      .should("be.visible")
      .contains("The note that you search is not found!");
  });
});
