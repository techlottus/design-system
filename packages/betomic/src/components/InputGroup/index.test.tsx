import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputGroup from ".";
import Input from "../Input";

describe("<InputGroup />", () => {
  it("render <InputGroup />", () => {
    const { container } = render(
      <InputGroup>
        <Input />
      </InputGroup>
    );

    const inputGroup = container.firstChild;

    expect(
      inputGroup
    ).toHaveClass("input-group");
  });

  it("render <InputGroup /> with default <Input />", () => {
    render(
      <InputGroup>
        <Input data-testid="test-input" />
      </InputGroup>
    );

    const inputEl = screen.getByTestId("test-input");

    expect(
      inputEl
    ).toBeInTheDocument();
  });

  it("only render <InputGroup /> and <Input />", () => {
    render(
      <InputGroup>
        <Input />
        <h1>Hello from test inputgroup</h1>
      </InputGroup>
    );

    const heading = screen.queryAllByText("Hello from test inputgroup");

    expect(
      heading
    ).toHaveLength(0);
  });

  it("render <InputGroup /> with left <InputGroup.Decoration />", () => {
    render(
      <InputGroup>
        <InputGroup.Decoration>
          <svg data-testid="test-left-decoration" className="w-4 h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M59.1 12.858a3 3 0 0 1 .042 4.242l-33.333 34a3 3 0 0 1-4.285 0L4.858 34.101a3 3 0 1 1 4.284-4.2l14.525 14.814L54.857 12.9a3 3 0 0 1 4.243-.042Z" fill="#172126"/></svg>
        </InputGroup.Decoration>
        <Input className="pl-10" data-testid="test-input" />
      </InputGroup>
    );

    const leftDecorationEl = screen.getByTestId("test-left-decoration")
    const inputEl = screen.getByTestId("test-input")
    expect(
      leftDecorationEl
    ).toBeInTheDocument();

    expect(
      inputEl
    ).toHaveClass("pl-10");
  });

  it("render <InputGroup /> with right <InputGroup.Decoration />", () => {
    render(
      <InputGroup>
        <InputGroup.Decoration position="right">
          <svg data-testid="test-right-decoration" className="w-4 h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M59.1 12.858a3 3 0 0 1 .042 4.242l-33.333 34a3 3 0 0 1-4.285 0L4.858 34.101a3 3 0 1 1 4.284-4.2l14.525 14.814L54.857 12.9a3 3 0 0 1 4.243-.042Z" fill="#172126"/></svg>
        </InputGroup.Decoration>
        <Input className="pr-10" data-testid="test-input" />
      </InputGroup>
    );

    const rightDecorationEl = screen.getByTestId("test-right-decoration")
    const inputEl = screen.getByTestId("test-input")

    expect(
      rightDecorationEl
    ).toBeInTheDocument();
    
    expect(
      inputEl
    ).toHaveClass("pr-10");
  });

  it("render <InputGroup /> and can typing in <Input />", () => {
    const { container } = render(
      <InputGroup>
        <Input data-testid="test-input" />
      </InputGroup>
    )
    const inputEl = screen.getByTestId("test-input");
    userEvent.type(inputEl, "Welcome to test input");
    const inputGroup = container.firstChild;

    expect(
      inputGroup
    ).toHaveClass("input-group");
    expect(
      inputEl
    ).toHaveValue("Welcome to test input")
  });
  
});
