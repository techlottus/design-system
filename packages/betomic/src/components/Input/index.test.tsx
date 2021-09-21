import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import Input from ".";

describe("<Input />", () => {
  it("render default <Input />", () => {
    render(
      <Input data-testid="test-input"/>
    )
    const inputEl = screen.getByTestId("test-input");
    expect(
      inputEl
    ).toBeInTheDocument();
  });

  it("render <Input /> type 'text'", () => {
    render(
      <Input data-testid="test-input"/>
    )
    const inputEl = screen.getByTestId("test-input");
    expect(
      inputEl
    ).toHaveAttribute("type", "text")
  });

  it("render <Input /> type 'email' ", () => {
    render(
      <Input type="email" data-testid="test-input"/>
    )
    const inputEl = screen.getByTestId("test-input");
    expect(
      inputEl
    ).toHaveAttribute("type", "email")
  });

  it("render <Input /> with custom class", () => {
    render(
      <Input data-testid="test-input" className="w-full pl-10 pr-10 rounded p-3 h-10 font-rubik font-normal text-base text-surface-700 bg-surface-100 placeholder-surface-400 border-2 border-transparent focus:outline-none focus:bg-white hover:border-surface-200" />
    )
    const inputEl = screen.getByTestId("test-input");
    expect(
      inputEl
    ).toHaveClass("w-full pl-10 pr-10 rounded p-3 h-10 font-rubik font-normal text-base text-surface-700 bg-surface-100 placeholder-surface-400 border-2 border-transparent focus:outline-none focus:bg-white hover:border-surface-200")
  });

  it("render <Input /> typing something", () => {
    render(
      <Input data-testid="test-input" />
    )
    const inputEl = screen.getByTestId("test-input");
    userEvent.type(inputEl, "Welcome to test input")
    expect(
      inputEl
    ).toHaveValue("Welcome to test input")
  });

  it("render <Input /> isValid prop", () => {
    render(
      <Input isValid data-testid="test-input" />
    )
    const inputEl = screen.getByTestId("test-input");

    expect(
      inputEl
    ).toHaveClass("border-success-400 bg-white hover:border-success-400")
  });

  it("render <Input /> !isValid prop", () => {
    render(
      <Input isValid={false} data-testid="test-input" />
    )
    const inputEl = screen.getByTestId("test-input");

    expect(
      inputEl
    ).toHaveClass("border-error-400 bg-white hover:border-error-400")
  });

  it("render <Input /> disabled prop", () => {
    render(
      <Input disabled data-testid="test-input" />
    )
    const inputEl = screen.getByTestId("test-input");

    expect(
      inputEl
    ).toHaveClass("bg-surface-100 pointer-events-none")
  });

});