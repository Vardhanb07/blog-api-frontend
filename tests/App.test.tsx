import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AppRouter } from "../src/App";
import { renderWithRouter } from "./utils/renderWithRouter";

describe("App", () => {
  it("should render Home page as index", () => {
    renderWithRouter(<AppRouter />);
    expect(screen.getByText(/blog/i)).toBeInTheDocument();
  });
  it("should render About page when path is '/about'", () => {
    renderWithRouter(<AppRouter />, { route: "/about" });
    expect(screen.getByText(/features/i)).toBeInTheDocument();
  });
  it("should render NoMatch when a no existent path is given", () => {
    renderWithRouter(<AppRouter />, { route: "/path" });
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
