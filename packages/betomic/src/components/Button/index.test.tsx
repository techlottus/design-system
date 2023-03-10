import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
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

  //Testing button sizes
  test("Render small button", () => {
    render(
      <Button size="sm">
        Small button
      </Button>
    );

    expect(
      screen.getByRole("button")
    ).toHaveClass("px-4 py-1.5 text-sm");

    // Not medium
    expect(
      screen.getByRole("button")
    ).not.toHaveClass("px-5 py-3 text-base");

    // Not large
    expect(
      screen.getByRole("button")
    ).not.toHaveClass("px-6 py-4 text-xl");
  });

  test("Render regular button", () => {
    render(
      <Button size="md">
        Medium/Regular button
      </Button>
    );

    expect(
      screen.getByRole("button")
    ).toHaveClass("px-5 py-3 text-base");

    // Not small
    expect(
      screen.getByRole("button")
    ).not.toHaveClass("px-4 py-1.5 text-sm");

    // Not large
    expect(
      screen.getByRole("button")
    ).not.toHaveClass("px-6 py-4 text-xl");
  });

  test("Render large button", () => {
    render(
      <Button size="lg">
        Large button
      </Button>
    );

    expect(
      screen.getByRole("button")
    ).toHaveClass("px-6 py-4 text-xl");

    // Not small
    expect(
      screen.getByRole("button")
    ).not.toHaveClass("px-4 py-1.5 text-sm");

    // Not medium
    expect(
      screen.getByRole("button")
    ).not.toHaveClass("px-5 py-3 text-base");
  });

  // Testing other button props
  test("Render disabled button", () => {
    render(
      <Button disabled>
        Disabled button
      </Button>
    );

    expect(
      screen.getByRole("button")
    ).not.toBeEnabled();

    expect(
      screen.getByRole("button")
    ).toBeDisabled();

    expect(
      screen.getByRole("button")
    ).toHaveProperty("disabled");
  });

  test("Render block button", () => {
    render(
      <Button block>
        Block button
      </Button>
    );

    expect(
      screen.getByRole("button")
    ).toHaveClass("w-full");
  });

  //Testing button types
  test("Render common button", () => {
    render(
      <Button type="button">
        Common button
      </Button>
    );

    expect(
      screen.getByRole("button")
    ).toHaveProperty("type", "button");

    expect(
      screen.queryByRole("button")
    ).not.toHaveProperty("type", "submit");

    expect(
      screen.queryByRole("button")
    ).not.toHaveProperty("type", "reset");
  });
  
  test("Render submit button", () => {
    render(
      <Button type="submit">
        Submit button
      </Button>
    );

    expect(
      screen.getByRole("button")
    ).toHaveProperty("type", "submit");

    expect(
      screen.queryByRole("button")
    ).not.toHaveProperty("type", "button");

    expect(
      screen.queryByRole("button")
    ).not.toHaveProperty("type", "reset");
  });

  test("Render reset button", () => {
    render(
      <Button type="reset">
        Submit button
      </Button>
    );

    expect(
      screen.getByRole("button")
    ).toHaveProperty("type", "reset");

    expect(
      screen.queryByRole("button")
    ).not.toHaveProperty("type", "submit");

    expect(
      screen.queryByRole("button")
    ).not.toHaveProperty("type", "button");
  });

  // Testing className prop
  test("Render button withClassName", () => {
    render(
      <Button className="bg-info-500">
        Success button
      </Button>
    );

    expect(
      screen.getByRole("button")
    ).toHaveClass("bg-info-500");
  });

  // Testing button onClick method
  test("Click a button triggers an action", async () => {
    let counter: number = 0;
    
    render(
      <>
        <Button onClick={() => counter++}>
          Click me
        </Button>
      </>
    );

    const btn = screen.getByRole("button");
    userEvent.click(btn);

    expect(counter).toBe(1);
  });
  
  // Testing button onClick method
  test("Click a disabled button doesn't trigger any action", async () => {
    let counter: number = 0;
    
    render(
      <>
        <Button disabled onClick={() => counter++}>
          Click me
        </Button>
      </>
    );

    const btn = screen.getByRole("button");
    userEvent.click(btn);

    expect(counter).toBe(0);
  });
});