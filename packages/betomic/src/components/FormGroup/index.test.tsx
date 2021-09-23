import { render, screen } from "@testing-library/react";
import InputGroup from "../InputGroup";
import FormGroup from ".";

describe("<FormGroup />", () => {
  it("render <FormGroup />", () => {
    const { container } = render(
      <FormGroup
        label="Label"
        labelFor="test-input">
        <InputGroup data-testid="test-input" />
      </FormGroup>
    );
    const formGroupEl = container.firstChild;
    const inputEl = screen.getByTestId("test-input");
    expect(
      formGroupEl
    ).toHaveClass("form-group text-surface-700");
    expect(
      inputEl
    ).toBeInTheDocument();
    expect(
      inputEl
    ).toHaveAttribute("type", "text")
  });

  it("render <FormGroup /> with label value: 'Label' ", () => {
    render(
      <FormGroup
        label="Label"
        labelFor="test-input">
        <InputGroup id="test-input" data-testid="test-input" />
      </FormGroup>
    );
    const labelEl = screen.getByLabelText("Label")
    expect(
      labelEl
    ).toBeInTheDocument();
  });

  it("render <FormGroup />, with required decoration", () => {
    render(
      <FormGroup
        required
        label="Label"
        labelFor="test-input">
        <InputGroup data-testid="test-input" />
      </FormGroup>
    );
    expect(
      screen.getByText("*")
    ).toBeInTheDocument();
  });

  it("render <FormGroup />, with right element", () => {
    render(
      <FormGroup
        label="Label"
        required
        labelFor="test-input-right-element"
        rightElement={
          <svg data-testid="test-right-decoration" className="w-4" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M59.1 12.858a3 3 0 0 1 .042 4.242l-33.333 34a3 3 0 0 1-4.285 0L4.858 34.101a3 3 0 1 1 4.284-4.2l14.525 14.814L54.857 12.9a3 3 0 0 1 4.243-.042Z" fill="#172126"/></svg>
        }>
        <InputGroup id="test-input-right-element" placeholder="Basic example" />
      </FormGroup>
    )
    const rightDecorationEl = screen.getByTestId("test-right-decoration");
    expect(
      rightDecorationEl
    ).toBeInTheDocument();
    expect(
      rightDecorationEl
    ).toHaveClass("w-4");
  });

  it("render <FormGroup />, with helper text", () => {
    render(
      <FormGroup
        required
        helperText="This is a helper text example"
        label="Label"
        labelFor="test-input">
        <InputGroup data-testid="test-input" />
      </FormGroup>
    );
    expect(
      screen.getByText("This is a helper text example")
    ).toBeInTheDocument();
  });

  it("render <FormGroup />, with default <FormGroup.Message>", () => {
    render(
      <FormGroup
        required
        helperText="This is a helper text example"
        label="Label"
        labelFor="test-input">
        <InputGroup data-testid="test-input" />
        <FormGroup.Message message="Form Group message example" />
      </FormGroup>
    );
    const messageEl = screen.getByText("Form Group message example")
    expect(
      messageEl
    ).toBeInTheDocument();
    expect(
      messageEl
    ).toHaveClass("box__message text-sm mt-2 text-surface-400");
  });

  it("render <FormGroup />, with <FormGroup.Message> type: 'error'", () => {
    render(
      <FormGroup
        required
        helperText="This is a helper text example"
        label="Label"
        labelFor="test-input">
        <InputGroup data-testid="test-input" />
        <FormGroup.Message type="error" message="Este campo es requerido" />
      </FormGroup>
    );
    const messageEl = screen.getByText("Este campo es requerido")
    expect(
      messageEl
    ).toBeInTheDocument();
    expect(
      messageEl
    ).toHaveClass("box__message mt-2 text-error-400 text-sm");
  });

  it("render <FormGroup />, with <FormGroup.Message> type: 'warning'", () => {
    render(
      <FormGroup
        required
        helperText="This is a helper text example"
        label="Label"
        labelFor="test-input">
        <InputGroup data-testid="test-input" />
        <FormGroup.Message type="warning" message="Este campo es requerido" />
      </FormGroup>
    );
    const messageEl = screen.getByText("Este campo es requerido")
    expect(
      messageEl
    ).toBeInTheDocument();
    expect(
      messageEl
    ).toHaveClass("box__message mt-2 text-warning-400 text-sm");
  });

  it("render <FormGroup />, with <FormGroup.Message> type: 'success'", () => {
    render(
      <FormGroup
        required
        helperText="This is a helper text example"
        label="Label"
        labelFor="test-input">
        <InputGroup data-testid="test-input" />
        <FormGroup.Message type="success" message="Este campo es requerido" />
      </FormGroup>
    );
    const messageEl = screen.getByText("Este campo es requerido")
    expect(
      messageEl
    ).toBeInTheDocument();
    expect(
      messageEl
    ).toHaveClass("box__message mt-2 text-success-400 text-sm");
  });

  it("render <FormGroup />, with <FormGroup.Message> type: 'info'", () => {
    render(
      <FormGroup
        required
        helperText="This is a helper text example"
        label="Label"
        labelFor="test-input">
        <InputGroup data-testid="test-input" />
        <FormGroup.Message type="info" message="Este campo es requerido" />
      </FormGroup>
    );
    const messageEl = screen.getByText("Este campo es requerido")
    expect(
      messageEl
    ).toBeInTheDocument();
    expect(
      messageEl
    ).toHaveClass("box__message mt-2 text-info-400 text-sm");
  });

  it("render a disabled <FormGroup />", () => {
    const { container } = render(
      <FormGroup
        required
        disabled={true}
        helperText="This is a helper text example"
        label="Label"
        labelFor="test-input">
        <InputGroup data-testid="test-input" />
      </FormGroup>
    );
    const formGroupEl = container.firstChild;
    const inputEl = screen.getByTestId("test-input");
    expect(
      formGroupEl
    ).toHaveClass("form-group text-surface-300 pointer-events-none");

    expect(
      inputEl
    ).toBeInTheDocument()

    expect(
      inputEl
    ).toHaveAttribute("disabled")

    expect(
      inputEl
    ).toHaveClass("bg-surface-100 pointer-events-none")
  });

});
