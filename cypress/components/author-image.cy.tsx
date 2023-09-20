import AuthorImage from "~ui/images/author-image";

describe("Author Image", () => {
  it("Should display author image component and test it", () => {
    cy.mount(<AuthorImage />);

    cy.get(`[data-cy="author-image"]`).should("be.visible").click("center");
    cy.get("body").type("{esc}");
  });
});
