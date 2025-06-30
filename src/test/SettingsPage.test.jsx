import { render, screen } from "@testing-library/react";
import Settings from "../pages/Settings";

test("renders Settings header", () => {
  render(<Settings />);
  expect(screen.getByText(/Settings - Roles/i)).toBeInTheDocument();
});
