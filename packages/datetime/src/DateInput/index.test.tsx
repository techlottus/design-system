import { render, screen } from "@testing-library/react";
import DateInput from ".";
import FormGroup from "@exponentialeducation/betomic/src/components/FormGroup";

describe("<DateInput />", () => {
  test("Render <DateInput /> component", () => {

    render(
      <DateInput defaultValue={new Date(2021, 9, 12)} />
    );

    const dateInputEl = screen.queryByRole("textbox");
    const dateInputByPlaceholder = screen.queryByPlaceholderText("12/10/2021");

    expect(
      dateInputEl
    ).toBeInTheDocument();

    expect(
      dateInputEl
    ).toHaveAttribute("type", "text");

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
    const dateInputByPlaceholder = screen.queryByPlaceholderText("12/10/2021");
    const helperElement = screen.getByText("This is a date input");
    const requiredElement = screen.getByText("*");

    expect(
      dateInputEl
    ).toBeInTheDocument();

    expect(
      dateInputEl
    ).toHaveAttribute("type", "text");

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

    const getFormattedDate = (date: Date) => {
      let day = date.getDate();
      let month = date.getMonth();
      const year = date.getFullYear();

      return `${day}/${month + 1}/${year}`;
    }

    render(
      <DateInput format="l" />
    );

    const today = new Date();
    const placeholderValue = getFormattedDate(today);

    const dateInputEl = screen.getByRole("textbox");
    const dateInputByPlaceholder = screen.queryByPlaceholderText(placeholderValue);

    expect(
      dateInputEl
    ).toBeInTheDocument();

    expect(
      dateInputEl
    ).toHaveAttribute("type", "text");

    expect(
      dateInputByPlaceholder
    ).toBeInTheDocument();

  });

  test("Render <DateInput /> with initial month", () => {

    render(
      <DateInput
        initialMonth={new Date(2022, 0)}
      />
    );

    const dateInputEl = screen.getByRole("textbox");
    const dateInputByPlaceholder = screen.queryByPlaceholderText("01/01/2022");

    expect(
      dateInputEl
    ).toBeInTheDocument();

    expect(
      dateInputEl
    ).toHaveAttribute("type", "text");

    expect(
      dateInputByPlaceholder
    ).toBeInTheDocument();

  });

  test("Render <DateInput /> with 'en' localization format L", () => {

    render(
      <DateInput
        locale="en-us"
        format="L"
        initialMonth={new Date(2021, 11, 24)}
      />
    );

    const dateInputEl = screen.getByRole("textbox");
    const dateInputByPlaceholder = screen.queryByPlaceholderText("12/24/2021");

    expect(
      dateInputEl
    ).toBeInTheDocument();

    expect(
      dateInputEl
    ).toHaveAttribute("type", "text");

    expect(
      dateInputByPlaceholder
    ).toBeInTheDocument();

  });

  test("Render <DateInput /> with format LL", () => {

    render(
      <DateInput
        format="LL"
        initialMonth={new Date(2022, 0)}
      />
    );

    const dateInputEl = screen.getByRole("textbox");
    const dateInputByPlaceholder = screen.queryByPlaceholderText("1 de enero de 2022");

    expect(
      dateInputEl
    ).toBeInTheDocument();

    expect(
      dateInputEl
    ).toHaveAttribute("type", "text");

    expect(
      dateInputByPlaceholder
    ).toBeInTheDocument();
  });

});