describe("Homapage", () => {
  it("Should display homepage and test it", () => {
    cy.visit("http://localhost:3000/");

    // test title
    cy.get("h1").should("be.visible").contains("Hello, I'm Haikel 🌸");

    // test description
    cy.get("#description")
      .should("be.visible")
      .contains(
        "A Frontend Crafter based in Indonesia. Familiar with Javascript/Typescript, React Ecosystem, and Linux(for daily use). Try to follow best practices as much as i can. I can work in a team or solo. In my spare time, i crafted something, go out to take some photos, learn new things, or just improve my English."
      );

    // test navbar
    cy.get("nav").should("be.visible").get("a").should("be.visible").contains("は");
    cy.get("#switch-theme").should("be.visible");
    cy.get("#menu").should("be.visible");

    // test footer
    cy.get("footer")
      .should("be.visible")
      .get("p")
      .should("be.visible")
      .contains("Crafted by Haikel");

    // test note item
    cy.get("#note-item").should("be.visible");

    // test work item
    cy.get("#work-item").should("be.visible");
  });
});
