import { render, screen } from "@testing-library/react";
import Statistics from "../components/content/Statistics";

describe("<Statistics /> Component", () => {
  it("Should have a Statistics Heading", () => {
    render(<Statistics />);
    expect(
      screen.getByRole("heading", {
        name: /trusted by developers from over 80 planets/i,
      })
    ).toBeInTheDocument();
  });
  it("Should have a Statistics description", () => {
    render(<Statistics />);
    expect(
      screen.getByText(
        /there are many variations of passages of lorem ipsum available, but the majority\./i
      )
    ).toBeInTheDocument();
  });
});
