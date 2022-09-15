import { render, screen } from "@testing-library/react";
import Home from "../components/content/Home";

describe("<Hme /> Component", () => {
  it("Should have app store button", () => {
    render(<Home />);
    expect(screen.getByText(/app store/i)).toBeInTheDocument();
  });

  it("Should have Google play button", () => {
    render(<Home />);
    expect(screen.getByText(/google play/i)).toBeInTheDocument();
  });
  it("Should have phone image", () => {
    render(<Home />);
    expect(
      screen.getByRole("img", {
        name: /phone/i,
      })
    ).toBeInTheDocument();
  });
});
