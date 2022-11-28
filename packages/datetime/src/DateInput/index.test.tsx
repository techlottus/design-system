import { render, screen } from "@testing-library/react";
import DateInput from ".";
import FormGroup from "@bedu-tmp/betomic/src/components/FormGroup";
import userEvent from "@testing-library/user-event";

describe("<DateInput />", () => {
  test("Render <DateInput /> component", () => {

    render(
      <DateInput defaultValue={new Date(2021, 9, 12)} />
    );

    const dateInputEl = screen.queryByRole("textbox");
    const dateInputByPlaceholder = screen.queryByPlaceholderText("DD/MM/YYYY");

    expect(
      dateInputEl
    ).toBeInTheDocument();

    expect(
      dateInputEl
    ).toHaveAttribute("type", "text");

    expect(
      dateInputEl
    ).toHaveValue("12/10/2021");

    expect(
      dateInputByPlaceholder
    ).toBeInTheDocument();

  });

  test("Render <DateInput /> with FormGroup; label, required + helper", () => {

    render(
      <FormGroup
        label="Label"
        labelFor="label-date-input-example"
        helperText="This is a date input"
        required
      >
        <DateInput
          id="label-date-input-example"
          defaultValue={new Date(2021, 9, 12)}
        />
      </FormGroup>
    );

    const dateInputEl = screen.getByRole("textbox");
    const dateInputByPlaceholder = screen.queryByPlaceholderText("DD/MM/YYYY");
    const helperElement = screen.getByText("This is a date input");
    const requiredElement = screen.getByText("*");

    expect(
      dateInputEl
    ).toBeInTheDocument();

    expect(
      dateInputEl
    ).toHaveAttribute("type", "text");

    expect(
      dateInputEl
    ).toHaveValue("12/10/2021");

    expect(
      helperElement
    ).toBeInTheDocument();

    expect(
      requiredElement
    ).toBeInTheDocument();

    expect(
      dateInputByPlaceholder
    ).toBeInTheDocument();

  });

  test("Render <DateInput /> without default value", () => {

    render(
      <DateInput placeholder="Fecha de inicio" />
    );

    const dateInputEl = screen.getByRole("textbox");
    const dateInputByText = screen.getByPlaceholderText("Fecha de inicio");

    expect(
      dateInputEl
    ).toBeInTheDocument();

    expect(
      dateInputEl
    ).toHaveAttribute("type", "text");

    expect(
      dateInputEl
    ).toHaveValue("");

    expect(
      dateInputByText
    ).toBeInTheDocument();

  });

  test("Render <DateInput /> with initial month & calendar overlay", () => {

    render(
      <DateInput
        initialMonth={new Date(2022, 0)}
      />
    );

    const dateInputEl = screen.getByRole("textbox");

    expect(
      dateInputEl
    ).toBeInTheDocument();

    expect(
      dateInputEl
    ).toHaveAttribute("type", "text");

    userEvent.click(dateInputEl);

    const calendarOverlayText = screen.queryByText("enero 2022");

    expect(
      calendarOverlayText
    ).toBeInTheDocument();

  });

});