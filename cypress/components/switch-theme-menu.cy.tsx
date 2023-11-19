import SwitchThemeMenu from "~components/ui/menus/switch-theme";

describe("Switch Theme", () => {
  it("Should display switch theme button and test it", () => {
    cy.mount(<SwitchThemeMenu />);

    cy.get(`[aria-label="switch theme"]`).should("be.visible").click("center");
    cy.get("body").type("{esc}");
  });
});
