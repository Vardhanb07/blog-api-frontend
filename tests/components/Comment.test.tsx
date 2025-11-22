import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import Comment from "../../src/components/Comment";
import "@testing-library/jest-dom";

const data = {
  userId: 1,
  content: "content",
};

describe("Comment", () => {
  it("should render correctly", () => {
    render(<Comment content={data.content} userId={data.userId} />);
    expect(screen.getByText(`${data.userId}:`)).toBeInTheDocument();
    expect(screen.getByText(data.content)).toBeInTheDocument(); 
  });
});
