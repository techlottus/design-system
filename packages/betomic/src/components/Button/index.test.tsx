import { render, screen } from "@testing-library/react";
import Button from ".";

describe("<Button />", () => {
  test("Render button with children & default props set", () => {
    render(
      <Button>
        Button with children
      </Button>
    );
    
    // Valid children
    expect(
      screen.getByText("Button with children")
    ).toBeVisible();

    // Type button as default (role)
    expect(
      screen.queryByRole("button")
    ).toBeInTheDocument();
    
    expect(
      screen.queryByRole("button")
    ).toBeVisible();

    expect(
      screen.queryByRole("button")
    ).toBeEnabled();

    // Variant primary as default
    expect(
      screen.queryByRole("button")
    ).toHaveClass("bg-primary-500 text-white");

    // Medium size as default
    expect(
      screen.getByRole("button")
    ).toHaveClass("px-5 py-3 text-base");

    // Block prop false
    expect(
      screen.queryByRole("button")
    ).not.toHaveClass("w-full");
    
    // Disable prop false
    expect(
      screen.getByRole("button")
    ).not.toBeDisabled();
  });

});