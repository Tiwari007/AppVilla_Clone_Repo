import { render, screen } from "@testing-library/react";
import LoginForm from "../components/Authentication/LoginForm";

describe("<LoginForm /> Component", () => {
  it("Should have username field", () => {
    render(<LoginForm />);
    expect(screen.getByPlaceholderText(/username/i)).toBeInTheDocument();
  });

  it("Should have password field", () => {
    render(<LoginForm />);
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });
});
