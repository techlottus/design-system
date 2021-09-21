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

  // Testing button variants
  test("Render primary button with default props set", () => {
    render(
      <Button variant="primary">
        Primary button
      </Button>
    );

    expect(
      screen.getByRole("button")
    ).toHaveClass("bg-primary-500 text-white hover:bg-primary-600 focus:bg-primary-600 focus:border focus:border-primary-500");

    // Not secondary
    expect(
      screen.getByRole("button")
    ).not.toHaveClass("bg-surface-600 hover:bg-surface-900 focus:bg-surface-900");

    // Not tertiary
    expect(
      screen.getByRole("button")
    ).not.toHaveClass("bg-white text-surface-600 border-surface-500 hover:bg-surface-500 hover:text-white focus:bg-surface-500");
  });

  test("Render secondary button with default props set", () => {
    render(
      <Button variant="secondary">
        Secondary button
      </Button>
    );

    expect(
      screen.getByRole("button")
    ).toHaveClass("bg-surface-600 text-white hover:bg-surface-900 focus:bg-surface-900 focus:border focus:border-primary-500");
    
    // Not primary
    expect(
      screen.getByRole("button")
    ).not.toHaveClass("bg-primary-500 hover:bg-primary-600 focus:bg-primary-600");

    // Not tertiary
    expect(
      screen.getByRole("button")
    ).not.toHaveClass("bg-white text-surface-600 border-surface-500 hover:bg-surface-500 hover:text-white focus:bg-surface-500");
  
  });

  test("Render tertiary button with default props set", () => {
    render(
      <Button variant="tertiary">
        Tertiary button
      </Button>
    );

    expect(
      screen.getByRole("button")
    ).toHaveClass("bg-white text-surface-600 border-2 border-surface-500 hover:bg-surface-500 hover:text-white focus:bg-surface-500 focus:text-white focus:border-primary-500");
    
    // Not primary
    expect(
      screen.getByRole("button")
    ).not.toHaveClass("bg-primary-500 hover:bg-primary-600 focus:bg-primary-600");
      
    // Not secondary
    expect(
      screen.getByRole("button")
    ).not.toHaveClass("bg-surface-600 hover:bg-surface-900 focus:bg-surface-900");
  });
});