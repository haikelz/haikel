import About from "@/pages/about";
import Home from "@/pages/index";
import Works from "@/pages/works";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("Home Page", () => {
  it("Should render home page properly", () => {
    render(<Home />);

    const heading = screen.getByRole("heading");
    const headingText = "Hello, I'm Haikel";

    expect(heading).toHaveTextContent(headingText);
  });
});

describe("About Page", () => {
  it("Should render about page properly", () => {
    render(<About />);

    const heading = screen.getAllByRole("heading")[0];
    expect(heading).toHaveTextContent("About");
  });
});

describe("Works Page", () => {
  it("Should render works page properly", () => {
    render(<Works />);

    const heading = screen.getAllByRole("heading")[0];
    expect(heading).toHaveTextContent("Works");
  });
});
