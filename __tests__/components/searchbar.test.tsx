import { SearchBar } from "@/ui/input";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

describe("Search Bar", () => {
  it("Should update on change", () => {
    const setSearch = jest.fn((value) => {});
    const { queryByPlaceholderText } = render(<SearchBar search="search" setSearch={setSearch} />);

    const searchInput = queryByPlaceholderText("Search Here....") as HTMLInputElement;

    fireEvent.change(searchInput, {
      target: {
        value: "search",
      },
    });

    expect(searchInput.value).toBe("search"); // OR
  });
});
