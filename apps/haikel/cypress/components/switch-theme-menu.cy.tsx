import SwitchThemeMenu from "~ui/menus/switch-theme-menu";

describe("Switch Theme", () => {
  it("Should display switch theme button and test it", () => {
    cy.mount(<SwitchThemeMenu />);

    cy.get(`[aria-label="switch theme"]`).should("be.visible").click("center");
    cy.get("body").type("{esc}");
  });
});
