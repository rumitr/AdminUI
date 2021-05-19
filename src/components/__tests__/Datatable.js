import { render, screen } from "@testing-library/react";
import DataTable from "../DataTable";

describe("should render layout", () => {
  test("loads on first page initially", async () => {
    render(<DataTable users={[]} />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});
