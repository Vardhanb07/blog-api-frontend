import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import userEvent from "@testing-library/user-event";
import ThemeProvider from "../src/providers/ThemeProvider";

const renderWithRouter = (ui: React.ReactNode, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: BrowserRouter }),
  };
};

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactNode,
  options?: RenderOptions<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  >
) => render(ui, { wrapper: AllTheProviders, ...options });


export * from "@testing-library/react";

export { customRender as render };

export { renderWithRouter };
