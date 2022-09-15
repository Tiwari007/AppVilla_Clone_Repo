import { render, screen } from "@testing-library/react";
import App from "../components/App";
import Home from "../components/content/Home";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test.todo("renders learn react link");

describe("<App /> Component", () => {
  xit("Should have a Layout component", () => {
    render(<App />);
    const layoutComponent = screen.getByRole("layout");
    expect(layoutComponent).toBeInTheDocument();
  });
});
