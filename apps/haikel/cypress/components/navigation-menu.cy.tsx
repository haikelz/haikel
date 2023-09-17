import NavigationMenu from "~ui/menus/navigation-menu";

describe("Navigation Menu", () => {
  it("Should display navigation menu component and test it", () => {
    cy.mount(<NavigationMenu />);

    cy.get(`[aria-label="menu"]`).should("be.visible").click("center");
    cy.get("body").type("{esc}");
  });
});
