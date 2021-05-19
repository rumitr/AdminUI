import { render, screen } from "@testing-library/react";
import Layout from "../index";

describe("should render layout", () => {
  test("loads on first page initially", async () => {
    render(<Layout />);

    const logo = screen.getByText("Rumit Rout");
    expect(logo).toBeInTheDocument();

    const toggle = screen.getByText("Admin UI");
    expect(toggle).toBeInTheDocument();
  });
});
