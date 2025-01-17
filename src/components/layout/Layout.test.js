import React from "react";
import { render } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );
    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("renders headerContent when provided", () => {
    const { getByText } = render(
      <Layout headerContent={<div>Header Content</div>}>
        <div>Test Child</div>
      </Layout>
    );
    expect(getByText("Header Content")).toBeInTheDocument();
  });

  it("does not render headerContent if not provided", () => {
    const { queryByText } = render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );
    expect(queryByText("Header Content")).not.toBeInTheDocument();
  });

  it("applies the correct classes to layout elements", () => {
    const { container } = render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );
    expect(container.querySelector(".layout")).toBeInTheDocument();
    expect(container.querySelector(".layout-main")).toBeInTheDocument();
  });
});
