import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AppRouter } from "../src/App";
import { renderWithRouter } from "./test-utils";
import "@testing-library/jest-dom";
import { mock } from "./mocks/api";
import ThemeProvider from "../src/providers/ThemeProvider";

const data = {
  data: [
    {
      id: 1,
      title: "title-1",
    },
    {
      id: 2,
      title: "title-2",
    },
    {
      id: 3,
      title: "title-3",
    },
  ],
};

describe("App", () => {
  it("should render Home page as index", () => {
    mock.onGet("/post").reply(200, data);
    renderWithRouter(
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    );
    expect(screen.getByText(/blog/i)).toBeInTheDocument();
  });
  it("should render About page when path is '/about'", () => {
    renderWithRouter(
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>,
      { route: "/about" }
    );
    expect(screen.getByText(/features/i)).toBeInTheDocument();
  });
  it("should render NoMatch when a no existent path is given", () => {
    renderWithRouter(
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>,
      { route: "/path" }
    );
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
