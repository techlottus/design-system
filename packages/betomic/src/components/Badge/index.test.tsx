import { render, screen } from "@testing-library/react";
import Badge from ".";

describe("<Badge />", () => {
  test("Render default badge", () => {
    render(
      <Badge content="Default" />
    );
    
    const badgeEl = screen.getByText("Default");

    expect(
      badgeEl
    ).toBeInTheDocument();

    expect(
      badgeEl
    ).toHaveClass("inline-block px-2 py-1 text-white text-xs text-center font-rubik leading-4");
  });

  test("Render intent badge", () => {
    render(
      <Badge
        content="Intent"
        intent="success"
      />
    );
    
    const badgeEl = screen.getByText("Intent");

    expect(
      badgeEl
    ).toBeInTheDocument();

    expect(
      badgeEl
    ).toHaveClass("bg-success-100 text-success-800");
  });

  test("Render custom badge", () => {
    render(
      <Badge
        content="Custom"
        className="bg-pink-500 text-white"
      />
    );
    
    const badgeEl = screen.getByText("Custom");

    expect(
      badgeEl
    ).toBeInTheDocument();

    expect(
      badgeEl
    ).toHaveClass("bg-pink-500 text-white");
  });

  test("Render disabled intent badge", () => {
    render(
      <Badge
        content="Disabled"
        intent="success"
        disabled
      />
    );
    
    const badgeEl = screen.getByText("Disabled");

    expect(
      badgeEl
    ).toBeInTheDocument();

    expect(
      badgeEl
    ).not.toHaveClass("bg-success-100 text-success-800");

    expect(
      badgeEl
    ).toHaveClass("bg-surface-50 text-surface-300 cursor-not-allowed");
  });

  test("Render oval badge", () => {
    render(
      <Badge
        content="1"
        roundedFull
      />
    );
    
    const badgeEl = screen.getByText("1");

    expect(
      badgeEl
    ).toBeInTheDocument();

    expect(
      badgeEl
    ).not.toHaveClass("rounded");

    expect(
      badgeEl
    ).toHaveClass("inline-flex justify-center items-center rounded-full h-9 w-9");
  });
});