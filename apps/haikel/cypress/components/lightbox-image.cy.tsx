import LightboxImage from "~ui/images/lightbox-image";

describe("Lightbox Image", () => {
  it("Should display lightbox image component and test it", () => {
    cy.mount(
      <LightboxImage
        src="https://ik.imagekit.io/haikelz/blog/beralih-dari-kamera-hp-ke-kamera-mirrorless/DSC00528.JPG?updatedAt=1693405070029"
        alt="pohon kelapa"
      />
    );

    cy.get(`[data-cy="lightbox-image"]`).should("be.visible").click("center");
    cy.get("body").type("{esc}");
  });
});
