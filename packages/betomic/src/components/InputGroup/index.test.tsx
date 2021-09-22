import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputGroup from ".";

describe("<InputGroup />", () => {
  it("render <InputGroup />", () => {
    const { container } = render(
      <InputGroup data-testid="test-input-group" />
    );
    const inputGroupEl = container.firstChild;
    const inputEl = screen.getByTestId("test-input-group");

    expect(
      inputGroupEl
    ).toHaveClass("input-group relative");
    expect(
      inputEl
    ).toBeInTheDocument();
    expect(
      inputEl
    ).toHaveAttribute("type", "text")
  });

  it("render <InputGroup /> type 'email' ", () => {
    render(
      <InputGroup type="email" data-testid="test-input-group" />
    );
    const inputEl = screen.getByTestId("test-input-group");
    expect(
      inputEl
    ).toHaveAttribute("type", "email")
  });

  it("render <InputGroup />, should be type", () => {
    render(
      <InputGroup data-testid="test-input-group" />
    )
    const inputEl = screen.getByTestId("test-input-group");
    userEvent.type(inputEl, "Welcome to test input group")
    expect(
      inputEl
    ).toHaveValue("Welcome to test input group")
  });

  it("render <InputGroup /> isValid prop", () => {
    render(
      <InputGroup isValid data-testid="test-input-group" />
    )
    const inputEl = screen.getByTestId("test-input-group");

    expect(
      inputEl
    ).toHaveClass("border-success-400 bg-white hover:border-success-400")
  });

  it("render <InputGroup /> !isValid prop", () => {
    render(
      <InputGroup isValid={false} data-testid="test-input-group" />
    )
    const inputEl = screen.getByTestId("test-input-group");

    expect(
      inputEl
    ).toHaveClass("border-error-400 bg-white hover:border-error-400")
  });

  it("render <InputGroup /> disabled prop", () => {
    render(
      <InputGroup disabled data-testid="test-input-group" />
    )
    const inputEl = screen.getByTestId("test-input-group");

    expect(
      inputEl
    ).toHaveClass("bg-surface-100 pointer-events-none")
  });

  it("render <InputGroup /> with left decoration", () => {
    render(
      <InputGroup
        data-testid="test-input-group"
        placeholder="Left decoration"
        leftElement={
          <svg data-testid="test-left-decoration" className="w-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M59.1 12.858a3 3 0 0 1 .042 4.242l-33.333 34a3 3 0 0 1-4.285 0L4.858 34.101a3 3 0 1 1 4.284-4.2l14.525 14.814L54.857 12.9a3 3 0 0 1 4.243-.042Z" fill="#172126"/></svg>
        }
      />
    );

    const inputEl = screen.getByTestId("test-input-group");
    const leftDecorationEl = screen.getByTestId("test-left-decoration");

    expect(
      inputEl
    ).toBeInTheDocument();

    expect(
      leftDecorationEl
    ).toBeInTheDocument();

    expect(
      leftDecorationEl
    ).toHaveClass("w-4");
  });

  it("render <InputGroup /> with right decoration", () => {
    render(
      <InputGroup
        data-testid="test-input-group"
        placeholder="Right decoration"
        rightElement={
          <svg data-testid="test-right-decoration" className="w-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M59.1 12.858a3 3 0 0 1 .042 4.242l-33.333 34a3 3 0 0 1-4.285 0L4.858 34.101a3 3 0 1 1 4.284-4.2l14.525 14.814L54.857 12.9a3 3 0 0 1 4.243-.042Z" fill="#172126"/></svg>
        }
      />
    );

    const inputEl = screen.getByTestId("test-input-group");
    const rightDecorationEl = screen.getByTestId("test-right-decoration");

    expect(
      inputEl
    ).toBeInTheDocument();

    expect(
      rightDecorationEl
    ).toBeInTheDocument();

    expect(
      rightDecorationEl
    ).toHaveClass("w-4");
  });

  
});
