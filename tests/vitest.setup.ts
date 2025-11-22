import { afterEach, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";
import { mock } from "./mocks/api";
import "@testing-library/jest-dom/vitest";

beforeAll(() => {
  mock.reset();
});

afterEach(() => {
  cleanup();
});
